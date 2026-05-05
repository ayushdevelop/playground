"use client";

import { useState, useEffect, useCallback } from "react";
import { curriculum, Phase, Resource, ResourceType } from "../data/curriculum";

const TYPE_BADGE: Record<ResourceType, string> = {
  book:        "bg-blue-900/60 text-blue-300 border-blue-700/50",
  video:       "bg-rose-900/60 text-rose-300 border-rose-700/50",
  interactive: "bg-emerald-900/60 text-emerald-300 border-emerald-700/50",
  course:      "bg-purple-900/60 text-purple-300 border-purple-700/50",
  official:    "bg-slate-700/60 text-slate-300 border-slate-600/50",
  practice:    "bg-orange-900/60 text-orange-300 border-orange-700/50",
  deep:        "bg-amber-900/60 text-amber-300 border-amber-700/50",
  reference:   "bg-teal-900/60 text-teal-300 border-teal-700/50",
  tool:        "bg-pink-900/60 text-pink-300 border-pink-700/50",
};

const PHASE_COLOR: Record<string, { border: string; badge: string; dot: string }> = {
  "phase-0": { border: "border-slate-500",  badge: "bg-slate-800 text-slate-300",  dot: "bg-slate-400" },
  "phase-1": { border: "border-blue-500",   badge: "bg-blue-900/60 text-blue-300",   dot: "bg-blue-400" },
  "phase-2": { border: "border-emerald-500",badge: "bg-emerald-900/60 text-emerald-300", dot: "bg-emerald-400" },
  "phase-3": { border: "border-orange-500", badge: "bg-orange-900/60 text-orange-300", dot: "bg-orange-400" },
  "phase-4": { border: "border-purple-500", badge: "bg-purple-900/60 text-purple-300", dot: "bg-purple-400" },
  "phase-5": { border: "border-cyan-500",   badge: "bg-cyan-900/60 text-cyan-300",   dot: "bg-cyan-400" },
  "phase-6": { border: "border-rose-500",   badge: "bg-rose-900/60 text-rose-300",   dot: "bg-rose-400" },
  "phase-7": { border: "border-violet-500", badge: "bg-violet-900/60 text-violet-300", dot: "bg-violet-400" },
  "phase-8": { border: "border-amber-500",  badge: "bg-amber-900/60 text-amber-300",  dot: "bg-amber-400" },
};

function ResourceRow({ resource }: { resource: Resource }) {
  const badge = TYPE_BADGE[resource.type];
  return (
    <div className="flex items-start gap-3 py-3 border-b border-slate-800/60 last:border-0 group">
      <span className={`mt-0.5 shrink-0 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${badge}`}>
        {resource.type}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {resource.url ? (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-100 hover:text-white hover:underline underline-offset-2 transition-colors"
            >
              {resource.label}
              <span className="ml-1 text-slate-500 text-xs group-hover:text-slate-400">↗</span>
            </a>
          ) : (
            <span className="text-sm font-medium text-slate-100">{resource.label}</span>
          )}
          {resource.priority && (
            <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
              priority
            </span>
          )}
        </div>
        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{resource.description}</p>
      </div>
    </div>
  );
}

function TopicCard({ topic, phaseId }: { topic: Phase["topics"][0]; phaseId: string }) {
  const colors = PHASE_COLOR[phaseId];
  return (
    <div className={`bg-slate-900 rounded-xl border border-slate-800 overflow-hidden border-l-2 ${colors.border}`}>
      <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/80">
        <h3 className="text-sm font-semibold text-slate-200">{topic.title}</h3>
      </div>
      <div className="px-5 divide-y divide-slate-800/0">
        {topic.resources.map((r) => (
          <ResourceRow key={r.label} resource={r} />
        ))}
      </div>
    </div>
  );
}

function PhaseSection({
  phase,
  isActive,
}: {
  phase: Phase;
  isActive: boolean;
}) {
  const colors = PHASE_COLOR[phase.id];
  return (
    <section
      id={phase.id}
      className="scroll-mt-16 pb-16 border-b border-slate-800/50 last:border-0"
    >
      <div className="mb-6 flex items-center gap-4">
        <div
          className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border ${colors.border} ${colors.badge}`}
        >
          {phase.number}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">{phase.title}</h2>
          <span className="text-xs text-slate-500">{phase.duration}</span>
        </div>
      </div>
      <div className="space-y-4">
        {phase.topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} phaseId={phase.id} />
        ))}
      </div>
    </section>
  );
}

function filterCurriculum(phases: Phase[], query: string): Phase[] {
  if (!query.trim()) return phases;
  const q = query.toLowerCase();
  return phases
    .map((phase) => ({
      ...phase,
      topics: phase.topics
        .map((topic) => ({
          ...topic,
          resources: topic.resources.filter(
            (r) =>
              r.label.toLowerCase().includes(q) ||
              r.description.toLowerCase().includes(q) ||
              r.type.toLowerCase().includes(q)
          ),
        }))
        .filter(
          (topic) =>
            topic.title.toLowerCase().includes(q) || topic.resources.length > 0
        ),
    }))
    .filter(
      (phase) =>
        phase.title.toLowerCase().includes(q) || phase.topics.length > 0
    );
}

export default function Page() {
  const [search, setSearch] = useState("");
  const [activePhase, setActivePhase] = useState(curriculum[0].id);

  const filtered = filterCurriculum(curriculum, search);

  const scrollToPhase = useCallback((phaseId: string) => {
    const el = document.getElementById(phaseId);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80;
      let current = curriculum[0].id;
      for (const phase of curriculum) {
        const el = document.getElementById(phase.id);
        if (el && el.offsetTop <= scrollY) current = phase.id;
      }
      setActivePhase(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const priorityCount = curriculum
    .flatMap((p) => p.topics)
    .flatMap((t) => t.resources)
    .filter((r) => r.priority).length;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-20 h-14 bg-slate-900/95 backdrop-blur border-b border-slate-800 flex items-center px-4 gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">FS</span>
          </div>
          <span className="font-semibold text-slate-100 text-sm hidden sm:block">
            Full Stack Curriculum
          </span>
        </div>
        <div className="flex-1 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics and resources..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors shrink-0"
          >
            Clear
          </button>
        )}
        <div className="ml-auto flex items-center gap-3 text-xs text-slate-500 shrink-0">
          <span>{curriculum.length} phases</span>
          <span className="hidden sm:block">{priorityCount} priority resources</span>
        </div>
      </header>

      <div className="flex pt-14">
        {/* Sidebar */}
        <aside className="fixed left-0 top-14 bottom-0 w-56 bg-slate-900/80 border-r border-slate-800 overflow-y-auto hidden md:block">
          <div className="px-3 pt-4 pb-6">
            <p className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold px-2 mb-3">
              Phases
            </p>
            <nav className="space-y-0.5">
              {curriculum.map((phase) => {
                const colors = PHASE_COLOR[phase.id];
                const isActive = activePhase === phase.id && !search;
                return (
                  <button
                    key={phase.id}
                    onClick={() => scrollToPhase(phase.id)}
                    className={`w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-left transition-all text-xs ${
                      isActive
                        ? "bg-slate-800 text-slate-100"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-4 h-4 rounded text-[10px] font-bold flex items-center justify-center ${colors.badge}`}
                    >
                      {phase.number}
                    </span>
                    <span className="truncate">{phase.title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 px-2">
              <p className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold mb-3">
                Legend
              </p>
              <div className="space-y-1.5">
                {(Object.keys(TYPE_BADGE) as ResourceType[]).map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <span
                      className={`text-[9px] font-semibold uppercase tracking-wide px-1 py-0.5 rounded border ${TYPE_BADGE[type]}`}
                    >
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="md:ml-56 flex-1 px-6 py-8 max-w-4xl">
          {search && filtered.length === 0 && (
            <div className="text-center py-24 text-slate-500">
              <p className="text-lg">No results for &ldquo;{search}&rdquo;</p>
              <p className="text-sm mt-1">Try a different term or resource type</p>
            </div>
          )}

          {search && filtered.length > 0 && (
            <div className="mb-6 text-xs text-slate-500">
              {filtered.flatMap((p) => p.topics).flatMap((t) => t.resources).length} resources
              across {filtered.length} phases
            </div>
          )}

          <div className="space-y-16">
            {filtered.map((phase) => (
              <PhaseSection
                key={phase.id}
                phase={phase}
                isActive={activePhase === phase.id}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

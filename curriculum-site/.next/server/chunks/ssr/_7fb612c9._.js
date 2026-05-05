module.exports = [
"[project]/data/curriculum.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "curriculum",
    ()=>curriculum
]);
const curriculum = [
    {
        id: "phase-0",
        number: "0",
        title: "Terminal & CLI Mastery",
        duration: "2 weeks",
        color: "slate",
        topics: [
            {
                id: "core-shell",
                title: "Core Shell Skills",
                resources: [
                    {
                        label: "The Linux Command Line",
                        url: "https://linuxcommand.org/tlcl.php",
                        description: "The definitive free book on the Linux shell — read chapters 1–10 first.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "cheat.sh",
                        url: "https://cheat.sh",
                        description: "Instant command cheat sheets from the terminal: `curl cheat.sh/git`",
                        type: "tool"
                    },
                    {
                        label: "tldr pages",
                        url: "https://tldr.sh",
                        description: "Practical, community-maintained man page alternatives. Install: `brew install tldr`",
                        type: "tool"
                    },
                    {
                        label: "explainshell.com",
                        url: "https://explainshell.com",
                        description: "Paste any shell command and get a breakdown of every flag and argument.",
                        type: "interactive"
                    }
                ]
            },
            {
                id: "tmux",
                title: "Multiplexing with tmux",
                resources: [
                    {
                        label: "Tmux Crash Course — Dreams of Code",
                        url: "https://www.youtube.com/results?search_query=tmux+crash+course+dreams+of+code",
                        description: "Best beginner tmux video — covers sessions, windows, panes, and config.",
                        type: "video",
                        priority: true
                    },
                    {
                        label: "tmux Cheat Sheet",
                        url: "https://tmuxcheatsheet.com",
                        description: "All key bindings in one searchable page. Bookmark this.",
                        type: "reference"
                    },
                    {
                        label: "Oh My Tmux config",
                        url: "https://github.com/gpakosz/.tmux",
                        description: "Sensible tmux defaults — good starting .tmux.conf to study.",
                        type: "tool"
                    }
                ]
            },
            {
                id: "git-terminal",
                title: "Git in the Terminal (fluently)",
                resources: [
                    {
                        label: "Oh Shit, Git!",
                        url: "https://ohshitgit.com",
                        description: "Plain-English fixes for common git disasters. Essential bookmark.",
                        type: "reference",
                        priority: true
                    },
                    {
                        label: "Git from the Bottom Up",
                        url: "https://jwiegley.github.io/git-from-the-bottom-up",
                        description: "How git actually works internally — builds real intuition, not just commands.",
                        type: "deep"
                    },
                    {
                        label: "lazygit",
                        url: "https://github.com/jesseduffield/lazygit",
                        description: "Keyboard-driven TUI git client. Replaces most GUI git needs. `brew install lazygit`",
                        type: "tool"
                    },
                    {
                        label: "Pro Git Book (free)",
                        url: "https://git-scm.com/book/en/v2",
                        description: "Official comprehensive git book — chapters on internals are especially valuable.",
                        type: "book"
                    }
                ]
            },
            {
                id: "shell-config",
                title: "Shell Configuration & Power Tools",
                resources: [
                    {
                        label: "Oh My Zsh",
                        url: "https://ohmyz.sh",
                        description: "Zsh framework with plugins. Install zsh-autosuggestions + zsh-syntax-highlighting.",
                        type: "tool"
                    },
                    {
                        label: "Starship Prompt",
                        url: "https://starship.rs",
                        description: "Fast, cross-shell prompt with git status, language versions, and more.",
                        type: "tool"
                    },
                    {
                        label: "fzf — Fuzzy Finder",
                        url: "https://github.com/junegunn/fzf",
                        description: "Fuzzy search for files, history, processes. Game-changer for terminal speed.",
                        type: "tool",
                        priority: true
                    },
                    {
                        label: "zoxide — Smarter cd",
                        url: "https://github.com/ajeetdsouza/zoxide",
                        description: "Learns your most-visited dirs. `z proj` jumps to ~/dev/projects/app instantly.",
                        type: "tool"
                    },
                    {
                        label: "ripgrep",
                        url: "https://github.com/BurntSushi/ripgrep",
                        description: "10–100x faster than grep. Respects .gitignore. Replace grep with rg everywhere.",
                        type: "tool"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-1",
        number: "1",
        title: "Frontend Mastery",
        duration: "6 weeks",
        color: "blue",
        topics: [
            {
                id: "js-internals",
                title: "JavaScript Deep Internals",
                resources: [
                    {
                        label: "You Don't Know JS (free on GitHub)",
                        url: "https://github.com/getify/You-Dont-Know-JS",
                        description: "The deepest JS series available — scope, closures, this, async. Read all 6 books.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "javascript.info",
                        url: "https://javascript.info",
                        description: "Best comprehensive JS reference on the web. Covers everything from basics to internals.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "JSV9000 — Event Loop Visualizer",
                        url: "https://www.jsv9000.app",
                        description: "Visualize the call stack, task queue, and microtask queue in real time.",
                        type: "interactive"
                    },
                    {
                        label: "What the heck is the event loop? — Philip Roberts",
                        url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
                        description: "The most-watched JS internals talk. 26 min. Watch it twice.",
                        type: "video",
                        priority: true
                    },
                    {
                        label: "V8 Developer Blog",
                        url: "https://v8.dev/blog",
                        description: "How Chrome's JS engine works — JIT compilation, garbage collection, optimization.",
                        type: "deep"
                    }
                ]
            },
            {
                id: "typescript",
                title: "TypeScript (Production-Grade)",
                resources: [
                    {
                        label: "TypeScript Handbook",
                        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
                        description: "Official docs — read the full handbook, especially Narrowing and Type Manipulation.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "type-challenges",
                        url: "https://github.com/type-challenges/type-challenges",
                        description: "Ranked type puzzles from easy to extreme. Best way to learn mapped/conditional types.",
                        type: "practice",
                        priority: true
                    },
                    {
                        label: "Total TypeScript — Matt Pocock",
                        url: "https://www.totaltypescript.com",
                        description: "Free and paid content from the best TypeScript educator. Free tutorials are gold.",
                        type: "course"
                    },
                    {
                        label: "TypeScript Playground",
                        url: "https://www.typescriptlang.org/play",
                        description: "Run TS in the browser, inspect emitted JS, share snippets. Use daily.",
                        type: "interactive"
                    }
                ]
            },
            {
                id: "react-architecture",
                title: "React (Architecture-Level)",
                resources: [
                    {
                        label: "react.dev — Official Docs",
                        url: "https://react.dev",
                        description: "Completely rewritten docs with interactive examples. Read every page.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "React as a UI Runtime — Dan Abramov",
                        url: "https://overreacted.io/react-as-a-ui-runtime/",
                        description: "The best mental model post for how React thinks. Read before anything else.",
                        type: "deep",
                        priority: true
                    },
                    {
                        label: "Patterns.dev",
                        url: "https://www.patterns.dev",
                        description: "Free book on design patterns, rendering patterns, and performance patterns in React.",
                        type: "reference"
                    },
                    {
                        label: "Jack Herrington — YouTube",
                        url: "https://www.youtube.com/@jackherrington",
                        description: "Advanced React patterns, hooks internals, RSC deep dives. Best advanced React channel.",
                        type: "video"
                    },
                    {
                        label: "Theo (t3.gg) — YouTube",
                        url: "https://www.youtube.com/@t3dotgg",
                        description: "Pragmatic modern React and Next.js. Opinionated takes on what actually matters.",
                        type: "video"
                    }
                ]
            },
            {
                id: "nextjs",
                title: "Next.js App Router",
                resources: [
                    {
                        label: "Next.js Documentation",
                        url: "https://nextjs.org/docs",
                        description: "Official docs — read the App Router section top to bottom. Especially caching.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Next.js Learn (interactive)",
                        url: "https://nextjs.org/learn",
                        description: "Official free interactive course — builds a full dashboard app from scratch.",
                        type: "interactive"
                    },
                    {
                        label: "Josh tried coding — YouTube",
                        url: "https://www.youtube.com/@joshtriedcoding",
                        description: "Best Next.js project tutorials — full-stack apps with auth, DB, payments.",
                        type: "video"
                    }
                ]
            },
            {
                id: "state-management",
                title: "State Management",
                resources: [
                    {
                        label: "TanStack Query Docs",
                        url: "https://tanstack.com/query/latest/docs/framework/react/overview",
                        description: "The right mental model for server state. Read the 'Important Defaults' page first.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Zustand",
                        url: "https://github.com/pmndrs/zustand",
                        description: "Lightweight global state. Read the README — that's basically the whole API.",
                        type: "official"
                    },
                    {
                        label: "Jotai — Atomic State",
                        url: "https://jotai.org/docs/introduction",
                        description: "Bottom-up atomic state model. Great for fine-grained subscriptions.",
                        type: "official"
                    }
                ]
            },
            {
                id: "css-styling",
                title: "CSS & Styling",
                resources: [
                    {
                        label: "Flexbox Froggy",
                        url: "https://flexboxfroggy.com",
                        description: "Learn flexbox by moving frogs. 24 levels, 30 minutes. Do it before anything else.",
                        type: "interactive",
                        priority: true
                    },
                    {
                        label: "CSS Grid Garden",
                        url: "https://cssgridgarden.com",
                        description: "Learn CSS Grid by watering a garden. Covers every grid property.",
                        type: "interactive"
                    },
                    {
                        label: "Every Layout",
                        url: "https://every-layout.dev",
                        description: "Modern CSS layout patterns — stack, sidebar, cluster, grid. Algorithm-based thinking.",
                        type: "reference"
                    },
                    {
                        label: "Tailwind CSS Docs",
                        url: "https://tailwindcss.com/docs",
                        description: "Read the core concepts section — especially responsive design and dark mode.",
                        type: "official"
                    },
                    {
                        label: "CSS for JavaScript Developers — Josh W Comeau",
                        url: "https://css-for-js.dev",
                        description: "Paid course but worth it. Explains CSS the way JS devs think. Covers animations too.",
                        type: "course"
                    }
                ]
            },
            {
                id: "web-performance",
                title: "Performance & Web Vitals",
                resources: [
                    {
                        label: "web.dev — Performance",
                        url: "https://web.dev/performance",
                        description: "Google's comprehensive guide to Core Web Vitals (LCP, INP, CLS) and optimization.",
                        type: "reference",
                        priority: true
                    },
                    {
                        label: "High Performance Browser Networking (free)",
                        url: "https://hpbn.co",
                        description: "Deep dive into HTTP/1, HTTP/2, HTTP/3, WebSockets. Free online. Read chapters 1–4.",
                        type: "book"
                    },
                    {
                        label: "Chrome DevTools — Performance Panel",
                        url: "https://developer.chrome.com/docs/devtools/performance",
                        description: "Official guide to profiling with the Performance tab. Learn flame charts.",
                        type: "official"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-2",
        number: "2",
        title: "Backend Mastery",
        duration: "6 weeks",
        color: "emerald",
        topics: [
            {
                id: "nodejs-internals",
                title: "Node.js Internals",
                resources: [
                    {
                        label: "Node.js Design Patterns — Casciaro",
                        description: "The definitive Node.js book. Covers streams, patterns, async, microservices.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "Don't Block the Event Loop",
                        url: "https://nodejs.org/en/docs/guides/dont-block-the-event-loop",
                        description: "Official Node.js guide on the event loop phases and worker pool. Essential reading.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Node.js Event Loop — Bert Belder (dotJS)",
                        url: "https://www.youtube.com/watch?v=PNa9OMajl9s",
                        description: "Deep technical talk on libuv and how Node.js actually schedules work.",
                        type: "video"
                    },
                    {
                        label: "Hussein Nasser — Node.js Internals",
                        url: "https://www.youtube.com/@hnasr",
                        description: "Best YouTube channel for backend internals — event loop, TCP, HTTP, DB.",
                        type: "video"
                    }
                ]
            },
            {
                id: "api-design",
                title: "API Design (REST / GraphQL / gRPC)",
                resources: [
                    {
                        label: "Designing Web APIs — Brenda Jin",
                        description: "O'Reilly book covering REST, GraphQL, SDK design, versioning. Practical and concise.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "HTTP API Design Guide",
                        url: "https://github.com/interagent/http-api-design",
                        description: "Heroku's opinionated REST API design guide. Great for interview discussions.",
                        type: "reference"
                    },
                    {
                        label: "How to GraphQL",
                        url: "https://www.howtographql.com",
                        description: "Free full-stack GraphQL tutorial — from schema design to production deployment.",
                        type: "course"
                    },
                    {
                        label: "gRPC Documentation",
                        url: "https://grpc.io/docs/languages/node/basics",
                        description: "Official gRPC Node.js basics — protobufs, service definitions, streaming.",
                        type: "official"
                    },
                    {
                        label: "restfulapi.net",
                        url: "https://restfulapi.net",
                        description: "REST constraints, idempotency, Richardson Maturity Model — clean reference.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "backend-frameworks",
                title: "Frameworks",
                resources: [
                    {
                        label: "Fastify Documentation",
                        url: "https://fastify.dev/docs/latest",
                        description: "Fast Node.js framework with schema validation and plugin system. Production-grade.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "FastAPI Documentation",
                        url: "https://fastapi.tiangolo.com",
                        description: "Python async framework with automatic OpenAPI docs and Pydantic validation.",
                        type: "official"
                    },
                    {
                        label: "Hono Documentation",
                        url: "https://hono.dev",
                        description: "Ultralight edge-native framework. Works on Cloudflare Workers, Deno, Bun, Node.",
                        type: "official"
                    }
                ]
            },
            {
                id: "auth",
                title: "Authentication & Authorization",
                resources: [
                    {
                        label: "OAuth 2.0 Simplified — Aaron Parecki",
                        url: "https://aaronparecki.com/oauth-2-simplified",
                        description: "The clearest OAuth 2.0 explanation online. Covers all grant types with diagrams.",
                        type: "reference",
                        priority: true
                    },
                    {
                        label: "jwt.io",
                        url: "https://jwt.io",
                        description: "Decode, verify, and generate JWTs in the browser. Understand the structure.",
                        type: "interactive"
                    },
                    {
                        label: "Auth.js (Next.js)",
                        url: "https://authjs.dev",
                        description: "Official Next.js authentication. Supports OAuth, credentials, magic links.",
                        type: "official"
                    },
                    {
                        label: "OWASP Authentication Cheat Sheet",
                        url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
                        description: "Security-first checklist for auth implementation. Cover before shipping any auth.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "messaging",
                title: "Messaging & Event-Driven Systems",
                resources: [
                    {
                        label: "Designing Event-Driven Systems (free PDF)",
                        url: "https://www.confluent.io/designing-event-driven-systems",
                        description: "Ben Stopford's free book on Kafka and event-driven architecture. Covers patterns.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "Apache Kafka Documentation",
                        url: "https://kafka.apache.org/documentation",
                        description: "Official docs — read Introduction and Design sections for interview prep.",
                        type: "official"
                    },
                    {
                        label: "BullMQ Documentation",
                        url: "https://docs.bullmq.io",
                        description: "Redis-based job queues for Node.js. Best way to start with queues practically.",
                        type: "official"
                    },
                    {
                        label: "Inngest",
                        url: "https://www.inngest.com/docs",
                        description: "Modern event-driven workflow engine. Background jobs without managing infra.",
                        type: "official"
                    }
                ]
            },
            {
                id: "architecture-patterns",
                title: "Microservices & Architecture Patterns",
                resources: [
                    {
                        label: "Building Microservices — Sam Newman",
                        description: "O'Reilly. The definitive book on microservices — decomposition, communication, data.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "The Twelve-Factor App",
                        url: "https://12factor.net",
                        description: "12 principles for building scalable, maintainable apps. Know all 12 for interviews.",
                        type: "reference"
                    },
                    {
                        label: "microservices.io — Pattern Catalog",
                        url: "https://microservices.io/patterns/index.html",
                        description: "Chris Richardson's catalog — saga, CQRS, outbox, circuit breaker patterns.",
                        type: "reference"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-3",
        number: "3",
        title: "Database Mastery",
        duration: "4 weeks",
        color: "orange",
        topics: [
            {
                id: "postgresql",
                title: "PostgreSQL (Deep)",
                resources: [
                    {
                        label: "PgExercises",
                        url: "https://pgexercises.com",
                        description: "Interactive SQL exercises with a real Postgres DB. Covers joins, aggregates, CTEs.",
                        type: "practice",
                        priority: true
                    },
                    {
                        label: "Use the Index, Luke",
                        url: "https://use-the-index-luke.com",
                        description: "The best guide to SQL indexing — B-tree, covering indexes, EXPLAIN, performance.",
                        type: "reference",
                        priority: true
                    },
                    {
                        label: "Select Star SQL (free interactive book)",
                        url: "https://selectstarsql.com",
                        description: "Learn SQL by analyzing real Texas execution data. Beautifully written.",
                        type: "interactive"
                    },
                    {
                        label: "PostgreSQL Official Docs",
                        url: "https://www.postgresql.org/docs/current",
                        description: "Deep reference for MVCC, EXPLAIN ANALYZE, window functions, partitioning.",
                        type: "official"
                    },
                    {
                        label: "Fundamentals of DB Engineering — Hussein Nasser",
                        url: "https://www.udemy.com/course/database-engines-crash-course",
                        description: "Udemy course on storage engines, ACID, indexing, partitioning. Best DB course.",
                        type: "course"
                    },
                    {
                        label: "PostgreSQL Configuration Guide",
                        url: "https://postgresqlco.nf",
                        description: "Explains every postgresql.conf setting — memory, connections, WAL, autovacuum.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "redis",
                title: "Redis",
                resources: [
                    {
                        label: "Try Redis (in-browser)",
                        url: "https://try.redis.io",
                        description: "Interactive Redis REPL in the browser — covers all data types with examples.",
                        type: "interactive",
                        priority: true
                    },
                    {
                        label: "Redis Official Documentation",
                        url: "https://redis.io/docs",
                        description: "Data structures, commands, pub/sub, streams, Lua scripting. Reference quality.",
                        type: "official"
                    },
                    {
                        label: "Redis in Action — Josiah Carlson",
                        description: "Manning book. Covers caching patterns, rate limiting, distributed locks, analytics.",
                        type: "book"
                    }
                ]
            },
            {
                id: "orms",
                title: "ORMs & Query Builders",
                resources: [
                    {
                        label: "Prisma Documentation",
                        url: "https://www.prisma.io/docs",
                        description: "Schema-first ORM with type safety and migrations. Excellent docs with examples.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Drizzle ORM",
                        url: "https://orm.drizzle.team",
                        description: "SQL-like, lightweight, edge-compatible. Growing fast — learn alongside Prisma.",
                        type: "official"
                    },
                    {
                        label: "Safe DB Migrations",
                        url: "https://pgdash.io/blog/postgres-migrations.html",
                        description: "Zero-downtime migration strategies for Postgres in production.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "nosql",
                title: "NoSQL — When and Why",
                resources: [
                    {
                        label: "The DynamoDB Book — Alex DeBrie",
                        url: "https://www.dynamodbbook.com",
                        description: "The definitive guide to DynamoDB single-table design. Essential for AWS interviews.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "NoSQL Distilled — Martin Fowler",
                        description: "O'Reilly. Covers key-value, document, column-family, graph stores and when to use each.",
                        type: "book"
                    },
                    {
                        label: "pgvector",
                        url: "https://github.com/pgvector/pgvector",
                        description: "Vector similarity search in Postgres. Required for AI features (RAG, semantic search).",
                        type: "tool"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-4",
        number: "4",
        title: "System Design & Architecture",
        duration: "4 weeks",
        color: "purple",
        topics: [
            {
                id: "system-design-foundations",
                title: "Core Concepts & Foundations",
                resources: [
                    {
                        label: "Designing Data-Intensive Applications — Kleppmann",
                        description: "The single most important technical book for senior engineers. Read it twice.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "High Scalability",
                        url: "https://highscalability.com",
                        description: "Real architecture teardowns of companies at scale — YouTube, Amazon, Twitter.",
                        type: "reference"
                    },
                    {
                        label: "Napkin Math",
                        url: "https://github.com/sirupsen/napkin-math",
                        description: "Back-of-envelope numbers every engineer should know — latency, throughput, storage.",
                        type: "reference",
                        priority: true
                    },
                    {
                        label: "ByteByteGo Newsletter",
                        url: "https://blog.bytebytego.com",
                        description: "Alex Xu's free newsletter — visual system design explanations weekly.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "system-design-practice",
                title: "Interview Practice",
                resources: [
                    {
                        label: "System Design Interview Vol 1 & 2 — Alex Xu",
                        description: "The most popular system design interview prep books. Read vol 1 first.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "ByteByteGo — YouTube",
                        url: "https://www.youtube.com/@ByteByteGo",
                        description: "Visual walkthroughs of URL shorteners, notification systems, payment flows.",
                        type: "video",
                        priority: true
                    },
                    {
                        label: "Gaurav Sen — YouTube",
                        url: "https://www.youtube.com/@gkcs",
                        description: "In-depth system design concepts — consistent hashing, CAP theorem, rate limiting.",
                        type: "video"
                    },
                    {
                        label: "systemdesign.one",
                        url: "https://systemdesign.one",
                        description: "Structured system design practice with community solutions and discussion.",
                        type: "practice"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-5",
        number: "5",
        title: "DevOps & Infrastructure",
        duration: "4 weeks",
        color: "cyan",
        topics: [
            {
                id: "docker",
                title: "Docker",
                resources: [
                    {
                        label: "Docker Official Documentation",
                        url: "https://docs.docker.com/get-started",
                        description: "Official get-started guide — covers images, containers, volumes, compose.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Docker Deep Dive — Nigel Poulton",
                        description: "Concise book (200 pages) covering everything you need for production Docker.",
                        type: "book"
                    },
                    {
                        label: "Docker in 100 Seconds — Fireship",
                        url: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
                        description: "Quick visual intro — good first watch before diving into docs.",
                        type: "video"
                    }
                ]
            },
            {
                id: "kubernetes",
                title: "Kubernetes",
                resources: [
                    {
                        label: "Killercoda — K8s Labs",
                        url: "https://killercoda.com/playgrounds/scenario/kubernetes",
                        description: "Free browser-based Kubernetes sandbox. Hands-on without any local setup.",
                        type: "interactive",
                        priority: true
                    },
                    {
                        label: "Kubernetes in Action — Marko Luksa",
                        description: "O'Reilly. Most comprehensive K8s book — pods, deployments, statefulsets, RBAC.",
                        type: "book"
                    },
                    {
                        label: "TechWorld with Nana — K8s Course",
                        url: "https://www.youtube.com/@TechWorldwithNana",
                        description: "Free full Kubernetes course on YouTube — best for beginners to intermediate.",
                        type: "video"
                    },
                    {
                        label: "kubectl Cheat Sheet",
                        url: "https://kubernetes.io/docs/reference/kubectl/quick-reference",
                        description: "Official quick reference for all kubectl commands. Keep this open while learning.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "cicd",
                title: "CI/CD",
                resources: [
                    {
                        label: "GitHub Actions Documentation",
                        url: "https://docs.github.com/en/actions",
                        description: "Official docs — workflow syntax, matrix builds, reusable workflows, secrets.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Continuous Delivery — Jez Humble",
                        description: "O'Reilly. The book that defined CI/CD — deployment pipelines, testing strategies.",
                        type: "book"
                    },
                    {
                        label: "GitHub Actions Marketplace",
                        url: "https://github.com/marketplace?type=actions",
                        description: "Browse community actions — checkout, setup-node, docker/build-push, etc.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "cloud",
                title: "Cloud (AWS)",
                resources: [
                    {
                        label: "AWS Free Tier",
                        url: "https://aws.amazon.com/free",
                        description: "Build real things on AWS free tier — EC2, S3, Lambda, RDS. Best hands-on learning.",
                        type: "practice",
                        priority: true
                    },
                    {
                        label: "AWS Solutions Architect Associate",
                        url: "https://acloudguru.com",
                        description: "aCloud Guru SAA course — teaches the whole platform systematically.",
                        type: "course"
                    },
                    {
                        label: "Cloudflare Docs",
                        url: "https://developers.cloudflare.com",
                        description: "Workers, R2, D1, KV, Pages — edge computing platform growing as AWS alternative.",
                        type: "official"
                    }
                ]
            },
            {
                id: "observability",
                title: "Observability",
                resources: [
                    {
                        label: "OpenTelemetry Documentation",
                        url: "https://opentelemetry.io/docs",
                        description: "The standard for traces, metrics, and logs. Vendor-neutral instrumentation.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Sentry",
                        url: "https://docs.sentry.io",
                        description: "Error tracking + performance monitoring. Add to every project from day one.",
                        type: "tool"
                    },
                    {
                        label: "Grafana + Prometheus",
                        url: "https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus",
                        description: "The standard open-source monitoring stack. Run locally with Docker Compose.",
                        type: "tool"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-6",
        number: "6",
        title: "Security & Testing",
        duration: "2 weeks",
        color: "rose",
        topics: [
            {
                id: "app-security",
                title: "Application Security (OWASP)",
                resources: [
                    {
                        label: "OWASP Top 10",
                        url: "https://owasp.org/www-project-top-ten",
                        description: "The 10 most critical web security risks. Know all 10 — frequently asked in interviews.",
                        type: "reference",
                        priority: true
                    },
                    {
                        label: "PortSwigger Web Security Academy",
                        url: "https://portswigger.net/web-security",
                        description: "Free hands-on labs for SQLi, XSS, CSRF, SSRF, auth vulnerabilities. Excellent.",
                        type: "practice",
                        priority: true
                    },
                    {
                        label: "OWASP Cheat Sheet Series",
                        url: "https://cheatsheetseries.owasp.org",
                        description: "Actionable security checklists for auth, input validation, SQL injection, and more.",
                        type: "reference"
                    },
                    {
                        label: "The Web Application Hacker's Handbook",
                        description: "Stuttard & Pinto. Deep offensive security techniques — understand attacks to prevent them.",
                        type: "book"
                    }
                ]
            },
            {
                id: "testing",
                title: "Testing Strategy",
                resources: [
                    {
                        label: "Testing JavaScript — Kent C. Dodds",
                        url: "https://testingjavascript.com",
                        description: "Comprehensive paid course on testing philosophy, Jest, React Testing Library, Cypress.",
                        type: "course",
                        priority: true
                    },
                    {
                        label: "Playwright Documentation",
                        url: "https://playwright.dev/docs/intro",
                        description: "Official E2E testing framework docs — cross-browser, auto-wait, tracing.",
                        type: "official"
                    },
                    {
                        label: "React Testing Library",
                        url: "https://testing-library.com/docs/react-testing-library/intro",
                        description: "Test behavior, not implementation. The right way to test React components.",
                        type: "official"
                    },
                    {
                        label: "Vitest",
                        url: "https://vitest.dev",
                        description: "Vite-native unit test runner. Fast, Jest-compatible. Use for all Node/React unit tests.",
                        type: "official"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-7",
        number: "7",
        title: "AI-Native Development",
        duration: "2 weeks",
        color: "violet",
        topics: [
            {
                id: "ai-tools",
                title: "AI Development Tools",
                resources: [
                    {
                        label: "Claude Code",
                        url: "https://claude.ai/code",
                        description: "Anthropic's CLI coding tool. Use in terminal for code gen, debugging, architecture review.",
                        type: "tool",
                        priority: true
                    },
                    {
                        label: "Cursor",
                        url: "https://cursor.sh",
                        description: "AI-first editor built on VS Code. Ctrl+K inline edit, Ctrl+L chat, Ctrl+I multi-file.",
                        type: "tool",
                        priority: true
                    },
                    {
                        label: "v0 by Vercel",
                        url: "https://v0.dev",
                        description: "Generate React + Tailwind components from text or screenshots. Great for prototyping.",
                        type: "tool"
                    },
                    {
                        label: "Vercel AI SDK",
                        url: "https://sdk.vercel.ai/docs",
                        description: "Unified API for building AI-powered apps — streaming, tool use, React hooks.",
                        type: "official"
                    }
                ]
            },
            {
                id: "building-llms",
                title: "Building with LLMs (Claude API)",
                resources: [
                    {
                        label: "Anthropic Documentation",
                        url: "https://docs.anthropic.com",
                        description: "Full Claude API docs — messages, tool use, prompt caching, streaming, vision.",
                        type: "official",
                        priority: true
                    },
                    {
                        label: "Prompt Engineering Guide",
                        url: "https://www.promptingguide.ai",
                        description: "Model-agnostic guide to prompting — CoT, few-shot, RAG, agents, evaluation.",
                        type: "reference"
                    },
                    {
                        label: "Model Context Protocol (MCP)",
                        url: "https://modelcontextprotocol.io",
                        description: "Anthropic's open protocol to connect LLMs to tools and data. Build MCP servers.",
                        type: "official"
                    },
                    {
                        label: "LangChain JS Documentation",
                        url: "https://js.langchain.com/docs",
                        description: "Framework for LLM apps — chains, agents, RAG pipelines. Learn concepts even if you skip library.",
                        type: "official"
                    }
                ]
            }
        ]
    },
    {
        id: "phase-8",
        number: "8",
        title: "Interview Preparation",
        duration: "Ongoing",
        color: "amber",
        topics: [
            {
                id: "dsa",
                title: "Data Structures & Algorithms",
                resources: [
                    {
                        label: "NeetCode 150",
                        url: "https://neetcode.io/practice",
                        description: "Curated 150 LeetCode problems grouped by pattern. Best DSA prep list available.",
                        type: "practice",
                        priority: true
                    },
                    {
                        label: "NeetCode — YouTube",
                        url: "https://www.youtube.com/@NeetCode",
                        description: "Video solutions with clear explanations. Watch after attempting yourself.",
                        type: "video",
                        priority: true
                    },
                    {
                        label: "LeetCode",
                        url: "https://leetcode.com",
                        description: "The platform. Filter by company and difficulty. Target: Mediums fluently.",
                        type: "practice"
                    },
                    {
                        label: "Cracking the Coding Interview — Gayle McDowell",
                        description: "Classic interview prep book. Strong on problem-solving framework and Big O.",
                        type: "book"
                    }
                ]
            },
            {
                id: "system-design-interview",
                title: "System Design Interviews",
                resources: [
                    {
                        label: "System Design Interview Vol 1 & 2 — Alex Xu",
                        description: "Most widely used system design books. 15 designs covered end-to-end.",
                        type: "book",
                        priority: true
                    },
                    {
                        label: "ByteByteGo — YouTube",
                        url: "https://www.youtube.com/@ByteByteGo",
                        description: "Visual system design walkthroughs — URL shortener, rate limiter, notification service.",
                        type: "video"
                    },
                    {
                        label: "Exponent",
                        url: "https://www.tryexponent.com",
                        description: "Mock interviews with real engineers. Expensive but valuable for final prep.",
                        type: "course"
                    }
                ]
            },
            {
                id: "behavioral",
                title: "Behavioral Interviews",
                resources: [
                    {
                        label: "Levels.fyi",
                        url: "https://www.levels.fyi",
                        description: "Comp data and interview experiences by company and level. Research before interviews.",
                        type: "reference"
                    },
                    {
                        label: "Glassdoor Interview Reviews",
                        url: "https://www.glassdoor.com/Interview",
                        description: "Real interview questions by company. Check your target companies.",
                        type: "reference"
                    }
                ]
            },
            {
                id: "eng-blogs",
                title: "Engineering Blogs (Stay Current)",
                resources: [
                    {
                        label: "Netflix Tech Blog",
                        url: "https://netflixtechblog.com",
                        description: "Chaos engineering, distributed systems, personalization at scale.",
                        type: "reference"
                    },
                    {
                        label: "Stripe Engineering Blog",
                        url: "https://stripe.com/blog/engineering",
                        description: "API design, reliability, payments infrastructure. High-quality writing.",
                        type: "reference"
                    },
                    {
                        label: "Cloudflare Blog",
                        url: "https://blog.cloudflare.com",
                        description: "Edge computing, networking, security at massive scale. Deeply technical.",
                        type: "reference"
                    },
                    {
                        label: "Discord Engineering Blog",
                        url: "https://discord.com/blog",
                        description: "Real-time systems, Rust adoption, database scaling stories.",
                        type: "reference"
                    },
                    {
                        label: "Martin Fowler's Blog",
                        url: "https://martinfowler.com",
                        description: "Architecture patterns, refactoring, microservices — evergreen content.",
                        type: "reference",
                        priority: true
                    }
                ]
            }
        ]
    }
];
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/curriculum.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const TYPE_BADGE = {
    book: "bg-blue-900/60 text-blue-300 border-blue-700/50",
    video: "bg-rose-900/60 text-rose-300 border-rose-700/50",
    interactive: "bg-emerald-900/60 text-emerald-300 border-emerald-700/50",
    course: "bg-purple-900/60 text-purple-300 border-purple-700/50",
    official: "bg-slate-700/60 text-slate-300 border-slate-600/50",
    practice: "bg-orange-900/60 text-orange-300 border-orange-700/50",
    deep: "bg-amber-900/60 text-amber-300 border-amber-700/50",
    reference: "bg-teal-900/60 text-teal-300 border-teal-700/50",
    tool: "bg-pink-900/60 text-pink-300 border-pink-700/50"
};
const PHASE_COLOR = {
    "phase-0": {
        border: "border-slate-500",
        badge: "bg-slate-800 text-slate-300",
        dot: "bg-slate-400"
    },
    "phase-1": {
        border: "border-blue-500",
        badge: "bg-blue-900/60 text-blue-300",
        dot: "bg-blue-400"
    },
    "phase-2": {
        border: "border-emerald-500",
        badge: "bg-emerald-900/60 text-emerald-300",
        dot: "bg-emerald-400"
    },
    "phase-3": {
        border: "border-orange-500",
        badge: "bg-orange-900/60 text-orange-300",
        dot: "bg-orange-400"
    },
    "phase-4": {
        border: "border-purple-500",
        badge: "bg-purple-900/60 text-purple-300",
        dot: "bg-purple-400"
    },
    "phase-5": {
        border: "border-cyan-500",
        badge: "bg-cyan-900/60 text-cyan-300",
        dot: "bg-cyan-400"
    },
    "phase-6": {
        border: "border-rose-500",
        badge: "bg-rose-900/60 text-rose-300",
        dot: "bg-rose-400"
    },
    "phase-7": {
        border: "border-violet-500",
        badge: "bg-violet-900/60 text-violet-300",
        dot: "bg-violet-400"
    },
    "phase-8": {
        border: "border-amber-500",
        badge: "bg-amber-900/60 text-amber-300",
        dot: "bg-amber-400"
    }
};
function ResourceRow({ resource }) {
    const badge = TYPE_BADGE[resource.type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3 py-3 border-b border-slate-800/60 last:border-0 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `mt-0.5 shrink-0 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${badge}`,
                children: resource.type
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            resource.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: resource.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm font-medium text-slate-100 hover:text-white hover:underline underline-offset-2 transition-colors",
                                children: [
                                    resource.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-slate-500 text-xs group-hover:text-slate-400",
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-slate-100",
                                children: resource.label
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            resource.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
                                children: "priority"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400 mt-0.5 leading-relaxed",
                        children: resource.description
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function TopicCard({ topic, phaseId }) {
    const colors = PHASE_COLOR[phaseId];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-slate-900 rounded-xl border border-slate-800 overflow-hidden border-l-2 ${colors.border}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-3 border-b border-slate-800 bg-slate-900/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-slate-200",
                    children: topic.title
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 divide-y divide-slate-800/0",
                children: topic.resources.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceRow, {
                        resource: r
                    }, r.label, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function PhaseSection({ phase, isActive }) {
    const colors = PHASE_COLOR[phase.id];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: phase.id,
        className: "scroll-mt-16 pb-16 border-b border-slate-800/50 last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border ${colors.border} ${colors.badge}`,
                        children: phase.number
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white",
                                children: phase.title
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500",
                                children: phase.duration
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: phase.topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TopicCard, {
                        topic: topic,
                        phaseId: phase.id
                    }, topic.id, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function filterCurriculum(phases, query) {
    if (!query.trim()) return phases;
    const q = query.toLowerCase();
    return phases.map((phase)=>({
            ...phase,
            topics: phase.topics.map((topic)=>({
                    ...topic,
                    resources: topic.resources.filter((r)=>r.label.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.type.toLowerCase().includes(q))
                })).filter((topic)=>topic.title.toLowerCase().includes(q) || topic.resources.length > 0)
        })).filter((phase)=>phase.title.toLowerCase().includes(q) || phase.topics.length > 0);
}
function Page() {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activePhase, setActivePhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curriculum"][0].id);
    const filtered = filterCurriculum(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curriculum"], search);
    const scrollToPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((phaseId)=>{
        const el = document.getElementById(phaseId);
        if (!el) return;
        window.scrollTo({
            top: el.offsetTop - 68,
            behavior: "smooth"
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY + 80;
            let current = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curriculum"][0].id;
            for (const phase of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curriculum"]){
                const el = document.getElementById(phase.id);
                if (el && el.offsetTop <= scrollY) current = phase.id;
            }
            setActivePhase(current);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const priorityCount = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curriculum"].flatMap((p)=>p.topics).flatMap((t)=>t.resources).filter((r)=>r.priority).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-20 h-14 bg-slate-900/95 backdrop-blur border-b border-slate-800 flex items-center px-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xs font-bold",
                                    children: "FS"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-100 text-sm hidden sm:block",
                                children: "Full Stack Curriculum"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 max-w-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            placeholder: "Search topics and resources...",
                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSearch(""),
                        className: "text-xs text-slate-400 hover:text-slate-200 transition-colors shrink-0",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-3 text-xs text-slate-500 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curriculum"].length,
                                    " phases"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:block",
                                children: [
                                    priorityCount,
                                    " priority resources"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex pt-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "fixed left-0 top-14 bottom-0 w-56 bg-slate-900/80 border-r border-slate-800 overflow-y-auto hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 pt-4 pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase tracking-widest text-slate-600 font-semibold px-2 mb-3",
                                    children: "Phases"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "space-y-0.5",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curriculum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["curriculum"].map((phase)=>{
                                        const colors = PHASE_COLOR[phase.id];
                                        const isActive = activePhase === phase.id && !search;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToPhase(phase.id),
                                            className: `w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-left transition-all text-xs ${isActive ? "bg-slate-800 text-slate-100" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `shrink-0 w-4 h-4 rounded text-[10px] font-bold flex items-center justify-center ${colors.badge}`,
                                                    children: phase.number
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: phase.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, phase.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-widest text-slate-600 font-semibold mb-3",
                                            children: "Legend"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: Object.keys(TYPE_BADGE).map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[9px] font-semibold uppercase tracking-wide px-1 py-0.5 rounded border ${TYPE_BADGE[type]}`,
                                                        children: type
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 21
                                                    }, this)
                                                }, type, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "md:ml-56 flex-1 px-6 py-8 max-w-4xl",
                        children: [
                            search && filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-24 text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg",
                                        children: [
                                            "No results for “",
                                            search,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-1",
                                        children: "Try a different term or resource type"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            search && filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 text-xs text-slate-500",
                                children: [
                                    filtered.flatMap((p)=>p.topics).flatMap((t)=>t.resources).length,
                                    " resources across ",
                                    filtered.length,
                                    " phases"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-16",
                                children: filtered.map((phase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhaseSection, {
                                        phase: phase,
                                        isActive: activePhase === phase.id
                                    }, phase.id, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_7fb612c9._.js.map
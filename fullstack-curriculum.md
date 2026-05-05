# Full Stack Developer Curriculum
## Target: 5-Year Experienced Engineer — Interview-Ready + Production-Grade

---

## Action Plan Overview

| Phase | Focus | Duration |
|---|---|---|
| 0 | Terminal & Dev Environment Mastery | 2 weeks |
| 1 | Frontend Foundations + Depth | 6 weeks |
| 2 | Backend Foundations + Depth | 6 weeks |
| 3 | Databases + Data Layer | 4 weeks |
| 4 | System Design + Architecture | 4 weeks |
| 5 | DevOps + Infrastructure | 4 weeks |
| 6 | Security + Testing | 2 weeks |
| 7 | AI-Native Development | 2 weeks |
| 8 | Interview Grind | Ongoing |

Total: ~6 months of focused evening/weekend work. Can compress to 3 months full-time.

---

## Phase 0 — Terminal & CLI Mastery

The goal: never reach for the mouse for development tasks.

### Core Shell Skills

**Navigation & File System**
```bash
# Move fast without mouse
cd -                        # jump to previous directory
pushd / popd                # directory stack
z <fuzzy-name>              # jump to any frecent dir (install zoxide)
ctrl+r                      # fuzzy search command history
ctrl+a / ctrl+e             # jump to start/end of line
alt+f / alt+b               # move word by word
ctrl+w                      # delete word backward
ctrl+u                      # delete entire line
ctrl+l                      # clear screen (better than `clear`)

# File operations
ls -lah                     # human readable, all files, long format
find . -name "*.ts" -not -path "*/node_modules/*"
fd "*.ts"                   # better find (install fd-find)
bat filename                # better cat with syntax highlighting
exa -la --git               # better ls with git status
```

**Text Processing (the unix superpower)**
```bash
grep -rn "functionName" ./src          # recursive search with line numbers
grep -rn "TODO" . --include="*.ts"     # search only ts files
rg "pattern" --type ts                 # ripgrep - much faster than grep
awk '{print $1, $3}'                   # print specific columns
sed 's/old/new/g' file.txt            # find and replace
sort | uniq -c | sort -rn             # count occurrences, sort by frequency
jq '.data[] | .name' response.json    # parse and query JSON
cut -d',' -f1,3 file.csv              # extract CSV columns
```

**Process & System**
```bash
ps aux | grep node                     # find processes
kill -9 <pid>                         # force kill
lsof -i :3000                         # what's using port 3000
kill $(lsof -t -i:3000)               # kill process on port 3000
htop                                  # interactive process viewer
df -h                                 # disk usage
du -sh ./node_modules                 # size of directory
env | grep DATABASE                   # inspect env vars
```

**Multiplexing with tmux (replace tabs with panes)**
```bash
# Core tmux bindings (prefix = ctrl+b by default, remap to ctrl+a)
ctrl+b c        # new window
ctrl+b %        # split vertical pane
ctrl+b "        # split horizontal pane
ctrl+b o        # switch pane
ctrl+b z        # zoom/unzoom current pane (fullscreen toggle)
ctrl+b [        # scroll mode (use vim keys to navigate)
ctrl+b d        # detach session (keeps running)
tmux attach     # reattach
tmux new -s dev # named session
```

**Git in the terminal (fluently)**
```bash
git log --oneline --graph --all        # visual branch history
git diff --staged                      # review before committing
git stash push -m "wip: feature"       # named stash
git stash pop                          # restore stash
git rebase -i HEAD~3                   # interactive rebase last 3 commits
git bisect start/bad/good              # find which commit introduced a bug
git cherry-pick <hash>                 # apply specific commit
git blame -L 40,60 file.ts             # who wrote lines 40-60
git reflog                             # history of HEAD (undo anything)
git restore --staged file.ts           # unstage a file
```

**Shell Configuration (zsh)**
```bash
# Install oh-my-zsh + plugins:
# zsh-autosuggestions - ghost text completions
# zsh-syntax-highlighting - color valid/invalid commands
# fzf - fuzzy finder for everything
# zoxide - smarter cd (learns your dirs)
# starship - fast, smart prompt

# Useful aliases to add to ~/.zshrc
alias ll='exa -la --git'
alias cat='bat'
alias find='fd'
alias grep='rg'
alias k='kubectl'
alias dc='docker compose'
alias gst='git status'
alias glog='git log --oneline --graph --all'
```

**Tools to install immediately**
- `brew install fzf zoxide ripgrep fd bat exa jq tmux htop`
- `brew install gh` — GitHub CLI (create PRs without leaving terminal)
- `brew install lazygit` — TUI git client, keyboard-driven
- `starship` — fast cross-shell prompt

### Resources — Terminal
- **Book**: "The Linux Command Line" — William Shotts (free at linuxcommand.org)
- **Interactive**: `tldr` command (install it: `brew install tldr`) — simplified man pages
- **Practice**: `vimtutor` in terminal — 30 min, learn vim motions (useful everywhere: shell, VS Code vim mode)
- **Reference**: https://cheat.sh/ — curl cheat sheets from terminal: `curl cheat.sh/git`
- **Video**: "Tmux Crash Course" — Dreams of Code on YouTube

---

## Phase 1 — Frontend Mastery

### 1.1 JavaScript Deep Internals (non-negotiable for senior interviews)

**Topics:**
- Event loop, call stack, microtask queue, macrotask queue
- Closures, lexical scope, hoisting
- Prototypal inheritance vs class syntax
- `this` binding rules (implicit, explicit, new, arrow)
- Promises internals, async/await compilation output
- Generator functions and iterators
- WeakMap / WeakRef — memory management
- Proxy and Reflect
- Module system: CommonJS vs ESM differences

**Interview focus:** Event loop questions, "what does this print and why", closure traps, `this` context bugs.

**Resources:**
- **Book**: "You Don't Know JS" series — Kyle Simpson (free on GitHub: getify/You-Dont-Know-JS)
- **Visual**: https://www.jsv9000.app — visualize the event loop
- **Practice**: "javascript.info" — best comprehensive JS reference
- **Video**: "What the heck is the event loop?" — Philip Roberts (JSConf) on YouTube
- **Deep**: V8 blog at v8.dev — how the engine actually works

---

### 1.2 TypeScript (production-grade)

**Topics:**
- Type narrowing, discriminated unions, exhaustive checks
- Mapped types, conditional types, template literal types
- Infer keyword — extracting types from structures
- Utility types: `Partial`, `Required`, `Pick`, `Omit`, `ReturnType`, `Parameters`
- Generic constraints, default generics
- Declaration merging, module augmentation
- `satisfies` operator (TS 4.9+)
- `const` assertions, `as const`
- Strict mode — what each flag does and why

**Interview focus:** Build generic utility types from scratch, debug type errors, explain `unknown` vs `any` vs `never`.

**Resources:**
- **Official**: typescriptlang.org/docs — "Handbook" is well written
- **Practice**: https://github.com/type-challenges/type-challenges — ranked by difficulty
- **Deep**: "Total TypeScript" — Matt Pocock (free and paid content on totaltypescript.com)
- **Video**: Matt Pocock's YouTube channel — TypeScript tips
- **Book**: "Programming TypeScript" — Boris Cherny (O'Reilly)

---

### 1.3 React (architecture-level)

**Topics:**
- Reconciliation and Fiber architecture — what happens during a render
- Concurrent mode: `useTransition`, `useDeferredValue`, `startTransition`
- `useMemo` and `useCallback` — when they help vs when they hurt
- `useRef` for instance variables, not just DOM refs
- Custom hooks — composition patterns
- Context performance pitfalls and solutions
- React Server Components (RSC) — the mental model shift
- Suspense and error boundaries in production
- `useOptimistic` — optimistic UI
- `useActionState` — form state management
- Strict Mode behavior in development

**Interview focus:** When to split components, why a component re-renders, how to fix unnecessary re-renders, RSC vs client components.

**Resources:**
- **Official**: react.dev — rewritten, excellent
- **Deep**: "React as a UI Runtime" — Dan Abramov (overreacted.io)
- **Architecture**: "Patterns.dev" — free book on design patterns in React
- **Video**: "Jack Herrington" YouTube — advanced React patterns
- **Video**: "Theo (t3.gg)" YouTube — pragmatic modern React
- **Practice**: Build something with Next.js App Router using RSC + Server Actions

---

### 1.4 Next.js (App Router — current standard)

**Topics:**
- App Router vs Pages Router mental model
- Server Components vs Client Components — decision tree
- Route handlers, middleware
- Server Actions — mutations without API routes
- Caching layers: request memoization, data cache, full route cache, router cache
- `revalidatePath` and `revalidateTag`
- Streaming with Suspense
- Image optimization, font optimization
- Parallel routes and intercepting routes
- Middleware for auth, redirects, A/B testing

**Resources:**
- **Official**: nextjs.org/docs — thorough, read it cover to cover
- **Course**: "Next.js 14 & 15" — Lee Robinson on YouTube (free)
- **Deep**: "Understanding Next.js Caching" — Josh tried coding (YouTube)
- **Practice**: Build a full app: Next.js + Prisma + PostgreSQL + Auth.js

---

### 1.5 State Management

**Topics:**
- When NOT to use global state (most cases)
- URL as state — `useSearchParams`
- Server state vs client state distinction
- React Query / TanStack Query — the right mental model (cache, not state)
- Zustand — lightweight, no boilerplate
- Jotai — atomic state
- Redux Toolkit — when it's actually needed
- Signals (Angular, Solid) — understand the alternative model

**Resources:**
- **Docs**: TanStack Query docs — excellent, explains WHY
- **Video**: "Stop using useState for everything" — Jack Herrington
- **Comparison**: "Zustand vs Jotai vs Redux" — blog posts on dev.to

---

### 1.6 CSS & Styling (senior-level)

**Topics:**
- CSS cascade, specificity, inheritance — the actual algorithm
- Flexbox and Grid — know both deeply
- CSS custom properties as design tokens
- Container queries (modern responsive design)
- CSS-in-JS tradeoffs vs utility-first vs CSS modules
- Tailwind CSS — utility-first, config, `@apply`, plugins
- Animation: CSS transitions, `@keyframes`, View Transitions API
- Accessibility: WCAG, ARIA roles, focus management, keyboard nav

**Resources:**
- **Game**: flexboxfroggy.com + cssgridgarden.com
- **Reference**: "Every Layout" — every-layout.dev (modern CSS patterns)
- **Tailwind**: tailwindcss.com/docs — read the whole thing once
- **Deep**: "CSS for JavaScript Developers" — Josh W Comeau (paid, worth it)
- **A11y**: web.dev/accessibility — Google's guide

---

### 1.7 Performance & Web Vitals

**Topics:**
- Core Web Vitals: LCP, INP (replaced FID), CLS — what they measure and how to fix
- Chrome DevTools: Performance tab, Network tab, Lighthouse
- Code splitting: `React.lazy`, dynamic imports
- Bundle analysis: `webpack-bundle-analyzer`, `@next/bundle-analyzer`
- Image optimization: formats (WebP, AVIF), lazy loading, sizing
- Font loading: `font-display: swap`, preloading
- HTTP/2 multiplexing, HTTP/3/QUIC
- Service workers and caching strategies
- Critical rendering path

**Resources:**
- **Tool**: web.dev/measure — check any URL
- **Reference**: web.dev/performance — Google's perf guide
- **Video**: "Chrome DevTools Performance" — Chrome Developers YouTube
- **Book**: "High Performance Browser Networking" — Ilya Grigorik (free at hpbn.co)

---

## Phase 2 — Backend Mastery

### 2.1 Node.js Internals

**Topics:**
- libuv, event loop phases (timers, I/O, idle, poll, check, close)
- Thread pool — what uses it (fs, DNS, crypto)
- `process.nextTick` vs `setImmediate` vs `Promise.resolve()` — execution order
- Streams — readable, writable, transform, pipeline
- Worker threads — when to use vs clustering
- Memory management: heap, V8 GC, heap snapshots
- `--inspect` flag — debugging with Chrome DevTools
- `perf_hooks` — measuring performance
- Child processes: `spawn`, `exec`, `fork` differences

**Resources:**
- **Book**: "Node.js Design Patterns" — Mario Casciaro (must-read)
- **Deep**: nodejs.org/en/docs/guides — "Don't block the event loop" guide
- **Video**: "Node.js Event Loop" — Bert Belder (dotJS)
- **Practice**: Build a custom HTTP server from `net` module (no Express)

---

### 2.2 API Design

**Topics:**
- REST — Richardson Maturity Model, HATEOAS (know it, use level 2)
- REST best practices: versioning, pagination, filtering, error formats
- HTTP methods semantics: idempotency, safety
- GraphQL — schema, resolvers, N+1 problem, DataLoader
- gRPC — protobufs, streaming, when to use vs REST
- WebSockets vs Server-Sent Events vs Long Polling — tradeoffs
- API versioning strategies
- Rate limiting: token bucket vs leaky bucket algorithms
- OpenAPI / Swagger — spec-first design

**Resources:**
- **Book**: "Designing Web APIs" — Brenda Jin (O'Reilly)
- **Reference**: "HTTP API Design Guide" — github.com/interagent/http-api-design
- **GraphQL**: howtographql.com — full tutorial
- **gRPC**: grpc.io/docs/languages/node — official tutorial
- **Video**: "REST vs GraphQL vs gRPC" — Fireship YouTube

---

### 2.3 Frameworks

**Node.js:**
- Express — know it cold (middleware chain, error handlers, `next()`)
- Fastify — why it's faster, schema validation, plugins
- Hono — edge-native, ultralight, increasingly popular

**Python:**
- FastAPI — async, pydantic models, automatic OpenAPI docs
- Django — full stack, ORM, admin — know it for enterprise contexts

**Interview focus:** Write a rate limiter middleware, auth middleware, error handler from scratch.

**Resources:**
- **Fastify**: fastify.dev/docs — official docs are excellent
- **FastAPI**: fastapi.tiangolo.com — excellent docs with examples
- **Video**: "Node.js Backend Masterclass" — Traversy Media

---

### 2.4 Authentication & Authorization

**Topics:**
- Password hashing: bcrypt, Argon2 (why not MD5/SHA)
- JWT: structure, signing, verification, expiry, refresh tokens
- OAuth 2.0 flow: authorization code, PKCE, implicit (deprecated), client credentials
- OIDC — ID tokens vs access tokens
- Session-based auth vs token-based — tradeoffs
- RBAC vs ABAC — role vs attribute based access control
- Auth libraries: Auth.js (Next.js), Passport.js, Clerk, Auth0
- API key management
- mTLS for service-to-service auth

**Resources:**
- **Visual**: "OAuth 2.0 Simplified" — aaronparecki.com
- **Deep**: jwt.io — decode and understand JWTs
- **Video**: "The Modern Guide to OAuth" — Aaron Parecki (YouTube)
- **Practice**: Implement full auth from scratch: register, login, JWT, refresh, logout

---

### 2.5 Messaging & Event-Driven Systems

**Topics:**
- Message queues: RabbitMQ, SQS — at-least-once vs exactly-once delivery
- Event streaming: Kafka — partitions, consumer groups, offsets, compaction
- Pub/Sub patterns
- Outbox pattern — reliable event publishing with DB transactions
- Event sourcing — storing events as source of truth
- CQRS — command query responsibility segregation
- Idempotency keys — handling duplicate messages
- Dead letter queues

**Resources:**
- **Book**: "Designing Event-Driven Systems" — Ben Stopford (free PDF from Confluent)
- **Visual**: "Kafka in 100 Seconds" — Fireship
- **Deep**: kafka.apache.org/documentation — official docs
- **Practice**: Build a notification service with a queue (BullMQ + Redis is easy to start)

---

### 2.6 Microservices & Architecture Patterns

**Topics:**
- Monolith vs microservices — when each is right (monolith first is usually right)
- Service decomposition strategies
- API Gateway pattern
- Service mesh (Istio, Linkerd) — what it solves
- Circuit breaker pattern (Resilience4j concepts)
- Saga pattern for distributed transactions
- Strangler fig pattern — migrating a monolith
- 12-factor app methodology

**Resources:**
- **Book**: "Building Microservices" — Sam Newman (O'Reilly, essential)
- **Reference**: 12factor.net — read every factor
- **Video**: "Microservices" — Martin Fowler on YouTube and martinfowler.com
- **Deep**: microservices.io — patterns catalog by Chris Richardson

---

## Phase 3 — Database Mastery

### 3.1 PostgreSQL (deep)

**Topics:**
- ACID properties — what each letter actually means and how Postgres implements them
- MVCC — multi-version concurrency control, how it enables non-blocking reads
- Indexes: B-tree, Hash, GIN, GiST, BRIN — when to use which
- `EXPLAIN ANALYZE` — reading query plans, understanding cost estimates
- Partial indexes, expression indexes
- Vacuuming and autovacuum — why it matters
- Table partitioning: range, list, hash
- Window functions: `ROW_NUMBER`, `RANK`, `LAG`, `LEAD`, `FIRST_VALUE`
- CTEs (common table expressions) and recursive CTEs
- `JSONB` operators and indexing
- Connection pooling: PgBouncer — why direct connections don't scale
- Replication: streaming replication, logical replication
- Row-level security

**SQL to know cold:**
```sql
-- Window function
SELECT name, salary,
  RANK() OVER (PARTITION BY dept ORDER BY salary DESC) as rank
FROM employees;

-- Recursive CTE (org chart, file tree)
WITH RECURSIVE org AS (
  SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id FROM employees e
  JOIN org o ON e.manager_id = o.id
)
SELECT * FROM org;

-- Upsert
INSERT INTO users (email, name) VALUES ($1, $2)
ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name;

-- Full text search
SELECT * FROM articles
WHERE to_tsvector('english', content) @@ plainto_tsquery('english', 'search term');
```

**Resources:**
- **Interactive**: pgexercises.com — SQL exercises
- **Book**: "PostgreSQL: Up and Running" — O'Reilly
- **Deep**: postgresqlco.nf — explain every config option
- **Practice**: "Select Star SQL" — selectstarsql.com (free interactive book)
- **Reference**: "Use the Index, Luke" — use-the-index-luke.com (indexing guide)
- **Video**: Hussein Nasser's "Fundamentals of Database Engineering" (Udemy)

---

### 3.2 Redis

**Topics:**
- Data structures: String, Hash, List, Set, Sorted Set, Stream, HyperLogLog
- Expiry: `TTL`, `EXPIRE`, `EXPIREAT`
- Caching patterns: cache-aside, write-through, write-behind
- Cache invalidation strategies
- Pub/Sub for lightweight messaging
- Redis Streams for event sourcing
- Lua scripting for atomic operations
- Redis Cluster vs Sentinel
- Rate limiting with `INCR` + `EXPIRE`
- Distributed locks with `SET NX PX`

**Resources:**
- **Interactive**: try.redis.io — in-browser Redis
- **Book**: "Redis in Action" — Josiah Carlson (Manning)
- **Official**: redis.io/docs
- **Video**: "Redis Crash Course" — TechWorld with Nana (YouTube)

---

### 3.3 ORMs and Query Builders

**Topics:**
- Prisma — schema-first, type-safe, migrations
- Drizzle — lightweight, SQL-like, edge-compatible (growing fast)
- SQLAlchemy — Python ORM, both Core and ORM layers
- N+1 problem — how to detect and fix with `include` / `eager loading`
- When to drop to raw SQL
- Migration strategies in production: zero-downtime migrations

**Resources:**
- **Docs**: prisma.io/docs — excellent docs with visual schema examples
- **Docs**: orm.drizzle.team — read the comparison page
- **Deep**: "Safe DB Migrations" — pgdash.io blog

---

### 3.4 NoSQL — When and Why

**Topics:**
- MongoDB — document model, aggregation pipeline, indexing
- DynamoDB — single-table design, partition keys, GSIs, LSIs
- When to choose NoSQL: write-heavy, flexible schema, massive scale
- When NOT to: when you need joins, strong consistency, complex queries
- Vector databases: Pinecone, pgvector, Weaviate — for AI features
- Time-series: InfluxDB, TimescaleDB

**Resources:**
- **Book**: "DynamoDB Book" — Alex DeBrie (dynamodbbook.com)
- **Video**: "MongoDB Crash Course" — Traversy Media
- **Deep**: "NoSQL Distilled" — Martin Fowler (O'Reilly)

---

## Phase 4 — System Design

This phase determines senior vs mid-level differentiation in interviews.

### 4.1 Core Concepts

**Scalability:**
- Horizontal vs vertical scaling
- Stateless services — why they scale better
- CAP theorem — consistency, availability, partition tolerance (pick 2)
- BASE vs ACID
- Consistent hashing — how distributed caches and DBs shard
- Read replicas — offloading read traffic

**Reliability:**
- SLA, SLO, SLI — definitions and how to set them
- MTTR, MTBF — measuring reliability
- Circuit breakers, retries with exponential backoff + jitter
- Bulkhead pattern — failure isolation
- Chaos engineering principles

**Performance:**
- Latency vs throughput tradeoffs
- P50/P95/P99 percentiles — why averages lie
- Back-of-envelope estimation: QPS, storage, bandwidth
- CDN — what to cache, cache invalidation
- Database query optimization

### 4.2 System Design Interview Topics

Practice designing these systems from scratch:
1. URL shortener (tinyurl) — hashing, redirects, analytics
2. Rate limiter — sliding window, token bucket
3. Notification service — fan-out, push vs pull
4. File upload system — presigned URLs, chunked upload
5. Real-time chat — WebSockets, presence, message ordering
6. News feed / timeline — fan-out on write vs read
7. Search autocomplete — trie, Elasticsearch
8. Distributed job scheduler — cron at scale
9. Payment system — idempotency, exactly-once semantics
10. Video streaming platform — CDN, HLS, encoding pipeline

### 4.3 Resources — System Design
- **Book**: "Designing Data-Intensive Applications" — Martin Kleppmann (MUST READ — the bible)
- **Book**: "System Design Interview" vol 1 & 2 — Alex Xu
- **Video**: "System Design Interview" — Gaurav Sen (YouTube)
- **Video**: "ByteByteGo" — Alex Xu's YouTube channel (visual explanations)
- **Practice**: systemdesign.one — structured practice
- **Deep**: highscalability.com — real architecture teardowns
- **Reference**: "Grokking System Design" — educative.io

---

## Phase 5 — DevOps & Infrastructure

### 5.1 Docker (master before Kubernetes)

**Topics:**
- Dockerfile best practices: layer caching, multi-stage builds, minimal base images
- `.dockerignore` — what to exclude
- `docker compose` — local dev environments
- Volumes: bind mounts vs named volumes
- Networks: bridge, host, overlay
- Health checks
- Resource limits: `--memory`, `--cpus`
- Security: non-root user, read-only filesystem, `--cap-drop`

```dockerfile
# Multi-stage build example
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS runner
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

**Resources:**
- **Official**: docs.docker.com — "Get started" guide
- **Video**: "Docker in 100 Seconds" — Fireship
- **Deep**: "Docker Deep Dive" — Nigel Poulton (book)
- **Practice**: Dockerize every project you build

---

### 5.2 Kubernetes (conceptual + practical basics)

**Topics:**
- Core objects: Pod, Deployment, Service, Ingress, ConfigMap, Secret
- `kubectl` commands fluently
- Namespaces for environment isolation
- Resource requests and limits
- Horizontal Pod Autoscaler
- Rolling deployments vs blue/green vs canary
- Persistent Volumes and Claims
- Helm charts — package manager for K8s
- RBAC in Kubernetes

**Essential kubectl:**
```bash
kubectl get pods -n production
kubectl describe pod <name>
kubectl logs <pod> -f --tail=100
kubectl exec -it <pod> -- /bin/sh
kubectl apply -f deployment.yaml
kubectl rollout status deployment/app
kubectl rollout undo deployment/app
kubectl port-forward pod/<name> 8080:3000
kubectl top pods
```

**Resources:**
- **Interactive**: killercoda.com — free K8s sandbox
- **Book**: "Kubernetes in Action" — Marko Luksa (O'Reilly)
- **Video**: "Kubernetes Crash Course" — TechWorld with Nana (YouTube)
- **Practice**: "k3s" locally (lighter than minikube)
- **CKA Prep**: kodekloud.com — hands-on labs

---

### 5.3 CI/CD

**Topics:**
- GitHub Actions: workflow syntax, jobs, steps, matrix builds, secrets
- Branch protection rules, required status checks
- Build, test, lint, type-check — all in CI
- Docker image building and pushing in CI
- Deployment strategies from CI
- GitOps with ArgoCD
- Feature flags: LaunchDarkly, Unleash — decouple deploy from release

**GitHub Actions patterns:**
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run type-check
      - run: npm test -- --coverage
      - run: npm run build
```

**Resources:**
- **Official**: docs.github.com/en/actions
- **Video**: "GitHub Actions Tutorial" — TechWorld with Nana
- **Deep**: "Continuous Delivery" — Jez Humble (O'Reilly)

---

### 5.4 Cloud (AWS focus, concepts transfer to GCP/Azure)

**Core services to know:**
- Compute: EC2, ECS (Fargate), Lambda, App Runner
- Storage: S3 (policies, presigned URLs, lifecycle), EFS
- Database: RDS, Aurora, DynamoDB, ElastiCache
- Networking: VPC, subnets, security groups, NAT gateway, ALB
- CDN: CloudFront
- DNS: Route 53
- IAM: roles, policies, least privilege
- Monitoring: CloudWatch, X-Ray

**Resources:**
- **Cert**: AWS Solutions Architect Associate — teaches the whole platform (acloudguru.com)
- **Practice**: AWS free tier — build real things
- **Video**: "AWS in 5 minutes" series — TechWorld with Nana
- **Cheaper start**: Railway, Render, Fly.io — deploy real apps without cloud complexity

---

### 5.5 Observability

**Topics:**
- The three pillars: logs, metrics, traces
- Structured logging (JSON logs) vs unstructured
- Log levels: debug, info, warn, error, fatal
- Metrics: counters, gauges, histograms
- Distributed tracing: OpenTelemetry (the standard), Jaeger
- Dashboards: Grafana + Prometheus
- Error tracking: Sentry
- APM: Datadog, New Relic

**Resources:**
- **Standard**: opentelemetry.io/docs
- **Video**: "Observability vs Monitoring" — TechWorld with Nana
- **Practice**: Add Sentry to a project, set up Prometheus + Grafana locally with Docker

---

## Phase 6 — Security

### 6.1 Application Security

**OWASP Top 10 (know all, fix all):**
1. Broken Access Control — always check authorization server-side
2. Cryptographic Failures — use HTTPS everywhere, Argon2 for passwords
3. Injection — parameterized queries, never concatenate SQL
4. Insecure Design — threat modeling
5. Security Misconfiguration — disable unused features, rotate secrets
6. Vulnerable Components — `npm audit`, `dependabot`
7. Auth Failures — brute force protection, MFA, secure sessions
8. SSRF — validate and allowlist outbound requests
9. Logging Failures — log security events, don't log PII/secrets
10. XSS — Content Security Policy, escape output, `httpOnly` cookies

**Headers to always set:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=()
```

**Resources:**
- **Reference**: owasp.org/www-project-top-ten
- **Practice**: "WebGoat" — deliberately insecure app to attack (OWASP)
- **Book**: "The Web Application Hacker's Handbook" — Stuttard & Pinto
- **Video**: "Web Security" — PortSwigger Web Security Academy (free, excellent)

---

### 6.2 Testing Strategy

**Testing pyramid for production apps:**
- Unit tests: pure functions, utilities, business logic
- Integration tests: service + database (real DB, not mocks)
- E2E tests: critical user flows only (login, purchase, signup)
- Contract tests: API contract between services

**Tools:**
- Vitest / Jest — unit and integration (Node.js)
- React Testing Library — component tests (test behavior not implementation)
- Playwright — E2E browser automation
- Supertest — HTTP integration tests for Express/Fastify

**Resources:**
- **Book**: "Testing JavaScript" — Kent C. Dodds (testingjavascript.com)
- **Philosophy**: "Write tests. Not too many. Mostly integration." — Kent C. Dodds
- **Video**: "Playwright Tutorial" — Playwright docs + LambdaTest YouTube
- **Reference**: playwright.dev/docs — official docs

---

## Phase 7 — AI-Native Development (2025 must-know)

This is what separates engineers who stay ahead from those who fall behind.

### 7.1 AI Development Tools

**Claude Code (this tool)**
- Use it for: code generation, refactoring, debugging, architecture review
- Best prompts: give context, constraints, and ask for explanation
- `claude` CLI — use in terminal for quick questions without context switch

**Cursor**
- AI-first code editor built on VS Code
- `ctrl+k` — inline edit, `ctrl+l` — chat, `ctrl+i` — composer (multi-file)
- Codebase-aware context — ask questions about your whole repo

**GitHub Copilot**
- Tab completion, inline suggestions
- Copilot Chat — explain, fix, test generation

**v0 by Vercel (v0.dev)**
- Generate React + Tailwind components from text/screenshots
- Import directly into Next.js projects

**Bolt.new / Lovable**
- Full-stack app generation from prompt
- Good for prototyping, not production

### 7.2 Building with LLMs (the real skill)

**Anthropic Claude API:**
```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

// With prompt caching for large context (60-80% cost reduction)
const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  system: [
    {
      type: "text",
      text: "You are a helpful assistant.",
      cache_control: { type: "ephemeral" }, // cache system prompt
    },
  ],
  messages: [{ role: "user", content: "Hello" }],
});
```

**Key concepts:**
- Prompt engineering: system prompts, few-shot examples, chain-of-thought
- Retrieval-Augmented Generation (RAG): chunk docs, embed, vector search, inject context
- Tool use / function calling — give LLMs ability to call your APIs
- Streaming responses — `stream: true` for UX
- Prompt caching — reduce latency and cost on repeated context
- Evals — how to measure LLM output quality

**Resources:**
- **Official**: docs.anthropic.com — Claude API docs
- **Course**: "Building with Claude" — Anthropic YouTube
- **Deep**: "LLM University" — Cohere (free, model-agnostic concepts)
- **Practice**: Build a RAG app: index docs → vector search → Claude answer
- **Reference**: "Prompt Engineering Guide" — promptingguide.ai

### 7.3 MCP (Model Context Protocol)

- Anthropic's open protocol to connect LLMs to tools and data sources
- Build MCP servers to give Claude access to your databases, APIs, files
- Growing ecosystem: filesystem, GitHub, databases, Slack, browser
- Docs: modelcontextprotocol.io

---

## Phase 8 — Interview Preparation

### 8.1 Data Structures & Algorithms

**Know these cold:**
- Arrays, strings, hashmaps
- Two pointers, sliding window
- Binary search (on arrays AND on answer space)
- BFS/DFS on trees and graphs
- Recursion and dynamic programming (memoization first, tabulation second)
- Heap/priority queue
- Stack and monotonic stack
- Trie
- Union Find (Disjoint Set)

**5-year experience expectation:** Medium problems confidently, Hard problems attempted with explanation.

**Resources:**
- **Platform**: leetcode.com — filter by company, difficulty
- **Structured**: "Neetcode 150" — neetcode.io (curated + video explanations)
- **Book**: "Cracking the Coding Interview" — Gayle Laakmann McDowell
- **Video**: "NeetCode" YouTube — best algorithm explanations
- **Practice schedule**: 2 problems/day, focus on patterns not memorization

---

### 8.2 System Design Interview Guide

**Framework for every system design question:**
1. **Clarify requirements** (2 min): functional, non-functional, scale estimates
2. **Back-of-envelope estimates** (2 min): QPS, storage, bandwidth
3. **High-level design** (5 min): draw the boxes
4. **Deep dive** (15 min): pick 2-3 components to go deep on
5. **Tradeoffs** (5 min): what would you do differently at 10x scale

**Numbers to memorize:**
```
L1 cache: 1 ns
L2 cache: 10 ns
RAM: 100 ns
SSD: 100 μs
HDD: 10 ms
Network (same DC): 500 μs
Network (cross-DC): 150 ms

1 million req/day = ~12 req/s
1 billion req/day = ~12,000 req/s
```

**Resources:**
- **Book**: "System Design Interview" — Alex Xu (vol 1 & 2)
- **Video**: "ByteByteGo" — Alex Xu's YouTube
- **Practice**: "Grokking the System Design Interview" — educative.io
- **Community**: "Exponent" — mock interviews

---

### 8.3 Behavioral Interviews (STAR method)

**Common themes at senior level:**
- Technical leadership without authority
- Handling production incidents
- Disagreeing with a technical decision
- Making a decision with incomplete information
- Mentoring junior engineers
- Trade-offs between speed and quality

**Prepare 8-10 STAR stories covering:**
- Biggest technical challenge overcome
- A time you influenced architecture
- A production incident you led
- A time you pushed back on requirements
- A time you failed and what you learned

**Resources:**
- **Book**: "The STAR Interview" — Misha Yurchenko
- **Practice**: Use Claude — "Conduct a mock senior engineering behavioral interview"

---

### 8.4 Frontend-Specific Interview Topics

- "How does the browser render a page?" (Critical rendering path)
- "What happens when you type a URL and press Enter?" (Full stack answer)
- "How would you improve performance of a slow React app?"
- "Explain virtual DOM and its tradeoffs"
- "How does `useEffect` cleanup work?"
- "Implement a debounce function"
- "Implement a Promise.all from scratch"
- "Explain event delegation"
- Deep CSS: specificity, stacking context, BFC

---

### 8.5 Backend-Specific Interview Topics

- "Design a database schema for [system]"
- "How would you handle 10x traffic tomorrow?"
- "Explain database transaction isolation levels"
- "How do you prevent race conditions?"
- "Implement rate limiting"
- "How would you debug a memory leak in Node.js?"
- "Difference between authentication and authorization"
- "Explain eventual consistency with an example"

---

## Tools & Technologies to Know (2025 Market)

| Category | Standard | Rising Fast |
|---|---|---|
| Frontend framework | React + Next.js | SolidJS, Astro |
| Language | TypeScript | (TS is the standard) |
| Styling | Tailwind CSS | CSS modules + CSS variables |
| State | TanStack Query + Zustand | Jotai, Signals |
| Backend (JS) | Fastify, Express | Hono, Bun |
| Backend (Python) | FastAPI | (FastAPI is the standard) |
| ORM | Prisma | Drizzle |
| Database | PostgreSQL | Neon (serverless Postgres) |
| Cache | Redis | Dragonfly (Redis-compatible) |
| Queue | BullMQ / Kafka | Inngest |
| Containers | Docker | (Docker is baseline) |
| Orchestration | Kubernetes | Nomad |
| CI/CD | GitHub Actions | (GHA is the standard) |
| Cloud | AWS | Cloudflare (Workers, R2, D1) |
| Edge | Cloudflare Workers | Vercel Edge |
| AI integration | Anthropic Claude / OpenAI | Vercel AI SDK |
| Testing | Vitest + Playwright | (these are the standard) |
| Monitoring | Sentry + Datadog | Better Stack |

---

## Daily Practice System

**Morning (30 min):**
- 1 LeetCode problem (medium)
- Terminal-only: no GUI git, no GUI file explorer

**Evening (1-2 hours):**
- Work through current phase topic
- Build something that uses what you learned that day

**Weekly:**
- 1 system design question (draw it, time-box 30 min)
- Read 1 engineering blog post (Netflix, Cloudflare, Stripe, Uber engineering blogs)
- Code review something you built last week with fresh eyes

**Engineering blogs worth following:**
- engineering.atspotify.com
- netflixtechblog.com
- stripe.com/blog/engineering
- blog.cloudflare.com
- slack.engineering
- medium.com/airbnb-engineering
- discord.com/blog (engineering)

---

## Recommended Reading Order

1. "You Don't Know JS" (series) — Kyle Simpson
2. "Designing Data-Intensive Applications" — Martin Kleppmann ← most important book
3. "Node.js Design Patterns" — Mario Casciaro
4. "Building Microservices" — Sam Newman
5. "System Design Interview" vol 1 — Alex Xu
6. "The Pragmatic Programmer" — Hunt & Thomas
7. "A Philosophy of Software Design" — John Ousterhout
8. "System Design Interview" vol 2 — Alex Xu
9. "Clean Architecture" — Robert Martin (know the concepts, be pragmatic about application)
10. "High Performance Browser Networking" — Ilya Grigorik (free at hpbn.co)

---

*Last updated: May 2026*
*Target role: Senior Full Stack Engineer (5 YOE equivalent)*

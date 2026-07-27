# Soliqly — Enterprise AI Tax, Accounting & Financial Management Platform

[![CI Pipeline](https://github.com/akbaralisottorov/soliqli/actions/workflows/ci.yml/badge.svg)](https://github.com/akbaralisottorov/soliqli/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-1.0.0--alpha-blue.svg)](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/11-roadmap/PRODUCT_ROADMAP.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](file:///c:/Users/LENOVO/soliqli/soliqli-1/LICENSE)

Soliqly is an AI-powered financial management, transaction ledger, and tax compliance platform built specifically for self-employed professionals, sole proprietors (*Yakka Tartibdagi Tadbirkorlar* - YTT), and micro-businesses (*MCHJ*) in the Republic of Uzbekistan.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
* **Node.js**: `v20.x` or higher
* **pnpm**: `v9.x` or higher
* **Python**: `v3.13` or higher
* **Docker & Docker Compose**: Installed and running

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/akbaralisottorov/soliqli.git
cd soliqli
pnpm install
```

### 2. Configure Local Environment
```bash
cp .env.example .env
```

### 3. Start Infrastructure Stack (PostgreSQL + pgvector, Redis, MinIO)
```bash
pnpm docker:up
```

### 4. Start Monorepo Applications (Next.js SPA + FastAPI Core)
```bash
pnpm dev
```

* **Web SPA Viewport:** [http://localhost:3000](http://localhost:3000)
* **Backend API Docs (OpenAPI):** [http://localhost:8000/docs](http://localhost:8000/docs)
* **MinIO Object Storage Console:** [http://localhost:9001](http://localhost:9001)

---

## 📚 Phase 0 Architectural Documentation Repository

The repository contains a complete Phase 0 specification suite inside `docs/`:

* 📖 **[PROJECT_DISCOVERY.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/00-project-management/PROJECT_DISCOVERY.md)** — Project Vision & Market Scope
* 📋 **[PRD.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/01-product/PRD.md)** — Product Requirements & MoSCoW Feature Matrix
* 🏗️ **[SOFTWARE_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/02-architecture/SOFTWARE_ARCHITECTURE.md)** — Enterprise Software Architecture Blueprint
* 🗄️ **[DATABASE_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/03-database/DATABASE_BLUEPRINT.md)** — Relational Schema & `pgvector` Data Architecture
* 🔌 **[API_SPECIFICATION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/04-api/API_SPECIFICATION.md)** — RESTful API Contract & SSE Token Streaming Specs
* 🤖 **[AI_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/05-ai/AI_ARCHITECTURE.md)** — Multi-Agent System & RAG Pipeline Architecture
* 🛡️ **[SECURITY_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/07-security/SECURITY_ARCHITECTURE.md)** — Zero Trust Security, Privacy (ZRU-547), & PII Encryption
* 🚀 **[DEVOPS_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/08-devops/DEVOPS_ARCHITECTURE.md)** — OCI Docker Containers, CI/CD, & Blue-Green Release
* 🧪 **[TESTING_STRATEGY.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/09-quality/TESTING_STRATEGY.md)** — Testing Pyramid, Tax Math Benchmarks, & DeepEval AI Tests
* 📘 **[ENGINEERING_PLAYBOOK.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/10-engineering/ENGINEERING_PLAYBOOK.md)** — Mandatory Engineering Standards & Coding Handbook
* 🤖 **[AI_AGENT_DEVELOPMENT_CONTRACT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/10-engineering/AI_AGENT_DEVELOPMENT_CONTRACT.md)** — Binding Contract for AI Coding Agents
* 📑 **[ADR_INDEX.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/ADR_INDEX.md)** — Master Architecture Decision Records Index
* 💬 **[PROMPT_LIBRARY.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/13-prompt-library/PROMPT_LIBRARY.md)** — Enterprise AI Prompt Library
* 📌 **[IMPLEMENTATION_BACKLOG.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/14-implementation/IMPLEMENTATION_BACKLOG.md)** — Work Breakdown Structure & Epics Matrix
* 🏁 **[MVP_SPRINT_EXECUTION_PLAN.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/15-execution/MVP_SPRINT_EXECUTION_PLAN.md)** — 16-Week Sprint Master Execution Schedule

---

## 🏛️ Key System Architecture

```
[Next.js 15 Web SPA] ──► [FastAPI REST / SSE Gateway] ──► [Python Tax Math Engine (Deterministic)]
                                 │
                                 ├──► [PostgreSQL 16 + pgvector Index]
                                 ├──► [Redis Cache & Queue Broker]
                                 └──► [OpenAI GPT-4o / Gemini 1.5 Pro]
```

---

## 📄 License
Licensed under the [MIT License](file:///c:/Users/LENOVO/soliqli/soliqli-1/LICENSE).

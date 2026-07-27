# Sprint 05 Execution Plan: Uzbek RAG AI Assistant & Vector Search

* **Sprint ID:** `Sprint 05`
* **Duration:** Weeks 11–12 (Phase 3)
* **Status:** Scheduled
* **Story Points:** 55 Points
* **Primary Objective:** Build server-side AI Gateway, index Tax Code corpus into `pgvector` HNSW index, implement Server-Sent Events (SSE) streaming API, and build AI Chat sidebar drawer UI with legal citations.
* **Related ADRs:** [ADR-0006](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0006-ai-gateway-multiagent.md), [ADR-0007](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0007-pgvector-rag.md)

---

## 1. User Stories & Engineering Tasks
* `TASK-5.1-AI`: Chunk and index Uzbekistan Tax Code corpus into `knowledge_chunks` table using `text-embedding-3-small` vectors.
* `TASK-5.2-BE`: FastAPI SSE AI streaming endpoint (`POST /api/v1/ai/chat/stream`) with provider failover (OpenAI -> Gemini).
* `TASK-5.3-FE`: Next.js AI Chat Sidebar Drawer UI with token streaming and legal citation footers (*Soliq Kodeksi, 467-modda*).
* `TASK-5.4-TEST`: DeepEval AI accuracy and citation evaluation test suite.

---

# Sprint 01 Execution Plan: Foundation, Auth & Identity

* **Sprint ID:** `Sprint 01`
* **Duration:** Weeks 3–4 (Phase 1)
* **Status:** Ready for Execution
* **Story Points:** 34 Points
* **Primary Objective:** Build FastAPI JWT auth endpoints, Next.js login/register UI, and initialize PostgreSQL schema (`users`, `sessions`).
* **Related ADRs:** [ADR-0004](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0004-fastapi-backend.md), [ADR-0008](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0008-jwt-authentication.md)

---

## 1. User Stories & Engineering Tasks
* `TASK-1.1-DB`: Alembic migration for `users` and `sessions` tables (UUID PK, Argon2id password hash).
* `TASK-1.2-BE`: FastAPI Auth module (`POST /api/v1/auth/register`, `/login`, `/refresh`).
* `TASK-1.3-FE`: Next.js Auth pages (`/login`, `/register`) with React Hook Form + Zod.
* `TASK-1.4-TEST`: Pytest auth endpoint test suite.

---

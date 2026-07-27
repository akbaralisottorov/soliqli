# Sprint 02 Execution Plan: Company Setup & Entity Profile

* **Sprint ID:** `Sprint 02`
* **Duration:** Weeks 5–6 (Phase 1)
* **Status:** Scheduled
* **Story Points:** 21 Points
* **Primary Objective:** Deliver company entity setup wizard, encrypted TIN/STIR field storage, and entity type selection (`YTT`, `Self-Employed`, `MCHJ`).
* **Related ADRs:** [ADR-0005](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0005-postgresql-database.md), [ADR-0010](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0010-security-zero-trust.md)

---

## 1. User Stories & Engineering Tasks
* `TASK-2.1-BE`: FastAPI Company module (`POST /api/v1/companies`) with `pgcrypto` AES-256 encryption.
* `TASK-2.2-FE`: Next.js Company Setup Wizard UI step flow.
* `TASK-2.3-TEST`: Pytest multi-tenant company creation test suite.

---

# Sprint 06 Execution Plan: PDF Reports & Celery Task Worker

* **Sprint ID:** `Sprint 06`
* **Duration:** Weeks 13–14 (Phase 4)
* **Status:** Scheduled
* **Story Points:** 26 Points
* **Primary Objective:** Implement asynchronous Celery report generation worker producing downloadable PDF/CSV tax summary statements uploaded to Cloudflare R2 storage.
* **Related ADRs:** [ADR-0004](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0004-fastapi-backend.md)

---

## 1. User Stories & Engineering Tasks
* `TASK-6.1-BE`: Celery worker PDF report generation task (`app/worker.py`).
* `TASK-6.2-FE`: Report Download UI & status polling component.
* `TASK-6.3-TEST`: Pytest PDF report generation & R2 object link test suite.

---

# Sprint 07 Execution Plan: Multi-Tenant Workspaces & Security Hardening

* **Sprint ID:** `Sprint 07`
* **Duration:** Weeks 15–16 (Phase 6)
* **Status:** Scheduled
* **Story Points:** 21 Points
* **Primary Objective:** Build organization switcher UI for independent bookkeepers, enforce RBAC role permissions (`OWNER`/`ACCOUNTANT`), and execute Redis rate limiting.
* **Related ADRs:** [ADR-0005](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0005-postgresql-database.md), [ADR-0010](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0010-security-zero-trust.md)

---

## 1. User Stories & Engineering Tasks
* `TASK-7.1-FE`: Multi-company Workspace Switcher UI header dropdown.
* `TASK-7.2-BE`: Tenant isolation enforcement & Redis sliding window rate limiter middleware.
* `TASK-7.3-TEST`: Security audit & RBAC tenant isolation test suite.

---

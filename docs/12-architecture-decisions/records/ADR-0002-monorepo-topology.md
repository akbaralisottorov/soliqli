# ADR-0002: Monorepo Codebase Topology & Package Management

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Principal Software Architect, Principal Frontend Architect  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [SOFTWARE_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/02-architecture/SOFTWARE_ARCHITECTURE.md), [ENGINEERING_PLAYBOOK.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/10-engineering/ENGINEERING_PLAYBOOK.md)  

---

## 1. Context & Problem Statement
Soliqly consists of multiple applications (`apps/web`, `apps/api`) and shared packages (`packages/ui`, `packages/types`, `packages/shared`, `docs/`). Managing these assets across separate Git repositories leads to version drift, complex CI/CD pipelines, and difficult cross-team coordination.

## 2. Decision
We adopt a **Single Monorepo Topology** managed by `pnpm` workspaces and `Turborepo` caching build orchestrators.
* All web applications, API services, shared UI primitives, TypeScript DTOs, prompt libraries, and documentation reside inside a single repository (`soliqli/`).

## 3. Consequences & Trade-offs
* **Positive Impact:** Single source of truth; atomic commits across UI and type definitions; simplified CI/CD pipeline.
* **Negative Impact:** Monorepo requires strict directory standards to prevent circular package dependencies.

---

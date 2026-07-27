# ADR-0009: Container-First Blue-Green Zero-Downtime Deployment Model

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Principal DevOps Architect, Principal SRE  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [DEVOPS_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/08-devops/DEVOPS_ARCHITECTURE.md)  

---

## 1. Context & Problem Statement
Deploying updates to Soliqly must not disrupt live users, interrupt active financial transaction logging, or risk corrupting data during database schema migrations.

## 2. Decision
We adopt **OCI Containerization & Nginx Blue-Green Zero-Downtime Releases**:
* Deploy applications as immutable Docker containers tagged with Git commit SHAs.
* Maintain Blue (Live) and Green (Standby) target groups.
* Execute automated health probes (`/health/readiness`) before switching Nginx router traffic to Green.
* Automated 2-minute rollback to Blue if Green emits 5xx status codes.

## 3. Consequences & Trade-offs
* **Positive Impact:** Zero user downtime during deployments; instant automated rollback safety net.
* **Negative Impact:** Requires temporary 2x container compute capacity during release window.

---

# ADR-0010: Security Architecture, Data Privacy & pgcrypto Field Encryption

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Chief Information Security Officer (CISO), Principal Security Architect  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [SECURITY_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/07-security/SECURITY_ARCHITECTURE.md), [DATABASE_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/03-database/DATABASE_BLUEPRINT.md)  

---

## 1. Context & Problem Statement
Soliqly handles sensitive personal taxpayer identifiers (*STIR/TIN*) and commercial financial ledgers subject to strict compliance under Uzbekistan Law No. ZRU-547 ("On Personal Data").

## 2. Decision
We implement **Zero Trust & Multi-Layer Encryption Architecture**:
1. Enforce TLS 1.3 encryption across all public network transport routes.
2. Encrypt sensitive taxpayer STIR identifiers at rest using PostgreSQL `pgcrypto` AES-256 GCM database field encryption.
3. Enforce multi-tenant data isolation by injecting mandatory `WHERE company_id = :active_id` predicates into all SQL queries.
4. Maintain immutable append-only `audit_logs` tables with SQL rules blocking `UPDATE` and `DELETE` actions.

## 3. Consequences & Trade-offs
* **Positive Impact:** Full compliance with Uzbekistan Law ZRU-547; defense-in-depth against data breaches; complete auditability.
* **Negative Impact:** Field encryption/decryption adds minimal CPU overhead during taxpayer query execution.

---

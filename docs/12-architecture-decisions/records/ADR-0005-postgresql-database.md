# ADR-0005: PostgreSQL 16+ Primary Database & Vector Engine Selection

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Principal Database Architect, Principal Data Engineer  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [DATABASE_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/03-database/DATABASE_BLUEPRINT.md)  

---

## 1. Context & Problem Statement
Soliqly requires ACID-compliant relational storage for user accounts, multi-tenant companies, transaction ledgers, and tax calculation records, while also needing vector embedding storage for RAG similarity search over the Tax Code of Uzbekistan.

## 2. Decision
We select **PostgreSQL 16+** enhanced with extensions (`uuid-ossp`, `pgvector`, `pgcrypto`, `citext`) as the single primary database.
* Store financial values as 64-bit `BIGINT` integers in Uzbek Som (UZS).
* Store 1,536-dimensional AI vector embeddings natively in `knowledge_chunks` using `pgvector` HNSW indexes.

## 3. Consequences & Trade-offs
* **Positive Impact:** Single consolidated database cluster simplifies operations, backups, and point-in-time recovery; eliminates separate vector database SaaS costs ($150+/mo savings).
* **Negative Impact:** HNSW vector indexes require tuning memory allocation (`maintenance_work_mem`).

---

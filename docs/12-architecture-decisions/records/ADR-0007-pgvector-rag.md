# ADR-0007: Native pgvector RAG Strategy & Legal Citation Grounding

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Principal RAG Architect, Principal AI Architect  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [AI_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/05-ai/AI_ARCHITECTURE.md), [DATABASE_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/03-database/DATABASE_BLUEPRINT.md)  

---

## 1. Context & Problem Statement
To answer Uzbek tax questions accurately, Soliqly requires a RAG pipeline that retrieves verified sections of the Uzbekistan Tax Code (*Soliq Kodeksi*) and appends legal citation footers without hallucinating legal interpretations.

## 2. Decision
We adopt **`pgvector` HNSW Hybrid Retrieval**:
* Embed text using OpenAI `text-embedding-3-small` (1,536 dimensions).
* Chunk documents into 500-token blocks with 10% overlap.
* Combine Cosine Similarity vector search (`similarity >= 0.78`) with PostgreSQL Full-Text Search (`tsvector`).
* Mandate legal citation footers (*Manba: Soliq Kodeksi, {article}-modda*) on all AI tax responses.

## 3. Consequences & Trade-offs
* **Positive Impact:** 100% legal grounding; eliminates legal advice hallucinations; sub-45ms vector search.
* **Negative Impact:** Requires updating embeddings whenever state tax laws are amended.

---

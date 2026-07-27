# ADR-0004: FastAPI (Python 3.13) Async Backend Architecture

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Principal Backend Architect, Principal AI Architect  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [SOFTWARE_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/02-architecture/SOFTWARE_ARCHITECTURE.md), [API_SPECIFICATION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/04-api/API_SPECIFICATION.md)  

---

## 1. Context & Problem Statement
The backend must handle concurrent REST API requests, deterministic financial tax calculations, background Celery jobs, and asynchronous streaming responses from AI LLM providers. Python is the dominant ecosystem for AI/LLM integration and numerical calculations.

## 2. Decision
We select **FastAPI (Python 3.13+)** as the core backend web framework.
* Use `async/await` non-blocking I/O handlers.
* Enforce Pydantic v2 schemas for request validation and response serialization.
* Use async SQLAlchemy 2.0 ORM for database operations.

## 3. Consequences & Trade-offs
* **Positive Impact:** Native async streaming performance; seamless integration with OpenAI/Gemini SDKs and Pytest suites; automated OpenAPI 3.0 documentation generation (`/docs`).
* **Negative Impact:** Requires strict async ORM discipline to avoid blocking database queries.

---

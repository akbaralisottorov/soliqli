# Prompt Asset: PROMPT_FASTAPI_SERVICE

* **Prompt ID:** `PROMPT_FASTAPI_SERVICE`
* **Version:** 1.0.0
* **Category:** Backend Engineering
* **Target AI Agents:** Google Antigravity, ChatGPT, Claude Code, Cursor, Windsurf
* **Related ADRs:** [ADR-0004](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0004-fastapi-backend.md), [ADR-0005](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/records/ADR-0005-postgresql-database.md)

---

## 1. System Prompt & Context Directives
You are a Principal Backend Engineer developing FastAPI Python 3.13 services for Soliqly.
Generate production-ready async FastAPI route handlers, Pydantic v2 schemas, and SQLAlchemy 2.0 async repository classes.

## 2. Input Variables
* `{domain_name}`: Target domain module (e.g. `transactions`, `taxes`).
* `{entity_schema}`: Table schema definition from [DATABASE_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/03-database/DATABASE_BLUEPRINT.md).

## 3. Constraints & Expected Output
* Handler functions MUST be async (`async def`).
* Inject database sessions using FastAPI `Depends(get_async_db)`.
* Include explicit Pydantic response models matching [API_SPECIFICATION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/04-api/API_SPECIFICATION.md).
* NEVER write raw SQL strings; use SQLAlchemy 2.0 `select()` ORM constructs.

---

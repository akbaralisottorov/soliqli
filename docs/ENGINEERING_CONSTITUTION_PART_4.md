# Soliqly Engineering Constitution

## Part 4 — Software Engineering Standards & Architecture Principles

**Version:** 1.0  
**Status:** Official Engineering Standard  
**Author:** Founding Product & Engineering Team  
**Last Updated:** July 2026  
**Related Documents:** [ENGINEERING_CONSTITUTION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/ENGINEERING_CONSTITUTION.md), [ENGINEERING_CONSTITUTION_PART_2.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/ENGINEERING_CONSTITUTION_PART_2.md), [ENGINEERING_CONSTITUTION_PART_3.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/ENGINEERING_CONSTITUTION_PART_3.md)  

---

## 1. Executive Engineering Philosophy

Engineering at Soliqly exists exclusively to solve business problems for entrepreneurs in Uzbekistan. All software technical decisions must measurably advance one or more of these 8 core attributes:
* **Scalability** | **Maintainability** | **Reliability** | **Security**
* **Developer Experience** | **Performance** | **Testability** | **Observability**

---

## 2. Architectural Design Patterns & Principles

```
  Presentation Layer (Next.js / TypeScript)
          │
          ▼
  Application Layer (FastAPI Services & Orchestration)
          │
          ▼
  Domain Layer (Deterministic Tax Engine & Core Business Entities)
          │
          ▼
  Infrastructure Layer (PostgreSQL / Redis / Vector Storage / External Services)
```

The system architecture strictly adheres to:
* **Modular Monolith Architecture** for MVP (decoupled domain modules, single deployable process, clean domain boundaries).
* **Domain-Driven Design (DDD):** Explicit bounded contexts and ubiquitously named aggregates.
* **Clean & Layered Architecture:** Inward-facing dependency flow. Business logic relies on abstractions, never on framework code.
* **SOLID Principles:** Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.

---

## 3. Standardized Monorepo Topology

```
soliqli/
├── apps/
│   ├── web/                     # Next.js 14+ SPA (Frontend Web MVP)
│   └── api/                     # FastAPI Service App (Backend Core API)
├── packages/
│   ├── ui/                      # Shared shadcn/ui React Component Library
│   ├── types/                   # Shared TypeScript Interfaces & DTO Schemas
│   ├── config/                  # Shared Eslint, Prettier, TypeScript Configs
│   └── shared/                  # Common Utilities, Constants & Validators
├── docs/                        # Project & Engineering Documentation (Part 3)
├── scripts/                     # Local Dev, Database Seed & Utility Scripts
└── infrastructure/              # Docker, Terraform, CI/CD Pipeline Specs
```

---

## 4. Frontend Technology Stack & Standards

| Layer / Concern | Technology Selection | Specification & Rules |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | Server Components + Client Components optimized for mobile web latency. |
| **Language** | **TypeScript (Strict Mode)** | Explicit types for all props, states, and API responses (`noImplicitAny`). |
| **UI Components** | **shadcn/ui** | Accessible, unstyled primitives tailored to Soliqly design system. |
| **Styling** | **Tailwind CSS** | Utility-first styling governed by central design tokens. |
| **Client State** | **Zustand** | Minimal, predictable local state management. |
| **Server State** | **TanStack Query (v5)** | Caching, deduplication, optimistic updates, and background refetching. |
| **Form Management** | **React Hook Form** | Uncontrolled form inputs with zero re-render overhead. |
| **Schema Validation**| **Zod** | Runtime validation matching shared TypeScript DTO types. |
| **Animations** | **Framer Motion** | Subdued micro-interactions for polish (hover/focus/slide). |
| **Data Visualization**| **Recharts** | Lightweight financial charts (Income/Expense/Tax charts). |

---

## 5. Backend Technology Stack & Standards

| Layer / Concern | Technology Selection | Specification & Rules |
| :--- | :--- | :--- |
| **Framework** | **FastAPI** | High-performance Python async REST web framework. |
| **Language** | **Python 3.11+** | Modern type hints (`typing`, `Pydantic v2`). |
| **Data Validation** | **Pydantic v2** | Strict API request/response serialization and schema enforcement. |
| **ORM & Migrations** | **SQLAlchemy 2.0 + Alembic**| Async ORM mapping with explicit Alembic migration scripts. |
| **Auth Protocol** | **JWT (OAuth2 Bearer)** | Secure access tokens with short TTLs and refresh token rotation. |
| **Task Queue** | **Celery + Redis** | Asynchronous background processing for tax calculations and reports. |
| **Caching Layer** | **Redis** | Session storage, rate-limiting counters, and calculation result caching. |

---

## 6. Database Standards (PostgreSQL)

### 6.1 Database Configuration & Extensions
* **Database Engine:** PostgreSQL 16+
* **Required Extensions:** `uuid-ossp` (UUID generation), `pgvector` (Vector embeddings for AI RAG).

### 6.2 Mandatory Entity Schema Rules
Every PostgreSQL table created in Soliqly **must** include the following standard columns:

```sql
CREATE TABLE example_domain_entity (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    -- Domain fields...
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ NULL -- Soft delete support
);

CREATE INDEX idx_example_entity_company_id ON example_domain_entity(company_id);
CREATE INDEX idx_example_entity_deleted_at ON example_domain_entity(deleted_at) WHERE deleted_at IS NULL;
```

---

## 7. Standardized API Architecture (/api/v1)

### 7.1 Response Contract Standard
All API endpoints return a uniform envelope response format:

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150
  },
  "timestamp": "2026-07-27T21:50:00Z",
  "trace_id": "req-8f92a1b4-290c"
}
```

### 7.2 Error Contract Standard
```json
{
  "success": false,
  "error": {
    "code": "TAX_CALCULATION_INVALID_THRESHOLD",
    "message": "Turnover revenue exceeds annual tax regime ceiling.",
    "details": [
      { "field": "annual_revenue", "issue": "Exceeds 1,000,000,000 UZS ceiling for turnover tax." }
    ]
  },
  "timestamp": "2026-07-27T21:50:00Z",
  "trace_id": "req-8f92a1b4-290c"
}
```

---

## 8. Explicit Bounded Domain Definitions

```
            ┌───────────────────────────────────────────────┐
            │               SOLIQLY DOMAINS                 │
            └───────────────────────┬───────────────────────┘
                                    │
    ┌──────────────┬────────────────┼────────────────┬──────────────┐
    ▼              ▼                ▼                ▼              ▼
Authentication   Companies    Transactions        Taxes           AI RAG
 (JWT / SMS)   (Self/YTT/MCHJ) (Income/Expense) (Turnover/Fixed)  (Context Q&A)
```

1. **Authentication:** User identity, login, OTP verification, tokens.
2. **Users:** User profiles, preferences, contact channels.
3. **Organizations & Companies:** Multi-company profile management for Self-employed / YTT / MCHJ entities.
4. **Transactions:** Ledger tracking for Income inflows and Expense outflows.
5. **Taxes:** Deterministic calculation engines for Fixed Tax and Turnover Tax (*Aylanmadan olinadigan soliq*).
6. **Reports:** Financial statement generation (PDF/CSV summaries).
7. **AI:** Conversational assistant context orchestration, vector retrieval, and prompt guardrails.
8. **Settings & Notifications:** System parameters, user preferences, and operational alerts.

---

## 9. AI Engineering & Safety Architecture

1. **Rule of Determinism:** AI LLMs are **never** permitted to compute raw financial numbers, tax rates, or monetary totals independently.
2. **RAG Architecture:** The AI Assistant uses Retrieval-Augmented Generation restricted to official, verified legal documents (Uzbekistan Tax Code).
3. **Output Guardrails:** AI response streams pass through a validation middleware layer to sanitize formatting, strip unsafe hallucinated assertions, and attach legal citation footers.
4. **Prompt Governance:** All prompt templates are versioned in code (`packages/shared/prompts/`) and unit-tested for regression behavior.

---

## 10. Definition of Done (DoD)

A development task or pull request is deemed **Done** if and only if:
1. Business and domain requirements are satisfied without scope drift.
2. Architecture & layered dependency standards are fully respected.
3. Automated unit and integration tests pass with required test coverage.
4. OpenAPI schemas and documentation (`docs/`) are updated.
5. Security safeguards (input validation, RBAC, SQLi/XSS protection) are verified.
6. Code review is formally approved by senior engineering reviewers.

---

**Ratified & Enforced.**  
*Soliqly Founding Product & Engineering Team*

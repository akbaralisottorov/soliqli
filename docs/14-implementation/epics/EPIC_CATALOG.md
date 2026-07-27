# Master Epics Breakdown Catalog

* **Project:** Soliqly  
* **Document:** Epics Breakdown Catalog  
* **Location:** `docs/14-implementation/epics/EPIC_CATALOG.md`  

---

## 1. EPIC-01: Foundation, Auth & Tenant Identity
* **Target Sprint:** Sprints 1–2 (Weeks 3–4)
* **Total Story Points:** 34 Points
* **Primary Objective:** Deliver core user authentication (Uzbekistan phone number + password), JWT access token issuing with HTTP-Only refresh cookies, and base database schema initialization.
* **Target Files:**
  * `[NEW]` [apps/api/app/api/v1/auth.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/api/app/api/v1/auth.py)
  * `[NEW]` [apps/api/app/core/security.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/api/app/core/security.py)
  * `[NEW]` [apps/web/app/login/page.tsx](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/web/app/login/page.tsx)
  * `[NEW]` [scripts/migrations/versions/001_initial_auth.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/scripts/migrations/versions/001_initial_auth.py)

---

## 2. EPIC-03: Income & Expense Ledger Engine
* **Target Sprint:** Sprints 3–4 (Weeks 5–6)
* **Total Story Points:** 42 Points
* **Primary Objective:** Build income/expense transaction creation drawer, searchable data table, payment method filters, and BigInt UZS currency storage backend APIs.
* **Target Files:**
  * `[NEW]` [apps/api/app/domains/transactions/services.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/api/app/domains/transactions/services.py)
  * `[NEW]` [apps/web/app/dashboard/transactions/page.tsx](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/web/app/dashboard/transactions/page.tsx)
  * `[NEW]` [apps/web/components/TransactionDrawer.tsx](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/web/components/TransactionDrawer.tsx)

---

## 3. EPIC-04: Deterministic Tax Calculation Core
* **Target Sprint:** Sprint 4 (Weeks 7–8)
* **Total Story Points:** 34 Points
* **Primary Objective:** Implement 100% deterministic Python calculation engine evaluating 4% Turnover Tax and Social Tax (*Ijtimoiy soliq*) liabilities.
* **Target Files:**
  * `[NEW]` [apps/api/app/domains/taxes/calculator.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/api/app/domains/taxes/calculator.py)
  * `[NEW]` [apps/web/components/TaxLiabilityCard.tsx](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/web/components/TaxLiabilityCard.tsx)
  * `[NEW]` [apps/api/tests/unit/test_tax_calculator.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/api/tests/unit/test_tax_calculator.py)

---

## 4. EPIC-05: Uzbek RAG AI Assistant Gateway
* **Target Sprint:** Sprint 5 (Weeks 7–8)
* **Total Story Points:** 55 Points
* **Primary Objective:** Build server-side AI Gateway, index Tax Code corpus into `pgvector` HNSW index, and implement Server-Sent Events (SSE) word-by-word streaming with legal citations.
* **Target Files:**
  * `[NEW]` [apps/api/app/domains/ai/gateway.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/api/app/domains/ai/gateway.py)
  * `[NEW]` [apps/api/app/domains/ai/rag_engine.py](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/api/app/domains/ai/rag_engine.py)
  * `[NEW]` [apps/web/components/AIChatSidebar.tsx](file:///c:/Users/LENOVO/soliqli/soliqli-1/apps/web/components/AIChatSidebar.tsx)
  * `[NEW]` [packages/shared/prompts/PROMPT_TAX_ADVISOR_RAG.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/packages/shared/prompts/PROMPT_TAX_ADVISOR_RAG.md)

---

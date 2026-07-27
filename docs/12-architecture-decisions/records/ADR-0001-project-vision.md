# ADR-0001: Project Vision & Rule of Deterministic Tax Core

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Founding Architecture Board (CTO, CPO)  
* **Reviewers:** Executive Engineering Council  
* **Related Documents:** [PROJECT_DISCOVERY.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/00-project-management/PROJECT_DISCOVERY.md), [PRD.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/01-product/PRD.md)  

---

## 1. Context & Problem Statement
Soliqly provides tax, accounting, and legal guidance for self-employed individuals and sole proprietors (*Yakka Tartibdagi Tadbirkorlar* - YTT) in Uzbekistan. 

Large Language Models (LLMs) excel at natural language translation and legal document retrieval, but are inherently probabilistic and prone to mathematical hallucinations. Calculating tax liabilities (*Turnover Tax 4%*, *Social Tax*) requires 100% mathematical accuracy.

## 2. Decision
We establish the **Rule of Determinism**:
1. All monetary, turnover, and social tax calculations MUST be executed by deterministic, 100% unit-tested Python backend code modules.
2. LLMs MUST NEVER perform raw financial or tax math. LLMs act strictly as conversational interfaces, context explainers, and RAG document search query translators.

## 3. Consequences & Trade-offs
* **Positive Impact:** Guarantees 0% math error rate; eliminates financial liability for incorrect tax advice; builds high user trust.
* **Negative Impact / Complexity:** Requires maintaining dedicated backend calculation services alongside LLM prompts.

---

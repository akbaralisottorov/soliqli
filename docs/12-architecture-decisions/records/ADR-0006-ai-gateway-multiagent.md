# ADR-0006: Centralized AI Gateway & Multi-Agent Architecture

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Chief AI Officer, Principal LLM Architect  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [AI_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/05-ai/AI_ARCHITECTURE.md), [API_SPECIFICATION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/04-api/API_SPECIFICATION.md)  

---

## 1. Context & Problem Statement
Direct LLM calls from frontend web clients create security vulnerabilities (API key leaks), prevent token usage tracking, and eliminate provider failover capability when primary APIs experience outages.

## 2. Decision
We implement a **Centralized Server-Side AI Gateway** in `apps/api/app/domains/ai`.
* Primary LLM Provider: OpenAI (`gpt-4o` / `gpt-4o-mini`).
* Automated Fallback Provider: Google Gemini 1.5 Pro.
* Route prompts through specialized agents (Tax Agent, Legal Agent, Financial Analytics Agent) via an Agent Orchestrator.

## 3. Consequences & Trade-offs
* **Positive Impact:** 100% provider independence; zero API key exposure; Redis token rate limiting; automatic API failover.
* **Negative Impact:** Adds slight gateway proxy latency overhead (< 15ms).

---

# Soliqly Engineering Constitution

## Part 3 — Engineering & Documentation Standards

**Version:** 1.0  
**Status:** Official Documentation Standard  
**Author:** Founding Product & Engineering Team  
**Last Updated:** July 2026  
**Related Documents:** [ENGINEERING_CONSTITUTION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/ENGINEERING_CONSTITUTION.md), [ENGINEERING_CONSTITUTION_PART_2.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/ENGINEERING_CONSTITUTION_PART_2.md)  

---

## 1. Overview & Purpose

This document specifies the mandatory standards for creating, structuring, versioning, and maintaining technical and product documentation across the Soliqly project lifecycle. 

Documentation is an integral asset of the Soliqly product software stack. No architectural phase, API endpoint, or data schema will proceed to execution without approved documentation that fulfills this standard.

---

## 2. Mandatory Document Header Standard

Every future Markdown document created for Soliqly **must** begin with the following metadata header block:

```markdown
# [DOCUMENT_TITLE]

**Version:** X.Y.Z  
**Status:** [Draft | Review | Approved | Deprecated | Archived]  
**Author:** Founding Product & Engineering Team  
**Last Updated:** YYYY-MM-DD  
**Related Documents:** [Link 1](file:///path), [Link 2](file:///path)  

---

## Purpose
[Concise statement defining what the document is, why it exists, and who consumes it]
```

---

## 3. Universal Document Structural Template

Whenever applicable, documentation must adhere to this standardized section hierarchy:

```
1. Overview & Purpose
2. Goals & Non-Goals
3. System Scope (In-Scope vs. Out-of-Scope)
4. Context & Background
5. Architecture & Design Specifications
6. Architectural Decision Records (ADR)
7. Technical Trade-offs & Alternatives Considered
8. Risk Assessment & Mitigation Strategies
9. Future Improvements & Scalability Path
10. References & Appendices
```

---

## 4. Architectural Decision Record (ADR) Standard

Every key architectural choice, technology selection, or protocol decision must include an ADR block structured as follows:

| ADR Attribute | Specification |
| :--- | :--- |
| **Decision** | Explicit technical or product decision made. |
| **Reason & Rationale** | Core business or engineering justification. |
| **Alternatives Considered** | Technical options evaluated and rejected. |
| **Pros** | Tangible architectural benefits gained. |
| **Cons & Limitations** | Sacrifices, performance overhead, or complexity added. |
| **System Impact** | Effects on security, latency, maintainability, and scalability. |
| **Future Considerations** | Conditions under which this decision should be revisited. |

---

## 5. Visual Diagram & Table Standards

### 5.1 Mermaid Diagram Usage
Complex systems, data flows, entity relationships, and state machines must be rendered using GitHub-flavored **Mermaid** diagrams (`mermaid` code blocks).

Supported diagram types:
* Architecture Topologies (`graph TD / LR`)
* API Sequence Flow (`sequenceDiagram`)
* Entity Relationship Diagrams (`erDiagram`)
* User State & Lifecycle Transitions (`stateDiagram-v2`)

### 5.2 Table Formatting
Use Markdown tables for feature matrices, entity schemas, API endpoints, error code definitions, configuration flags, priority mapping, and trade-off comparisons.

---

## 6. Requirements & Priority Standard

### 6.1 Requirement Taxonomy
Requirements must be categorized into explicit sections:
* **Functional Requirements (FR):** System behaviors and user features.
* **Non-Functional Requirements (NFR):** Latency, throughput, availability.
* **Security Requirements (SEC):** Encryption, RBAC, authentication, compliance.
* **Performance Requirements (PERF):** Benchmark targets.
* **AI Requirements (AIR):** Model RAG accuracy, context windowing, guardrails.
* **Infrastructure Requirements (INFRA):** Cloud services, databases, edge nodes.

### 6.2 Priority System
Priority levels across all documentation must strictly use the **P0–P3 Matrix**:

| Level | Priority Name | Definition |
| :--- | :--- | :--- |
| **P0** | **Critical / Blocker** | Essential for MVP core functionality, security, or legal tax compliance. |
| **P1** | **High** | Core product capability required for primary user workflows. |
| **P2** | **Medium** | Important enhancement planned for immediate post-MVP releases. |
| **P3** | **Low** | Optional or long-term future roadmap consideration. |

---

## 7. Unified Domain Terminology

To prevent ambiguity, engineers must strictly adhere to the following domain vocabulary:

| Standard Term | Prohibited Variants | Definition |
| :--- | :--- | :--- |
| **Company** | Organization, Firm, Account | The legal tax entity (Self-employed, YTT, MCHJ). |
| **Workspace** | Tenant, Portal, Project | The user's active session environment inside Soliqly. |
| **Transaction** | Entry, Record, Event | A single monetary movement (Income or Expense). |
| **Income** | Revenue, Money In, Credit | Monetary inflow into the entity. |
| **Expense** | Spending, Money Out, Debit | Monetary outflow from the entity. |
| **Tax** | Tariff, Government Fee | Legally mandated payment calculated by the deterministic engine. |
| **AI Assistant** | Chatbot, Bot, LLM | The conversational contextual AI interface. |

---

## 8. File Naming & Directory Organization

### 8.1 File Naming Rule
All documentation files must use `UPPERCASE_SNAKE_CASE.md`.

* Examples: `PRD.md`, `SOFTWARE_ARCHITECTURE.md`, `DATABASE_BLUEPRINT.md`, `AI_ARCHITECTURE.md`, `API_SPECIFICATION.md`, `SECURITY_ARCHITECTURE.md`.

### 8.2 Directory Structure
All project documentation must be organized cleanly within the `docs/` hierarchy:

```
docs/
├── product/           # PRD, User Stories, Personas
├── architecture/      # Software Architecture, Component Designs
├── database/          # ERD, Database Blueprints, Migration Specs
├── api/               # OpenAPI Specs, REST/gRPC Interface Definitions
├── ai/                # RAG Specs, Prompt Specs, Guardrail Rules
├── security/          # Security Architecture, Data Protection Specs
└── devops/            # CI/CD, Deployment Blueprints, Infra Setup
```

---

## 9. Four-Stage Review Protocol

Before any technical specification moves to **Approved** status, it must pass four formal reviews:
1. **Business Review:** Confirms alignment with MVP goals and ROI.
2. **Architecture Review:** Verifies domain boundaries, scalability, and performance impact.
3. **Engineering Review:** Verifies technical feasibility, implementation clarity, and code structure.
4. **Documentation Review:** Verifies adherence to this Constitution standard.

---

**Ratified & Enforced.**  
*Soliqly Founding Product & Engineering Team*

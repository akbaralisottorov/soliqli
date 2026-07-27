# Soliqly Engineering Constitution

## Part 2 — Project Context & Business Vision

**Version:** 1.0  
**Status:** Official Product Context  
**Scope:** Scope Boundaries, MVP Features, Out-of-Scope Rules, Strategic Roadmap  
**Target Market:** Republic of Uzbekistan  

---

## 1. Project Overview

| Attribute | Specification |
| :--- | :--- |
| **Project Name** | Soliqly |
| **Product Category** | AI-powered Tax, Accounting and Financial Management Platform |
| **Target Country** | Republic of Uzbekistan |
| **Primary Language** | Uzbek (*O'zbekcha*) |
| **Secondary Languages** | Russian (*Русский*), English (*English*) |
| **Platform Roadmap** | Web Application (MVP Phase) ➔ Native Mobile Applications (Future) |
| **Deployment Model** | Cloud-first Multi-tenant SaaS |
| **Business Model** | Subscription (Freemium + Premium Tiers) |

---

## 2. Project Mission & Business Vision

### 2.1 Mission
Soliqly exists to remove complexity from taxation, accounting, and financial management. The platform enables entrepreneurs in Uzbekistan to focus on revenue growth and operational excellence rather than administrative tax friction. Artificial Intelligence automates repetitive data entry and explanations while keeping financial calculations 100% deterministic and transparent.

### 2.2 Product Vision
Soliqly is engineered to become the **Financial Operating System of Uzbekistan**, uniting seven core financial pillars into a single intelligent ecosystem:

```
Tax Management  ──┐
Accounting      ──┼──►  Soliqly Ecosystem  ──► Financial Operating System
Financial Rep.  ──┤     (Intelligent AI)      (Republic of Uzbekistan)
Analytics & AI  ──┘
```

---

## 3. Target User Segmentation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          TARGET USER TAX TIERS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Primary (MVP Focus):    Self-Employed (O'zini o'zi band), YTT, Freelancers │
│  Secondary:              Outsourced Accountants, Startup Financial Managers │
│  Future Expansion:       Medium Enterprises, Financial Institutions        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Main Problems Solved

Soliqly addresses the top 10 pain points experienced by small business entities in Uzbekistan:
1. Ambiguous, frequently updated tax codes (*Soliq Qo'mitasi* regulations).
2. Error-prone manual bookkeeping and spreadsheet dependency.
3. Fear of severe tax penalties and frozen bank accounts (*kartoteka*).
4. High cost of hiring full-time or outsourced accountants for micro-entities.
5. Inability to calculate real-time tax liabilities before period-end deadlines.
6. Lack of basic financial literacy among first-time entrepreneurs.
7. Fragmented administrative portals.
8. Unstructured receipt and expense tracking.
9. Lack of cash flow visibility.
10. Opaque government reporting processes.

---

## 5. Strict MVP Scope Boundaries

### 5.1 In-Scope for MVP (Phase 1)
The MVP is tightly bounded to solve core financial clarity and tax calculation. The MVP contains **only** the following 8 functional capabilities:

1. **User Authentication & Authorization:** Multi-factor secure onboarding (Email, Phone/SMS OTP).
2. **Business Entity Setup:** Registration of business profile (Self-employed vs. YTT tax regime selection).
3. **Income Tracking:** Simple manual and batch entry of incoming transactions with category tagging.
4. **Expense Tracking:** Simple manual entry of outgoing expenses with category tagging.
5. **Transaction Management:** Ledger view of income/expenses with search, filtering, and status.
6. **Deterministic Tax Calculator Engine:** Automated calculation of fixed tax or turnover tax (*Aylanmadan olinadigan soliq*) liabilities.
7. **AI Financial Assistant (RAG Core):** Conversational Q&A in Uzbek/Russian grounded in Uzbekistan Tax Code rules.
8. **Basic Financial Reporting:** Generation of Income/Expense summaries and estimated tax preparation statements (PDF/CSV download).

---

### 5.2 Strict Out-of-Scope Rule (MVP Phase)
The following features are **explicitly excluded** from the MVP and must NOT be built during Phase 1:

* ❌ **Inventory Management & Stock Tracking**
* ❌ **Customer Relationship Management (CRM)**
* ❌ **Payroll Management & HR Administration**
* ❌ **Enterprise Resource Planning (ERP) Modules**
* ❌ **Banking Platform Integration / Direct Money Transfers**
* ❌ **B2B Marketplace Modules**
* ❌ **Loan Scoring / Lending Management**
* ❌ **Automated Double-Entry Ledger Engine**
* ❌ **Direct Government API Integration (Soliq.uz / E-Faktura)**
* ❌ **Multi-Entity Consolidated Accounts**
* ❌ **Advanced Business Intelligence / Machine Learning Forecasting**
* ❌ **Custom Workflow Automation Builders**
* ❌ **Complex Enterprise Role Permissions**

---

## 6. Long-Term Evolutionary Roadmap

```
Phase 0: Architecture & Specs  ──► Complete documentation, domain modeling & specs
Phase 1: Core MVP               ──► Auth, Dashboard, Income/Expense, Tax Calc, AI Chat, Reports
Phase 2: Accounting Core        ──► Double-entry ledger, Chart of Accounts, Financial Statements
Phase 3: AI Document Processing ──► OCR, Automated Invoice Scanning, Expense Recommendation
Phase 4: State Integration      ──► Soliq.uz APIs, E-Faktura sync, E-IMZO signing, Digital Filing
Phase 5: Business Operations    ──► E-Invoicing, Quotes, Basic Inventory, Payment Processing
Phase 6: Financial Intelligence  ──► AI CFO, Cash Flow Forecasting, Credit Scoring, Budget Planning
```

---

## 7. Product Philosophy & Competitive Strategy

### 7.1 Competitive Advantage Matrix
Soliqly competes through **UX simplicity, AI intelligence, and performance**, not feature volume:

* **AI-First Experience:** Conversational interface answers legal and financial questions immediately.
* **Deterministic Reliability:** 100% accurate tax math guaranteed by audited domain algorithms.
* **Hyper-Localization:** Full support for Uzbek language nuances, local tax tiers, and currency formatting (UZS).
* **Minimalist UX:** Zero-learning-curve interfaces inspired by Linear, Stripe, and Vercel.

---

**Ratified & Enforced.**  
*Soliqly Founding Product & Engineering Team*

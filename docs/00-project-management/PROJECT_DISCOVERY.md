# Soliqly — Project Discovery Document

**Document Version:** 1.0.0  
**Status:** Approved for Architecture & Design Phase  
**Author:** Founding Product & Engineering Team  
**Date:** July 2026  
**Target Market:** Republic of Uzbekistan  

---

## 1. Executive Summary

### 1.1 Product Definition
**Soliqly** is an AI-first financial operating platform engineered specifically for self-employed individuals (*O'zini o'zi band qilgan shaxslar*), sole proprietors (*Yakka Tartibdagi Tadbirkorlar* - YTT), and micro/small businesses (*MCHJ*) in Uzbekistan. The platform unifies automated tax calculation, electronic invoice management (*E-Faktura*), bank transaction reconciliation, and real-time tax compliance guidance powered by a specialized, localized Artificial Intelligence engine.

### 1.2 Purpose & Reason for Existence
The tax landscape in Uzbekistan has undergone rapid modernization driven by the State Tax Committee (*Soliq Qo'mitasi*). While digital infrastructure (such as mandatory Electronic Document Management / E-Faktura and online cash registers / NKM) is robust, the user experience for non-accountant business owners remains severely fragmented, opaque, and stressful. Entrepreneurs face steep compliance penalties, obscure tax code updates, and overly complex enterprise legacy tools (e.g., 1C:Enterprise). Soliqly exists to bridge the gap between complex state tax infrastructure and everyday business operations by providing a zero-jargon, automated, and intelligent workspace.

### 1.3 Target Audience
Soliqly serves four primary user segments across Uzbekistan:
1. **Self-Employed Professionals & Freelancers:** IT specialists, tutors, designers, rideshare drivers, and artisans operating under the simplified tax regime.
2. **Sole Proprietors (YTT):** Retailers, wholesalers, service providers operating under fixed tax or turnover tax (*Aylanmadan olinadigan soliq*) regimes.
3. **Micro & Small Business Owners (MCHJ):** Small companies subject to turnover tax (revenue under 1 billion UZS) requiring basic double-entry bookkeeping, payroll reporting, and E-Faktura compliance.
4. **Outsourced Bookkeepers & Accountants:** Independent accountants managing portfolios of 10 to 50 micro-entities who require automation to scale their operations.

### 1.4 Definition of Success
Soliqly will achieve success when an entrepreneur in Uzbekistan can manage their monthly tax liabilities, invoice clients, reconcile bank accounts, and file state tax reports in under **5 minutes per month with zero tax penalties** and 100% confidence in compliance accuracy.

---

## 2. Problem Statement

### 2.1 Problem Prioritization Matrix

| Priority | Problem Area | Impacted User Segment | Core Root Cause | Business Impact |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (Critical)** | **Fear of Tax Penalties & Complex Tax Code** | YTT, MCHJ, Freelancers | Complex legislative updates, ambiguous tax codes, severe non-compliance fines from *Soliq Qo'mitasi*. | Anxiety, delayed filings, financial penalties, unrecorded revenues. |
| **P1 (High)** | **Fragmented Electronic Document Flow** | YTT, MCHJ | E-Faktura systems (Didox, Factura.uz, Soliq.uz) are disconnected from cash flow and bank accounts. | Manual double-entry, missing documents, unverified counterparties. |
| **P2 (High)** | **Over-engineered Legacy Software** | YTT, MCHJ | 1C:Enterprise is built for full-time accountants, requiring expensive maintenance and steep learning curves. | High operational cost, dependence on external bookkeepers for basic tasks. |
| **P3 (Medium)** | **Opaque Cash Flow & Tax Liability Forecasting** | YTT, MCHJ | Tax liabilities are calculated retrospectively at month-end rather than continuously in real-time. | Unexpected cash crunches during tax payment deadlines. |

### 2.2 Detailed Problem Analysis

#### 2.2.1 Problem 1: Tax Complexity and Non-Compliance Penalties
The Tax Code of the Republic of Uzbekistan undergoes frequent updates regarding tax thresholds, exemptions, and reporting formats. Self-employed individuals and YTT owners often lack formal accounting backgrounds. Attempting to interpret tax deadlines, social tax (*Ijtimoiy soliq*) obligations, and turnover tax tiers leads to frequent errors, resulting in frozen bank accounts (*kartoteka*) and automated fines.

#### 2.2.2 Problem 2: Document & E-Imzo Friction
Business transactions in Uzbekistan rely heavily on Electronic Digital Signatures (*E-IMZO / DSKEY*), Electronic Invoices (*E-Faktura*), and Electronic Contracts (*E-Shartnoma*). Small business owners struggle to match incoming bank payments with outgoing invoices across disparate portals, leading to reconciliation errors during state tax audits.

#### 2.2.3 Problem 3: The "1C Trap" for Micro-Businesses
1C:Enterprise is the default accounting tool in Uzbekistan, but it is built for professional accountants executing comprehensive double-entry standards. For a 3-person agency or sole proprietor, 1C is cost-prohibitive, visually complex, and requires localized desktop installations or paid specialized integrators.

---

## 3. Market Opportunity

### 3.1 Current Situation in Uzbekistan
Uzbekistan is experiencing an unprecedented shift toward digital tax compliance and financial formalization:
* **Formalization Push:** Over 2.5 million individuals have registered as self-employed since the introduction of simplified registration frameworks via *Soliq Mobile*.
* **Mandatory E-Invoicing:** 100% of B2B transactions are legally required to pass through state-approved Electronic Document Operators (*EDO*).
* **Payment Digitization:** Humo and Uzcard national payment rails, combined with payment gateways (Click, Payme, Uzum Bank), process millions of digital transactions daily.

### 3.2 Key Macro Trends
1. **Growth of the Freelance & Gig Economy:** Rapid expansion of IT, logistics, and remote services creating demand for self-employed compliance tools.
2. **Open API Initiatives:** Central Bank of Uzbekistan guidelines supporting open banking standards, enabling authorized third-party platforms to fetch bank statements securely.
3. **E-Commerce Expansion:** Marketplaces (Uzum Market, Yandex Goods) requiring merchants to automatically report sales and issue digital fiscal receipts.

### 3.3 The AI Opportunity
Generic accounting platforms treat data as static records. Soliqly leverages domain-tuned Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) tied to the official Tax Code of Uzbekistan. This enables:
* **Natural Language Compliance Queries:** Users ask tax questions in conversational Uzbek or Russian and receive legally cited, accurate answers.
* **Automated Document Intelligence:** Automatic parsing of paper receipts, PDF contracts, and bank statements with automatic categorization according to Uzbek chart of accounts (*Hisoblar rejasi*).
* **Anomalous Tax Risk Detection:** Real-time scanning of transaction records to flag potential tax risks before tax return submission.

### 3.4 TAM / SAM / SOM (Uzbekistan Focus)
* **Total Addressable Market (TAM):** ~3.5 Million entities (All registered self-employed, YTT, and active legal entities in Uzbekistan).
* **Serviceable Addressable Market (SAM):** ~1.2 Million active digital-first YTT, self-employed, and micro-MCHJ entities utilizing e-payments and digital banking.
* **Serviceable Obtainable Market (SOM):** 150,000 active paid subscriptions within 36 months of launch.

---

## 4. Vision

### 4.1 5-Year Vision Statement
To become the **Financial Operating System of Uzbekistan**—the single digital infrastructure where every entrepreneur, freelancer, and small business registers, invoices, collects payments, optimizes taxes, accesses capital, and maintains 100% regulatory compliance seamlessly without needing a dedicated accounting department.

---

## 5. Mission

### 5.1 Mission Statement
To eliminate financial and tax friction for entrepreneurs in Uzbekistan by delivering an intuitive, automated, and intelligent AI platform that transforms complex regulations into simple, actionable daily guidance.

---

## 6. Business Goals

### 6.1 Quantifiable Business Benchmarks

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BUSINESS GOAL ROADMAP                             │
├───────────────────────────────┬─────────────────────────────┬───────────────┤
│ Milestone                     │ Target Metric               │ Timeframe     │
├───────────────────────────────┼─────────────────────────────┼───────────────┤
│ Phase 1: Market Entry         │ 10,000 Active Users (MAU)   │ Month 6       │
│ Phase 2: Monetization Scaling │ $50,000 Monthly Rec. Rev.   │ Month 12      │
│ Phase 3: Market Penetration   │ 75,000 MAU / $350k MRR      │ Month 36      │
│ Phase 4: Financial Ecosystem  │ 200,000 MAU / $1.2M MRR     │ Month 60      │
└───────────────────────────────┴─────────────────────────────┴───────────────┘
```

1. **User Acquisition:** Reach 10,000 Monthly Active Users (MAU) within 6 months of MVP release via organic self-employed onboarding and digital marketing.
2. **Revenue Growth:** Achieve $50,000 Monthly Recurring Revenue (MRR) by Month 12 with a freemium-to-paid conversion rate of ≥ 6%.
3. **Retention Rate:** Maintain a Net Revenue Retention (NRR) of ≥ 110% and monthly logo churn under 2.0% for paid YTT/MCHJ tiers.
4. **Unit Economics:** Maintain a Customer Acquisition Cost (CAC) Payback Period of under 5 months with an LTV/CAC ratio > 5:1.

---

## 7. Product Goals

### 7.1 Core Product Capabilities & Targets

1. **Tax Filing Efficiency:** Reduce average tax preparation and filing time for YTT from 4 hours/month to under **3 minutes/month**.
2. **AI Accuracy & Hallucination Rate:** Maintain a > 99.5% accuracy rate on tax calculation queries with **0% hallucination rate** on referenced Uzbekistan Tax Code articles through deterministic guardrails.
3. **Automated Reconciliation:** Automatically match and reconcile ≥ 90% of incoming bank transactions with corresponding E-Faktura invoices without manual user intervention.
4. **Zero Penalty Guarantee:** Achieve a 99.9% penalty-free compliance record across all active users filing reports through Soliqly.

---

## 8. Success Metrics (KPI Dashboard)

### 8.1 Key Performance Indicators

| Category | Metric | Definition | Target Benchmark |
| :--- | :--- | :--- | :--- |
| **Product** | **Task Completion Rate (TCR)** | % of users successfully filing tax return without customer support aid | ≥ 95% |
| | **Time-to-Value (TTV)** | Time elapsed from registration to first connected bank account or E-Faktura | < 4 minutes |
| | **AI CSAT** | User satisfaction rating on AI tax advice answers | ≥ 4.8 / 5.0 |
| **Engineering** | **System Availability** | Core platform uptime (API, tax engine, web application) | 99.95% |
| | **Tax Calculation Latency** | Response latency for deterministic tax liability engine | < 150 ms (p95) |
| | **OCR Extraction Accuracy** | Accuracy rate for field extraction from invoices/receipts | ≥ 98.0% |
| **Business** | **MRR / ARR Growth** | Monthly / Annual Recurring Revenue growth rate | ≥ 15% MoM |
| | **Freemium Conversion** | Conversion rate from Free Self-Employed to Paid YTT Plan | ≥ 6.5% |
| | **Customer Acquisition Cost** | Fully loaded cost per acquired paying customer | < $25 USD |
| **Customer Success** | **First Response Time (FRT)** | Customer support ticket response time | < 5 minutes |
| | **Net Promoter Score (NPS)** | User loyalty index across YTT and MCHJ categories | ≥ +65 |

---

## 9. Core Product Principles

### 9.1 Principle 1: Simple Over Complex
* **Rationale:** The majority of business owners in Uzbekistan are not trained accountants. Every interface screen must contain the bare minimum required information. Advanced accounting mechanics (debits, credits, trial balances) must be abstracted into plain intuitive language (Money In, Money Out, Tax Due).

### 9.2 Principle 2: AI-First, Deterministic Core
* **Rationale:** Artificial Intelligence serves as the primary conversational UI and document parser, but **never** performs raw financial calculations independently. Calculations are governed by a deterministic, unit-tested engine based strictly on official Tax Code formulas. AI provides context, explanation, and extraction; deterministic code calculates taxes.

### 9.3 Principle 3: Security & Compliance First
* **Rationale:** Financial and tax data is highly sensitive. Soliqly enforces end-to-end encryption for stored records, local data residency compliance with Uzbekistan Law No. ZRU-547 ("On Personal Data"), and secure cryptographic handling of E-IMZO keys.

### 9.4 Principle 4: Mobile-Friendly Web Architecture
* **Rationale:** Over 80% of digital interactions in Uzbekistan occur on mobile devices. The MVP web interface must be engineered using responsive, touch-first components optimized for mobile browsers before native mobile app releases.

### 9.5 Principle 5: Sub-Second Performance Matters
* **Rationale:** Sluggish interfaces erode user trust in financial applications. Soliqly prioritizes lightweight bundles, aggressive edge caching, and asynchronous background processing for third-party integrations (Soliq.uz / Banks).

### 9.6 Principle 6: Trust Before Features
* **Rationale:** A single incorrect tax calculation can ruin customer trust forever. We test every tax scenario against official Tax Committee test datasets before releasing new features. Transparency in how tax numbers are derived is paramount.

---

## 10. Value Proposition

### 10.1 Comparative Value Matrix

| Feature / Attribute | Soliqly | 1C:Enterprise | Soliq.uz (State App) | Traditional Outsourced Accountant |
| :--- | :--- | :--- | :--- | :--- |
| **User Experience** | Modern, intuitive web app; zero accounting training needed. | Extremely complex; requires specialized 1C training. | Clunky, administrative UX; fragmented functions. | Manual communication via Telegram / Phone calls. |
| **Tax Calculation** | Automated, continuous real-time calculation. | Manual input by professional accountant required. | Basic, retrospective calculation at period end. | Manual calculation performed monthly/quarterly. |
| **AI Guidance** | 24/7 localized Uzbek/Russian AI Tax Assistant. | None. | None. | Dependent on accountant availability during work hours. |
| **Integration** | E-Faktura, Banks, Soliq APIs unified in 1 click. | Custom integration setup required per instance. | Direct state data, but lacks multi-bank integrations. | Manual document collection from client. |
| **Cost Structure** | Transparent low monthly SaaS fee (~$5–$15/mo). | High upfront license + monthly consultant fee ($100+/mo). | Free (State portal). | $50–$300/month depending on transaction volume. |
| **Setup Time** | Under 3 minutes. | Days to weeks. | N/A (State portal login). | N/A. |

---

## 11. Target Users

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           TARGET USER TAX RECOVERY                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  [Self-Employed / Freelancer]  ──►  Fixed/Simplified Tax (0% - Low)         │
│  [YTT (Sole Proprietor)]      ──►  Fixed Tax OR Turnover Tax (4%)           │
│  [Micro MCHJ (LLC)]            ──►  Turnover Tax (4%) + INPS/Social Tax      │
│  [Outsourced Accountant]       ──►  Managing multiple YTT & MCHJ portfolios  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 11.1 User Group Definitions

#### Group A: Self-Employed Individuals (*O'zini o'zi band qilgan shaxslar*)
* **Profile:** Freelance developers, tutors, taxi drivers, translators, craftsmen.
* **Key Needs:** Instant official registration, automated social tax receipt generation, simple income tracking, payment link integration.
* **Pain Point:** Lack of clarity on annual turnover caps (100M UZS threshold) before transitioning to YTT.

#### Group B: Sole Proprietors (*Yakka Tartibdagi Tadbirkor - YTT*)
* **Profile:** Small retail shop owners, online merchants, service providers, wholesalers.
* **Key Needs:** Turnover tax (*Aylanmadan olinadigan soliq*) automated calculation, fixed tax tracking, E-Faktura signing, bank transaction matching.
* **Pain Point:** Fear of miscalculating revenue thresholds and incurring unexpected tax audits or bank freezes.

#### Group C: Micro-Business Owners (*MCHJ - Turnover Tax Regime*)
* **Profile:** IT agencies, small factories, consulting firms with revenue under 1 Billion UZS.
* **Key Needs:** Simple payroll management, social tax & INPS calculations, E-Faktura reconciliation, quarterly report submission.
* **Pain Point:** Paying high retainer fees for full-time accountants while transaction volumes remain low.

#### Group D: Independent Outsourced Bookkeepers
* **Profile:** Freelance accountants managing tax filings for 10 to 40 small business clients.
* **Key Needs:** Single-pane multi-tenant dashboard, batch document processing, automated client reminder workflows.
* **Pain Point:** Fragmented communication over Telegram and manual data entry across multiple Soliq.uz logins.

---

## 12. Product Philosophy

### 12.1 The Four Pillars of Soliqly Engineering

1. **Deterministic Core + Probabilistic Interface:**
   All financial formulas, tax tiers, interest rates, and compliance deadlines are hardcoded into an immutable, unit-tested engine. The AI layer acts strictly as an interface to interpret intent, parse documents, and render natural language explanations.

2. **Proactive Automation vs. Reactive Notification:**
   Soliqly does not simply notify users that tax is due. It continuously calculates accrued tax liabilities upon every incoming transaction, sets aside estimated tax reserves, and prepares filing forms automatically before the deadline arrives.

3. **Zero Accounting Jargon:**
   Words like "Accounts Receivable", "Accrual Accounting", or "Debit/Credit Balances" are translated into customer-centric terms: "Unpaid Invoices", "Money Coming In", and "Money Going Out".

4. **Complete Auditability & Explainability:**
   Every tax recommendation or auto-calculated number must feature an "Explain This Number" breakdown, showing the exact formula, source bank transaction, E-Faktura document, and relevant Uzbekistan Tax Code article.

---

## 13. Risk Management Matrix

### 13.1 Comprehensive Risk Assessment & Mitigation

| Risk ID | Risk Category | Description | Severity | Likelihood | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | **Regulatory / API** | Sudden changes to Soliq.uz API access policies or E-IMZO authentication protocols. | High | High | Maintain direct relationships with official EDO providers (Didox/Factura); implement modular API adapter architecture for quick protocol updates. |
| **R-02** | **AI Compliance** | AI Assistant hallucinating tax advice or citing outdated Uzbek Tax Code articles. | Critical | Medium | Enforce strict RAG architecture restricted strictly to verified legal databases; run deterministic validator checks on all numeric AI outputs; display clear legal disclaimers. |
| **R-03** | **Security / Privacy** | Compromise of user E-IMZO keys or sensitive business financial records. | Critical | Low | Never store private cryptographic E-IMZO keys on server infrastructure; perform client-side signing; encrypt all stored financial data with AES-256 GCM. |
| **R-04** | **Market Adoption** | Resistance from traditional business owners accustomed to cash transactions or informal accounting. | Medium | Medium | Offer a zero-cost free tier for self-employed individuals; focus marketing on digital-first entrepreneurs (E-commerce, IT, Services). |
| **R-05** | **Scalability** | Platform performance degradation during quarterly tax filing peak windows. | High | Medium | Implement cloud auto-scaling, serverless computation for tax calculations, and persistent queue workers (Redis/BullMQ) for report submissions. |

---

## 14. Strategic Advantages & Competitive Moat

### 14.1 Proprietary Uzbekistan Tax Domain Engine
Unlike generic international accounting tools (QuickBooks, Xero) that fail to comprehend Uzbekistan's unique Tax Code, E-IMZO signing mechanisms, and Soliq.uz workflows, Soliqly is purpose-built for the local legal environment.

### 14.2 Specialized Localized AI Corpus
Soliqly trains its RAG context on the complete, updated Tax Code of Uzbekistan, State Tax Committee regulations, and official explanatory letters in both Uzbek (*O'zbekcha*) and Russian (*Русский*). This localization creates a defensible technology moat.

### 14.3 Deep Integration Ecosystem
Soliqly builds direct API integrations across three core pillars:
1. **State Platforms:** Soliq.uz, Didox.uz, Factura.uz, my.soliq.uz.
2. **Banking Infrastructure:** Direct open banking feeds from major commercial banks (Kapitalbank, TBC Bank, Ipak Yuli Bank, Anorbank).
3. **E-Commerce & Payment Rails:** Automatic transaction ingestion from Humo, Uzcard, Click, Payme, and Uzum Market.

### 14.4 High Switching Costs via Financial History
As entities build months of categorized transactions, invoice histories, and compliance audit trails inside Soliqly, the switching cost increases, driving industry-leading customer retention.

---

## 15. Product Roadmap & Long-term Evolution

### 15.1 Multi-Year Strategic Milestones

```
Year 1 (MVP & Core Compliance)
├── Self-Employed & YTT Automated Registration
├── Turnover Tax Calculation Engine
├── E-Faktura (Didox/Factura.uz) Document Sync
├── Uzbek/Russian AI Tax Assistant (RAG Core)
└── Basic Bank Statement CSV/API Import

Year 3 (Ecosystem & Business Automation)
├── Multi-entity Management (MCHJ Full Support)
├── Automated Payroll, INPS & Social Tax Filing
├── Native Open Banking Real-time Sync
├── Mobile Native Apps (iOS / Android)
└── Automated Expense OCR Receipt Scanning

Year 5 (Financial Operating System)
├── B2B Embedded Payments & Escrow Services
├── AI-Driven Credit Scoring for Business Loans
├── Inventory & Sales Tax Integration
└── Central Asian Expansion (Kazakhstan & Kyrgyzstan Tax Adaptations)
```

#### 15.1.1 Year 1: MVP Core (Frictionless Tax & Document Management)
* Deliver simplified tax calculation for YTT and self-employed categories.
* Complete basic integration with E-Faktura operators and bank statement parsers.
* Launch the Uzbek/Russian AI Tax Assistant to resolve everyday compliance questions.

#### 15.1.2 Year 3: Scaling & Payroll Ecosystem
* Expand to full MCHJ turnover tax management including payroll, social tax, and pension fund (*INPS*) filings.
* Release native iOS and Android applications with offline receipt scanning capabilities.
* Launch full Open Banking integration across top 10 commercial banks in Uzbekistan.

#### 15.1.3 Year 5: Financial Operating System & Capital Access
* Transition into a complete B2B financial hub offering embedded credit scoring based on verified tax data, allowing partner banks to issue instantaneous business loans.
* Expand the platform architecture to support neighboring Central Asian markets experiencing tax digitalization (Kazakhstan, Kyrgyzstan).

---

## 16. Architectural & Technical Guidance (For Engineering Team)

### 16.1 Technology Stack Guidelines (MVP Phase)

* **Frontend:** Modern Single Page Application (Web MVP) built with lightweight UI architecture, adhering strictly to responsive, mobile-first UX patterns.
* **Backend Core:** High-performance RESTful / gRPC API service managing authentication, deterministic tax calculations, and database persistence.
* **AI Architecture:** Multi-stage RAG pipeline utilizing vector embeddings over official Uzbekistan tax documentation, with strict guardrail middleware to validate all numerical outputs.
* **Security & Cryptography:** Client-side E-IMZO integration module ensuring private keys never touch Soliqly servers. All database storage encrypted using AES-256 GCM.

---

**End of Document.**

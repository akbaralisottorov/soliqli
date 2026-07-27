# ADR-0003: Next.js 15 App Router Frontend Web Architecture

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Principal Frontend Architect, Principal UX Designer  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [UX_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/06-design/UX_BLUEPRINT.md), [DESIGN_SYSTEM.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/06-design/DESIGN_SYSTEM.md)  

---

## 1. Context & Problem Statement
Soliqly requires a high-performance, SEO-optimized, mobile-responsive web application supporting instant dashboard load times, smooth transitions, and real-time Server-Sent Events (SSE) AI streaming.

## 2. Decision
We select **Next.js 15 (React 19, App Router)** paired with **Tailwind CSS v4** and **shadcn/ui** primitives.
* Leverage React Server Components (`RSC`) by default for static UI rendering and SEO performance.
* Use Client Components (`'use client'`) strictly for interactive forms, TanStack Query data fetching, and streaming state.

## 3. Consequences & Trade-offs
* **Positive Impact:** Sub-second initial page loads; native SSE token streaming support; standardized UI components.
* **Negative Impact:** Learning curve around Server vs. Client Component boundaries.

---

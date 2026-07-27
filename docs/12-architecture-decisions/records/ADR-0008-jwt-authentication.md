# ADR-0008: OAuth2 Bearer JWT & Refresh Cookie Authentication Strategy

* **Status:** Accepted  
* **Date:** 2026-07-27  
* **Authors:** Principal Security Architect, Principal API Architect  
* **Reviewers:** Architecture Governance Board  
* **Related Documents:** [SECURITY_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/07-security/SECURITY_ARCHITECTURE.md), [API_SPECIFICATION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/04-api/API_SPECIFICATION.md)  

---

## 1. Context & Problem Statement
Soliqly requires a stateless, secure authentication system supporting web applications, mobile devices, and multi-tenant organization context switching across independent bookkeepers.

## 2. Decision
We select **OAuth2 Bearer JWT Access Tokens with HTTP-Only Refresh Cookies**:
* Access Tokens: Short TTL (15 minutes), passed via `Authorization: Bearer <token>` header.
* Refresh Tokens: Long TTL (7 days), stored in secure `HttpOnly`, `SameSite=Strict`, `Secure` cookies.
* Passwords hashed using **Argon2id** with unique 128-bit salt per user.

## 3. Consequences & Trade-offs
* **Positive Impact:** XSS protection via HTTP-Only refresh cookies; stateless API scalability; rapid token expiration limits breach impact.
* **Negative Impact:** Requires client-side token refresh interceptor in TanStack Query / Axios.

---

# Soliqly — Enterprise DevOps, Infrastructure & Deployment Blueprint

**Version:** 1.0.0  
**Status:** Approved  
**Author:** Founding Product & Engineering Team (DevOps, SRE & Cloud Infrastructure Division)  
**Created Date:** July 27, 2026  
**Last Updated:** July 27, 2026  
**Related Documents:** [PROJECT_DISCOVERY.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/00-project-management/PROJECT_DISCOVERY.md), [PRD.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/01-product/PRD.md), [SOFTWARE_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/02-architecture/SOFTWARE_ARCHITECTURE.md), [DATABASE_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/03-database/DATABASE_BLUEPRINT.md), [API_SPECIFICATION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/04-api/API_SPECIFICATION.md), [AI_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/05-ai/AI_ARCHITECTURE.md), [SECURITY_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/07-security/SECURITY_ARCHITECTURE.md), [ENGINEERING_CONSTITUTION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/ENGINEERING_CONSTITUTION.md)  
**Dependencies:** All Baseline Phase 0 Architecture, Database, API, and Security Specifications  

---

## 1. Executive Summary

### 1.1 Purpose of DevOps Architecture
This Enterprise DevOps, Infrastructure & Deployment Blueprint specifies the cloud topology, containerization strategy, CI/CD automation pipelines, observability frameworks, disaster recovery SLAs, cost optimization controls, and DevSecOps security scanning for **Soliqly**.

The platform adheres to **Container-First** and **Infrastructure as Code (IaC)** principles. It provides high availability (99.9% SLA), automated zero-downtime Blue-Green deployments, and complete data residency compliance for multi-tenant users in the Republic of Uzbekistan.

---

## 2. Core DevOps & SRE Principles

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          CORE DEVOPS DESIGN PRINCIPLES                      │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ Principle       │ Architectural Specification & Enforcement                 │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ 1. Container    │ All applications packaged as OCI-compliant Docker containers│
│    First        │ ensuring identical behavior across Local, Dev, and Prod.  │
│ 2. IaC          │ Infrastructure declaratively specified via Docker Compose │
│                 │ and Terraform configuration scripts (`infrastructure/`).   │
│ 3. Automated    │ Zero manual production SSH deployments. 100% automated via│
│    CI/CD        │ GitHub Actions pipelines with automated rollback gates.   │
│ 4. Observability │ Structured JSON logging, Prometheus metrics, and OpenTelemetry│
│    by Default   │ distributed tracing enabled across all micro-components.  │
│ 5. Immutable    │ Container images tagged with immutable Git commit SHAs;   │
│    Deployments  │ running containers are never modified in place.           │
└─────────────────┴───────────────────────────────────────────────────────────┘
```

---

## 3. Environment Strategy & Matrix

| Environment Name | Target Domain | Host Infrastructure | Database & Storage | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Local Dev** | `localhost:3000` | Docker Compose (Local Machine) | Local PostgreSQL 16 + Redis + MinIO | Developer iteration & offline unit testing. |
| **Testing / CI** | Ephemeral Runners| GitHub Actions Container Runners | Service Container Postgres + Redis | Automated linting, SAST, & integration tests.|
| **Staging** | `staging.soliqly.uz`| Isolated Cloud VPC Containers | Dedicated Managed Postgres Instance | Production replica for pre-release validation. |
| **Production** | `soliqly.uz` | Auto-Scaling Container Cluster | High-Availability Postgres + Cloudflare R2 | Live customer production traffic. |

---

## 4. Local Development Environment (`Docker Compose`)

The entire local development stack is orchestrated via a single command (`docker compose up`) inside `infrastructure/docker/docker-compose.yml`:

```yaml
# Infrastructure Local Topology Blueprint
services:
  web:
    build: { context: ../.., dockerfile: apps/web/Dockerfile }
    ports: ["3000:3000"]
    environment: [NEXT_PUBLIC_API_URL=http://localhost:8000]

  api:
    build: { context: ../.., dockerfile: apps/api/Dockerfile }
    ports: ["8000:8000"]
    environment: [DATABASE_URL=postgresql+asyncpg://soliqly:soliqly@postgres:5432/soliqly_dev]
    depends_on: [postgres, redis]

  celery_worker:
    build: { context: ../.., dockerfile: apps/api/Dockerfile }
    command: celery -A app.worker worker --loglevel=info
    depends_on: [postgres, redis]

  postgres:
    image: pgvector/pgvector:pg16
    ports: ["5432:5432"]
    environment: [POSTGRES_DB=soliqly_dev, POSTGRES_USER=soliqly, POSTGRES_PASSWORD=soliqly]

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  minio:
    image: minio/minio:latest
    ports: ["9000:9000", "9001:9001"]
    command: server /data --console-address ":9001"
```

---

## 5. Production Cloud Infrastructure Topology

```mermaid
graph TD
    UserTraffic[User Web / Mobile Traffic] --> WAF[Cloudflare CDN / WAF / Edge SSL 1.3]
    
    WAF --> LoadBalancer[Nginx Reverse Proxy / Load Balancer]
    
    subgraph Container Execution Cluster
        LoadBalancer --> WebSPA[Next.js 15 Web SPA Containers]
        LoadBalancer --> CoreAPI[FastAPI Backend Core Containers]
        CoreAPI --> CeleryWorkers[Background Celery Workers]
    end

    subgraph Data & Persistence Services
        CoreAPI --> PrimaryDB[(Managed PostgreSQL 16 + pgvector Primary)]
        PrimaryDB --> ReadReplica[(PostgreSQL Read Replica)]
        CoreAPI --> RedisCluster[(Redis 7.x Cache & Queue Broker)]
        CeleryWorkers --> CloudflareR2[(Cloudflare R2 Object Storage)]
    end

    subgraph Monitoring & Security Infrastructure
        CoreAPI --> OpenTelemetry[OpenTelemetry Collector]
        OpenTelemetry --> Prometheus[Prometheus Metrics Engine]
        Prometheus --> Grafana[Grafana Monitoring Dashboards]
    end
```

---

## 6. Container Architecture & Docker Standards

* **Multi-Stage Builds:** Dockerfiles use multi-stage builds (`builder` ➔ `runner`) reducing final production container image sizes to < 180MB for Next.js and < 220MB for FastAPI.
* **Base Images:** Official minimal Linux images (`node:20-alpine`, `python:3.13-slim`).
* **Non-Root Execution:** All containers execute as dedicated non-root application users (`USER node` / `USER appuser`) to prevent container breakout vulnerabilities.
* **Image Tagging:** Tagged with immutable Git commit SHAs (`ghcr.io/soliqli/api:a8f912c`) and semantic release tags (`ghcr.io/soliqli/api:v1.0.0`).

---

## 7. CI/CD Automation Pipeline (GitHub Actions)

```mermaid
sequenceDiagram
    autonumber
    actor Developer as Software Engineer
    participant GitHub as GitHub Actions CI
    participant Registry as Container Registry (GHCR)
    participant Staging as Staging Cluster
    participant Prod as Production Cluster

    Developer->>GitHub: Push commit to `main` branch
    GitHub->>GitHub: Run Stage 1: Lint, Format & Type Check
    GitHub->>GitHub: Run Stage 2: Unit & Integration Tests
    GitHub->>GitHub: Run Stage 3: DevSecOps Scan (Trivy + Gitleaks)
    GitHub->>Registry: Run Stage 4: Build & Push Docker Image (`git-sha`)
    GitHub->>Staging: Run Stage 5: Deploy to Staging & Run Alembic Migrations
    GitHub->>Staging: Run Stage 6: Automated E2E Smoke Tests
    GitHub->>Prod: Run Stage 7: Blue-Green Production Deployment
    Prod-->>GitHub: Health Check Passed (200 OK)
    GitHub-->>Developer: Send Deployment Success Notification (Telegram)
```

---

## 8. Deployment Strategy & Blue-Green Releases

```mermaid
graph LR
    Router[Nginx Router / Traffic Switch]
    
    subgraph Blue-Green Production Cluster
        Router -->|100% Active Live Traffic| BlueSet[Blue Environment (v1.0.0 Active)]
        Router -.->|0% Standby Testing Traffic| GreenSet[Green Environment (v1.1.0 New Deploy)]
    end

    GreenSet --> HealthCheck{Health Check 200 OK?}
    HealthCheck -- Yes --> Switch[Switch Nginx Router to 100% Green Set]
    HealthCheck -- No --> Abort[Abort Deployment & Keep Blue Set Active]
```

1. **Zero-Downtime Deployment:** The new release (Green) is deployed alongside the active environment (Blue).
2. **Health Verification:** Automated HTTP probe queries `/health/readiness` on the Green environment.
3. **Traffic Switch:** Nginx instantly updates upstream target weights to route 100% of live user traffic to Green.
4. **Automated Rollback:** If Green emits 5xx errors within 2 minutes of switch, traffic automatically reverts to Blue.

---

## 9. Observability & Telemetry Architecture

```mermaid
graph TD
    AppLogs[Structured JSON App Logs] --> Promtail[Promtail Log Collector]
    AppMetrics[Prometheus API Metrics] --> Prometheus[Prometheus Time Series Engine]
    AppTraces[OpenTelemetry Traces] --> Jaeger[Jaeger / Tempo Tracing Engine]

    Promtail --> Grafana[Grafana Central Monitoring Dashboard]
    Prometheus --> Grafana
    Jaeger --> Grafana

    Prometheus --> Alertmanager[Alertmanager Notification Engine]
    Alertmanager --> Telegram[Telegram SRE On-Call Channel]
```

### 9.1 Key Operational Monitoring Metrics
* **API Error Rate:** Alert triggered if 5xx error rate exceeds **0.5%** over a 5-minute window.
* **API Latency (p95):** Alert triggered if REST API response latency exceeds **500 ms**.
* **AI Stream Latency:** Alert triggered if first-token streaming latency exceeds **2.5 seconds**.
* **Database Pool Exhaustion:** Alert triggered if PostgreSQL active connection pool reaches **85%** capacity.

---

## 10. Disaster Recovery & Backup Strategy (RTO / RPO)

| Metric / Procedure | Target SLA | Implementation Strategy |
| :--- | :--- | :--- |
| **Recovery Time Objective (RTO)**| **< 30 Minutes** | Time required to restore database and switch DNS to secondary region. |
| **Recovery Point Objective (RPO)**| **< 5 Minutes** | Continuous PostgreSQL Write-Ahead Log (WAL) shipping to Cloudflare R2. |
| **Daily Full Backups** | **24-Hour Schedule**| Automated daily physical PG dump encrypted with AES-256 and stored in R2. |
| **Point-in-Time Recovery (PITR)**| **30-Day Window** | Enables millisecond-level database state restoration to any past point. |

---

## 11. Cost Optimization & Budgeting Strategy

1. **Zero Egress Object Storage:** Utilizing Cloudflare R2 for storing generated PDF tax reports eliminates 100% of bandwidth egress costs.
2. **Unified Database Footprint:** Consolidating relational data and vector RAG embeddings inside single PostgreSQL instances via `pgvector` saves $150+/mo versus dedicated vector SaaS.
3. **Redis Memory Caching:** Caching static tax rate tables and legal code vector search results reduces expensive LLM API token consumption by up to 45%.
4. **Auto-Scaling Boundaries:** Containers configured with explicit CPU/Memory request and limit caps (`cpu: 500m`, `memory: 512Mi`) to prevent runaway cloud bills.

---

## 12. DevSecOps & Supply Chain Security

* **Container Image Scanning:** **Trivy** scans container images for OS/package vulnerabilities during CI/CD execution; builds fail on `HIGH` or `CRITICAL` CVE findings.
* **Secret Scanning:** **Gitleaks** scans git commits to prevent hardcoded passwords or API secret keys from reaching remote repositories.
* **Dependency Scanning:** Automated Dependabot scans for Python PyPI and Node.js npm package vulnerability patches.

---

## 13. Cross References

* [PROJECT_DISCOVERY.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/00-project-management/PROJECT_DISCOVERY.md) — Baseline Product Discovery Document
* [PRD.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/01-product/PRD.md) — Product Requirements Document
* [SOFTWARE_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/02-architecture/SOFTWARE_ARCHITECTURE.md) — Software Architecture Blueprint
* [DATABASE_BLUEPRINT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/03-database/DATABASE_BLUEPRINT.md) — Enterprise Database Blueprint
* [API_SPECIFICATION.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/04-api/API_SPECIFICATION.md) — Enterprise API Specification
* [SECURITY_ARCHITECTURE.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/07-security/SECURITY_ARCHITECTURE.md) — Enterprise Security Blueprint

---

**End of Document.**

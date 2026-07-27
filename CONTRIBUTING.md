# Contributing to Soliqly

Thank you for your interest in contributing to Soliqly!

## 1. Engineering Standards & AI Agent Contract
Before submitting code or pull requests, you MUST read and follow:
1. [ENGINEERING_PLAYBOOK.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/10-engineering/ENGINEERING_PLAYBOOK.md)
2. [AI_AGENT_DEVELOPMENT_CONTRACT.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/10-engineering/AI_AGENT_DEVELOPMENT_CONTRACT.md)
3. [ADR_INDEX.md](file:///c:/Users/LENOVO/soliqli/soliqli-1/docs/12-architecture-decisions/ADR_INDEX.md)

## 2. Git Branch & Commit Conventions
* Branch Taxonomy: `feature/<domain>-<short-name>`, `fix/<issue>-<short-name>`.
* Conventional Commits Syntax: `type(scope): description`.

## 3. Pull Request Process
1. Verify that all Pytest and Vitest suites pass locally with ≥ 85% code coverage.
2. Run `pnpm run lint` and ensure 0 lint or TypeScript errors exist.
3. Reference the relevant Task ID or Epic ID in the PR description template.

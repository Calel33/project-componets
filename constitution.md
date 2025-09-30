<!-- Sync Impact Report
Version change: N/A → v1.0.0
Modified principles: None (initial ratification)
Added sections: Metadata; Mission; Guiding Principles; Operating Practices; Governance
Removed sections: None
Templates requiring updates:
- ⚠ `.specify/templates/plan-template.md` (template directory not present; establish once available)
- ⚠ `.specify/templates/spec-template.md` (template directory not present; establish once available)
- ⚠ `.specify/templates/tasks-template.md` (template directory not present; establish once available)
- ⚠ `.specify/templates/commands/constitution.md` (replaced by this constitution; ensure command guidance syncs when templates exist)
Follow-up TODOs: None
-->

# Project Constitution

## Metadata

- **Project Name**: Elite Next.js Business Directory Platform
- **Constitution Version**: v1.0.0
- **Ratification Date**: 2025-09-29
- **Last Amended Date**: 2025-09-29

## Mission

Deliver a best-in-class business listing and discovery platform that pairs real-time data with
role-aware user experiences, ensuring every release maintains reliability, accessibility, and
design-system fidelity across the full stack.

## Guiding Principles

### Principle 1 — Vertical Slice Ownership

- **Rules**
  - Every feature MUST be implemented as a vertical slice spanning UI, server logic, data,
    and tests.
  - Ownership boundaries MUST be explicit; shared modules require documented contracts in
    `docs/`.
- **Rationale**: Preserves modularity, enables parallel work, and guarantees feature-complete
  deliverables without hidden dependencies.

### Principle 2 — Type-Safe Automation

- **Rules**
  - All code MUST compile without `any` types; CI must fail on type regressions.
  - Convex arguments and responses MUST use validated schemas; UI data bindings MUST follow
    generated typings.
- **Rationale**: Strong typing prevents runtime defects and supports predictable automation
  across the Next.js and Convex boundary.

### Principle 3 — Design System Fidelity

- **Rules**
  - UI components MUST use the shared design tokens from the design system; hard-coded colors
    or spacing values are prohibited.
  - Variants and states MUST be expressed via design-system primitives (e.g., shadcn/ui) to
    ensure theme parity.
- **Rationale**: Upholds brand consistency, accelerates UI iteration, and keeps accessibility
  guarantees intact.

### Principle 4 — Observability-Driven Delivery

- **Rules**
  - Each feature MUST define success metrics (logs, analytics, or counters) during development.
  - Alerting, logging, and analytics MUST be verified in staging before promotion to production.
- **Rationale**: Real-time data products demand traceability; instrumentation enables fast
  diagnosis and continuous improvement.

### Principle 5 — Governance Transparency

- **Rules**
  - Decision records MUST be captured in `docs/SESSION_LOG.md` or equivalent.
  - Architectural deviations MUST be documented and approved before implementation.
- **Rationale**: Keeps the distributed team aligned and preserves institutional knowledge for
  future audits.

## Operating Practices

- **Delivery Cadence**: Iterations target fully testable slices; incomplete slices must not be
  merged.
- **Testing Discipline**: Each slice includes automated coverage (unit, integration, or E2E)
  proportional to its risk profile.
- **Access Control**: Clerk-based roles MUST gate dashboards and admin features; public
  directory routes remain read-only for anonymous users.
- **Data Integrity**: Mapbox integrations and Convex queries MUST align with indexed access
  patterns, avoiding client-side filtering on large datasets.
- **Documentation**: Feature specs and onboarding guides MUST live beside the code they
  describe within the vertical slice.

## Governance

- **Amendment Process**: Proposals require a written rationale, impact analysis, and approval by
  the project maintainers. Ratified amendments update `constitution.md` alongside any dependent
  templates.
- **Versioning Policy**: Governance changes follow semantic versioning:
  - MAJOR for breaking principle removals or rewrites.
  - MINOR for new principles or material expansions.
  - PATCH for clarifications or editorial updates.
- **Review Cycle**: Maintain a quarterly compliance review to confirm adherence to all
  principles and operating practices. Findings MUST be logged and actioned within the next
  sprint.
- **Enforcement**: Pull requests referencing constitutional breaches MUST document remediation
  before merge. Persistent violations trigger maintainers to schedule corrective work.

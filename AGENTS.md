# AGENTS.md · Project Operations Guide

## 1. Project Snapshot

- **Purpose**: Curated component and landing-page library delivering production-ready React/Tailwind slices for payments, medical, portfolio, storytelling, childcare, and more.
- **Tech Stack**: React 19 with Vite, TypeScript 5, Tailwind CSS 3, Chart.js, Lucide icons.
- **Design System**: Central design tokens (colors, typography, spacing, radius, shadows) stored under `design -system/`; no hard-coded styles permitted.
- **Governance**: Follow `constitution.md` v1.0.0 for principles (vertical slice ownership, type safety, design fidelity, observability, transparency).

## 2. Workspace Map

- **`src/`**: App-level demos and feature compositions (e.g., `BubbleDemo.tsx`, `AlimonyCalculatorLanding.tsx`).
- **`ui/`**: Reusable component library organized by domain with centralized types (`ui/components/types/`) and shared hooks (`ui/hooks/`).
- **`hooks/`**: App-specific utilities (e.g., `useChartSetup.ts`).
- **`test/`**: Reference implementations and HTML prototypes for rapid visual QA.
- **Documentation**: `constitution.md`, `agentshow.md`, integration summaries (`*_INTEGRATION_COMPLETE.md`).

## 3. Setup & Commands

- **Install**: `npm install`
- **Local Dev**: `npm run dev` (Vite)
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Type Safety**: `tsc --noEmit` (runs during build); do not ignore type errors.

## 4. Delivery Workflow (aligns with constitution)

- **Vertical Slice**: Each feature spans UI components, demo usage, docs, and tests before merge.
- **Observability**: Define metrics or logging strategies for interactive demos; note assumptions in integration summaries.
- **Transparency**: Record architectural decisions in `docs/SESSION_LOG.md` (or create if missing) and link from PR descriptions.
- **Review cadence**: Perform quarterly audits against principles; log gaps and remediation plans.

## 5. Code Standards

- **Type Discipline**: No `any`; prefer explicit interfaces exported from `ui/components/types/`.
- **File Scope**: One responsibility per file, <500 lines. Co-locate story/demo code but keep domain logic modular.
- **Imports**: Use relative paths within domains; `@/ui` barrel exports for app compositions. Avoid circular dependencies.
- **Naming**: Components in PascalCase (`PaymentCompletion`), hooks in camelCase (`useCardFormatter`), constants SCREAMING_SNAKE_CASE.
- **Performance**: Default to readable solutions; rely on React compiler optimizations. Only memoize when profiling reveals issues.

## 6. UI & Design System

- **Tokens Only**: Colors, spacing, typography, radii, and shadows MUST come from design tokens. Update tokens rather than inlining values.
- **Variants**: Express states via shadcn/ui patterns or tailwind token utilities; document available variants in domain READMEs.
- **Accessibility**: Meet WCAG 2.1 AA—use semantic HTML, ARIA labels where required, focus-visible states, sufficient contrast.
- **Responsive**: Validate layouts across breakpoints; demos should include mobile previews or notes.

## 7. Testing & Validation

- **Component Tests**: Prefer React Testing Library for logic-heavy components; snapshot or visual regression via Storybook integration (planned) is acceptable for purely presentational pieces.
- **Demo QA**: Keep `test/` prototypes updated; they serve as manual smoke tests for animations, forms, and shader effects.
- **Instrumentation**: Demos with analytics hooks must expose events and document payload shapes.

## 8. Documentation & Knowledge Capture

- **Vertical Slice Docs**: Each domain maintains `README.md`, usage examples, and integration summaries (see `ui/components/payment/`).
- **Session Logging**: Update `docs/SESSION_LOG.md` (create if absent) when major changes, decisions, or migrations land.
- **Change Impact**: For constitution-aligned changes, prepend Sync Impact notes similar to `constitution.md` convention.

## 9. Security & Data Handling

- **Secrets**: Never commit API keys or Mapbox tokens. Reference environment variables and document required values in relevant READMEs.
- **Forms**: Sanitize and validate inputs in demo handlers; credit-card flows rely on masking utilities from `ui/hooks`.
- **Dependencies**: Update via `npm outdated` review; pin critical patches that affect security or accessibility.

## 10. Contribution Checklist

- **Code Ready**
  - Types exported and consumed without `any`.
  - Design tokens applied; no hard-coded styles.
  - Files <500 lines, single responsibility.
- **Docs & Observability**
  - Domain README / integration summary updated.
  - Session log entry added when decisions or deviations occur.
  - Metrics/logging strategy documented for interactive flows.
- **Quality Gates**
  - Build succeeds (`npm run build`).
  - Manual QA via `test/` demos for new visuals.
  - Accessibility checks completed (focus traps, keyboard navigation, contrast).

## 11. Reference Materials

- **Project Constitution**: `constitution.md` (governance, principles, amendment policy).
- **Design Tokens**: `design -system/design.md`.
- **Component Library Guide**: `ui/README.md`.
- **Workflow Prompts**: `.windsurf/commands/*.md` for integration templates and automation prompts.

Keep this guide current. Amend alongside constitution updates and document sync impacts in commit messages (e.g., `docs: refresh agent guide for new payment slice`).
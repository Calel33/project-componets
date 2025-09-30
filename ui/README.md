# UI Component Library

Reusable UI components organized by business domain with centralized type definitions.

## Structure

```
ui/
├── components/
│   ├── types/                    # Centralized type registry
│   │   ├── childcare.types.ts
│   │   ├── feature-grid.types.ts
│   │   ├── footer.types.ts
│   │   ├── medical.types.ts
│   │   ├── nova.types.ts
│   │   ├── payment.types.ts
│   │   ├── portfolio.types.ts
│   │   ├── storytelling.types.ts
│   │   ├── web3.types.ts
│   │   └── webgl.types.ts
│   │
│   ├── [domain]/                 # Domain-specific components
│   │   ├── Component1.tsx
│   │   ├── Component2.tsx
│   │   ├── types.ts             # Re-exports from ../types/[domain].types.ts
│   │   ├── index.ts             # Public API
│   │   └── README.md            # Domain documentation
│   │
└── hooks/                        # Shared custom hooks
    ├── useCardFormatter.ts
    ├── useCardValidation.ts
    ├── useChartSetup.ts
    ├── useScrollToTop.ts
    └── useWebGLShader.ts
```

## Available Component Domains

- **childcare** - Childcare landing page components (Bubble)
- **feature-grid** - Responsive feature grid sections
- **footer** - Dark footer with contact form and newsletter subscription
- **medical** - Medical landing page with bento grid
- **nova** - AI/SaaS landing page components
- **payment** - Payment components including:
  - PaymentDashboard - Payment form with order summary
  - PaymentCompletion - Animated 3D card preview with mesh gradients
  - Card validation, auto-formatting, and type detection
  - Glass-effect inputs and animated gradient buttons
- **portfolio** - Portfolio showcase components
- **storytelling** - Multi-chapter scroll story UI
- **web3** - Web3/crypto landing components
- **webgl** - WebGL shader background components

## Type System

### Centralized Type Registry

All TypeScript type definitions are centralized in `ui/components/types/` for:
- **Single source of truth** - All types in one location
- **Prevent duplication** - Avoid accidental type conflicts
- **Easy discovery** - Browse all available types
- **Type documentation** - Generate comprehensive type docs

### Usage Pattern

**Define types centrally:**
```typescript
// ui/components/types/[domain].types.ts
export interface ComponentProps {
  title: string;
  description: string;
}
```

**Re-export in domain folder:**
```typescript
// ui/components/[domain]/types.ts
export * from '../types/[domain].types';
```

**Import in components:**
```typescript
// ui/components/[domain]/Component.tsx
import { ComponentProps } from './types';

export const Component = ({ title, description }: ComponentProps) => {
  // ...
};
```

## UI Library vs Application Components

### `ui/` - Reusable Component Library
- **Purpose**: Domain-agnostic, reusable UI components
- **Characteristics**:
  - Generic and configurable via props
  - No business logic or API calls
  - Fully documented with examples
  - Design system compliant
  - Type-safe with centralized types
- **Examples**: `FeatureGrid`, `GlassCard`, `BentoGrid`

### `src/` - Application-Specific Code
- **Purpose**: App-specific implementations and pages
- **Characteristics**:
  - Business logic and state management
  - API integrations
  - Route definitions
  - App-specific compositions of UI components
- **Examples**: Landing pages, dashboards, app layouts

### When to Use Which
- **Use `ui/`** when building reusable, generic components
- **Use `src/`** when building app-specific features
- **Import from `ui/`** in `src/` to compose app pages

## Import Patterns

### From within UI library
```typescript
// Import from same domain
import { ComponentProps } from './types';
import { OtherComponent } from './OtherComponent';

// Import from different domain
import { FeatureGridProps } from '../feature-grid/types';

// Import shared hooks
import { useChartSetup } from '../../hooks/useChartSetup';
```

### From application code (src/)
```typescript
// Recommended - Import directly from domain (clearest)
import { FeatureGrid } from '@/ui/components/feature-grid';
import { FeatureGridProps } from '@/ui/components/feature-grid/types';

// Alternative - Namespaced imports from barrel
import * as Nova from '@/ui';
// Usage: <Nova.HeroSection />

// Or specific namespace
import { Nova, WebGL } from '@/ui';
// Usage: <Nova.HeroSection />, <WebGL.ShaderBackground />

// Import shared hooks
import { useCardFormatter, useCardValidation, useChartSetup, useScrollToTop, useWebGLShader } from '@/ui';
```

**Note**: Due to naming conflicts across domains (e.g., multiple `FeatureCardProps`), direct domain imports are recommended over flat barrel imports.

## Component Guidelines

### File Structure
- **Max 500 lines per file** - Keep components focused
- **One component per file** - Clear responsibility
- **Co-locate related code** - Styles, tests, logic together

### Naming Conventions
- **Domain-prefixed** - For domain-specific components (e.g., `BubbleHeader`, `NovaLanding`)
- **Generic names** - For truly reusable components (e.g., `FeatureGrid`, `GlassCard`)

### Documentation
Each domain should include:
- `README.md` - Component overview and usage
- `INSTALLATION.md` - Setup instructions
- `USAGE_EXAMPLE.tsx` - Working examples
- `INTEGRATION_SUMMARY.md` - Integration guide

## Design System

All components use the project design system tokens:
- **Colors** - Defined in design system
- **Typography** - Consistent font scales
- **Spacing** - Standard spacing units
- **Radius** - Border radius tokens
- **Shadows** - Elevation system

**No hard-coded styles allowed** - Always use design system tokens.

## Adding New Components

1. **Create domain folder** (if new domain)
   ```
   ui/components/[domain]/
   ```

2. **Define types centrally**
   ```typescript
   // ui/components/types/[domain].types.ts
   export interface NewComponentProps { ... }
   ```

3. **Create re-export file**
   ```typescript
   // ui/components/[domain]/types.ts
   export * from '../types/[domain].types';
   ```

4. **Build component**
   ```typescript
   // ui/components/[domain]/NewComponent.tsx
   import { NewComponentProps } from './types';
   ```

5. **Export from index**
   ```typescript
   // ui/components/[domain]/index.ts
   export { NewComponent } from './NewComponent';
   export type { NewComponentProps } from './types';
   ```

6. **Document**
   - Add to domain README
   - Create usage examples
   - Update integration guide

## Best Practices

### Composition Over Inheritance
```typescript
// ✅ Good - Composable
<GlassCard>
  <FeatureCard {...props} />
</GlassCard>

// ❌ Avoid - Inheritance
class FeatureCard extends GlassCard { }
```

### Reusable Utilities
Check existing utilities before creating new ones:
- `ui/hooks/` - Custom React hooks
- Look in other domains for shared patterns

### Type Safety
```typescript
// ✅ Good - Explicit types
export const Component = ({ title }: ComponentProps) => { ... }

// ❌ Avoid - Implicit any
export const Component = ({ title }) => { ... }
```

### Performance
- Use React 19 compiler for optimization
- Avoid premature optimization
- Focus on clean, readable code

## Maintenance

### When to Refactor
- File exceeds 500 lines
- Duplicate logic across domains
- Component has multiple responsibilities

### Integration Checklist
Before marking work complete:
- [ ] All dependent systems updated
- [ ] Types defined and exported
- [ ] Documentation updated
- [ ] Examples provided
- [ ] Design system tokens used
- [ ] No hard-coded styles

## Component Quick Reference

### Payment Components

The payment domain includes two main component systems:

#### PaymentDashboard
Two-column payment interface with order summary (light theme).
```tsx
import { PaymentDashboard } from '@/ui/components/payment';

<PaymentDashboard
  title="Complete Payment"
  subtitle="Enter card details"
  orderSummary={{ items, subtotal, tax, total }}
  onPaymentSubmit={handlePayment}
/>
```

#### PaymentCompletion
Animated 3D card preview with mesh gradient background (dark theme).
```tsx
import { PaymentCompletion } from '@/ui/components/payment';

<PaymentCompletion
  amount={149.99}
  currency="USD"
  onSubmit={handlePayment}
  cardPreviewEnabled={true}
/>
```

**Features:**
- ✅ Animated 3D card with live updates
- ✅ 4 mesh gradient blob animations
- ✅ Auto-formatting (card number, expiry, CVC)
- ✅ Card type detection (Visa, Mastercard, Amex, Discover)
- ✅ Luhn algorithm validation
- ✅ Glass-effect inputs
- ✅ Animated gradient button
- ✅ Country selector with flags
- ✅ Responsive design
- ✅ WCAG 2.1 AA accessible

**Documentation:** See `ui/components/payment/PAYMENT_COMPLETION_USAGE.md` for complete guide.

## Related Documentation

- [Design System](../design-system/design.md)
- [Workflow Guidelines](../.moat/drawbridge-workflow.mdc)
- [Component Integration Template](../.windsurf/commands/UI-Integration-Template.md)
- [Payment Completion Usage Guide](./components/payment/PAYMENT_COMPLETION_USAGE.md)

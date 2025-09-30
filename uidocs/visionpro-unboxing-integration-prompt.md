# 🎯 **VisionPro 4K Unboxing Layout UI Integration Prompt**

I want to integrate the VisionPro 4K Unboxing Experience UI design into our React Component Library project. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 with design tokens from `design -system/`
- Backend: Static demo (no backend integration required)
- Language: TypeScript 5
- Target location: `ui/components/unboxing/` (new domain)
- Existing functionality: Reusable component library with centralized types, design token system, responsive layouts

**UI TO INTEGRATE:**

Source file: `ideas/4K Video Unboxing Layout.html`

## UI Description:

A premium product unboxing experience layout featuring:

### Layout Structure:
- **3-column grid layout** (responsive: stacks on mobile)
  - Column 1: Camera feature with background image
  - Column 2: USB-C cable feature with background image
  - Column 3: Main content area with yellow brand background
- **Bottom section**: Premium wrist strap description with shipping/warranty info
- **Floating CTA button**: "Get Started" with arrow icon (bottom-right)

### Key Visual Elements:
1. **Feature columns** with uppercase headings and descriptive text over product images
2. **Brand header** with logo icon and utility icons (share, shield, wifi)
3. **Hero text** with gradient typography treatment
4. **Software suite card** with badge indicator and icon
5. **Decorative background orbs** (white/black circles)
6. **Icons** using Lucide React library

### Design Features:
- Brand colors: Yellow (#FFE000), Orange (#FF6B35)
- Clean typography with Inter font family
- Glassmorphism/hover effects on icon buttons
- Responsive grid system
- Shadow and depth effects
- Badge notifications

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain design token system compliance
   - Keep TypeScript strict type safety (no `any` types)
   - Preserve responsive design patterns from existing components
   - Maintain component architecture (centralized types, domain organization)

2. 🎨 **Adapt Design Elements**
   - Convert HTML/CSS to React 19 functional components
   - Replace CDN Tailwind config with project's `tailwind.config.js`
   - Convert inline styles and Tailwind classes to design tokens where applicable
   - Replace external Google Fonts with local/project font configuration
   - Remove CDN Lucide and use installed `lucide-react` package
   - Ensure responsive design for mobile, tablet, and desktop breakpoints
   - Maintain WCAG 2.1 AA accessibility standards

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces in `ui/components/types/unboxing.types.ts`
   - Build React components following vertical slice architecture
   - Use proper React patterns (functional components, hooks)
   - Implement proper event handlers for interactive elements
   - Remove download HTML button functionality (not needed in component library)
   - Optimize for React 19 compiler performance
   - Keep files under 500 lines per file

4. 📱 **Feature Integration**
   - Responsive grid layout that stacks on mobile
   - Interactive hover states on utility icons
   - Configurable brand colors via props/design tokens
   - Customizable product images via props
   - Flexible content areas with prop-based customization
   - Badge notification system for feature cards
   - Smooth transitions and animations

5. 🎯 **Specific Adaptations Needed**
   - Replace external font imports with project font system
   - Convert background images from Unsplash URLs to configurable image props
   - Adapt brand colors (yellow/orange) to design token variables
   - Remove absolute positioned "Get Started" button or make it optional via prop
   - Create reusable sub-components: `FeatureColumn`, `ProductCard`, `UnboxingHeader`
   - Ensure all icons use `lucide-react` package (already installed)
   - Make content areas fully customizable via props (headings, descriptions, images)

**COMPONENT ARCHITECTURE:**

### Proposed Component Structure:
```
ui/components/unboxing/
├── types.ts                     # Re-exports from ../types/unboxing.types.ts
├── index.ts                     # Public API barrel export
├── UnboxingLayout.tsx           # Main container component
├── UnboxingFeatureColumn.tsx    # Reusable feature column
├── UnboxingHeader.tsx           # Header with logo and utility icons
├── UnboxingProductCard.tsx      # Product showcase card with badge
├── UnboxingFooter.tsx           # Bottom info section
└── README.md                    # Component documentation

ui/components/types/
└── unboxing.types.ts            # Centralized TypeScript definitions
```

### Type Definitions Required:
```typescript
// ui/components/types/unboxing.types.ts
export interface UnboxingLayoutProps {
  brandName: string;
  brandLogo?: React.ReactNode;
  features: UnboxingFeatureProps[];
  mainContent: UnboxingMainContentProps;
  footer: UnboxingFooterProps;
  ctaButton?: UnboxingCTAProps;
}

export interface UnboxingFeatureProps {
  title: string;
  description: string;
  backgroundImage: string;
  imageAlt?: string;
}

export interface UnboxingMainContentProps {
  backgroundColor?: string;
  heading: string;
  subheading?: string;
  description: string;
  utilityIcons?: UnboxingIconProps[];
  productCard?: UnboxingProductCardProps;
}

export interface UnboxingProductCardProps {
  icon: React.ReactNode;
  badgeCount?: number;
  badgeColor?: string;
  title: string;
  description: string;
}

export interface UnboxingFooterProps {
  description: string;
  features: string[];
}

export interface UnboxingCTAProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export interface UnboxingIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}
```

**DELIVERABLES:**

1. ✅ Complete React 19 component implementation
2. ✅ Updated TypeScript interfaces in centralized type registry
3. ✅ Tailwind CSS styling using design tokens
4. ✅ Responsive design for mobile/tablet/desktop
5. ✅ Component documentation (README.md)
6. ✅ Usage example in `src/` (e.g., `UnboxingDemo.tsx`)
7. ✅ Barrel exports in `ui/index.ts`
8. ✅ Integration summary document

**TESTING REQUIREMENTS:**
- Ensure the interface loads without errors
- Verify all interactive elements work (hover states, clicks)
- Test responsive behavior across breakpoints
- Confirm accessibility compliance (keyboard navigation, ARIA labels, contrast)
- Validate TypeScript compilation (`tsc --noEmit`)
- Test with `npm run dev` and verify visual accuracy
- Ensure design tokens are properly applied (no hard-coded colors)

**DESIGN TOKEN MAPPING:**

Map these brand colors to design tokens:
- Brand Yellow (#FFE000) → `design-system/tokens` or Tailwind config
- Brand Orange (#FF6B35) → `design-system/tokens` or Tailwind config
- Use existing gray scale from design system
- Apply existing shadow and radius tokens

**ACCESSIBILITY REQUIREMENTS:**
- All images must have alt text
- Interactive elements need ARIA labels
- Keyboard navigation for all interactive elements
- Color contrast ratios meeting WCAG 2.1 AA
- Focus visible states on all interactive elements
- Semantic HTML structure

**RESPONSIVE BREAKPOINTS:**
- Mobile: < 768px (single column stack)
- Tablet: 768px - 1024px (2-column hybrid)
- Desktop: > 1024px (3-column grid)

**DOCUMENTATION REQUIREMENTS:**

Create `ui/components/unboxing/README.md` with:
- Component overview and use cases
- Installation instructions (none needed, part of library)
- Props API documentation
- Usage examples
- Responsive behavior notes
- Accessibility features
- Design token dependencies

Create demo in `src/UnboxingDemo.tsx`:
```tsx
import { UnboxingLayout } from '@/ui/components/unboxing';
import { Camera, Cable, Monitor } from 'lucide-react';

export default function UnboxingDemo() {
  return (
    <UnboxingLayout
      brandName="VisionPro"
      features={[...]}
      mainContent={...}
      footer={...}
    />
  );
}
```

**INTEGRATION SUMMARY:**

After completion, create `UNBOXING_INTEGRATION_COMPLETE.md` documenting:
- Components created
- Type definitions added
- Design decisions made
- Deviations from original design (if any)
- Usage instructions
- Future enhancement opportunities

---

## 📋 **Implementation Checklist**

- [ ] Create `ui/components/types/unboxing.types.ts` with all interfaces
- [ ] Create `ui/components/unboxing/` directory
- [ ] Implement `UnboxingLayout.tsx` main component
- [ ] Implement `UnboxingFeatureColumn.tsx` sub-component
- [ ] Implement `UnboxingHeader.tsx` sub-component
- [ ] Implement `UnboxingProductCard.tsx` sub-component
- [ ] Implement `UnboxingFooter.tsx` sub-component
- [ ] Create `ui/components/unboxing/types.ts` re-export file
- [ ] Create `ui/components/unboxing/index.ts` barrel export
- [ ] Update `ui/index.ts` with new domain exports
- [ ] Create `ui/components/unboxing/README.md` documentation
- [ ] Add brand colors to design token system
- [ ] Create `src/UnboxingDemo.tsx` usage example
- [ ] Update `src/main.tsx` to render demo
- [ ] Test responsive behavior
- [ ] Run `tsc --noEmit` to verify types
- [ ] Test with `npm run dev`
- [ ] Verify accessibility compliance
- [ ] Create `UNBOXING_INTEGRATION_COMPLETE.md` summary

---

Please analyze the provided UI design from `ideas/4K Video Unboxing Layout.html` and implement it step-by-step following our project's vertical slice architecture, maintaining design system fidelity, type safety, and delivering production-ready React components.

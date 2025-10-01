# Digital Payment Interface Layout - UI Integration Prompt

I want to integrate a custom UI design into our project-componets project. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 + Design System Tokens (from `design -system/`)
- Backend: N/A (Component Library - Demo purposes only)
- Language: TypeScript 5
- Target file: `ui/components/payment/`
- Existing functionality: Payment dashboard with animated 3D card preview, payment completion flows, card validation

**UI TO INTEGRATE:**

See `ideas/Digital Payment Interface Layout.html` - FlowPay digital payment landing page featuring:
- Dark gradient background with animated glass-morphism effects
- Sticky navigation with glassmorphic header
- Hero section with animated payment cards (3D transforms, rotations)
- Product features grid with hover effects
- Testimonials section with stats cards
- Responsive footer with social links

**Key Design Elements:**
- Font: Inter, Space Grotesk, Geist
- Color Scheme: Dark (#0a0a0a) with purple/blue gradients, white text
- Animations: fadeIn, slideUp, scaleIn with staggered delays
- Glass effects: backdrop-filter blur with rgba backgrounds
- Card UI: Floating payment cards with rotation transforms
- Icons: Lucide icons

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain existing payment component architecture
   - Keep card validation and formatting hooks
   - Preserve TypeScript type safety
   - Maintain design system token usage

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React 19 components
   - Replace inline Tailwind classes with design system tokens
   - Implement animations using CSS transitions and React hooks
   - Create reusable component variants for light/dark themes
   - Ensure responsive design for mobile, tablet, desktop

3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces (export from `ui/components/types/payment.types.ts`)
   - Use React 19 patterns (no memo/useCallback unless profiled)
   - Implement proper event handlers with TypeScript types
   - Add accessibility attributes (ARIA labels, semantic HTML)
   - Optimize for React compiler

4. 📱 **Feature Integration**
   - Animated card rotation and hover effects
   - Glass-morphism effect implementation
   - Staggered animation entry for components
   - Scroll-triggered animations
   - Mobile menu toggle functionality
   - Responsive navigation

5. 🎯 **Specific Adaptations Needed**
   - Replace external CDN fonts with project font stack
   - Convert animations to CSS modules or Tailwind utilities
   - Adapt gradient colors to design system token variables
   - Ensure compatibility with existing payment components
   - Maintain vertical slice ownership (payment domain)
   - Create component variants: `PaymentHero`, `PaymentFeatures`, `PaymentTestimonials`

**COMPONENT STRUCTURE:**
```
ui/components/payment/
├── FlowPayHero.tsx           # Hero section with animated cards
├── PaymentFeatureGrid.tsx     # Features section
├── PaymentTestimonials.tsx    # Testimonials with stats
├── GlassCard.tsx              # Reusable glass-morphism card
├── types.ts                   # Re-export from types/payment.types.ts
├── index.ts                   # Public exports
└── README.md                  # Component documentation
```

**DELIVERABLES:**
1. ✅ Complete React 19 component implementations
2. ✅ Updated TypeScript interfaces in `ui/components/types/payment.types.ts`
3. ✅ Tailwind CSS + Design System Token styling
4. ✅ Preserved payment functionality
5. ✅ Working animations and interactions
6. ✅ Responsive design for mobile/tablet/desktop
7. ✅ Documentation with usage examples
8. ✅ Integration summary document

**TESTING REQUIREMENTS:**
- Ensure all components render without errors
- Verify all interactive elements work (navigation, buttons, hover states)
- Test animations trigger correctly
- Confirm responsive behavior on mobile, tablet, desktop
- Validate accessibility compliance (WCAG 2.1 AA)
- Test with existing payment components for compatibility

**DESIGN SYSTEM COMPLIANCE:**
- Use design tokens from `design -system/` for colors, spacing, typography
- No hard-coded color values or spacing
- Follow component naming conventions (PascalCase)
- Maintain file size limit (<500 lines per file)
- Document all props and component variants

Please analyze the provided UI design and implement it step-by-step, maintaining our existing payment functionality while delivering the exact visual design requested.

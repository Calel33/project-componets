# 🎯 **3D Interactive Design Studio UI Integration Prompt**

## 📋 **Project Integration Request**

I want to integrate the "3D Interactive Design Studio" UI design into our project-components library. Please extract and adapt this interface to work with our React + Vite + TypeScript + Tailwind CSS stack.

---

## **CURRENT PROJECT CONTEXT:**

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 3 + Design System Tokens
- **Backend**: Static demo (no backend integration required)
- **Language**: TypeScript 5
- **Target Location**: `ui/components/interactive-studio/` (new domain)
- **Demo Location**: `src/InteractiveStudioDemo.tsx`
- **Existing Functionality**: Reusable component library with domain-specific slices

---

## **UI TO INTEGRATE:**

```html
<!-- See: ideas/3D Interactive Design Studio UI.html -->
```

**Key Design Elements:**
- **3D Background**: Spline embedded iframe with reactive orb animation
- **Glass Floating Navbar**: Rounded-full, frosted glass effect with backdrop blur
- **Hero Section**: Two-column grid layout (content left, 3D interaction space right)
- **Typography**: Inter font family with tracking-tighter headings
- **Glassmorphism**: Consistent use of bg-opacity-5 to bg-opacity-10 with backdrop-blur
- **Technology Badges**: Small pill-shaped badges with glass effect
- **CTA Buttons**: White solid primary, glass-effect secondary
- **Color Scheme**: Pure black background (#000000) with white text and subtle overlays

---

## **INTEGRATION REQUIREMENTS:**

### 1. 🔄 **Preserve All Existing Functionality**
   - Maintain design system token compliance (colors, spacing, typography)
   - Keep TypeScript strict mode with no `any` types
   - Preserve component library structure with centralized types
   - Follow vertical slice architecture (UI + types + demo + docs)

### 2. 🎨 **Adapt Design Elements**
   - Convert HTML to React 19 functional components with TypeScript
   - Replace Spline iframe with configurable 3D background component
   - Convert inline Tailwind config to use existing design system tokens
   - Implement responsive grid using Tailwind breakpoints
   - Create reusable glassmorphism utilities/components
   - Add Inter font to project (already available, verify usage)
   - Ensure WCAG 2.1 AA accessibility (keyboard navigation, focus states, ARIA labels)

### 3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces in `ui/components/types/interactive-studio.types.ts`
   - Use React hooks for navigation state and scroll interactions
   - Implement proper component composition (navbar, hero, background as separate components)
   - Add prop-driven configuration for content, links, and CTA buttons
   - Create utility hooks if needed (e.g., `useGlassMorphism`, `use3DBackground`)
   - Optimize Spline iframe loading with lazy loading strategy

### 4. 📱 **Feature Integration**
   - **Floating Navbar**: Fixed positioning, centered with transform, responsive collapse for mobile
   - **3D Background**: Configurable iframe source with fallback gradient
   - **Hero Grid**: Two-column desktop, single-column mobile stack
   - **Technology Badges**: Map-driven rendering from props array
   - **Button Variants**: Primary (solid white) and Secondary (glass effect)
   - **Smooth Animations**: Hover states, transitions using Tailwind utilities
   - **Mobile Menu**: Hidden on small screens, show hamburger toggle

### 5. 🎯 **Specific Adaptations Needed**
   - Replace CDN Tailwind with project Tailwind configuration
   - Convert Google Fonts links to project font setup
   - Replace external Spline iframe URL with prop-based source
   - Adapt glassmorphism styles to use design system opacity/blur tokens
   - Create reusable `GlassCard`, `GlassButton`, `FloatingNav` components
   - Implement dark theme compliance (already dark, ensure token usage)
   - Add Lucide React icons instead of inline SVG where appropriate
   - Ensure no hard-coded colors/spacing (use design tokens only)

---

## **COMPONENT ARCHITECTURE:**

### **New Domain: `interactive-studio`**

```
ui/components/interactive-studio/
├── types.ts                          # Re-exports from centralized types
├── index.ts                          # Public API barrel export
├── README.md                         # Domain documentation
├── InteractiveStudioHero.tsx         # Main hero section component
├── FloatingNavbar.tsx                # Glass floating navbar
├── SplineBackground.tsx              # 3D background iframe wrapper
├── GlassBadge.tsx                    # Technology badge component
├── GlassButton.tsx                   # Reusable glass-effect button
└── GlassCard.tsx                     # Reusable glassmorphism card
```

### **Centralized Types:**

```typescript
// ui/components/types/interactive-studio.types.ts

export interface InteractiveStudioHeroProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  technologies: string[];
  splineUrl?: string;
}

export interface FloatingNavbarProps {
  logo: React.ReactNode;
  brandName: string;
  links: NavLink[];
  authLinks?: AuthLink[];
  ctaButton?: CTAButton;
}

export interface SplineBackgroundProps {
  splineUrl: string;
  fallbackGradient?: string;
  className?: string;
}

export interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

export interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'glass';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface AuthLink {
  label: string;
  href: string;
  variant?: 'text' | 'button';
}
```

### **Demo File:**

```typescript
// src/InteractiveStudioDemo.tsx
import { 
  InteractiveStudioHero, 
  FloatingNavbar, 
  SplineBackground 
} from '@/ui/components/interactive-studio';

export const InteractiveStudioDemo = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <SplineBackground 
        splineUrl="https://my.spline.design/reactiveorb-s0GzgSco0uSVSXvwMHuJvPQs/"
      />
      <FloatingNavbar {...navbarProps} />
      <InteractiveStudioHero {...heroProps} />
    </div>
  );
};
```

---

## **DELIVERABLES:**

### ✅ **Code Deliverables:**
1. Complete React + TypeScript component implementation
2. TypeScript interfaces in centralized type registry
3. Tailwind CSS styling using design system tokens only
4. Responsive design for mobile, tablet, desktop
5. Working demo in `src/InteractiveStudioDemo.tsx`
6. Component exports in `ui/components/interactive-studio/index.ts`
7. Barrel export update in `ui/index.ts`

### ✅ **Documentation Deliverables:**
1. Domain README: `ui/components/interactive-studio/README.md`
2. Usage examples with prop configurations
3. Integration summary document
4. Accessibility compliance notes
5. Design token mapping documentation

### ✅ **Quality Deliverables:**
1. No TypeScript errors (`tsc --noEmit` passes)
2. No hard-coded styles (design tokens only)
3. Files under 500 lines each
4. WCAG 2.1 AA accessibility compliance
5. Responsive behavior validated across breakpoints
6. Performance optimization (lazy loading, code splitting if needed)

---

## **TESTING REQUIREMENTS:**

- ✅ Interface loads without errors in browser
- ✅ All interactive elements work (navbar links, buttons, hover states)
- ✅ 3D Spline background loads and displays correctly
- ✅ Responsive layout adapts properly to mobile/tablet/desktop
- ✅ Keyboard navigation works (tab order, focus states)
- ✅ Glassmorphism effects render correctly (backdrop blur, opacity)
- ✅ Typography scales appropriately across breakpoints
- ✅ No console errors or warnings
- ✅ Build succeeds: `npm run build`
- ✅ Dev server runs: `npm run dev`

---

## **DESIGN SYSTEM COMPLIANCE:**

### **Token Mapping:**

| Original Style | Design Token |
|----------------|--------------|
| `bg-black` | Keep as-is (or map to design system dark token) |
| `bg-white bg-opacity-5` | Use design system glass/subtle tokens |
| `backdrop-blur-md` | Use design system blur tokens |
| `rounded-full` | Use design system radius tokens |
| `text-5xl md:text-7xl` | Use design system typography scale |
| `tracking-tighter` | Use design system letter-spacing tokens |
| `border-white border-opacity-10` | Use design system border/opacity tokens |

**Important**: No hard-coded hex colors, spacing values, or font sizes. All must use design system tokens from `design -system/` directory.

---

## **ACCESSIBILITY REQUIREMENTS:**

- ✅ Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<h1>`)
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus visible states for all interactive elements
- ✅ Sufficient color contrast (white on black = 21:1, exceeds WCAG AAA)
- ✅ Alt text for logo/icon SVGs
- ✅ Screen reader announcements for dynamic content
- ✅ Skip navigation link for keyboard users

---

## **PERFORMANCE CONSIDERATIONS:**

- Lazy load Spline iframe (use `loading="lazy"` or Intersection Observer)
- Code split large components if needed
- Optimize font loading (use font-display: swap)
- Minimize re-renders with React.memo where appropriate
- Debounce scroll/resize event listeners if implemented

---

## **FILE SIZE & CODE QUALITY:**

- Each component file: **<500 lines**
- Single responsibility per component
- No `any` types in TypeScript
- Proper error handling for iframe failures
- Fallback UI if Spline fails to load

---

## **POST-INTEGRATION CHECKLIST:**

- [ ] All components created and exported
- [ ] Types centralized in type registry
- [ ] Demo file working in dev server
- [ ] Documentation written (README + integration summary)
- [ ] Design tokens used (no hard-coded styles)
- [ ] TypeScript compiles without errors
- [ ] Build succeeds (`npm run build`)
- [ ] Accessibility tested (keyboard nav, screen reader)
- [ ] Responsive design validated
- [ ] No console errors/warnings

---

## **ADDITIONAL NOTES:**

### **Spline Integration:**
The original design uses a Spline 3D iframe. For production:
- Make the URL configurable via props
- Add error boundary for iframe failures
- Provide fallback gradient background
- Consider creating a placeholder/loading state
- Document Spline account requirements if needed

### **Glassmorphism Utilities:**
Create reusable Tailwind utility classes or components:
```typescript
// Example utility hook
export const useGlassEffect = (variant: 'subtle' | 'medium' | 'strong') => {
  const effects = {
    subtle: 'bg-white bg-opacity-5 backdrop-blur-sm',
    medium: 'bg-white bg-opacity-10 backdrop-blur-md',
    strong: 'bg-white bg-opacity-20 backdrop-blur-lg'
  };
  return effects[variant];
};
```

### **Mobile Considerations:**
- Spline 3D may be heavy on mobile; consider disabling or using static image fallback
- Floating navbar should adapt to hamburger menu on small screens
- Hero grid stacks vertically on mobile
- Touch-friendly button sizes (minimum 44x44px)

---

## **SUCCESS CRITERIA:**

✅ Component library follows project constitution principles  
✅ Vertical slice complete (UI + types + demo + docs)  
✅ Design system fidelity maintained (no hard-coded styles)  
✅ Type safety enforced (no `any` types)  
✅ Accessibility compliance (WCAG 2.1 AA)  
✅ Responsive design validated  
✅ Build and dev server working  
✅ Code quality standards met (<500 lines per file)  

---

**Please implement this integration step-by-step, maintaining our existing project structure and delivering a production-ready, reusable component slice for the interactive studio domain.**

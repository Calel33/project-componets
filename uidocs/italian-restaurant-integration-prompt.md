# 🎯 **Authentic Italian Restaurant Landing Page Integration Prompt**

## 📋 **Project Integration Request**

I want to integrate the "Nonna's Table - Authentic Italian Restaurant" landing page design into our project-components library. Please extract and adapt this interface to work with our React + Vite + TypeScript + Tailwind CSS stack.

---

## **CURRENT PROJECT CONTEXT:**

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 3 + Design System Tokens
- **Backend**: Static demo (forms can be connected later)
- **Language**: TypeScript 5
- **Target Location**: `ui/components/restaurant/` (new domain)
- **Demo Location**: `src/ItalianRestaurantDemo.tsx`
- **Existing Functionality**: Reusable component library with domain-specific slices

---

## **UI TO INTEGRATE:**

```html
<!-- See: ideas/Authentic Italian Restaurant Landing Page Template.html -->
```

**Key Design Elements:**
- **Hero Badge Card**: Large rounded card with shadow, frosted glass navbar
- **Playfair Display Font**: Elegant serif font for headings and brand name
- **Chef Team Grid**: Dark section with 2x2 chef profile cards
- **Menu Showcase**: 3-column dish cards with hover effects and gradient overlays
- **Feature Grid**: Mixed-size bento grid with rooftop dining hero, smaller feature cards
- **Reservation Form**: Dark footer with inline contact form
- **Color Scheme**: Neutral-50 background, white cards, zinc-900 dark sections, red/amber accents
- **Animations**: Fade-in-up animations, hover scale effects, image zoom on hover

---

## **INTEGRATION REQUIREMENTS:**

### 1. 🔄 **Preserve All Existing Functionality**
   - Maintain design system token compliance (colors, spacing, typography)
   - Keep TypeScript strict mode with no `any` types
   - Preserve component library structure with centralized types
   - Follow vertical slice architecture (UI + types + demo + docs)

### 2. 🎨 **Adapt Design Elements**
   - Convert HTML to React 19 functional components with TypeScript
   - Add Playfair Display font to project configuration
   - Convert inline Tailwind config to use existing design system tokens
   - Implement responsive grid using Tailwind breakpoints (mobile, tablet, desktop)
   - Create reusable card components (ChefCard, DishCard, FeatureCard)
   - Use Lucide React icons (already in project)
   - Implement fade-in-up animations using Tailwind + CSS keyframes
   - Ensure WCAG 2.1 AA accessibility (form labels, keyboard navigation, contrast)

### 3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces in `ui/components/types/restaurant.types.ts`
   - Use React hooks for form handling and validation
   - Implement proper component composition (Hero, ChefTeam, Menu, Features, Reservation)
   - Add prop-driven configuration for restaurant data (name, chefs, dishes, features)
   - Create utility components for badges, cards, and CTAs
   - Optimize image loading with lazy loading strategy

### 4. 📱 **Feature Integration**
   - **Hero Badge**: Frosted glass navbar, inline images in heading, feature badges, dual CTAs
   - **Chef Team Section**: Dark background with decorative grid lines, 2x2 chef grid
   - **Menu Showcase**: 3-column dish grid, hover effects with gradient overlays
   - **Bento Feature Grid**: Mixed sizes (1 large 2x2, smaller 1x1 cards), hover scale effects
   - **Reservation Form**: Multi-field form with party size, date/time picker, special requests
   - **Smooth Animations**: Staggered fade-in-up on scroll, hover transforms
   - **Mobile Responsive**: Hamburger menu, single-column cards on mobile

### 5. 🎯 **Specific Adaptations Needed**
   - Replace CDN Tailwind with project Tailwind configuration
   - Add Playfair Display font to project (Google Fonts or local)
   - Replace external image URLs with configurable props
   - Adapt animations to use Tailwind utilities + custom keyframes
   - Create reusable `RestaurantBadge`, `ChefCard`, `DishCard`, `FeatureCard` components
   - Implement form validation for reservation system
   - Add Lucide React icons for all icon elements
   - Ensure no hard-coded colors/spacing (use design tokens only)

---

## **COMPONENT ARCHITECTURE:**

### **New Domain: `restaurant`**

```
ui/components/restaurant/
├── types.ts                          # Re-exports from centralized types
├── index.ts                          # Public API barrel export
├── README.md                         # Domain documentation
├── RestaurantHero.tsx                # Hero badge with navbar and headline
├── ChefTeamSection.tsx               # Dark section with chef grid
├── ChefCard.tsx                      # Individual chef profile card
├── MenuShowcase.tsx                  # Menu section with dish grid
├── DishCard.tsx                      # Individual dish card with overlay
├── FeatureGrid.tsx                   # Bento-style feature grid
├── FeatureCard.tsx                   # Individual feature card
├── ReservationForm.tsx               # Reservation form component
├── RestaurantBadge.tsx               # Reusable badge component
└── RestaurantFooter.tsx              # Footer with form and info
```

### **Centralized Types:**

```typescript
// ui/components/types/restaurant.types.ts

export interface RestaurantHeroProps {
  brandName: string;
  headline: string;
  description: string;
  badges: BadgeItem[];
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  navLinks: NavLink[];
  heroImages?: string[];
}

export interface ChefCardProps {
  name: string;
  role: string;
  image: string;
  icon: string;
}

export interface ChefTeamSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  chefs: ChefCardProps[];
  features: string[];
  ctaText?: string;
}

export interface DishCardProps {
  name: string;
  category: string;
  subcategory: string;
  image: string;
  onClick?: () => void;
}

export interface MenuShowcaseProps {
  title: string;
  subtitle: string;
  dishes: DishCardProps[];
  ctaText?: string;
  ctaHref?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  size?: 'small' | 'medium' | 'large';
  ctas?: CTAButton[];
}

export interface FeatureGridProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: FeatureCardProps[];
}

export interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
  phoneNumber?: string;
  features?: string[];
}

export interface ReservationData {
  name: string;
  phone: string;
  partySize: number;
  dateTime: string;
  specialRequests?: string;
}

export interface RestaurantFooterProps {
  brandName: string;
  description: string;
  address: string;
  hours: string;
  reservationForm?: ReservationFormProps;
}

export interface BadgeItem {
  icon: string;
  label: string;
}

export interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
```

### **Demo File:**

```typescript
// src/ItalianRestaurantDemo.tsx
import { 
  RestaurantHero,
  ChefTeamSection,
  MenuShowcase,
  FeatureGrid,
  RestaurantFooter
} from '@/ui/components/restaurant';

export const ItalianRestaurantDemo = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <RestaurantHero {...heroProps} />
      <ChefTeamSection {...chefTeamProps} />
      <MenuShowcase {...menuProps} />
      <FeatureGrid {...featuresProps} />
      <RestaurantFooter {...footerProps} />
    </div>
  );
};
```

---

## **DELIVERABLES:**

### ✅ **Code Deliverables:**
1. Complete React + TypeScript component implementation (9 components)
2. TypeScript interfaces in centralized type registry
3. Tailwind CSS styling using design system tokens only
4. Responsive design for mobile, tablet, desktop
5. Working demo in `src/ItalianRestaurantDemo.tsx`
6. Component exports in `ui/components/restaurant/index.ts`
7. Barrel export update in `ui/index.ts`
8. Playfair Display font integration

### ✅ **Documentation Deliverables:**
1. Domain README: `ui/components/restaurant/README.md`
2. Usage examples with prop configurations
3. Integration summary document
4. Accessibility compliance notes
5. Animation documentation

### ✅ **Quality Deliverables:**
1. No TypeScript errors (`tsc --noEmit` passes)
2. No hard-coded styles (design tokens only)
3. Files under 500 lines each
4. WCAG 2.1 AA accessibility compliance
5. Responsive behavior validated across breakpoints
6. Form validation implemented

---

## **TESTING REQUIREMENTS:**

- ✅ Interface loads without errors in browser
- ✅ All interactive elements work (navbar, buttons, cards, form)
- ✅ Hero images render inline correctly
- ✅ Chef grid displays properly in 2x2 layout
- ✅ Menu cards show hover effects and overlays
- ✅ Bento grid adapts responsively
- ✅ Reservation form validates inputs
- ✅ Animations play correctly (fade-in-up, hover effects)
- ✅ Mobile responsive (hamburger menu, stacked cards)
- ✅ Keyboard navigation works
- ✅ Typography renders with Playfair Display
- ✅ No console errors or warnings
- ✅ Build succeeds: `npm run build`
- ✅ Dev server runs: `npm run dev`

---

## **DESIGN SYSTEM COMPLIANCE:**

### **Token Mapping:**

| Original Style | Design Token |
|----------------|--------------|
| `bg-neutral-50` | Use design system background token |
| `bg-white` | Keep as-is or map to design system surface token |
| `bg-zinc-900` | Use design system dark surface token |
| `text-neutral-900` | Use design system text primary token |
| `text-neutral-600` | Use design system text secondary token |
| `rounded-3xl / rounded-[40px]` | Use design system radius tokens |
| `shadow-lg / shadow-[custom]` | Use design system shadow tokens |
| `ring-1 ring-neutral-200` | Use design system border tokens |

**Important**: No hard-coded hex colors, spacing values, or font sizes. All must use design system tokens from `design -system/` directory.

---

## **ACCESSIBILITY REQUIREMENTS:**

- ✅ Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`)
- ✅ ARIA labels for all interactive elements
- ✅ Form labels properly associated with inputs
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus visible states for all interactive elements
- ✅ Sufficient color contrast (check all text/background combinations)
- ✅ Alt text for all images (chef photos, dish photos, features)
- ✅ Screen reader compatible form validation
- ✅ Skip navigation link for keyboard users
- ✅ Proper heading hierarchy (h1 → h2 → h3)

---

## **PERFORMANCE CONSIDERATIONS:**

- Lazy load images (use `loading="lazy"` or Intersection Observer)
- Optimize animation performance (use `transform` and `opacity` only)
- Debounce form validation
- Code split large sections if needed
- Optimize Playfair Display font loading (use font-display: swap)
- Minimize re-renders with React.memo where appropriate
- Use CSS containment for animated sections

---

## **FILE SIZE & CODE QUALITY:**

- Each component file: **<500 lines**
- Single responsibility per component
- No `any` types in TypeScript
- Proper error handling for form submissions
- Fallback UI for missing images
- Defensive programming for optional props

---

## **POST-INTEGRATION CHECKLIST:**

- [ ] All components created and exported
- [ ] Types centralized in type registry
- [ ] Demo file working in dev server
- [ ] Documentation written (README + integration summary)
- [ ] Design tokens used (no hard-coded styles)
- [ ] TypeScript compiles without errors
- [ ] Build succeeds (`npm run build`)
- [ ] Accessibility tested (keyboard nav, screen reader, form)
- [ ] Responsive design validated
- [ ] Animations tested
- [ ] No console errors/warnings
- [ ] Playfair Display font loads correctly

---

## **ADDITIONAL NOTES:**

### **Playfair Display Font:**
Add to project with proper fallbacks:
```typescript
// In tailwind.config.js or global CSS
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap');

// Tailwind config
fontFamily: {
  playfair: ['Playfair Display', 'serif'],
}

// Usage
<h1 className="font-playfair">Benvenuti a Nonna's Table</h1>
```

### **Inline Images in Heading:**
The original design has inline images within the heading text. Implement with:
```tsx
<h1>
  Benvenuti a 
  <img className="inline-block align-middle h-16 w-24" src="..." alt="Fresh pasta" />
  Nonna's Table,
  <img className="inline-block align-middle h-16 w-24" src="..." alt="Italian chef" />
  where tradition meets taste
</h1>
```

### **Animation Utilities:**
Create custom keyframe animation:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}
```

Use with staggered delays:
```tsx
<div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
```

### **Decorative Grid Lines:**
The chef section has decorative background grid lines:
```tsx
<div className="absolute inset-0 opacity-10 pointer-events-none">
  <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
  {/* Additional grid lines */}
</div>
```

### **Reservation Form:**
Implement with:
- React Hook Form or native form handling
- Client-side validation
- Loading/success states
- Error handling
- Date/time picker component (or native input)

### **Mobile Considerations:**
- Hamburger menu for navigation on mobile
- Single-column card grids on small screens
- Touch-friendly button sizes (minimum 44x44px)
- Simplified animations on mobile (consider `prefers-reduced-motion`)
- Stack chef grid to 1-column on mobile

---

## **SUCCESS CRITERIA:**

✅ Component library follows project constitution principles  
✅ Vertical slice complete (UI + types + demo + docs)  
✅ Design system fidelity maintained (no hard-coded styles)  
✅ Type safety enforced (no `any` types)  
✅ Accessibility compliance (WCAG 2.1 AA)  
✅ Responsive design validated  
✅ Animations perform smoothly  
✅ Form validation works correctly  
✅ Build and dev server working  
✅ Code quality standards met (<500 lines per file)  

---

**Please implement this integration step-by-step, maintaining our existing project structure and delivering a production-ready, reusable component slice for the restaurant landing page domain.**

# 🎯 Auré Natural Skincare Landing Page Integration Prompt

I want to integrate the **Auré Natural Skincare Landing Page** UI design into our **project-components** React library. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

---

## **CURRENT PROJECT CONTEXT:**

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 3 with design tokens from `design -system/`
- **Backend**: Static demo (no backend integration required)
- **Language**: TypeScript 5
- **Target Location**: `ui/components/skincare/` (new domain)
- **Demo Location**: `src/SkincareDemo.tsx`
- **Existing Functionality**: Reusable component library with centralized types, design token system, responsive layouts, scroll animations

---

## **UI TO INTEGRATE:**

**Source File**: `ideas/Auré Natural Skincare Landing Page Template.html`

### **Key Design Elements:**

#### 1. **Announcement Bar**
- Dark background with light text (dark mode toggle)
- Two announcement messages displayed
- Responsive (hidden on mobile)

#### 2. **Sticky Header/Navigation**
- Frosted glass effect with backdrop blur
- Logo and brand name
- Desktop navigation: Shop, Collections (dropdown), About, Journal, Contact
- Mobile hamburger menu with drawer
- Utility icons: Search, Wishlist, Cart (with count badge), Theme toggle
- Collections dropdown with product category cards (images + descriptions)

#### 3. **Hero Section (80vh)**
- Full-screen background image with parallax effect
- Gradient overlay (90deg from dark to transparent)
- Left-aligned content:
  - Small uppercase tagline
  - Large heading with partial text highlight
  - Description paragraph
  - Dual CTAs: Primary (animated gradient button) + Secondary (border button with play icon)
- Mousemove parallax background

#### 4. **Trust/Tagline Section**
- Mixed text and inline images (rotated)
- Playfair Display serif font for emphasis
- "Refresh your skin, love yourself, renew your glow"
- Inline product images with ring borders and rotation

#### 5. **Collections Grid**
- Expandable card panels (hover to expand from flex-1 to flex-4)
- 5 product collections with background images
- Gradient overlay on hover reveals title, description, category
- Smooth transitions (duration-500)

#### 6. **Featured Products Grid**
- 3-column grid (responsive)
- Product cards with:
  - Image with hover scale effect
  - Badge labels (New, pH 5.5, Best Seller)
  - Wishlist heart button
  - Product name, description, price
  - Star ratings with review count
  - "Add to cart" button with animation
- Hover effects: scale-105, shadow-xl

#### 7. **Philosophy/Ingredients Section**
- Background image with overlay
- Two-column grid (content + visual space)
- Heading, description, feature list
- CTA button

#### 8. **Footer**
- Multi-column layout (Newsletter, Shop, Help, Company)
- Newsletter signup form
- Social media links
- Payment icons
- Copyright notice

#### 9. **Shopping Cart Drawer (Sidebar)**
- Fixed right-side panel (slides in/out)
- Cart items list with image, name, price, quantity controls
- Subtotal calculation
- Checkout button

#### 10. **Toast Notifications**
- Fixed top-right positioning
- Success messages for cart actions
- Auto-dismiss with slide animation

---

## **INTEGRATION REQUIREMENTS:**

### 1. 🔄 **Preserve All Existing Functionality**
   - Maintain design token system compliance
   - Keep TypeScript strict type safety (no `any` types)
   - Preserve responsive design patterns
   - Maintain component architecture (centralized types, domain organization)
   - Follow vertical slice architecture

### 2. 🎨 **Adapt Design Elements**
   - Convert HTML/CSS to React 19 functional components
   - Replace CDN Tailwind with project's `tailwind.config.js`
   - Remove CDN Lucide and use installed `lucide-react` package
   - Convert Playfair Display font to project font system
   - Implement scroll-triggered animations with Intersection Observer API
   - Create reusable animation system (fade-in, slide-up, scale-in, etc.)
   - Dark mode support with Tailwind dark: prefix
   - Responsive design for mobile, tablet, desktop breakpoints
   - WCAG 2.1 AA accessibility standards

### 3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces in `ui/components/types/skincare.types.ts`
   - Build React components following vertical slice architecture
   - Implement proper React patterns (functional components, hooks)
   - Custom hooks:
     - `useScrollAnimation` - Intersection Observer for scroll animations
     - `useCart` - Shopping cart state management
     - `useTheme` - Dark mode toggle
     - `useParallax` - Hero parallax effect
   - Implement proper event handlers
   - Remove Chart.js dependency (not used in skincare landing)
   - Optimize for React 19 compiler performance
   - Keep files under 500 lines per file

### 4. 📱 **Feature Integration**
   - Responsive grid layouts (collections, products, footer)
   - Expandable collection cards with hover effects
   - Shopping cart functionality (add/remove, quantity, subtotal)
   - Collections dropdown menu with hover interaction
   - Mobile drawer navigation
   - Theme toggle (light/dark mode)
   - Toast notification system
   - Parallax hero background (mousemove effect)
   - Smooth scroll animations with staggered delays
   - Form validation (newsletter signup)

### 5. 🎯 **Specific Adaptations Needed**
   - Replace external font imports with project font system
   - Convert background images from Supabase URLs to configurable props
   - Remove Chart.js script (not needed)
   - Extract all color values to design tokens
   - Create animation variants (fade, slide, scale, blur, rotate)
   - Implement cart state management (Context API or local state)
   - Make all content areas fully customizable via props
   - Collections dropdown: convert to React portal for positioning
   - Cart drawer: use React state + CSS transitions
   - Toast system: queue-based notification manager

---

## **COMPONENT ARCHITECTURE:**

### **Proposed Component Structure:**

```
ui/components/skincare/
├── types.ts                          # Re-exports from ../types/skincare.types.ts
├── index.ts                          # Public API barrel export
├── SkincareLayout.tsx                # Main layout orchestrator
├── SkincareAnnouncement.tsx          # Top announcement bar
├── SkincareHeader.tsx                # Sticky navigation header
├── SkincareCollectionsDropdown.tsx   # Collections dropdown menu
├── SkincareHero.tsx                  # Hero section with parallax
├── SkincareTrustBar.tsx              # Tagline with inline images
├── SkincareCollectionsGrid.tsx       # Expandable collection cards
├── SkincareProductCard.tsx           # Product card component
├── SkincareProductGrid.tsx           # Featured products section
├── SkincarePhilosophy.tsx            # About/Philosophy section
├── SkincareFooter.tsx                # Footer with newsletter
├── SkincareCart.tsx                  # Shopping cart drawer
├── SkincareToast.tsx                 # Toast notification
├── SkincareMobileMenu.tsx            # Mobile drawer menu
└── README.md                         # Component documentation

ui/hooks/
├── useScrollAnimation.ts             # Scroll-triggered animations
├── useCart.ts                        # Shopping cart logic
├── useTheme.ts                       # Dark mode management
└── useParallax.ts                    # Parallax effect

ui/components/types/
└── skincare.types.ts                 # Centralized TypeScript definitions
```

### **Type Definitions Required:**

```typescript
// ui/components/types/skincare.types.ts

export interface SkincareLayoutProps {
  announcement?: SkincareAnnouncementProps;
  header: SkincareHeaderProps;
  hero: SkincareHeroProps;
  trustBar?: SkincareTrustBarProps;
  collections: SkincareCollectionsGridProps;
  products: SkincareProductGridProps;
  philosophy: SkincarePhilosophyProps;
  footer: SkincareFooterProps;
  className?: string;
}

export interface SkincareAnnouncementProps {
  messages: string[];
  darkMode?: boolean;
}

export interface SkincareHeaderProps {
  brandName: string;
  brandLogo?: React.ReactNode;
  navLinks: NavLink[];
  collectionsMenu?: SkincareCollection[];
  utilityIcons?: boolean; // search, wishlist, cart, theme toggle
  cartCount?: number;
}

export interface SkincareHeroProps {
  backgroundImage: string;
  tagline: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  parallax?: boolean;
}

export interface SkincareTrustBarProps {
  text: string[];
  inlineImages: TrustBarImage[];
}

export interface TrustBarImage {
  src: string;
  alt: string;
  rotation?: number;
  position: number; // Index in text array where image appears
}

export interface SkincareCollectionsGridProps {
  collections: SkincareCollection[];
}

export interface SkincareCollection {
  id: string;
  name: string;
  description: string;
  category: string;
  backgroundImage: string;
  link?: string;
}

export interface SkincareProductGridProps {
  title: string;
  subtitle: string;
  products: SkincareProduct[];
}

export interface SkincareProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
}

export interface SkincarePhilosophyProps {
  backgroundImage: string;
  heading: string;
  description: string;
  features: string[];
  cta?: CTAButton;
}

export interface SkincareFooterProps {
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
  };
  sections: FooterSection[];
  socialLinks: SocialLink[];
  paymentIcons: React.ReactNode[];
  copyright: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  icon: React.ReactNode;
  url: string;
}

// Cart types
export interface CartItem {
  product: SkincareProduct;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  subtotal: number;
}

// Animation types
export type AnimationType = 
  | 'fade-in' 
  | 'slide-left' 
  | 'slide-right' 
  | 'slide-up' 
  | 'slide-down' 
  | 'scale-in' 
  | 'blur-in' 
  | 'rotate-in';

export interface AnimationConfig {
  type: AnimationType;
  delay?: number;
  threshold?: number;
}
```

---

## **DELIVERABLES:**

### ✅ **Code Deliverables:**
1. Complete React + TypeScript component implementation
2. TypeScript interfaces in centralized type registry
3. Tailwind CSS styling using design system tokens only
4. Custom hooks (useScrollAnimation, useCart, useTheme, useParallax)
5. Responsive design for mobile, tablet, desktop
6. Working demo in `src/SkincareDemo.tsx`
7. Component exports in `ui/components/skincare/index.ts`
8. Barrel export update in `ui/index.ts`

### ✅ **Documentation Deliverables:**
1. Domain README: `ui/components/skincare/README.md`
2. Usage examples with prop configurations
3. Integration summary document
4. Accessibility compliance notes
5. Animation system documentation

### ✅ **Quality Deliverables:**
1. No TypeScript errors (`tsc --noEmit` passes)
2. No hard-coded styles (design tokens only)
3. Files under 500 lines each
4. WCAG 2.1 AA accessibility compliance
5. Responsive behavior validated across breakpoints
6. Performance optimization (lazy loading, code splitting)

---

## **TESTING REQUIREMENTS:**

- ✅ Interface loads without errors in browser
- ✅ All interactive elements work (nav, dropdowns, cart, theme toggle)
- ✅ Collections grid expands/collapses smoothly
- ✅ Shopping cart add/remove/quantity updates work
- ✅ Toast notifications appear and dismiss
- ✅ Theme toggle switches light/dark mode
- ✅ Responsive layout adapts to mobile/tablet/desktop
- ✅ Scroll animations trigger properly
- ✅ Parallax effect works on hero
- ✅ Keyboard navigation works
- ✅ No console errors or warnings
- ✅ Build succeeds: `npm run build`
- ✅ Dev server runs: `npm run dev`

---

## **DESIGN SYSTEM COMPLIANCE:**

### **Token Mapping:**

| Original Style | Design Token |
|----------------|--------------|
| `bg-neutral-50` | Use design system light background |
| `bg-neutral-900` | Use design system dark background |
| `text-neutral-600` | Use design system secondary text |
| `rounded-3xl`, `rounded-2xl` | Use design system radius tokens |
| `shadow-xl`, `shadow-2xl` | Use design system shadow tokens |
| Playfair Display font | Map to design system serif font |
| Inter font | Already in project |

**Important**: No hard-coded hex colors, spacing values, or font sizes. All must use design system tokens.

---

## **ACCESSIBILITY REQUIREMENTS:**

- ✅ Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- ✅ ARIA labels for all interactive elements
- ✅ Keyboard navigation for nav, dropdowns, cart, forms
- ✅ Focus visible states for all interactive elements
- ✅ Color contrast ratios meeting WCAG 2.1 AA
- ✅ Alt text for all images
- ✅ Screen reader announcements for cart updates
- ✅ Skip navigation link for keyboard users
- ✅ Form labels and error messages
- ✅ Proper heading hierarchy (h1, h2, h3)

---

## **RESPONSIVE BREAKPOINTS:**

- **Mobile**: < 768px
  - Single column layouts
  - Hamburger menu
  - Stacked CTAs
  - Hidden announcement bar
  
- **Tablet**: 768px - 1024px
  - 2-column grids
  - Partial navigation
  - Adjusted spacing

- **Desktop**: > 1024px
  - Full navigation
  - 3-column product grid
  - Multi-column footer
  - Full collections grid (5 panels)

---

## **ANIMATION SYSTEM:**

### **Scroll-Triggered Animations:**
```typescript
// Intersection Observer-based animations
const animations = {
  'fade-in': 'opacity-0 translate-y-10 blur-sm',
  'slide-left': 'opacity-0 -translate-x-12 blur-sm',
  'slide-right': 'opacity-0 translate-x-12 blur-sm',
  'slide-up': 'opacity-0 translate-y-12 blur-sm',
  'scale-in': 'opacity-0 scale-90 blur-sm',
  'rotate-in': 'opacity-0 -rotate-3 scale-95 blur-sm',
};

// Staggered delays: 0.1s, 0.2s, 0.3s, etc.
```

### **Hover Effects:**
- Collection cards: Expand width (flex-4)
- Product cards: Scale 1.05, shadow-xl
- Buttons: Opacity 0.9, scale 1.05
- Images: Scale 1.1

---

## **PERFORMANCE CONSIDERATIONS:**

1. **Lazy Loading**
   - Images use native lazy loading
   - Collections grid lazy renders

2. **Animation Performance**
   - Use `will-change: transform` sparingly
   - CSS transforms over position changes
   - RequestAnimationFrame for parallax

3. **Code Splitting**
   - Cart drawer dynamic import
   - Mobile menu dynamic import

4. **React 19 Optimization**
   - Functional components with hooks
   - React.memo for expensive components
   - useMemo/useCallback for computed values

---

## **DOCUMENTATION REQUIREMENTS:**

Create `ui/components/skincare/README.md` with:
- Component overview and use cases
- Props API documentation
- Usage examples
- Animation system guide
- Cart integration guide
- Theme toggle implementation
- Responsive behavior notes
- Accessibility features
- Design token dependencies

Create demo in `src/SkincareDemo.tsx`:
```tsx
import { SkincareLayout } from '@/ui/components/skincare';
import { /* Lucide icons */ } from 'lucide-react';

export default function SkincareDemo() {
  return (
    <SkincareLayout
      announcement={{ messages: ['Free shipping over $60', 'New: Barrier Repair Serum 2.0'] }}
      header={{ brandName: 'Auré', navLinks: [...] }}
      hero={{ backgroundImage: '...', heading: 'Natural Skincare', ... }}
      collections={{ collections: [...] }}
      products={{ title: 'Featured Products', products: [...] }}
      philosophy={{ heading: 'Our Philosophy', ... }}
      footer={{ newsletter: {...}, sections: [...] }}
    />
  );
}
```

---

## **INTEGRATION SUMMARY:**

After completion, create `SKINCARE_INTEGRATION_COMPLETE.md` documenting:
- Components created (14 components)
- Type definitions added
- Custom hooks created (4 hooks)
- Design decisions made
- Animation system implementation
- Cart functionality
- Theme toggle system
- Deviations from original design (if any)
- Usage instructions
- Future enhancement opportunities

---

## 📋 **IMPLEMENTATION CHECKLIST**

- [ ] Create `ui/components/types/skincare.types.ts` with all interfaces
- [ ] Create `ui/components/skincare/` directory
- [ ] Implement `SkincareLayout.tsx` main component
- [ ] Implement `SkincareAnnouncement.tsx`
- [ ] Implement `SkincareHeader.tsx` with sticky behavior
- [ ] Implement `SkincareCollectionsDropdown.tsx` with hover menu
- [ ] Implement `SkincareHero.tsx` with parallax effect
- [ ] Implement `SkincareTrustBar.tsx` with inline images
- [ ] Implement `SkincareCollectionsGrid.tsx` with expandable cards
- [ ] Implement `SkincareProductCard.tsx`
- [ ] Implement `SkincareProductGrid.tsx`
- [ ] Implement `SkincarePhilosophy.tsx`
- [ ] Implement `SkincareFooter.tsx` with newsletter form
- [ ] Implement `SkincareCart.tsx` drawer component
- [ ] Implement `SkincareToast.tsx` notification system
- [ ] Implement `SkincareMobileMenu.tsx` drawer
- [ ] Create `useScrollAnimation.ts` hook
- [ ] Create `useCart.ts` hook
- [ ] Create `useTheme.ts` hook
- [ ] Create `useParallax.ts` hook
- [ ] Create `ui/components/skincare/types.ts` re-export file
- [ ] Create `ui/components/skincare/index.ts` barrel export
- [ ] Update `ui/index.ts` with new domain exports
- [ ] Create `ui/components/skincare/README.md` documentation
- [ ] Add Playfair Display font to project
- [ ] Create `src/SkincareDemo.tsx` usage example
- [ ] Test responsive behavior
- [ ] Test scroll animations
- [ ] Test cart functionality
- [ ] Test theme toggle
- [ ] Run `tsc --noEmit` to verify types
- [ ] Test with `npm run dev`
- [ ] Verify accessibility compliance
- [ ] Create `SKINCARE_INTEGRATION_COMPLETE.md` summary

---

**Please analyze the provided UI design from `ideas/Auré Natural Skincare Landing Page Template.html` and implement it step-by-step following our project's vertical slice architecture, maintaining design system fidelity, type safety, and delivering production-ready React components with a sophisticated animation system and shopping cart functionality.**

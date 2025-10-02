# 🎯 Full-Screen Hero with Navigation - UI Integration Prompt

## Source Design
**Component Name**: Veilhaven - Full-Screen Hero with Navigation  
**Source File**: `ideas/Full-Screen Hero with Navigation.html`  
**Design Style**: Dark, minimal, atmospheric hero with floating navigation and smooth animations

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/hero/`
- Types Location: `ui/components/types/hero.types.ts`
- Existing functionality: Reusable component library with centralized type definitions

**UI TO INTEGRATE:**

The Veilhaven hero includes:
- **Full-screen hero** with background image and gradient overlays
- **Floating navigation** with glassmorphism effect
- **Hero content** with badge, heading, description, dual CTAs
- **Mobile menu** overlay
- **Fade-in animations** with staggered delays
- **Smooth scroll** anchor navigation

**Key Design Features:**
- Dark theme (#zinc-950, #zinc-900 backgrounds)
- Glassmorphism (`backdrop-blur`, `bg-white/5`, `border-white/10`)
- Animated entrance effects (fadeInUp keyframes)
- Staggered animation delays (0.1s, 0.2s, 0.3s...)
- Full-height hero section
- Gradient overlays on images

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   Create modular components:
   - `FullScreenHero.tsx` - Main hero container
   - `HeroNav.tsx` - Floating navigation with mobile menu
   - `HeroContent.tsx` - Content area with CTAs
   - `MobileMenu.tsx` - Mobile menu overlay

2. 🎨 **Design System Integration**
   - Replace hard-coded zinc colors with design tokens
   - Use Tailwind backdrop-blur utilities
   - Implement fade-in animations via CSS or Framer Motion
   - Support light/dark theme variants

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/hero.types.ts`:
   ```typescript
   export interface NavItem {
     label: string;
     href: string;
     icon?: React.ReactNode;
   }
   
   export interface HeroNavProps {
     logo: string | React.ReactNode;
     navItems: NavItem[];
     ctaButton?: {
       label: string;
       href: string;
       onClick?: () => void;
     };
   }
   
   export interface HeroContentProps {
     badge?: {
       icon: React.ReactNode;
       text: string;
     };
     title: string | React.ReactNode;
     subtitle: string;
     primaryCta: {
       label: string;
       href: string;
       onClick?: () => void;
     };
     secondaryCta?: {
       label: string;
       icon: React.ReactNode;
       onClick?: () => void;
     };
   }
   
   export interface FullScreenHeroProps {
     backgroundImage: string;
     navigation: HeroNavProps;
     content: HeroContentProps;
     enableAnimations?: boolean;
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: Full navigation visible
   - Mobile: Hamburger menu with overlay
   - Smooth scroll behavior
   - Touch-friendly mobile menu

5. 🎯 **Feature Requirements**
   - Staggered fade-in animations
   - Mobile menu toggle state
   - Smooth scroll to anchors
   - Gradient overlay on background image
   - Glassmorphism navigation
   - Accessible navigation (keyboard support)

6. ♿ **Accessibility**
   - Semantic HTML (nav, button, a)
   - ARIA labels for icons
   - Focus trap in mobile menu
   - Keyboard navigation (Esc to close menu)
   - Skip to content link

**DELIVERABLES:**
1. ✅ `ui/components/hero/FullScreenHero.tsx`
2. ✅ `ui/components/hero/HeroNav.tsx`
3. ✅ `ui/components/hero/HeroContent.tsx`
4. ✅ `ui/components/hero/MobileMenu.tsx`
5. ✅ `ui/components/types/hero.types.ts`
6. ✅ `ui/components/hero/index.ts` barrel export
7. ✅ `ui/components/hero/README.md` with usage examples
8. ✅ Demo in `src/HeroDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify fade-in animations
- Test mobile menu functionality
- Validate smooth scroll
- Check responsive breakpoints
- Test keyboard navigation
- Verify glassmorphism effects

Please implement this atmospheric hero component following our project constitution and design system principles.

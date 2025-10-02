# 🎯 Forma Interior Design Landing Page - UI Integration Prompt

## Source Design
**Component Name**: Forma Interior Design Landing Page Template  
**Source File**: `ideas/Forma Interior Design Landing Page Template.html`  
**Design Style**: Elegant, modern interior design landing page with glassmorphism, parallax effects, and comprehensive sections

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/interior-design/`
- Types Location: `ui/components/types/interior-design.types.ts`
- Existing functionality: Reusable component library with centralized type definitions

**UI TO INTEGRATE:**

The Forma landing page includes:
- **Fixed navigation** with glass effect, section indicators, mobile menu
- **Hero section** with full-screen parallax background, animated counters, floating elements
- **About section** with image+content layout, feature list, floating stats cards
- **Services section** with 6 service cards (3x2 grid), featured card styling
- **Process timeline** with 3-phase visual timeline
- **Portfolio section** with masonry grid, project cards, categories
- **Testimonials** with 6-card grid, ratings, client photos
- **Contact form** in community section
- **Footer** with navigation, social links, newsletter

**Key Design Features:**
- Glassmorphism effects (`backdrop-blur`, `bg-white/10`)
- Parallax scrolling on background elements
- Staggered fade-in animations
- Animated counter statistics
- Section navigation indicators
- Smooth scroll behavior

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   Create modular components:
   - `FormaHero.tsx` - Hero with parallax and animated counters
   - `FormaNav.tsx` - Fixed navigation with section indicators
   - `AboutSection.tsx` - About content with floating cards
   - `ServicesGrid.tsx` - Service cards with featured variant
   - `ProcessTimeline.tsx` - 3-phase timeline visualization
   - `PortfolioGrid.tsx` - Masonry project gallery
   - `TestimonialsGrid.tsx` - Client testimonials with ratings
   - `ContactSection.tsx` - Contact form integration

2. 🎨 **Design System Integration**
   - Replace inline colors with design tokens
   - Use Tailwind utilities for glassmorphism
   - Implement parallax with React hooks
   - Create reusable animation classes
   - Support theme variants

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/interior-design.types.ts`:
   ```typescript
   export interface ServiceCardProps {
     icon: React.ReactNode;
     title: string;
     description: string;
     features: string[];
     featured?: boolean;
     badge?: string;
     link: string;
   }
   
   export interface PortfolioProjectProps {
     image: string;
     title: string;
     description: string;
     location: string;
     size: string;
     category: string;
     featured?: boolean;
   }
   
   export interface TestimonialProps {
     content: string;
     author: string;
     role: string;
     avatar: string;
     rating: number;
   }
   
   export interface TimelinePhaseProps {
     phase: number;
     title: string;
     description: string;
     features: string[];
     image: string;
     icon: React.ReactNode;
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: Full layout with parallax effects
   - Tablet: 2-column grids, reduced parallax
   - Mobile: Single column, simplified animations
   - Mobile menu overlay

5. 🎯 **Feature Requirements**
   - Animated counter hook (`useCounterAnimation`)
   - Parallax scroll hook (`useParallax`)
   - Intersection observer for fade-in animations
   - Section scroll spy for navigation indicators
   - Smooth scroll to sections
   - Mobile menu toggle
   - Form validation (contact form)
   - Lucide React icons integration

6. ♿ **Accessibility**
   - Semantic HTML (nav, section, article)
   - ARIA labels for interactive elements
   - Focus management for mobile menu
   - Skip to content link
   - Alt text for all images
   - Keyboard navigation support

**DELIVERABLES:**
1. ✅ `ui/components/interior-design/FormaHero.tsx`
2. ✅ `ui/components/interior-design/FormaNav.tsx`
3. ✅ `ui/components/interior-design/ServicesGrid.tsx`
4. ✅ `ui/components/interior-design/ProcessTimeline.tsx`
5. ✅ `ui/components/interior-design/PortfolioGrid.tsx`
6. ✅ `ui/components/interior-design/TestimonialsGrid.tsx`
7. ✅ `ui/components/types/interior-design.types.ts`
8. ✅ `ui/hooks/useCounterAnimation.ts`
9. ✅ `ui/hooks/useParallax.ts`
10. ✅ `ui/components/interior-design/README.md`
11. ✅ Demo in `src/FormaLandingDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify parallax performance
- Test counter animations
- Validate mobile menu functionality
- Check form submission
- Test responsive breakpoints
- Verify accessibility (WCAG 2.1 AA)
- Test smooth scroll behavior

Please implement this comprehensive landing page following our project constitution and vertical slice ownership principles.

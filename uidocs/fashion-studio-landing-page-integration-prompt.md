# Fashion Studio Landing Page - UI Integration Prompt

I want to integrate a custom UI design into our project-componets project. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 + Design System Tokens (from `design -system/`)
- Backend: N/A (Component Library - Demo purposes only)
- Language: TypeScript 5
- Target file: `ui/components/fashion/`
- Existing functionality: N/A (New domain for fashion/luxury landing pages)

**UI TO INTEGRATE:**

See `ideas/Fashion Studio Landing Page Template.html` - ATELIER Fashion Studio landing page featuring:
- Floating glassmorphic navigation bar
- Full-screen hero with:
  - Large gradient text heading ("Timeless ÉLEGANCE")
  - Animated floating elements
  - Social proof stats
  - Scroll indicator
- Stats section with animated counters
- About studio section (two-column text + image)
- Featured collection with masonry/bento grid layout
- Enhanced timeline for design process (animated progress line)
- Interactive service cards
- Team member cards with images
- Static testimonials grid
- CTA section with gradient buttons

**Key Design Elements:**
- Fonts: Inter (body), Playfair Display (headings)
- Color Scheme: Light gradient mesh background (slate-50 to purple-50), slate-800 text
- Glass-morphism: Backdrop blur with white/translucent backgrounds
- Animations: Float, fade-in, slide-up, scale-hover, rotate-hover, parallax
- Typography: Large serif headings with gradient effects
- Cards: Rounded-3xl, ring borders, hover lift effects
- Icons: Lucide icons

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture
   - Keep TypeScript type safety
   - Preserve design system token usage
   - Follow vertical slice ownership pattern

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React 19 components
   - Replace inline Tailwind classes with design system tokens
   - Implement scroll animations using IntersectionObserver
   - Create reusable card and grid components
   - Ensure responsive design for all breakpoints
   - Add accessibility attributes (WCAG 2.1 AA)

3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces (export from `ui/components/types/fashion.types.ts`)
   - Use React 19 patterns (hooks, state management)
   - Implement animated timeline with progress tracking
   - Create masonry grid layout for collection
   - Add scroll-triggered animations
   - Implement animated counter for stats
   - Create parallax effects for images
   - Optimize for performance

4. 📱 **Feature Integration**
   - Floating sticky navigation
   - Animated hero elements (floating orbs)
   - Scroll-to-section navigation
   - Image hover zoom effects
   - Timeline animation on scroll
   - Counter animation on view
   - Masonry collection grid
   - Team member cards
   - Testimonial cards
  - CTA buttons with routing

5. 🎯 **Specific Adaptations Needed**
   - Replace Inter/Playfair fonts with design system font stack
   - Convert gradient-mesh background to design system
   - Adapt slate/purple color palette to design system tokens
   - Implement glass-morphism effects with Tailwind
   - Create floating animation with CSS keyframes
   - Add magnetic button hover effects
   - Implement smooth scroll behavior
   - Create responsive masonry grid

**COMPONENT STRUCTURE:**
```
ui/components/fashion/
├── FashionLanding.tsx                # Main landing page container
├── FloatingNav.tsx                   # Glassmorphic sticky navigation
├── FashionHero.tsx                   # Hero section with animations
├── StatsSection.tsx                  # Animated stats counters
├── AboutStudio.tsx                   # About section (text + image)
├── CollectionGrid.tsx                # Masonry bento grid
├── CollectionCard.tsx                # Individual collection item
├── TimelineSection.tsx               # Animated process timeline
├── TimelineStep.tsx                  # Individual timeline step
├── ServiceCards.tsx                  # Interactive service cards
├── TeamSection.tsx                   # Team member grid
├── TeamCard.tsx                      # Team member card
├── TestimonialGrid.tsx               # Testimonial cards
├── CTASection.tsx                    # Call-to-action buttons
├── types.ts                          # Re-export from types/fashion.types.ts
├── index.ts                          # Public exports
└── README.md                         # Component documentation
```

**TYPE DEFINITIONS:**
```typescript
// ui/components/types/fashion.types.ts
export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
  height?: number; // For masonry layout
}

export interface TimelineStep {
  id: string;
  number: string; // "01", "02", etc.
  title: string;
  description: string;
  duration: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  badge?: string;
  popular?: boolean;
}

export interface FashionLandingProps {
  collections: CollectionItem[];
  timeline: TimelineStep[];
  team: TeamMember[];
  testimonials: Testimonial[];
  services: ServiceOffering[];
  onBookConsultation?: () => void;
  onExploreCollections?: () => void;
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 component implementations
2. ✅ Updated TypeScript interfaces in `ui/components/types/fashion.types.ts`
3. ✅ Tailwind CSS + Design System Token styling
4. ✅ Responsive masonry grid layout
5. ✅ Animated timeline with scroll tracking
6. ✅ Floating navigation bar
7. ✅ Scroll-reveal animations using IntersectionObserver
8. ✅ Animated stat counters
9. ✅ Parallax image effects
10. ✅ Glassmorphism effects
11. ✅ Hover interactions (lift, scale, rotate)
12. ✅ Mobile-responsive layouts
13. ✅ Documentation with usage examples
14. ✅ Integration summary document

**TESTING REQUIREMENTS:**
- Ensure all components render without errors
- Verify floating nav sticks on scroll
- Test timeline animation triggers correctly
- Confirm masonry grid layout is responsive
- Validate stat counters animate on first view
- Test hover effects on cards and images
- Check scroll-to-section navigation works
- Verify parallax effects perform smoothly
- Test responsive behavior on mobile, tablet, desktop
- Check accessibility compliance (keyboard navigation, ARIA)
- Test with different data sets (empty, partial, full)
- Validate animation performance (60fps target)

**DESIGN SYSTEM COMPLIANCE:**
- Use design tokens from `design -system/` for colors, spacing, typography
- Map slate-* colors to design system equivalents
- Map purple accent colors to design system tokens
- No hard-coded values for colors or spacing
- Follow component naming conventions (PascalCase)
- Maintain file size limit (<500 lines per file)
- Co-locate related components
- Document all props and variants

**ACCESSIBILITY REQUIREMENTS:**
- Semantic HTML structure (header, main, section, article)
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels for navigation and interactive elements
- Keyboard navigation support (tab, enter, space)
- Focus indicators on all interactive elements
- Screen reader friendly image alt text
- Sufficient color contrast (4.5:1 minimum)
- Reduced motion support (prefers-reduced-motion)
- Skip to content link

**ANIMATION REQUIREMENTS:**
1. **Floating Elements:**
   - Smooth up/down motion (6s ease-in-out infinite)
   - Multiple orbs with different delays
   - GPU-accelerated (transform only)

2. **Scroll Reveal:**
   - Fade in + translate Y
   - Staggered delays for multiple elements
   - IntersectionObserver with threshold 0.2
   - Reset on scroll up past section

3. **Timeline Animation:**
   - Progress line grows from 0% to 100% height
   - Dots scale and change color sequentially
   - Staggered step card fade-in (600ms between steps)
   - Smooth cubic-bezier easing

4. **Stat Counters:**
   - Count up from 0 to target value
   - Animate on first view only
   - Duration: ~2 seconds
   - Easing: ease-out

5. **Hover Effects:**
   - lift: translateY(-4px) + shadow increase
   - scale: scale(1.05)
   - rotate: rotate(3deg) scale(1.02)
   - Smooth transitions (300-500ms)

**GLASSMORPHISM EFFECT:**
```css
.glass {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**MASONRY GRID LAYOUT:**
Use CSS columns for masonry effect:
```css
.masonry-grid {
  columns: 1; /* Mobile */
}

@media (min-width: 768px) {
  .masonry-grid {
    columns: 2; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    columns: 3; /* Desktop */
  }
}
```

Or use absolute positioning with calculated heights.

**TIMELINE ANIMATION LOGIC:**
```typescript
// Pseudocode for timeline animation
1. Observe timeline container with IntersectionObserver
2. When visible (threshold 0.2):
   a. Animate progress line height 0% → 100% (1s)
   b. Sequentially (600ms delay each):
      - Fade in step card (opacity 0 → 1, translateY 50px → 0)
      - Activate dot (scale 0.8 → 1, color change, add shadow)
3. When scrolling back up past section:
   - Reset all animations to initial state
```

**RESPONSIVE BEHAVIOR:**
- **Mobile (<768px)**: 
  - Single column layouts
  - Floating nav becomes full-width bar
  - Hero text smaller (text-4xl)
  - Stats stack vertically
  - Timeline becomes vertical (no progress line on mobile)
  - Masonry becomes single column
- **Tablet (768px-1024px)**:
  - Two-column grids
  - Hero text medium (text-6xl)
  - Timeline with progress line
  - Masonry two columns
- **Desktop (>1024px)**:
  - Three-column grids
  - Hero text large (text-9xl)
  - Full timeline with progress line
  - Masonry three columns

**GRADIENT TEXT EFFECT:**
```css
.text-gradient {
  background: linear-gradient(135deg, #334155 0%, #64748b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**MAGNETIC BUTTON EFFECT (Optional):**
Track mouse position and translate button slightly toward cursor on hover.

**PERFORMANCE OPTIMIZATIONS:**
- Lazy load images below fold
- Use CSS transforms for animations (GPU-accelerated)
- Debounce scroll listeners
- Use `will-change` sparingly for animated elements
- Implement virtual scrolling if many items
- Optimize images (WebP, responsive sizes)

Please analyze the provided UI design and implement it step-by-step, creating a production-ready fashion studio landing page that follows our project standards and delivers a luxurious user experience.

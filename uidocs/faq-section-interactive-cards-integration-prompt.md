# FAQ Section with Interactive Cards - UI Integration Prompt

I want to integrate a custom UI design into our project-componets project. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 + Design System Tokens (from `design -system/`)
- Backend: N/A (Component Library - Demo purposes only)
- Language: TypeScript 5
- Target file: `ui/components/faq/`
- Existing functionality: N/A (New domain for FAQ/support components)

**UI TO INTEGRATE:**

See `ideas/FAQ Section with Interactive Cards.html` - Nexus Digital FAQ section featuring:
- Dark theme (neutral-900 background) with subtle pattern overlay
- Hero section with badge, large typography, and description
- 3-column responsive grid of FAQ cards
- Interactive cards with:
  - Color-coded category badges (AI, Video, Support, Strategy, Security, Pricing)
  - Gradient borders
  - Decorative corner icons (4 corners per card)
  - Hover effects (lift, scale)
  - "Read Full Answer" CTA with arrow icon
- Two-button CTA section ("Browse All FAQs" + "Ask Our Experts")
- Scroll-reveal animations with staggered timing
- Radial gradient pattern background

**Key Design Elements:**
- Fonts: Inter (body), Fraunces (headings)
- Color Scheme: Dark (neutral-900) with vibrant category colors (red, blue, green, purple, orange, emerald)
- Typography: Large heading with gradient text effect
- Cards: Gradient borders, corner icon decorations, glassmorphism hints
- Animations: fadeIn, card-hover, scale-hover effects
- Icons: Lucide icons throughout

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture
   - Keep TypeScript type safety
   - Preserve design system token usage
   - Follow vertical slice ownership pattern

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React 19 components
   - Replace inline Tailwind classes with design system tokens
   - Implement scroll-reveal animations
   - Create reusable card components
   - Ensure responsive design (1-col mobile, 2-col tablet, 3-col desktop)
   - Add accessibility attributes (WCAG 2.1 AA)

3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces (export from `ui/components/types/faq.types.ts`)
   - Use React 19 patterns (hooks, event handlers)
   - Implement Intersection Observer for scroll animations
   - Create reusable badge/category components
   - Add loading states for async FAQ data
   - Optimize for performance (virtualization if many FAQs)

4. 📱 **Feature Integration**
   - FAQ card grid with category filtering (optional)
   - Expandable/collapsible FAQ content (modal or accordion)
   - Search functionality (optional)
   - Category color coding
   - Hover animations and interactions
   - Scroll-triggered reveal animations
   - CTA buttons with routing
   - Loading skeletons for FAQ cards

5. 🎯 **Specific Adaptations Needed**
   - Replace Inter/Fraunces fonts with design system font stack
   - Convert neutral-900 dark theme to design system tokens
   - Adapt category colors to design system palette
   - Create gradient border effect with CSS or pseudo-elements
   - Implement corner icon positioning system
   - Add smooth scroll-reveal with IntersectionObserver
   - Create responsive grid breakpoints

**COMPONENT STRUCTURE:**
```
ui/components/faq/
├── FAQSection.tsx                    # Main FAQ section container
├── FAQHero.tsx                       # Header with title and description
├── FAQGrid.tsx                       # Grid container for FAQ cards
├── FAQCard.tsx                       # Individual FAQ card component
├── FAQCategoryBadge.tsx              # Colored category indicator
├── FAQCornerIcons.tsx                # Decorative corner icons
├── FAQCTASection.tsx                 # Bottom CTA buttons
├── types.ts                          # Re-export from types/faq.types.ts
├── index.ts                          # Public exports
└── README.md                         # Component documentation
```

**TYPE DEFINITIONS:**
```typescript
// ui/components/types/faq.types.ts
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  featured?: boolean;
}

export interface FAQCategory {
  id: string;
  name: string;
  color: string; // Tailwind color class
  icon: string; // Lucide icon name
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  faqs: FAQItem[];
  categories?: FAQCategory[];
  onReadMore?: (faqId: string) => void;
  onBrowseAll?: () => void;
  onAskExperts?: () => void;
  showCTA?: boolean;
  animateOnScroll?: boolean;
}

export interface FAQCardProps {
  faq: FAQItem;
  onReadMore?: (faqId: string) => void;
  animationDelay?: number;
  animated?: boolean;
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 component implementations
2. ✅ Updated TypeScript interfaces in `ui/components/types/faq.types.ts`
3. ✅ Tailwind CSS + Design System Token styling
4. ✅ Responsive FAQ grid layout
5. ✅ Interactive FAQ cards with hover effects
6. ✅ Category badges with color coding
7. ✅ Scroll-reveal animations using IntersectionObserver
8. ✅ Gradient border effects
9. ✅ Corner icon decorations
10. ✅ CTA section with buttons
11. ✅ Mobile-responsive layouts
12. ✅ Documentation with usage examples
13. ✅ Integration summary document

**TESTING REQUIREMENTS:**
- Ensure all FAQ cards render correctly
- Verify category colors match design
- Test hover effects (lift, scale transitions)
- Confirm scroll-reveal animations trigger properly
- Validate responsive grid layouts (1/2/3 columns)
- Test CTA button click handlers
- Check keyboard navigation through cards
- Verify accessibility compliance (focus indicators, ARIA labels)
- Test with different FAQ data (empty state, single item, many items)
- Validate animation performance (no jank)

**DESIGN SYSTEM COMPLIANCE:**
- Use design tokens from `design -system/` for colors, spacing, typography
- Map neutral-900 dark theme to design system equivalents
- Map category colors (red, blue, green, etc.) to design system palette
- No hard-coded values for colors or spacing
- Follow component naming conventions (PascalCase)
- Maintain file size limit (<500 lines per file)
- Co-locate related components
- Document all props and variants

**ACCESSIBILITY REQUIREMENTS:**
- Semantic HTML structure (section, article, heading hierarchy)
- Proper heading levels (h1, h2, h3)
- ARIA labels for interactive cards
- Keyboard navigation support (tab, enter)
- Focus indicators on all interactive elements
- Screen reader friendly category badges
- Alt text for decorative icons (aria-hidden if purely decorative)
- Sufficient color contrast (4.5:1 minimum for text)
- Reduced motion support (prefers-reduced-motion)

**ANIMATION REQUIREMENTS:**
- Fade-in effects for initial load
- Scroll-triggered reveal with IntersectionObserver
- Staggered animation delays (0.1s, 0.2s, 0.3s, etc.)
- Hover effects (translateY, scale, shadow)
- Smooth transitions (cubic-bezier easing)
- Respect prefers-reduced-motion setting
- Performance: Use transform and opacity (GPU-accelerated)
- Loading skeletons for initial render

**GRADIENT BORDER EFFECT:**
Implement the `gradient-border` class using CSS:
```css
.gradient-border {
  position: relative;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(115, 115, 115, 0.2));
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
}
```

**CORNER ICONS POSITIONING:**
Position icons in all four corners:
- Top-left: `absolute top-4 left-4`
- Top-right: `absolute top-4 right-4`
- Bottom-left: `absolute bottom-4 left-4`
- Bottom-right: `absolute bottom-4 right-4`

**RESPONSIVE BEHAVIOR:**
- **Mobile (<768px)**: 
  - Single column grid
  - Full-width cards
  - Stacked CTA buttons
  - Reduced padding
- **Tablet (768px-1024px)**:
  - Two-column grid
  - Cards span 2 columns for featured items
  - Side-by-side CTA buttons
- **Desktop (>1024px)**:
  - Three-column grid
  - Featured cards can span 2 columns
  - Full spacing and padding

**CATEGORY COLORS:**
Map these categories to design system colors:
- AI Development: Red (red-400/red-500)
- Video Production: Blue (blue-400/blue-500)
- Client Experience: Green (green-400/green-500)
- Strategy: Purple (purple-400/purple-500)
- Security: Orange (orange-400/orange-500)
- Pricing: Emerald (emerald-400/emerald-500)

**INTERACTION STATES:**
- Default: Subtle shadow, normal scale
- Hover: Lift effect (translateY(-4px)), increased shadow, scale(1.02)
- Focus: Visible focus ring, increased border opacity
- Active: Slightly reduced scale (0.98)

Please analyze the provided UI design and implement it step-by-step, creating a production-ready FAQ section component that follows our project standards and provides an engaging user experience.

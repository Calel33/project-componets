# 🎯 Bubble Childcare Landing Page Integration Prompt

## Generated from UI Integration Template
**Source Component:** `test/bubble.html`  
**Generated:** 2025-09-29

---

```
I want to integrate a custom UI design into our React Component Library project. Please extract and adapt this interface to work with our React + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS (with design system tokens)
- Backend: Static content (can be extended to form submission API)
- Language: TypeScript
- Target file: src/components/childcare/BubbleLanding.tsx
- Existing functionality: Component library for landing pages and marketing sites

**UI TO INTEGRATE:**

The Bubble childcare landing page is a complete, modern landing page with:
- Fixed header with glass-effect backdrop blur
- Hero section with hover video effect
- Feature highlights grid (4 cards)
- Programs section with 3 cards (Infant, Toddler, Preschool)
- Promise/Stats section with image and metrics
- Testimonials section (3 parent stories)
- Visit CTA with form
- Footer with links and social media

Key Design Features:
- Font: Nunito (Google Fonts)
- Color scheme: Black/neutral with transparent overlays
- Border style: border-black/10 with bg-black/5
- Rounded corners: rounded-xl, rounded-2xl
- Glass-effect navigation with backdrop-blur
- Hover effects: scale-[1.03] on images
- Mobile-responsive with hamburger menu

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component modularity and reusability
   - Keep TypeScript type safety
   - Preserve responsive design patterns
   - Maintain accessibility standards (ARIA labels, semantic HTML)

2. 🎨 **Adapt Design Elements**
   - Convert HTML to React TSX components
   - Replace inline SVGs with Lucide React icons
   - Use Nunito font (add to project fonts)
   - Convert Tailwind classes to design system tokens where applicable:
     - Colors: black/neutral palette with opacity variants
     - Typography: Nunito font family
     - Spacing: consistent padding and gaps
     - Radius: rounded-xl, rounded-2xl
     - Borders: border-black/10
     - Backgrounds: bg-black/5, backdrop-blur effects
   - Ensure responsive breakpoints (sm:, md:, lg:) work correctly
   - Maintain hover effects and transitions

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for:
     - `FeatureCard` (icon, title, description)
     - `ProgramCard` (image, ageRange, icon, title, description, link)
     - `TestimonialCard` (avatar, name, role, quote)
     - `StatCard` (value, label)
     - `BubbleLandingProps` (all sections data)
   - Use React best practices:
     - Functional components with proper typing
     - Props destructuring
     - Map over data arrays for dynamic rendering
     - useState for mobile menu toggle
     - useEffect for video hover behavior
   - Implement proper event handlers
   - Add form validation for visit request form
   - Optimize for React 19 performance

4. 📱 **Feature Integration**
   - Fixed header with glass-effect backdrop blur
   - Mobile hamburger menu with toggle animation
   - Hero video hover effect (play on hover, pause on leave)
   - Image hover scale animations (scale-[1.03])
   - Form submission handling
   - Smooth scroll to sections
   - Icon initialization (Lucide React)
   - Dynamic year in footer

5. 🎯 **Specific Adaptations Needed**
   - Replace `<a>` tags with React Router Link or Next.js Link (configurable)
   - Convert inline SVGs to `lucide-react` imports:
     - Phone, Calendar, Hand, Compass, Baby, GraduationCap, Shield, HeartHandshake
     - Menu, X (for mobile menu)
     - ArrowRight, Check, MessageCircle, DoorOpen, Send
     - MapPin, Mail, Instagram, Facebook, Twitter
   - Add Nunito font to project (Google Fonts or local)
   - Convert vanilla JS to React patterns:
     - Mobile menu toggle → useState
     - Video hover → useRef + event handlers
     - Lucide icons → automatic with lucide-react
   - Make all content data-driven (accept props)
   - Create separate sub-components:
     - `BubbleHeader.tsx` - Fixed navigation
     - `BubbleHero.tsx` - Hero with video hover
     - `FeatureHighlights.tsx` - 4 feature cards
     - `ProgramsSection.tsx` - Programs grid
     - `PromiseSection.tsx` - Promise with stats
     - `TestimonialsSection.tsx` - Parent stories
     - `VisitCTA.tsx` - Visit form section
     - `BubbleFooter.tsx` - Footer with links
     - `BubbleLanding.tsx` - Main container
   - Ensure all images are configurable (not hard-coded URLs)
   - Add proper form handling with validation

**COMPONENT STRUCTURE:**
```
src/components/childcare/
├── BubbleLanding.tsx          # Main container component
├── BubbleHeader.tsx            # Fixed navigation with glass effect
├── BubbleHero.tsx              # Hero with video hover
├── FeatureHighlights.tsx       # Feature cards grid
├── ProgramsSection.tsx         # Programs cards
├── PromiseSection.tsx          # Promise with stats
├── TestimonialsSection.tsx     # Testimonials grid
├── VisitCTA.tsx                # Visit form
├── BubbleFooter.tsx            # Footer
├── types.ts                    # TypeScript interfaces
└── index.ts                    # Barrel export

alimonyapp/componets/types/
└── childcare.types.ts          # Centralized type definitions
```

**DELIVERABLES:**
1. ✅ Complete React + TypeScript component implementation
2. ✅ TypeScript interfaces in `types/childcare.types.ts`
3. ✅ Tailwind CSS with Nunito font integration
4. ✅ Lucide React icons integration (20+ icons)
5. ✅ Working hover animations and transitions
6. ✅ Mobile menu with toggle functionality
7. ✅ Hero video hover effect
8. ✅ Form validation and submission handling
9. ✅ Responsive design (mobile-first approach)
10. ✅ README.md with usage examples
11. ✅ INSTALLATION.md with setup instructions
12. ✅ USAGE_EXAMPLE.tsx with implementation example
13. ✅ LAYOUT_EXAMPLES.tsx with layout variations

**TESTING REQUIREMENTS:**
- Ensure component renders without errors
- Verify mobile menu toggle works correctly
- Test video hover effect (play/pause)
- Confirm all hover effects work (image scale, button states)
- Test form validation and submission
- Verify responsive behavior on mobile, tablet, desktop
- Confirm image loading and optimization
- Validate TypeScript types are correct
- Check accessibility (keyboard navigation, screen readers, ARIA labels)
- Test smooth scroll to sections
- Verify all icons render correctly
- Test glass-effect backdrop blur on header

**DESIGN SYSTEM NOTES:**
This component uses a unique design language:
- **Font**: Nunito (not in current design system)
- **Color Palette**: Black/neutral with opacity variants (black/5, black/10, black/70, black/80, black/90)
- **Glass Effect**: backdrop-blur with bg-white/5 or bg-black/5
- **Borders**: Consistent border-black/10
- **Shadows**: Custom shadow for CTA section
- **Hover States**: Scale transforms and background opacity changes

**SPECIAL FEATURES:**
1. **Video Hover Effect**: Hero section plays video on hover/focus
2. **Glass Navigation**: Fixed header with backdrop-blur effect
3. **Mobile Menu**: Animated toggle with icon swap
4. **Form Handling**: Visit request form with validation
5. **Dynamic Content**: All sections accept data via props
6. **Smooth Scroll**: Navigation links scroll to sections
7. **Icon System**: Extensive use of Lucide icons

**ACCESSIBILITY REQUIREMENTS:**
- Semantic HTML (header, nav, main, section, article, footer)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus states on all focusable elements
- Alt text for all images
- Form labels and error messages
- Mobile menu aria-expanded state
- Video controls for accessibility

Please analyze the provided UI design and implement it step-by-step, maintaining our component library standards while delivering the exact visual design requested. Follow the file structure pattern established in `alimonyapp/componets/portfolio/` and `alimonyapp/componets/medical/` for consistency.
```

---

## 📦 **Expected Output Structure**

```
alimonyapp/componets/childcare/
├── BubbleLanding.tsx
├── BubbleHeader.tsx
├── BubbleHero.tsx
├── FeatureHighlights.tsx
├── ProgramsSection.tsx
├── PromiseSection.tsx
├── TestimonialsSection.tsx
├── VisitCTA.tsx
├── BubbleFooter.tsx
├── types.ts (re-exports)
├── index.ts
├── README.md
├── INSTALLATION.md
├── USAGE_EXAMPLE.tsx
└── LAYOUT_EXAMPLES.tsx

alimonyapp/componets/types/
└── childcare.types.ts
```

## 🎨 **Design Tokens**

**Colors:**
- Primary: Black (#000000)
- Background: neutral-50 (#fafafa)
- Overlays: black/5, black/10, black/70, black/80, black/90
- Borders: black/10
- Text: black, black/80, black/70, black/60

**Typography:**
- Font Family: Nunito (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800
- Sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-7xl

**Spacing:**
- Gaps: gap-2, gap-3, gap-4, gap-6, gap-8, gap-10
- Padding: p-4, p-6, p-8, p-10, px-3, py-2, etc.
- Margins: mt-2, mt-3, mt-4, mt-6, mt-8, etc.

**Border Radius:**
- Small: rounded-lg, rounded-xl
- Large: rounded-2xl
- Full: rounded-full

**Effects:**
- Backdrop blur: backdrop-blur, backdrop-blur-xl
- Shadows: shadow-sm, shadow-xl, custom shadow
- Transitions: transition, duration-500
- Hover: hover:scale-[1.03], hover:bg-black/5, hover:bg-black/90

## 🚀 **Next Steps**

1. Copy this entire prompt
2. Submit to AI agent for implementation
3. Review generated components
4. Test in development environment
5. Integrate into main application

---

**Template Version:** 1.0  
**Component Type:** Childcare Landing Page (Bubble)  
**Complexity:** High  
**Estimated Implementation Time:** 4-6 hours  
**Components Count:** 9 components + types

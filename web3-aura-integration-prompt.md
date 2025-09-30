# 🎯 Aura Web3 Infrastructure Landing Page Integration Prompt

## Generated from UI Integration Template
**Source Component:** `test/web3lander1.html`  
**Generated:** 2025-09-29

---

```
I want to integrate a custom UI design into our React Component Library project. Please extract and adapt this interface to work with our React + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS (with design system tokens)
- Backend: Static content (can be extended to Web3 integration)
- Language: TypeScript
- Target file: src/components/web3/AuraLanding.tsx
- Existing functionality: Component library for Web3/blockchain landing pages

**UI TO INTEGRATE:**

The Aura Web3 Infrastructure landing page is a complete, modern dark-themed landing page with:
- Spline 3D background animation (iframe)
- Fixed header with glass-effect backdrop blur
- Hero section with animated floating tags
- Networks showcase grid
- Pricing section (3 tiers: Starter, Professional, Enterprise)
- Testimonials section with 5-star ratings
- FAQ section with accordion functionality
- Footer with social links

Key Design Features:
- Font: Geist (Google Fonts)
- Color scheme: Dark (black background) with orange accent (#f97316, orange-400/500/600)
- Glass-effect navigation with backdrop-blur-xl
- Border style: border-white/10, border-white/20
- Backgrounds: bg-white/5, bg-white/10
- Animated elements: fadeInUp, float animations
- Gradient text: from-orange-400 via-orange-500 to-orange-600
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
   - Use Geist font (add to project fonts)
   - Convert Tailwind classes to design system tokens where applicable:
     - Colors: black background, white text, orange accent
     - Typography: Geist font family
     - Spacing: consistent padding and gaps
     - Radius: rounded-lg, rounded-2xl, rounded-3xl, rounded-full
     - Borders: border-white/10, border-white/20
     - Backgrounds: bg-white/5, bg-white/10, backdrop-blur-xl
     - Gradients: from-orange-400 via-orange-500 to-orange-600
   - Ensure responsive breakpoints (sm:, md:, lg:) work correctly
   - Maintain hover effects and transitions
   - Implement custom animations (fadeInUp, float)

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for:
     - `NetworkCard` (symbol, name)
     - `PricingPlan` (name, description, price, features, highlighted, buttonText)
     - `TestimonialCard` (rating, quote, author, role, avatar)
     - `FAQItem` (question, answer)
     - `StatCard` (value, label)
     - `AuraLandingProps` (all sections data)
   - Use React best practices:
     - Functional components with proper typing
     - Props destructuring
     - Map over data arrays for dynamic rendering
     - useState for mobile menu and FAQ accordion
     - useEffect for animations
   - Implement proper event handlers
   - Add FAQ accordion functionality
   - Optimize for React 19 performance

4. 📱 **Feature Integration**
   - Fixed header with glass-effect backdrop blur
   - Mobile hamburger menu with toggle animation
   - Spline 3D background (iframe or alternative)
   - Animated floating tags with staggered delays
   - Fade-in-up animations on scroll
   - FAQ accordion with smooth transitions
   - Smooth scroll to sections
   - Icon initialization (Lucide React)
   - Hover scale effects on buttons

5. 🎯 **Specific Adaptations Needed**
   - Replace `<a>` tags with React Router Link or Next.js Link (configurable)
   - Convert inline SVGs to `lucide-react` imports:
     - ShieldCheck, Zap, Rocket, Database, Globe, Shield, Cpu
     - Menu, X (for mobile menu)
     - Check, Star, ChevronDown, MessageCircle
     - Twitter, Github, Headphones
   - Add Geist font to project (Google Fonts or local)
   - Convert vanilla JS to React patterns:
     - Mobile menu toggle → useState
     - FAQ accordion → useState + map
     - Animations → CSS + useEffect
     - Lucide icons → automatic with lucide-react
   - Handle Spline 3D background (iframe or alternative solution)
   - Make all content data-driven (accept props)
   - Create separate sub-components:
     - `AuraHeader.tsx` - Fixed navigation
     - `AuraHero.tsx` - Hero with floating tags
     - `NetworksSection.tsx` - Networks grid
     - `PricingSection.tsx` - Pricing cards
     - `TestimonialsSection.tsx` - Testimonials grid
     - `FAQSection.tsx` - FAQ accordion
     - `AuraFooter.tsx` - Footer with links
     - `AuraLanding.tsx` - Main container
   - Ensure all images/backgrounds are configurable
   - Add proper animation timing and delays

**COMPONENT STRUCTURE:**
```
src/components/web3/
├── AuraLanding.tsx            # Main container component
├── AuraHeader.tsx              # Fixed navigation with glass effect
├── AuraHero.tsx                # Hero with animated floating tags
├── NetworksSection.tsx         # Networks showcase grid
├── PricingSection.tsx          # Pricing tiers
├── TestimonialsSection.tsx     # Testimonials with ratings
├── FAQSection.tsx              # FAQ accordion
├── AuraFooter.tsx              # Footer
├── types.ts                    # TypeScript interfaces
└── index.ts                    # Barrel export

alimonyapp/componets/types/
└── web3.types.ts               # Centralized type definitions
```

**DELIVERABLES:**
1. ✅ Complete React + TypeScript component implementation
2. ✅ TypeScript interfaces in `types/web3.types.ts`
3. ✅ Tailwind CSS with Geist font integration
4. ✅ Lucide React icons integration (15+ icons)
5. ✅ Working hover animations and transitions
6. ✅ Mobile menu with toggle functionality
7. ✅ FAQ accordion with smooth transitions
8. ✅ Custom animations (fadeInUp, float)
9. ✅ Spline 3D background integration
10. ✅ Responsive design (mobile-first approach)
11. ✅ README.md with usage examples
12. ✅ INSTALLATION.md with setup instructions
13. ✅ USAGE_EXAMPLE.tsx with implementation example
14. ✅ LAYOUT_EXAMPLES.tsx with layout variations

**TESTING REQUIREMENTS:**
- Ensure component renders without errors
- Verify mobile menu toggle works correctly
- Test FAQ accordion expand/collapse
- Confirm all hover effects work (button scale, background changes)
- Test animations (fadeInUp, float)
- Verify responsive behavior on mobile, tablet, desktop
- Confirm 3D background loads correctly
- Validate TypeScript types are correct
- Check accessibility (keyboard navigation, screen readers, ARIA labels)
- Test smooth scroll to sections
- Verify all icons render correctly
- Test glass-effect backdrop blur on header

**DESIGN SYSTEM NOTES:**
This component uses a unique dark design language:
- **Font**: Geist (not in current design system)
- **Color Palette**: 
  - Background: black (#000000)
  - Text: white (#ffffff), gray-300, gray-400, gray-500
  - Accent: orange-400, orange-500, orange-600 (#f97316)
  - Overlays: white/5, white/10, white/20
- **Glass Effect**: backdrop-blur-xl with bg-white/5
- **Borders**: Consistent border-white/10, border-white/20
- **Gradients**: from-orange-400 via-orange-500 to-orange-600
- **Shadows**: shadow-lg, shadow-2xl
- **Hover States**: Scale transforms, background opacity changes, border color changes

**SPECIAL FEATURES:**
1. **Spline 3D Background**: Animated 3D space particles (iframe)
2. **Glass Navigation**: Fixed header with backdrop-blur-xl
3. **Floating Tags**: Animated tags with staggered float animation
4. **Mobile Menu**: Animated toggle with icon swap
5. **FAQ Accordion**: Smooth expand/collapse with icon rotation
6. **Fade-in Animations**: Staggered fadeInUp on page load
7. **Dynamic Content**: All sections accept data via props
8. **Smooth Scroll**: Navigation links scroll to sections
9. **Icon System**: Extensive use of Lucide icons

**CUSTOM ANIMATIONS:**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-delay-100 { animation-delay: 0.1s; }
.animate-delay-200 { animation-delay: 0.2s; }
.animate-delay-300 { animation-delay: 0.3s; }
.animate-delay-500 { animation-delay: 0.5s; }
.animate-delay-700 { animation-delay: 0.7s; }
```

**ACCESSIBILITY REQUIREMENTS:**
- Semantic HTML (header, nav, main, section, article, footer)
- ARIA labels on all interactive elements
- Keyboard navigation support (Tab, Enter, Space)
- Focus states on all focusable elements
- Alt text for all images
- FAQ accordion aria-expanded states
- Mobile menu aria-expanded state
- Proper heading hierarchy (h1, h2, h3)
- Color contrast compliance (WCAG AA)

**SPLINE 3D BACKGROUND:**
- Original uses iframe: `https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx`
- Consider alternatives:
  - Keep iframe (simplest)
  - Use Spline React component
  - Replace with CSS/Canvas animation
  - Make it optional/configurable

Please analyze the provided UI design and implement it step-by-step, maintaining our component library standards while delivering the exact visual design requested. Follow the file structure pattern established in `alimonyapp/componets/portfolio/` and `alimonyapp/componets/medical/` for consistency.
```

---

## 📦 **Expected Output Structure**

```
alimonyapp/componets/web3/
├── AuraLanding.tsx
├── AuraHeader.tsx
├── AuraHero.tsx
├── NetworksSection.tsx
├── PricingSection.tsx
├── TestimonialsSection.tsx
├── FAQSection.tsx
├── AuraFooter.tsx
├── types.ts (re-exports)
├── index.ts
├── README.md
├── INSTALLATION.md
├── USAGE_EXAMPLE.tsx
└── LAYOUT_EXAMPLES.tsx

alimonyapp/componets/types/
└── web3.types.ts
```

## 🎨 **Design Tokens**

**Colors:**
- Background: black (#000000)
- Text: white (#ffffff), gray-300, gray-400, gray-500
- Accent: orange-400 (#fb923c), orange-500 (#f97316), orange-600 (#ea580c)
- Overlays: white/5, white/10, white/20
- Borders: white/10, white/20
- Success: green-400

**Typography:**
- Font Family: Geist (Google Fonts)
- Weights: 300 (light), 400, 500, 600, 700 (semibold)
- Sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-6xl, text-7xl, text-8xl

**Spacing:**
- Gaps: gap-2, gap-3, gap-4, gap-6, gap-8
- Padding: p-2, p-4, p-6, p-8, px-4, py-2, etc.
- Margins: mt-4, mt-6, mt-8, mt-12, mt-16, etc.

**Border Radius:**
- Small: rounded-lg, rounded-xl
- Large: rounded-2xl, rounded-3xl
- Full: rounded-full

**Effects:**
- Backdrop blur: backdrop-blur-sm, backdrop-blur-xl
- Shadows: shadow-lg, shadow-2xl
- Transitions: transition-all, transition-colors, duration-200, duration-300
- Hover: hover:scale-105, hover:bg-white/5, hover:bg-orange-500, hover:text-orange-400
- Animations: animate-fade-in-up, animate-float, animate-ping

## 🚀 **Next Steps**

1. Copy this entire prompt
2. Submit to AI agent for implementation
3. Review generated components
4. Test in development environment
5. Integrate into main application

---

**Template Version:** 1.0  
**Component Type:** Web3 Infrastructure Landing Page (Aura)  
**Complexity:** High  
**Estimated Implementation Time:** 5-7 hours  
**Components Count:** 8 components + types + animations

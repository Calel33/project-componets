# 🎯 **Creative Studio Landing Page Integration Prompt**

I want to integrate a creative studio design interface into our project-components library. Please extract and adapt this interface to work with our React + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 18 + Vite
- Styling: Tailwind CSS + Custom Design System  
- Backend: Static components (no backend integration required)
- Language: TypeScript
- Target location: `ui/components/creative-studio/`
- Existing functionality: Reusable component library with design system integration

**UI TO INTEGRATE:**

```html
<!-- Creative Studio Landing Page Template from ideas/Creative Studio Landing Page Template.html -->
<!-- 
Key Features:
- Spline 3D background integration
- Large typography hero section with arrow icons  
- Three-column hero grid layout
- Interactive project cards with hover effects
- Team photo collage display
- Featured work portfolio grid
- Creative process section with steps
- Testimonials carousel with image rotation
- Pricing tiers with different styles
- Professional footer with social links
- Smooth scroll animations throughout
- Custom coral color scheme
- Glass morphism effects
- Progress indicators and interactive elements
-->

<!-- Full HTML provided in ideas/Creative Studio Landing Page Template.html -->
```

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain design system integration with tokens from `design-system/design.md`
   - Keep TypeScript type safety throughout components
   - Preserve reusable component architecture
   - Maintain accessibility standards (WCAG 2.1 AA)

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React TSX components
   - Replace vanilla CSS classes with Tailwind CSS using design system tokens
   - Convert Spline iframe to optional external integration component
   - Ensure responsive design for mobile, tablet, and desktop
   - Implement proper TypeScript interfaces for all props

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces in `ui/components/types/creative-studio.types.ts`
   - Convert vanilla JavaScript to React hooks (useState, useEffect, useRef)
   - Implement proper event handlers with TypeScript
   - Add error boundaries for external integrations (Spline)
   - Use React best practices (functional components, hooks)

4. 📱 **Feature Integration**
   - Interactive testimonials carousel with state management
   - Smooth scroll animations using Intersection Observer API
   - Hover effects on project cards and interactive elements  
   - Mobile responsive navigation and layout
   - Form validation for contact/pricing interactions

5. 🎯 **Specific Adaptations Needed**
   - Replace external CDN imports with local dependencies
   - Convert scroll animations to React-based implementation
   - Adapt coral color scheme using design system color tokens
   - Ensure compatibility with existing component library
   - Maintain consistent spacing and typography scales

**COMPONENT STRUCTURE:**

Create the following components in `ui/components/creative-studio/`:

- **CreativeStudioLanding.tsx** - Main landing page composition
- **CreativeStudioHero.tsx** - Hero section with three-column layout
- **SplineBackground.tsx** - 3D background integration component
- **ProjectCard.tsx** - Reusable project showcase card
- **TeamCollage.tsx** - Team photo display component
- **ProcessSteps.tsx** - Creative process section
- **TestimonialsCarousel.tsx** - Interactive testimonials slider
- **PricingTiers.tsx** - Pricing packages display
- **CreativeStudioFooter.tsx** - Footer with social links
- **types.ts** - Re-export from centralized types
- **index.ts** - Component exports
- **README.md** - Documentation and usage examples

**DELIVERABLES:**

1. ✅ Complete React component implementation
2. ✅ Updated TypeScript interfaces in types directory
3. ✅ Tailwind CSS styling using design system tokens
4. ✅ Preserved responsive design functionality
5. ✅ Working animations and interactions
6. ✅ Mobile-optimized layout
7. ✅ Component documentation and usage examples
8. ✅ Integration summary and installation guide

**TESTING REQUIREMENTS:**
- Ensure all components render without TypeScript errors
- Verify interactive elements work (carousel, hover effects)
- Test responsive behavior on mobile, tablet, desktop
- Confirm scroll animations trigger properly
- Validate accessibility compliance
- Test Spline background integration (graceful fallback)
- Check component composition and reusability

**DESIGN SYSTEM INTEGRATION:**

Map the coral color scheme to design system tokens:
- `coral-50` → `hsl(var(--accent))/10` (light accent)
- `coral-500` → `hsl(var(--accent))` (primary accent)
- `coral-600` → `hsl(var(--accent))/90` (darker accent)

Use existing design system tokens for:
- Typography: Follow existing font scales and weights
- Spacing: Use consistent spacing units
- Borders: Apply standard border radius tokens
- Shadows: Use elevation system shadows

**ANIMATION REQUIREMENTS:**
- Convert vanilla scroll animations to React Intersection Observer
- Implement staggered animations for grid items
- Add hover state transitions using Tailwind utilities
- Ensure animations respect prefers-reduced-motion

**ACCESSIBILITY CONSIDERATIONS:**
- Semantic HTML structure in JSX
- Proper ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for carousel
- Alt text for all images
- Color contrast compliance
- Screen reader friendly content

Please analyze the provided Creative Studio design and implement it step-by-step as reusable React components, maintaining our existing design system integration while delivering the exact visual design and functionality requested.
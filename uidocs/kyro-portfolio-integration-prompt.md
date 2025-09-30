# 🎨 KYRO Creative Technologist Portfolio UI Integration Prompt

## Generated from UI-Integration-Template.md

---

```
I want to integrate a custom UI design into our Elite Component Library project. Please extract and adapt this interface to work with our React + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite 7
- Styling: Tailwind CSS 3 + Lucide React Icons
- Backend: Static (no backend integration required)
- Language: TypeScript 5
- Target file: src/KyroPortfolioLanding.tsx (new component)
- Existing functionality: None (new portfolio landing page component)

**UI TO INTEGRATE:**
Source file: ideas/3D Animated Hero with Info Grid.html

This is a modern creative technologist portfolio featuring:
- **3D Background**: Embedded Spline 3D gradient animation with layered background effects (dots, grid, vignette)
- **Dynamic Header**: Live local time clock with status indicator and contact CTA
- **Animated Hero**: Large typographic title "KYRO" with letter-by-letter slide-in animation using CSS keyframes
- **Info Grid**: Three-column responsive grid displaying location, availability, and role information
- **Featured Image**: Hero image with gradient overlay and glassmorphic styling
- **Work Showcase**: Three-column portfolio grid with hover effects and project cards
- **About Section**: Complex 12-column grid layout with portrait, statistics overlay, and biographical information
- **Services Section**: Three detailed service offerings with imagery, checklists, and CTAs
- **Contact Footer**: Glass-effect footer with email and messaging CTAs

**INTEGRATION REQUIREMENTS:**
1. 🔄 **Preserve All Existing Functionality**
   - Maintain 3D Spline iframe background integration
   - Keep live clock functionality (updates every second)
   - Preserve letter-by-letter animation on hero title
   - Maintain all hover effects and transitions
   - Keep responsive grid layouts intact

2. 🎨 **Adapt Design Elements**
   - Convert HTML to React 19 functional components
   - Replace vanilla JavaScript with React hooks (useState, useEffect)
   - Convert Lucide CDN to lucide-react npm package
   - Ensure responsive design for mobile (375px), tablet (768px), desktop (1440px+)
   - Maintain WCAG 2.1 AA accessibility standards
   - Preserve glassmorphic effects (backdrop-blur, ring borders)

3. 🔧 **Technical Adaptations**
   - Convert to TypeScript with proper interfaces/types
   - Use React 19 best practices (hooks, memo where beneficial)
   - Implement proper event handlers with TypeScript
   - Extract CSS animations to separate style block or Tailwind config
   - Remove Tailwind CDN and use local npm package
   - Remove Google Fonts CDN, use local font or @fontsource/inter

4. 📱 **Feature Integration**
   - Live clock with useEffect hook for interval management
   - Letter-by-letter animation with CSS keyframes (preserve exact timing)
   - Smooth scroll behavior for anchor navigation (#contact, #about, #services)
   - Hover state management for portfolio cards (scale transform)
   - Image loading with proper alt text for accessibility
   - Responsive navigation with mobile-friendly touch targets

5. 🎯 **Specific Adaptations Needed**
   - Replace Tailwind CDN with npm package (@tailwindcss)
   - Convert Lucide CDN to lucide-react components
   - Extract Inter font to @fontsource/inter or next/font
   - Handle Spline iframe responsively (consider fallback for slow connections)
   - Create reusable sub-components (Header, HeroSection, InfoGrid, WorkCard, AboutSection, ServiceCard, Footer)
   - Extract live clock logic to custom hook (useLiveClock)
   - Type all props and component interfaces
   - Preserve exact animation timings and delays

**COMPONENT STRUCTURE:**
```
src/
├── components/
│   ├── portfolio/
│   │   ├── KyroPortfolioLanding.tsx (main component)
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InfoGrid.tsx
│   │   ├── InfoCard.tsx
│   │   ├── WorkShowcase.tsx
│   │   ├── WorkCard.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ContactFooter.tsx
│   │   └── hooks/
│   │       └── useLiveClock.ts
│   └── types/
│       └── portfolio.types.ts
```

**DESIGN SYSTEM INTEGRATION:**
- Use design system tokens from `design -system/design.md`
- Colors: Map to neutral palette (white/10 opacity variations)
- Spacing: Use Tailwind spacing scale (4, 6, 8, 10, 14, 16, 20, 24)
- Typography: Inter font family with tracking-tight
- Radius: Consistent use of rounded-xl, rounded-2xl, rounded-full
- Shadows: ring-1 ring-white/10 pattern for borders
- No hard-coded values; use design tokens

**DELIVERABLES:**
1. ✅ Complete React 19 component implementation
2. ✅ Updated TypeScript interfaces/types for all props
3. ✅ Tailwind CSS styling using design system tokens
4. ✅ Modular component architecture (max 500 lines per file)
5. ✅ Working animations (letter slide-in, hover effects)
6. ✅ Live clock with proper cleanup on unmount
7. ✅ Responsive design for mobile/tablet/desktop
8. ✅ Documentation of component usage and props
9. ✅ Accessibility compliance (ARIA labels, semantic HTML, keyboard navigation)
10. ✅ Custom hook for live clock (useLiveClock)

**TESTING REQUIREMENTS:**
- Ensure the interface loads without errors
- Verify 3D Spline iframe loads properly (or show fallback)
- Test live clock updates every second
- Confirm letter-by-letter animation triggers on mount
- Test all interactive elements (buttons, hover states, links)
- Verify smooth scroll to anchor sections (#about, #services, #contact)
- Confirm responsive behavior on mobile (375px), tablet (768px), desktop (1440px+)
- Validate navigation functionality and touch targets
- Check accessibility compliance (keyboard navigation, screen readers, focus states)
- Test hover effects on portfolio cards and service images
- Verify animation performance (60fps)
- Confirm clock cleanup on component unmount (no memory leaks)

**IMPLEMENTATION RULES:**
- One responsibility per file
- Max file length: 500 lines
- Modular design enforced
- Use relative imports within domain
- No assumptions or hallucinated functions
- Confirm all paths and modules exist
- Never delete existing code
- Complete all related updates; no partial implementations
- Follow KISS and YAGNI principles
- Vertical slice organization

**KEY FEATURES TO PRESERVE:**
1. ✅ 3D Spline background with iframe integration
2. ✅ Live clock (LOCAL/ HH:MM:SS format, 24-hour)
3. ✅ Letter-by-letter slide-in animation on "KYRO" title
4. ✅ Three-column info grid (location, availability, role)
5. ✅ Featured hero image with gradient overlay
6. ✅ Portfolio showcase grid (3 cards with hover scale)
7. ✅ Complex about section with 12-column grid layout
8. ✅ Statistics overlays on portrait image
9. ✅ Services section with numbered rows and imagery
10. ✅ Glassmorphic styling (backdrop-blur, ring borders)
11. ✅ Contact footer with email and messaging CTAs
12. ✅ Smooth scroll navigation to anchor sections
13. ✅ Responsive breakpoints (sm, md, lg, xl, 2xl)
14. ✅ Lucide icons throughout interface

**ANIMATION DETAILS:**
- Letter slide-in animation:
  - Duration: 0.8s ease-out
  - Staggered delay: 0.1s per letter (0s, 0.1s, 0.2s, 0.3s)
  - Transform: translateY(-100%) to translateY(0)
  - Opacity: 0 to 1
  - Clip-path: inset(0 0 100% 0) to inset(0 0 0% 0)
- Hover effects:
  - Portfolio cards: scale-[1.03] with duration-500
  - Buttons: bg-white/10 to bg-white/20 transition
  - Icons: translate-x-0.5 on hover

**SPLINE IFRAME HANDLING:**
- Source: https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO
- Position: fixed top-0 w-full h-screen -z-10
- Fallback: Consider gradient background if iframe fails to load
- Performance: Ensure iframe doesn't block main thread

Please analyze the provided UI design and implement it step-by-step, maintaining modern React best practices while delivering the exact visual design and animations requested.
```

---

## 📂 **Source Files**
- **UI Design**: `ideas/3D Animated Hero with Info Grid.html`
- **Template**: `.windsurf/commands/UI-Integration-Template.md`
- **Target Location**: `src/components/portfolio/`
- **Design System**: `design -system/design.md`

## 🎯 **Implementation Checklist**
- [ ] Set up component structure in `src/components/portfolio/`
- [ ] Install required dependencies (lucide-react, @fontsource/inter)
- [ ] Create TypeScript interfaces in `portfolio.types.ts`
- [ ] Implement Header component with live clock
- [ ] Build HeroSection with letter animation
- [ ] Create InfoGrid with three cards
- [ ] Implement WorkShowcase with hover effects
- [ ] Build AboutSection with complex grid layout
- [ ] Create ServicesSection with numbered rows
- [ ] Implement ContactFooter with CTAs
- [ ] Extract useLiveClock custom hook
- [ ] Test responsive behavior on all breakpoints
- [ ] Verify animations and transitions
- [ ] Document component API and usage
- [ ] Test accessibility (keyboard nav, screen readers)

## 🚀 **Next Steps**
1. Review design system tokens in `design -system/design.md`
2. Set up folder structure and TypeScript interfaces
3. Install dependencies: `npm install lucide-react @fontsource/inter`
4. Implement components following modular architecture (max 500 lines each)
5. Extract live clock logic to custom hook with proper cleanup
6. Test all interactive features and animations
7. Validate responsive behavior and accessibility
8. Document component usage and props

---

**Generated on**: 2025-09-29  
**Template Version**: v1.0  
**Project**: Elite Component Library  
**Component**: KYRO Creative Technologist Portfolio

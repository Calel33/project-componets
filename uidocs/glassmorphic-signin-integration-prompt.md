# 🎯 Glassmorphic Sign-In Card Integration Prompt

## Generated from UI-Integration-Template.md

---

```
I want to integrate a custom UI design into our Elite Component Library project. Please extract and adapt this interface to work with our React + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 with Vite 7
- Styling: Tailwind CSS 3 + Lucide React Icons
- Backend: N/A (reusable component library - authentication logic provided via props)
- Language: TypeScript 5 (strict mode, no `any` types)
- Target file: ui/components/auth/GlasmorphicSignIn.tsx
- Existing functionality: Reusable component library with domain-organized components following vertical slice architecture

**UI TO INTEGRATE:**
Source file: ideas/Animated Dark Sign-In Card with Tailwind Glassmorphism.html

This is an animated dark-themed sign-in card featuring:
- **Glassmorphic Effects**: Layered glass-like backdrop with blur effects
- **Animated Background**: Rotating blur gradients with dual-layer animation (10s and 18s durations)
- **Gradient Borders**: Subtle gradient border that enhances on hover
- **Form Elements**:
  - Email input with mail icon
  - Password input with lock icon and show/hide toggle
  - Custom checkbox for "Remember me"
  - "Forgot password" and "Trouble signing in" links
- **Submit Button**: Gradient button with inset shadow and hover effects
- **OAuth Integration**: "Continue with GitHub" button
- **Divider**: "OR" separator between form and OAuth
- **Footer**: Sign-up link, Terms, and Privacy links
- **Hover Effects**: Card lift effect (-translate-y-0.5) with enhanced ring and shadow
- **Color Scheme**: Dark (hsl(220, 13%, 9%) base) with gray gradients
- **Accessibility**: Proper labels, required fields, autocomplete attributes

**INTEGRATION REQUIREMENTS:**
1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture (domain-organized under `ui/components/`)
   - Follow vertical slice pattern with co-located types
   - Keep design token system integration from `design -system/`
   - Preserve TypeScript strict mode (no `any` types)

2. 🎨 **Adapt Design Elements**
   - Convert HTML form to React controlled component with TypeScript interfaces
   - Replace inline styles with Tailwind utility classes and design tokens
   - Convert vanilla HTML inputs to controlled React inputs with state management
   - Use Lucide React icons (Mail, Lock, Eye, LogIn, Github)
   - Ensure responsive design for mobile (375px), tablet (768px), desktop (1024px+)
   - Maintain WCAG 2.1 AA accessibility standards

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for:
     - `SignInFormData` (email, password, remember)
     - `SignInCardProps` (onSubmit, onOAuthSignIn, onForgotPassword, loading state, error handling)
     - `FormFieldProps` (label, type, icon, error, required)
   - Use React hooks patterns (`useState` for form state, `useCallback` for handlers)
   - Implement proper event handlers (onSubmit, onChange, onBlur for validation)
   - Add client-side form validation
   - Extract reusable components:
     - `FormField` component (input with icon)
     - `CustomCheckbox` component
     - `DividerWithText` component
     - `AnimatedBackground` component

4. 📱 **Feature Integration**
   - **Form validation**: Email format, password requirements, real-time feedback
   - **Password visibility toggle**: Show/hide password with eye icon
   - **Remember me**: Controlled checkbox with state
   - **Loading states**: Disable form during submission, show spinner
   - **Error handling**: Display validation and submission errors
   - **Keyboard navigation**: Tab order, Enter to submit
   - **Animation**: Rotating blur backgrounds with CSS animations
   - **Hover effects**: Card lift, ring enhancement, shadow changes

5. 🎯 **Specific Adaptations Needed**
   - Convert inline `style` attributes to Tailwind arbitrary values or CSS-in-JS
   - Replace embedded SVG icons with Lucide React components
   - Convert radial gradient backgrounds to Tailwind utilities
   - Adapt rotating blur animations using Tailwind's `animate-spin` with custom durations
   - Implement gradient border effect using `before:` pseudo-element or border-image
   - Create custom checkbox with checked state and transition effects
   - Add proper TypeScript types for all form fields and handlers
   - Ensure form submission is controlled and provides callbacks for parent components

**COMPONENT STRUCTURE:**
Create the following file structure under `ui/components/auth/`:

```
ui/components/auth/
├── GlasmorphicSignIn.tsx          # Main sign-in card component
├── FormField.tsx                   # Reusable input field with icon
├── CustomCheckbox.tsx              # Styled checkbox component
├── DividerWithText.tsx             # OR divider component
├── AnimatedBackground.tsx          # Rotating blur backgrounds
├── types.ts                        # TypeScript interfaces
├── USAGE_EXAMPLE.tsx               # Demo implementation
├── LAYOUT_EXAMPLES.tsx             # Multiple configuration examples
└── README.md                       # Documentation
```

**DESIGN SYSTEM INTEGRATION:**
- Use design system tokens from `design -system/design.md`
- Colors: Map HSL colors to neutral/gray palette tokens
- Spacing: Use Tailwind spacing scale (consistent with project)
- Typography: Use project typography tokens
- Radius: rounded-lg, rounded-2xl, rounded-full
- Shadows: Custom shadow utilities for glassmorphic effect
- No hard-coded values; use design tokens

**DELIVERABLES:**
1. ✅ Complete React 19 + TypeScript component implementation
2. ✅ TypeScript interfaces in `ui/components/auth/types.ts`
3. ✅ Tailwind CSS styling using design system tokens
4. ✅ Lucide icon integration (Mail, Lock, Eye, LogIn, Github)
5. ✅ Working animations (rotating blur backgrounds)
6. ✅ Form validation with error states
7. ✅ Responsive design for mobile/tablet/desktop
8. ✅ WCAG 2.1 AA accessibility compliance
9. ✅ Usage examples showing:
   - Basic sign-in form
   - With OAuth providers
   - Loading and error states
   - Custom validation rules
   - Integration with authentication services
10. ✅ Documentation with:
    - Component API reference
    - Props documentation
    - Integration guide
    - Accessibility notes

**TESTING REQUIREMENTS:**
- Ensure the card renders without TypeScript errors (`tsc --noEmit`)
- Verify animated backgrounds rotate correctly (10s and 18s durations)
- Test form validation (email format, required fields)
- Confirm password visibility toggle works
- Test remember me checkbox state
- Validate keyboard navigation (Tab, Enter to submit)
- Test hover effects (card lift, ring, shadow)
- Verify responsive behavior on mobile (375px), tablet (768px), desktop (1024px+)
- Check focus states on all interactive elements
- Verify ARIA labels and roles for screen reader support
- Test form submission with loading state
- Confirm error message display

**CONSTITUTION ALIGNMENT:**
This integration follows project constitution v1.0.0:

- **Principle 1 (Vertical Slice Ownership)**: Complete feature slice with types, components, examples, and docs
- **Principle 2 (Type-Safe Automation)**: Strict TypeScript with explicit interfaces, no `any`
- **Principle 3 (Design System Fidelity)**: All styling uses design tokens, no hard-coded HSL values
- **Principle 4 (Observability)**: Component exposes event callbacks for tracking/analytics
- **Principle 5 (Governance Transparency)**: Full documentation and integration summary

**KEY FEATURES TO PRESERVE:**
1. ✅ Rotating blur background animations (dual-layer, 10s and 18s)
2. ✅ Gradient border effect with hover enhancement
3. ✅ Glassmorphic card with radial gradient background
4. ✅ Email input with mail icon
5. ✅ Password input with lock icon and visibility toggle
6. ✅ Custom checkbox styling with check icon
7. ✅ "Remember me" and "Forgot password" links
8. ✅ Gradient submit button with inset shadow
9. ✅ "OR" divider with border and text
10. ✅ OAuth button (GitHub) with logo
11. ✅ Footer with sign-up, terms, and privacy links
12. ✅ Hover effects (card lift, ring, shadow)
13. ✅ Responsive breakpoints (sm, lg)
14. ✅ Focus states with outline

**ANIMATION DETAILS:**
- Primary blur layer: 
  - Duration: 10s
  - Direction: normal
  - Transform: animate-spin
  - Size: -inset-10 (extends beyond card)
  - Gradient: from-transparent via-gray-400/20 to-transparent
  - Blur: blur-xl
  - Opacity: 0.5

- Secondary blur layer:
  - Duration: 18s
  - Direction: reverse
  - Transform: animate-spin
  - Size: -inset-20 (extends further)
  - Gradient: from-transparent via-gray-500/15 to-transparent
  - Blur: blur-2xl
  - Opacity: 0.3

**COLOR MAPPING:**
- Background base: hsl(220, 13%, 9%) → bg-neutral-950 or custom
- Radial overlays: hsl(220, 9%, 46%), hsl(215, 14%, 34%), hsl(217, 19%, 27%)
- Text primary: white → text-white
- Text secondary: gray-400 → text-gray-400
- Text tertiary: gray-500 → text-gray-500
- Input bg: gray-900/50 → bg-gray-900/50
- Input ring: gray-600/30 → ring-gray-600/30
- Focus ring: gray-400/50 → focus:ring-gray-400/50
- Button gradient: from-gray-700 to-gray-600
- Emerald indicator: emerald-400/80

**NOTES:**
- This is a **reusable component library slice**, not an app-level feature
- Component should be **framework-agnostic** in business logic (authentication handlers provided via props)
- Follow existing patterns from `ui/components/onboarding/` and `ui/components/portfolio/` for reference
- Use `lucide-react` (already installed) for all icons
- Rotating blur effect should use Tailwind's `animate-spin` with custom duration utilities
- Radial gradient background can use Tailwind arbitrary values or CSS-in-JS pattern
- Form should be fully controlled with validation and error states

Please analyze the provided UI design and implement it step-by-step, maintaining our design system fidelity and TypeScript discipline while delivering the exact visual design with enhanced React patterns and form handling.
```

---

## 📂 **Source Files**
- **UI Design**: `ideas/Animated Dark Sign-In Card with Tailwind Glassmorphism.html`
- **Template**: `.windsurf/commands/UI-Integration-Template.md`
- **Target Location**: `ui/components/auth/`
- **Design System**: `design -system/design.md`

## 🎯 **Implementation Checklist**
- [ ] Set up component structure in `ui/components/auth/`
- [ ] Install required dependencies (lucide-react already installed)
- [ ] Create TypeScript interfaces in `types.ts`
- [ ] Implement AnimatedBackground component
- [ ] Implement FormField component with icons
- [ ] Implement CustomCheckbox component
- [ ] Implement DividerWithText component
- [ ] Build main GlasmorphicSignIn component
- [ ] Add form validation logic
- [ ] Add password visibility toggle
- [ ] Test responsive behavior on all breakpoints
- [ ] Verify animations and transitions
- [ ] Document component API and usage
- [ ] Test accessibility (keyboard nav, screen readers)

## 🚀 **Next Steps**
1. Review design system tokens in `design -system/design.md`
2. Set up folder structure and TypeScript interfaces
3. Implement sub-components (AnimatedBackground, FormField, etc.)
4. Build main GlasmorphicSignIn component
5. Add form validation and error handling
6. Test all interactive features and animations
7. Validate responsive behavior and accessibility
8. Document component usage and props

---

**Generated on**: 2025-09-29  
**Template Version**: v1.0  
**Project**: Elite Component Library  
**Component**: Glassmorphic Sign-In Card

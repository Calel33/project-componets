# 🎯 **WebGL Shader Background UI Integration Prompt**

## 📋 **Integration Request**

I want to integrate a custom WebGL shader background UI design into our project-components project. Please extract and adapt this interface to work with our React + TypeScript + Vite stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS (custom design system tokens)
- Backend: Static/Client-side (can be extended to REST API)
- Language: TypeScript
- Target file: `src/WebGLShaderDemo.tsx` (new component)
- Existing functionality: Reusable component library with bubble animations, portfolio grids, scroll stories

**UI TO INTEGRATE:**
Source file: `test/Interactive WebGL Shader Background.html`

This is a stunning AI platform landing page featuring:
- **Animated WebGL shader background** with rotating circular patterns and color gradients
- **Glass morphism design** with backdrop blur effects
- **Hero section** with gradient text, CTAs, and trust indicators
- **Feature cards** with floating animations
- **Stats section** with key metrics
- **Responsive navigation** with custom logo animation
- **Modern typography** using Manrope and Inter fonts

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component reusability patterns
   - Keep design system token compatibility
   - Preserve TypeScript type safety
   - Maintain existing project structure

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React TSX components
   - Replace vanilla JavaScript WebGL code with React hooks (useEffect, useRef)
   - Convert inline CSS to Tailwind CSS classes using design system tokens
   - Extract WebGL shader logic into custom hook (`useWebGLShader`)
   - Ensure responsive design for mobile, tablet, and desktop
   - Maintain WCAG 2.1 AA accessibility standards

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for component props
   - Implement proper WebGL context management with cleanup
   - Use React refs for canvas element
   - Convert animations to CSS-in-JS or Tailwind animations
   - Add error boundaries for WebGL initialization failures
   - Optimize shader rendering performance
   - Handle window resize events properly

4. 📱 **Feature Integration**
   - WebGL canvas initialization and rendering loop
   - Responsive canvas sizing with window resize handling
   - Smooth floating animations for feature cards
   - Pulse glow effect on CTA button
   - Logo circle pulse animation
   - Glass morphism backdrop effects
   - Gradient text rendering
   - Interactive hover states on navigation and buttons

5. 🎯 **Specific Adaptations Needed**
   - Replace CDN imports (Tailwind, Font Awesome, Google Fonts) with local/npm packages
   - Convert WebGL shader code to React custom hook
   - Adapt color schemes to design system tokens (if available)
   - Extract reusable components: `<ShaderBackground />`, `<GlassCard />`, `<FeatureCard />`, `<StatCard />`
   - Implement proper TypeScript types for WebGL context and shader uniforms
   - Add fallback UI for browsers without WebGL support
   - Convert Font Awesome icons to Lucide React icons

**COMPONENT STRUCTURE:**

```
src/
├── WebGLShaderDemo.tsx          # Main demo component
├── components/
│   ├── ShaderBackground.tsx     # WebGL canvas component
│   ├── GlassCard.tsx           # Reusable glass effect card
│   ├── FeatureCard.tsx         # Feature display card
│   ├── StatCard.tsx            # Statistics card
│   └── Navigation.tsx          # Navigation bar
└── hooks/
    └── useWebGLShader.ts       # WebGL shader logic hook
```

**DESIGN SYSTEM INTEGRATION:**

Use design system tokens for:
- **Colors**: Map shader colors to design tokens
- **Typography**: Use design system font families and weights
- **Spacing**: Apply consistent spacing tokens
- **Radius**: Use border-radius tokens for cards
- **Shadows**: Apply shadow tokens for glass effects

**DELIVERABLES:**

1. ✅ Complete React + TypeScript component implementation
2. ✅ Custom `useWebGLShader` hook with proper cleanup
3. ✅ Tailwind CSS styling with design system tokens
4. ✅ Extracted reusable sub-components
5. ✅ Working WebGL shader animations
6. ✅ Responsive design for mobile/tablet/desktop
7. ✅ TypeScript interfaces and type definitions
8. ✅ WebGL fallback handling
9. ✅ Documentation of component usage
10. ✅ Integration example in demo page

**TESTING REQUIREMENTS:**

- Ensure WebGL canvas initializes without errors
- Verify shader animation runs smoothly (60fps target)
- Test responsive behavior on mobile, tablet, desktop
- Confirm all interactive elements work (buttons, links, hover states)
- Validate proper cleanup on component unmount
- Test WebGL fallback for unsupported browsers
- Check accessibility (keyboard navigation, screen readers)
- Verify window resize handling
- Test performance with multiple instances
- Validate TypeScript type safety

**TECHNICAL SPECIFICATIONS:**

**WebGL Shader Details:**
- Vertex shader: Simple pass-through for full-screen quad
- Fragment shader: Animated circular patterns with rotation
- Uniforms: `iTime` (animation time), `iResolution` (canvas size)
- Animation: Continuous rotation with color variation
- Performance: Optimized for 60fps on modern devices

**Key Animations:**
- Floating cards: 6s ease-in-out infinite with translateY and rotate
- Pulse glow: 3s ease-in-out infinite box-shadow animation
- Logo pulse: 2s ease-in-out infinite scale animation
- Shader rotation: Continuous time-based rotation

**Browser Support:**
- Modern browsers with WebGL support
- Fallback for browsers without WebGL
- Responsive design for all screen sizes

**IMPLEMENTATION NOTES:**

1. **WebGL Hook Pattern:**
   ```typescript
   const useWebGLShader = (canvasRef: RefObject<HTMLCanvasElement>) => {
     useEffect(() => {
       // Initialize WebGL context
       // Compile shaders
       // Setup render loop
       // Return cleanup function
     }, []);
   };
   ```

2. **Component Reusability:**
   - Make components generic and configurable
   - Use props for customization
   - Follow existing project patterns

3. **Performance Optimization:**
   - Use `requestAnimationFrame` for shader rendering
   - Implement proper cleanup to prevent memory leaks
   - Debounce window resize events
   - Use CSS transforms for animations (GPU-accelerated)

4. **Accessibility:**
   - Add ARIA labels to interactive elements
   - Ensure keyboard navigation works
   - Provide text alternatives for visual content
   - Maintain sufficient color contrast

**INTEGRATION CHECKLIST:**

- [ ] WebGL shader background renders correctly
- [ ] All animations work smoothly
- [ ] Responsive design functions on all devices
- [ ] TypeScript types are properly defined
- [ ] Components are reusable and well-structured
- [ ] Design system tokens are applied
- [ ] Accessibility standards are met
- [ ] Performance is optimized (60fps)
- [ ] Error handling is implemented
- [ ] Documentation is complete
- [ ] Demo page is updated

Please analyze the provided UI design and implement it step-by-step, maintaining our existing component library patterns while delivering the exact visual design with WebGL shader effects.

---

## 🎨 **Visual Reference**

**Source File:** `test/Interactive WebGL Shader Background.html`

**Key Visual Elements:**
- Animated WebGL shader with rotating circular patterns
- Dark theme (#111 background)
- Blue/indigo gradient accents
- Glass morphism cards with backdrop blur
- Floating animation on feature cards
- Pulse glow effect on primary CTA
- Custom logo with pulse animation
- Modern typography with Manrope and Inter

**Color Palette:**
- Background: `#111`
- Primary: Blue-600 (`#3B82F6`)
- Accent: Indigo-400, Purple-400
- Glass: `rgba(255,255,255,0.05-0.15)`
- Text: White with varying opacity

**Typography:**
- Headings: Manrope (200, 300, 600, 700)
- Body: Inter (400, 500, 600)
- Letter spacing: -0.03em for headings

---

## 🚀 **Expected Output**

A fully functional React + TypeScript component that:
1. Renders an animated WebGL shader background
2. Displays a modern AI platform landing page
3. Includes all interactive elements and animations
4. Follows design system patterns
5. Is fully responsive and accessible
6. Can be reused across the project

This integration will showcase advanced WebGL techniques combined with modern React patterns and design system consistency! 🎯

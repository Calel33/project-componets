# 🎯 **Client Testimonials Grid Layout Integration Prompt**

I want to integrate a custom UI design into our project-componets project. Please extract and adapt this interface to work with our React + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 + Design System tokens
- Backend: Component library with demo integration
- Language: TypeScript
- Target location: `ui/components/testimonials/`
- Existing functionality: Curated component and landing-page library with reusable React/Tailwind components

**UI TO INTEGRATE:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Testimonials Bento Layout</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes meteor {
      0% { transform: rotate(215deg) translateX(0); opacity: 1; }
      70% { opacity: 1; }
      100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
    }
    .meteor {
      position: absolute;
      height: 1px;
      width: 1px;
      border-radius: 9999px;
      background-color: rgba(209, 213, 219, 0.8);
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
      transform: rotate(215deg);
      animation: meteor 5s linear infinite;
    }
    .meteor::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 1px;
      background: linear-gradient(to right, rgba(209, 213, 219, 0.8), transparent);
    }
  </style>
</head>
<body class="bg-gray-950 text-gray-200 min-h-screen p-4 md:p-8">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-10">
      <span class="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs font-medium">TESTIMONIALS</span>
      <h2 class="text-3xl font-bold text-white mt-4 mb-2">What Our Clients Say</h2>
      <div class="h-px w-16 bg-indigo-500/70 mx-auto mb-4"></div>
      <p class="text-gray-400 max-w-2xl mx-auto">Hear from our satisfied customers about their experience with our platform.</p>
    </div>
    
    <!-- 2×2 Testimonial Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Testimonial 1 -->
      <div class="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 shadow-md overflow-hidden">
        <div id="meteor-container-1" class="absolute inset-0 overflow-hidden">
          <div class="meteor" style="top: 30%; left: -150px; animation-delay: 1s;"></div>
        </div>
        <div class="relative z-10">
          <div class="flex mb-4">
            <div class="text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
            </div>
          </div>
          <p class="text-gray-300 mb-6">The platform has completely transformed our workflow. We've seen a 40% increase in productivity since implementing it across our team.</p>
          <div class="flex items-center">
            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" class="w-12 h-12 rounded-full mr-4 border border-indigo-500/30">
            <div>
              <h4 class="font-medium text-white">Sarah Johnson</h4>
              <p class="text-gray-400 text-sm">Product Manager, TechCorp</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Testimonial 2 -->
      <div class="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 shadow-md overflow-hidden">
        <div class="relative z-10">
          <div class="flex mb-4">
            <div class="text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
            </div>
          </div>
          <p class="text-gray-300 mb-6">The security features are unmatched. As a financial institution, data protection is our priority, and this solution exceeds all our expectations.</p>
          <div class="flex items-center">
            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" class="w-12 h-12 rounded-full mr-4 border border-indigo-500/30">
            <div>
              <h4 class="font-medium text-white">Michael Chen</h4>
              <p class="text-gray-400 text-sm">CTO, Global Finance</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Testimonial 3 -->
      <div class="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 shadow-md overflow-hidden">
        <div class="relative z-10">
          <div class="flex mb-4">
            <div class="text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
            </div>
          </div>
          <p class="text-gray-300 mb-6">Customer support is phenomenal. Whenever we've had questions, the team responds quickly and effectively. It's refreshing to work with such professionals.</p>
          <div class="flex items-center">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez" class="w-12 h-12 rounded-full mr-4 border border-indigo-500/30">
            <div>
              <h4 class="font-medium text-white">Emily Rodriguez</h4>
              <p class="text-gray-400 text-sm">Operations Director, RetailNow</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Testimonial 4 -->
      <div class="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 shadow-md overflow-hidden">
        <div id="meteor-container-4" class="absolute inset-0 overflow-hidden">
          <div class="meteor" style="top: 50%; left: -250px; animation-delay: 2s;"></div>
        </div>
        <div class="relative z-10">
          <div class="flex mb-4">
            <div class="text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
            </div>
          </div>
          <p class="text-gray-300 mb-6">As a small business, we needed a solution that could scale with us. This platform has been perfect - powerful enough for our needs but without unnecessary complexity.</p>
          <div class="flex items-center">
            <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="David Wilson" class="w-12 h-12 rounded-full mr-4 border border-indigo-500/30">
            <div>
              <h4 class="font-medium text-white">David Wilson</h4>
              <p class="text-gray-400 text-sm">Founder, Artisan Goods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

**INTEGRATION REQUIREMENTS:**
1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library structure
   - Keep design system token integration (colors, spacing, typography from `design-system/`)
   - Preserve vertical slice architecture pattern
   - Maintain TypeScript interfaces and exports

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React components with proper JSX
   - Replace hardcoded Tailwind classes with design system tokens where applicable
   - Convert inline SVG quote icons to Lucide React components
   - Implement meteor animation using CSS-in-JS or CSS modules
   - Ensure responsive design for mobile, tablet, and desktop
   - Maintain accessibility standards (ARIA labels, semantic HTML, focus states)

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for testimonial data structure
   - Use React best practices (proper props, component composition, hooks)
   - Implement proper event handlers for any interactive elements
   - Add error boundaries for image loading
   - Optimize performance with React.memo if needed for large testimonial datasets

4. 📱 **Feature Integration**
   - Meteor animation timing control (play/pause on hover or visibility)
   - Smooth transitions and hover effects
   - Image lazy loading for testimonial avatars
   - Keyboard navigation support
   - Dynamic testimonial data support (configurable testimonials array)

5. 🎯 **Specific Adaptations Needed**
   - Replace randomuser.me images with placeholder avatar system or configurable image URLs
   - Convert meteor CSS animations to proper CSS module or styled-components approach
   - Adapt dark color scheme to work with design system's theme tokens
   - Ensure meteor effects work consistently across different browsers
   - Create testimonials type definitions in `ui/components/types/testimonials.types.ts`

**INTEGRATION DELIVERABLES:**
1. ✅ Complete React component structure (`TestimonialsGrid.tsx`, `TestimonialCard.tsx`)
2. ✅ TypeScript interfaces and types (`testimonials.types.ts`)
3. ✅ CSS module or styled approach for meteor animations
4. ✅ Design system token integration for colors and spacing
5. ✅ Working meteor animations and card hover effects
6. ✅ Responsive grid layout (1 column mobile, 2 columns tablet+)
7. ✅ Demo component showcasing the testimonials grid
8. ✅ README with usage examples and integration instructions
9. ✅ Export from `ui/components/testimonials/index.ts`

**TESTING REQUIREMENTS:**
- Ensure testimonials grid loads without errors
- Verify meteor animations play smoothly
- Test responsive behavior on mobile, tablet, desktop
- Confirm testimonial data can be dynamically configured
- Validate image loading and fallback states
- Check accessibility compliance (screen reader support, keyboard navigation)
- Test component integration with existing project demos

**COMPONENT STRUCTURE:**
```
ui/components/testimonials/
├── TestimonialsGrid.tsx          # Main grid container
├── TestimonialCard.tsx           # Individual testimonial card
├── MeteorBackground.tsx          # Reusable meteor animation component
├── QuoteIcon.tsx                 # Styled quote icon component
├── README.md                     # Documentation and usage examples
├── INTEGRATION_SUMMARY.md        # Technical implementation details
├── index.ts                      # Component exports
├── types.ts                      # TypeScript interfaces
└── testimonials.css              # Meteor animations and custom styles
```

Please analyze the provided testimonials grid design and implement it step-by-step, maintaining our existing component library architecture while delivering the exact visual design with smooth meteor animations and proper TypeScript integration.
# 🎯 **Responsive Feature Grid Section - UI Integration Prompt**

## 📋 **Integration Request**

I want to integrate a custom UI design into our **Component Library** project. Please extract and adapt this interface to work with our **React 19 + TypeScript + Tailwind CSS** stack.

**CURRENT PROJECT CONTEXT:**
- Framework: **React 19 + Vite** 
- Styling: **Tailwind CSS + Design System Tokens** 
- Backend: **Static/Props-based (component library)** 
- Language: **TypeScript** 
- Target file: **src/components/FeatureGrid.tsx** 
- Existing functionality: **Reusable component library with design system integration**

**UI TO INTEGRATE:**

```html
<section class="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div class="">
        <p class="text-sm font-medium text-white/50 font-geist">What you get</p>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter font-geist">Features built for efficient growth</h2>
        <p class="mt-3 text-base text-white/70 font-geist">From unlimited creative requests to transparent pricing, our operating system helps you scale acquisition with confidence.</p>
      </div>
      
    </div>
  
    <div class="grid gap-6 md:grid-cols-3">
      <!-- Big feature -->
      <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2">
        <div class="relative">
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f2227b53-6c8a-42ab-a473-d7a119e14c95_1600w.jpg" alt="Neon next button 3D render" class="aspect-video w-full object-cover">
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        <div class="p-5 sm:p-6">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
            <span class="text-xs text-white/60 font-geist">Unlimited pipeline</span>
          </div>
          <h3 class="mt-3 text-2xl sm:text-3xl font-medium tracking-tight font-geist">Launch experiments, not guesses</h3>
          <p class="mt-2 text-sm sm:text-base text-white/70 font-geist">Submit unlimited test ideas and creative requests. We prioritize by impact, ship fast, and report clearly so learnings stack every week.</p>
          <div class="mt-5 flex flex-wrap items-center gap-3">
            <a href="#" class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="file-text" class="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" class=""></path><path d="M14 2v4a2 2 0 0 0 2 2h4" class=""></path><path d="M10 9H8" class=""></path><path d="M16 13H8" class=""></path><path d="M16 17H8" class=""></path></svg>
              See case studies
            </a>
            <a href="#" class="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="send" class="lucide lucide-send h-4 w-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" class=""></path><path d="m21.854 2.147-10.94 10.939" class=""></path></svg>
              Start a request
            </a>
          </div>
        </div>
      </div>
  
      <!-- Right column: Requests & Revisions -->
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div class="p-5 sm:p-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-medium tracking-tight font-geist flex items-center gap-2">
              
              Requests &amp; revisions
            </h3>
            <span class="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
          </div>
          <p class="mt-2 text-sm text-white/70 font-geist">Iterate quickly with async requests and structured feedback. Every round ends with clear rationale and next steps.</p>
          <div class="mt-4 rounded-lg overflow-hidden border border-white/10">
            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e2b186b-730f-4956-8043-14955d1766bf_800w.jpg" alt="App UI preview" class="aspect-video w-full object-cover">
          </div>
        </div>
      </div>
  
      <!-- Right column: Worry‑free pricing -->
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div class="p-5 sm:p-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-medium tracking-tight font-geist flex items-center gap-2">
              
              Worry‑free pricing
            </h3>
            <span class="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
          </div>
          <p class="mt-2 text-sm text-white/70 font-geist">Simple plans, no surprises. Pause anytime. Scale up when you're ready.</p>
          <div class="mt-4 rounded-lg overflow-hidden border border-white/10">
            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc543ce0-b776-4e3a-a6d5-933229659050_800w.jpg" alt="Pricing illustration" class="aspect-video w-full object-cover">
          </div>
        </div>
      </div>
  
      <!-- Bottom small: Quick turnaround -->
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div class="p-5 sm:p-6">
          <h3 class="text-lg font-medium tracking-tight font-geist flex items-center gap-2">
            
            Quick turnaround
            <span class="ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
          </h3>
          <p class="mt-2 text-sm text-white/70 font-geist">Most tasks ship in 48–72 hours without sacrificing quality.</p>
          <div class="mt-4 rounded-lg overflow-hidden border border-white/10">
            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91cceaf5-3a72-47d0-9d15-ee799cfea874_800w.jpg" alt="Speed dashboard" class="aspect-video w-full object-cover">
          </div>
        </div>
      </div>
  
      <!-- Bottom small: Go live in days -->
      <div class="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
        <div class="sm:p-6 pt-5 pr-5 pb-5 pl-5">
          <h3 class="text-lg font-medium tracking-tight font-geist flex items-center gap-2">
            
            Go live in days
          </h3>
          <p class="mt-2 text-sm text-white/70 font-geist">From first brief to live campaigns in a week, with tracking and QA handled.</p>
          <div class="mt-4 rounded-lg overflow-hidden border border-white/10">
            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70ea4bbd-c103-404b-bff1-cab817e4f4d6_800w.jpg" alt="Launch imagery" class="aspect-video w-full object-cover">
          </div>
        </div>
      </div>
  
      <div class="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
        <div class="sm:p-6 pt-5 pr-5 pb-5 pl-5">
          <h3 class="text-lg font-medium tracking-tight font-geist flex items-center gap-2">
            
            Go live in days
          </h3>
          <p class="mt-2 text-sm text-white/70 font-geist">From first brief to live campaigns in a week, with tracking and QA handled.</p>
          <div class="mt-4 rounded-lg overflow-hidden border border-white/10">
            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a0573e8d-a170-4eda-aba7-4f4fc78c43b7_800w.jpg" alt="Launch imagery" class="aspect-video w-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>
```

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture
   - Keep design system token integration
   - Preserve TypeScript type safety
   - Maintain reusability patterns

2. 🎨 **Adapt Design Elements**
   - Convert HTML to React 19 functional component
   - Replace hardcoded colors with design system tokens
   - Convert inline Tailwind classes to design system utilities
   - Ensure responsive design for mobile, tablet, desktop
   - Maintain accessibility standards (ARIA labels, semantic HTML)
   - Replace `font-geist` with design system typography tokens

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for:
     - `FeatureGridProps` (section header, features array)
     - `FeatureItem` (title, description, image, badge, buttons, size variant)
     - `ButtonConfig` (label, icon, variant, onClick handler)
   - Use React 19 best practices (hooks, memoization)
   - Implement proper event handlers for button clicks
   - Add error boundaries for image loading
   - Optimize with React.memo for performance
   - Use Lucide React for icons (replace inline SVGs)

4. 📱 **Feature Integration**
   - Configurable grid layout (2x2, 3-column, custom)
   - Dynamic feature card sizing (hero, standard, compact)
   - Optional "NEW" badge system
   - Flexible button configurations (primary, secondary, ghost)
   - Image lazy loading with fallback states
   - Hover effects and transitions
   - Optional gradient overlays on images

5. 🎯 **Specific Adaptations Needed**
   - Replace external image URLs with prop-based image sources
   - Convert animations to CSS transitions (no external library needed)
   - Adapt emerald color scheme to design system accent colors
   - Ensure compatibility with existing component patterns
   - Maintain dark theme optimization (white/opacity-based colors)
   - Create flexible grid system supporting various layouts
   - Replace hardcoded content with props-based configuration

**DESIGN SYSTEM INTEGRATION:**
- **Colors**: Use design system tokens instead of:
  - `border-white/10` → `border-surface-border`
  - `bg-white/5` → `bg-surface-secondary`
  - `text-white/70` → `text-secondary`
  - `bg-emerald-500` → `bg-accent-primary`
- **Typography**: Replace `font-geist` with design system font tokens
- **Spacing**: Use design system spacing scale
- **Radius**: Use design system border radius tokens (`rounded-2xl` → `radius-lg`)
- **Shadows**: Apply design system shadow tokens for depth

**COMPONENT API STRUCTURE:**

```typescript
interface FeatureGridProps {
  sectionLabel?: string;
  title: string;
  description?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: {
    label: string;
    variant?: 'new' | 'featured' | 'popular';
  };
  metadata?: string;
  size?: 'hero' | 'standard' | 'compact';
  buttons?: ButtonConfig[];
  hasGradientOverlay?: boolean;
}

interface ButtonConfig {
  label: string;
  icon?: LucideIcon;
  variant: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  href?: string;
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 + TypeScript component (`src/components/FeatureGrid.tsx`)
2. ✅ TypeScript interfaces and types
3. ✅ Design system token integration (no hardcoded colors)
4. ✅ Lucide React icons integration
5. ✅ Working hover effects and transitions
6. ✅ Responsive design for mobile/tablet/desktop
7. ✅ Storybook story file for component showcase
8. ✅ Documentation with usage examples

**TESTING REQUIREMENTS:**
- Ensure component renders without errors
- Verify all interactive elements work (buttons, hover states)
- Test responsive behavior on mobile (320px), tablet (768px), desktop (1280px)
- Confirm accessibility compliance (keyboard navigation, screen readers)
- Validate TypeScript types are correct
- Test with various feature configurations (2-6 items, different sizes)
- Verify image loading states and fallbacks
- Check design system token application

**FILE STRUCTURE:**
```
src/
  components/
    FeatureGrid.tsx          # Main component
    FeatureGrid.types.ts     # TypeScript interfaces
  stories/
    FeatureGrid.stories.tsx  # Storybook stories
```

Please analyze the provided UI design and implement it step-by-step, creating a fully reusable, type-safe React component that integrates seamlessly with our design system and component library architecture.

---

## 🎨 **Design Notes**

**Key Visual Features:**
- Bento-style grid layout with mixed card sizes
- Hero feature card (2x2 grid span) with prominent image
- Glass-morphism effects (backdrop-blur, white/opacity backgrounds)
- Gradient overlays on hero images
- Badge system for highlighting new/featured items
- Dual-button CTA pattern on hero card
- Consistent card styling with subtle borders and backgrounds
- Responsive typography scaling

**Interaction Patterns:**
- Hover effects on cards and buttons
- Group hover states for enhanced interactivity
- Button variants (ghost, primary)
- Image aspect ratio preservation
- Flexible content hierarchy

**Accessibility Considerations:**
- Semantic HTML structure
- Proper heading hierarchy (h2, h3)
- Alt text for images
- Keyboard-navigable buttons
- ARIA labels where needed
- Sufficient color contrast

---

## 🚀 **Implementation Priority**

1. **Phase 1**: Core component structure with TypeScript types
2. **Phase 2**: Design system token integration
3. **Phase 3**: Responsive grid layout logic
4. **Phase 4**: Interactive features (hover, buttons)
5. **Phase 5**: Storybook stories and documentation
6. **Phase 6**: Testing and refinement

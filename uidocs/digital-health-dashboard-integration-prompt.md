# 🎯 **Digital Health Dashboard UI Integration Prompt**

## 📋 **Integration Request**

I want to integrate a custom UI design into our **project-componets** React component library. Please extract and adapt this PulseSync Digital Health Dashboard interface to work with our **React 19 + Vite + TypeScript + Tailwind CSS** stack.

---

## **CURRENT PROJECT CONTEXT:**

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (design system tokens from `design-system/design.md`)
- **Backend:** Static/Demo data (no health API integration required for now)
- **Language:** TypeScript 5 (strict mode, no `any` types)
- **Target Location:** `ui/components/digital-health/`
- **Existing Functionality:** Component library with domain-organized UI slices
- **Design System:** Centralized tokens for colors, typography, spacing, radius, shadows
- **Chart Library:** Chart.js (already in package.json)

---

## **UI TO INTEGRATE:**

**Reference File:** `ideas/Digital Health Dashboard UI.html`

### **Design Overview:**
A modern digital health monitoring platform featuring:
- **Dark theme** (neutral-900 background)
- **Masonry/Bento grid layout** with varying card sizes
- **Fade-up animations** on card entrance (staggered delays)
- **Feature-rich cards:**
  - Doctor portrait with overlay text
  - Upcoming consultation card with patient message
  - Dashboard teaser (app screenshot)
  - Brand emblem card with icon and tagline
  - Mobile mockup with CTA overlay
  - Typography/style guide card
  - Conversational chat teaser (large card)
  - Health stats card with Chart.js line graph
- **Emerald/amber accent colors**
- **Lucide icons** throughout
- **Inter + Instrument Serif typography**
- **Responsive grid** (1-col mobile → 2-col tablet → 3-4 col desktop)

---

## **INTEGRATION REQUIREMENTS:**

### 1. 🔄 **Preserve All Existing Functionality**
   - Maintain project design system tokens from `design-system/design.md`
   - Keep centralized type definitions pattern (`ui/components/types/`)
   - Preserve accessibility standards (WCAG 2.1 AA)
   - Use existing Chart.js setup from `ui/hooks/useChartSetup.ts` if compatible

### 2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React functional components
   - Replace inline styles with design system tokens where applicable
   - Extract reusable sub-components:
     - `HealthDashboardGrid` - Main bento grid container
     - `DoctorCard` - Portrait with overlay caption
     - `ConsultationCard` - Upcoming appointment with patient message
     - `AppPreviewCard` - Screenshot/mockup card
     - `BrandCard` - Logo emblem with tagline
     - `MobileAppCard` - Mobile mockup with CTA overlay
     - `StyleGuideCard` - Typography and color palette showcase
     - `ChatTeaserCard` - Conversational interface preview
     - `GlucoseChartCard` - Health metrics with Chart.js line graph
   - Implement fade-up animation utility
   - Ensure responsive grid using Tailwind's `sm:`, `md:`, `lg:`, `xl:` breakpoints
   - Maintain staggered animation delays
   - Convert Lucide CDN to `lucide-react` imports

### 3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces/types in `ui/components/types/digital-health.types.ts`
   - Define prop types for all components:
     - `DoctorCardProps` (name, specialty, image)
     - `ConsultationCardProps` (patient data, time, message)
     - `AppPreviewCardProps` (screenshot, icons)
     - `BrandCardProps` (logo, tagline, background image)
     - `MobileAppCardProps` (mockup image, CTA)
     - `StyleGuideCardProps` (fonts, colors)
     - `ChatTeaserCardProps` (messages, avatar)
     - `GlucoseChartCardProps` (data, target range)
   - Use React hooks for:
     - Chart.js initialization (`useEffect`, `useRef`)
     - Animation triggers (intersection observer or CSS)
     - Chart data management
   - Implement proper event handlers (CTA clicks, refresh chart)
   - Add loading states for chart rendering
   - Optimize re-renders

### 4. 📱 **Feature Integration**
   - **Bento grid layout:** Responsive with varying column spans
   - **Fade-up animations:** CSS keyframes or Framer Motion
   - **Chart interactivity:** Hover tooltips, responsive resizing
   - **Image optimization:** Use Next.js Image or native loading="lazy"
   - **Hover effects:** Scale transforms on images
   - **Gradient overlays:** For mobile app and chat cards
   - **Badge states:** "Begins in 2 h" countdown badge
   - **Message bubbles:** Chat UI styling (sender vs receiver)
   - **Keyboard navigation:** Focusable buttons and interactive elements

### 5. 🎯 **Specific Adaptations Needed**
   - Replace Lucide CDN script with `lucide-react` imports
   - Map color palette to design system tokens:
     - Background: `neutral-900` → use design system background
     - Card: `black` → use design system card
     - Accent: `emerald-300/600` → map to design system chart-5 or secondary
     - Warning: `amber-400/950` → use design system accent
     - Text: `neutral-100/500` → use design system foreground variants
   - Convert `@keyframes fadeUp` to Tailwind animation or Framer Motion
   - Implement Chart.js with dark theme defaults
   - Use design system font tokens (Inter → sans, Instrument Serif → serif)
   - Extract demo data to constants or JSON
   - Support grid customization (card order, visibility)

---

## **COMPONENT ARCHITECTURE:**

```
ui/components/digital-health/
├── HealthDashboardGrid.tsx      # Main bento grid layout
├── DoctorCard.tsx               # Doctor portrait with overlay
├── ConsultationCard.tsx         # Appointment card with message
├── AppPreviewCard.tsx           # App screenshot card
├── BrandCard.tsx                # Logo emblem card
├── MobileAppCard.tsx            # Mobile mockup with CTA
├── StyleGuideCard.tsx           # Typography and palette card
├── ChatTeaserCard.tsx           # Chat interface preview
├── GlucoseChartCard.tsx         # Health metrics chart
├── MessageBubble.tsx            # Chat message component
├── CountdownBadge.tsx           # Time countdown badge
├── animations.css               # Fade-up animation keyframes
├── hooks/
│   ├── useGlucoseChart.ts      # Chart.js setup for glucose data
│   └── useFadeUpAnimation.ts   # Animation trigger logic
├── types.ts                     # Re-exports from ../types/
├── index.ts                     # Public API exports
├── README.md                    # Component documentation
├── USAGE_EXAMPLE.tsx            # Demo implementation
├── INTEGRATION_SUMMARY.md       # Integration details
└── INSTALLATION.md              # Setup instructions
```

**Centralized Types:**
```
ui/components/types/digital-health.types.ts  # All TypeScript definitions
```

---

## **TYPE DEFINITIONS REQUIRED:**

```typescript
// ui/components/types/digital-health.types.ts

export interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  imageAlt?: string;
}

export interface PatientData {
  name: string;
  condition: string;
  message?: string;
}

export interface ConsultationCardProps {
  patient: PatientData;
  time: {
    day: string;
    hour: string;
  };
  countdown?: string; // e.g., "Begins in 2 h"
  onChatClick?: () => void;
}

export interface AppPreviewCardProps {
  appName: string;
  screenshot: string;
  icons?: Array<{
    name: string;
    component: React.ComponentType;
  }>;
}

export interface BrandCardProps {
  logo: {
    icon: string;
    text: string;
  };
  tagline: string;
  backgroundImage?: string;
}

export interface MobileAppCardProps {
  title: string;
  mockupImage: string;
  cta: {
    label: string;
    icon: string;
    onClick: () => void;
  };
}

export interface StyleGuideCardProps {
  typography: {
    primary: string;
    secondary: string;
  };
  palette: string[]; // Array of color codes
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'doctor' | 'patient' | 'coach';
  timestamp?: string;
}

export interface ChatTeaserCardProps {
  title: string;
  messages: ChatMessage[];
  avatar?: {
    src: string;
    name: string;
  };
  backgroundImage?: string;
}

export interface GlucoseReading {
  day: string;
  value: number;
}

export interface GlucoseChartCardProps {
  title: string;
  data: GlucoseReading[];
  targetRange: {
    min: number;
    max: number;
    description: string;
  };
  onRefresh?: () => void;
}

export interface MessageBubbleProps {
  text: string;
  variant: 'sent' | 'received';
}

export interface CountdownBadgeProps {
  label: string;
  variant?: 'warning' | 'info' | 'success';
}

export interface HealthDashboardGridProps {
  children: React.ReactNode;
  animationEnabled?: boolean;
}
```

---

## **DELIVERABLES:**

1. ✅ Complete React + TypeScript component implementation
2. ✅ Centralized TypeScript interfaces in `ui/components/types/digital-health.types.ts`
3. ✅ Design system token integration (no hard-coded colors)
4. ✅ Chart.js integration with dark theme
5. ✅ Responsive bento grid layout
6. ✅ Fade-up animation system
7. ✅ Accessibility features (ARIA labels, keyboard navigation, focus states)
8. ✅ Documentation:
   - `README.md` - Component overview and API
   - `USAGE_EXAMPLE.tsx` - Working demo implementation with sample data
   - `INTEGRATION_SUMMARY.md` - Technical details and decisions
   - `INSTALLATION.md` - Setup and dependency instructions
9. ✅ Demo page in `src/DigitalHealthDemo.tsx`
10. ✅ Sample health data constants

---

## **TESTING REQUIREMENTS:**

- Ensure all components render without TypeScript errors
- Verify responsive grid layout across breakpoints
- Test fade-up animations trigger correctly
- Confirm glucose chart renders with sample data
- Validate chart responsiveness on window resize
- Check hover effects on images (scale transform)
- Verify countdown badge formatting
- Test chat message bubble styling
- Check keyboard navigation through interactive elements
- Verify focus states are visible on all buttons
- Confirm design system tokens applied correctly
- Validate WCAG 2.1 AA contrast ratios
- Test with different data sets (empty, single item, full)

---

## **DESIGN SYSTEM MAPPING:**

### **Color Mapping:**
```css
/* Original → Design System Token */
neutral-900 (bg) → hsl(var(--background)) [dark mode]
black (card) → hsl(var(--card))
emerald-300/600 → hsl(var(--chart-5)) or hsl(var(--secondary))
amber-400/950 → hsl(var(--accent))
neutral-100/200/500 (text) → hsl(var(--foreground)) with opacity
neutral-800/60 (ring) → hsl(var(--border))
```

### **Typography:**
- **Inter** → Use design system `--font-sans` (Allerta Stencil)
- **Instrument Serif** → Use design system serif font (Amiri Quran)
- Scale: Use design system text classes

### **Spacing:**
- Use design system spacing scale (p-4, p-6, gap-4, gap-6, gap-8)

### **Effects:**
- Image hover: `hover:scale-105 duration-500 ease-out`
- Gradient overlays: `bg-gradient-to-t from-white/60 via-transparent`
- Backdrop blur: `backdrop-blur`
- Shadows: Use design system shadow tokens

---

## **IMPLEMENTATION NOTES:**

1. **Fade-Up Animation:**
   ```css
   @keyframes fadeUp {
     from {
       opacity: 0;
       transform: translateY(24px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   }
   ```
   - Apply with staggered delays (0.15s, 0.25s, 0.35s, etc.)
   - Or use Framer Motion for React-based animations
   - Consider intersection observer for performance

2. **Bento Grid Responsiveness:**
   - Use CSS Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
   - Column spans: `sm:col-span-2`, `lg:col-span-1`
   - Gap: `gap-8`
   - Cards adapt to available space

3. **Chart.js Setup:**
   - Use dark theme defaults:
     ```js
     Chart.defaults.color = 'rgba(255, 255, 255, 0.6)';
     Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
     ```
   - Emerald line color: `#10b981`
   - Clean up chart instance on unmount
   - Make responsive: `responsive: true, maintainAspectRatio: false`

4. **Image Optimization:**
   - Use `loading="lazy"` for images
   - Provide width/height attributes
   - Use optimized image formats (WebP, AVIF)
   - Consider skeleton loaders during load

5. **Chat Message Styling:**
   - Sender messages: `bg-emerald-900 text-emerald-100` (right-aligned)
   - Received messages: `bg-neutral-900` (left-aligned)
   - Rounded corners: `rounded-lg`
   - Padding: `px-3 py-2`
   - Max width for readability

6. **Accessibility:**
   - Add `aria-label` to icon buttons (e.g., refresh button)
   - Use semantic HTML (`<figure>`, `<figcaption>`, `<button>`)
   - Ensure chart has `aria-label` describing data
   - Provide text alternatives for images
   - Ensure keyboard focus order follows visual layout
   - Use sufficient color contrast for badges

---

## **SUCCESS CRITERIA:**

✅ All components compile without TypeScript errors  
✅ Design matches reference HTML aesthetic (dark theme, bento grid)  
✅ Responsive layout works across all breakpoints  
✅ Fade-up animations trigger smoothly with staggered delays  
✅ Glucose chart renders and is responsive  
✅ Hover effects work on images (scale transform)  
✅ Chat messages styled correctly (sender vs receiver)  
✅ Keyboard navigation works throughout  
✅ No hard-coded colors (design system tokens only)  
✅ Documentation is complete and accurate  
✅ Demo page showcases all card types with sample data  
✅ Code follows project constitution principles  

---

**Please analyze the provided HTML design and implement it step-by-step, maintaining our existing component library structure while delivering the exact visual design and functionality requested.**

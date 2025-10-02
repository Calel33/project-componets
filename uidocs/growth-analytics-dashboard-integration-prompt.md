# 🎯 Growth Analytics Dashboard UI - UI Integration Prompt

## Source Design
**Component Name**: PulsePeak - Growth Analytics Dashboard  
**Source File**: `ideas/Growth Analytics Dashboard UI.html`  
**Design Style**: Modern dark dashboard with 3D grid background, interactive metrics cards, and growth KPIs

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/analytics/`
- Types Location: `ui/components/types/analytics.types.ts`
- Existing functionality: Reusable component library with centralized type definitions

**UI TO INTEGRATE:**

The PulsePeak Dashboard includes:
- **Three.js grid background** (animated 3D grid - optional integration)
- **Top navigation** with logo, menu, domain display, notifications
- **Hero section** with CTA buttons and feature description
- **Analytics cards** (3 cards in grid):
  1. Customer Churn card with slider and progress bars
  2. Quarterly Objectives with progress tracking
  3. KPI Snapshot with 3x3 metric grid and action buttons

**Key Design Features:**
- Dark theme (neutral-900 backgrounds)
- Glassmorphism effects (`backdrop-blur-lg`, `bg-white/5`, `ring-white/10`)
- Font families: Bricolage Grotesque (headings), Geist (body)
- Animated entrance effects
- Interactive sliders and progress bars
- Color-coded metrics (emerald/green for positive)

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   Create modular analytics components:
   - `AnalyticsDashboard.tsx` - Main dashboard layout
   - `DashboardNav.tsx` - Top navigation
   - `AnalyticsHero.tsx` - Hero section with CTAs
   - `ChurnMetricCard.tsx` - Churn tracking with slider
   - `ObjectivesCard.tsx` - Quarterly goals with progress
   - `KPISnapshotCard.tsx` - KPI grid with actions
   - `MetricCard.tsx` - Reusable stat card component

2. 🎨 **Design System Integration**
   - Replace hard-coded neutral colors with design tokens
   - Use Tailwind glassmorphism utilities
   - Implement gradient backgrounds
   - Support theme variants

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/analytics.types.ts`:
   ```typescript
   export interface MetricCardProps {
     icon: React.ReactNode;
     value: string | number;
     label: string;
     trend?: {
       direction: 'up' | 'down';
       value: string;
     };
   }
   
   export interface ChurnMetricProps {
     currentChurn: number;
     benchmarkChurn: number;
     percentile: number;
     context: string;
   }
   
   export interface ObjectiveItem {
     icon: React.ReactNode;
     title: string;
     progress: number;
   }
   
   export interface ObjectivesCardProps {
     targetARR: string;
     deadline: string;
     objectives: ObjectiveItem[];
   }
   
   export interface KPIMetric {
     icon: React.ReactNode;
     value: string;
     label: string;
   }
   
   export interface KPISnapshotProps {
     metrics: KPIMetric[];
     actions: {
       label: string;
       icon: React.ReactNode;
       onClick: () => void;
     }[];
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: 3-column grid layout
   - Tablet: 2-column layout
   - Mobile: Single column stack
   - Maintain card proportions

5. 🎯 **Feature Requirements**
   - Range slider for churn benchmark
   - Progress bar animations
   - Interactive action buttons
   - Animated metric counters
   - Color-coded trend indicators
   - Lucide React icons
   - Animated entrance effects
   - Notification badge system

6. 🎨 **Typography**
   - Use Bricolage Grotesque for headings (h1, h2, h3)
   - Use Geist for body text and labels
   - Font weights: light (300), medium (500), semibold (600)

7. ⚡ **Interactivity**
   - Slider onChange handlers
   - Button click handlers
   - Hover effects on cards
   - Focus states for accessibility

**DELIVERABLES:**
1. ✅ `ui/components/analytics/AnalyticsDashboard.tsx`
2. ✅ `ui/components/analytics/DashboardNav.tsx`
3. ✅ `ui/components/analytics/AnalyticsHero.tsx`
4. ✅ `ui/components/analytics/ChurnMetricCard.tsx`
5. ✅ `ui/components/analytics/ObjectivesCard.tsx`
6. ✅ `ui/components/analytics/KPISnapshotCard.tsx`
7. ✅ `ui/components/analytics/MetricCard.tsx`
8. ✅ `ui/components/types/analytics.types.ts`
9. ✅ `ui/components/analytics/index.ts` barrel export
10. ✅ `ui/components/analytics/README.md` with usage examples
11. ✅ Demo in `src/AnalyticsDashboardDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify slider functionality
- Test progress bar animations
- Validate responsive layout
- Check button interactions
- Test TypeScript types
- Verify glassmorphism effects
- Check color-coded trends

Please implement this growth analytics dashboard following our project constitution, focusing on reusable metric components and proper state management.

# 🎯 **Dashboard with Sidebar Navigation Integration Prompt**

## 📋 **Integration Request**

I want to integrate a custom UI design into our **project-componets** React component library. Please extract and adapt this SoundForge Pro Dashboard interface to work with our **React 19 + Vite + TypeScript + Tailwind CSS** stack.

---

## **CURRENT PROJECT CONTEXT:**

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (design system tokens from `design-system/design.md`)
- **Backend:** Static/Demo data (no external backend required)
- **Language:** TypeScript 5 (strict mode, no `any` types)
- **Target Location:** `ui/components/dashboard-sidebar/`
- **Existing Functionality:** Component library with domain-organized UI slices
- **Design System:** Centralized tokens for colors, typography, spacing, radius, shadows

---

## **UI TO INTEGRATE:**

**Reference File:** `ideas/Dashboard with Sidebar Navigation.html`

### **Design Overview:**
A professional audio production studio dashboard featuring:
- **Dark gradient theme** (slate/blue gradients with glass morphism)
- **Collapsible sidebar navigation** with logo, action button, nav items, and upgrade CTA
- **Mobile-responsive** with hamburger menu and overlay
- **Stats cards grid** (4 metrics with icons)
- **Multiple chart types:**
  - Line chart (Monthly Revenue Trends with dual datasets)
  - Doughnut chart (Genre Distribution)
  - Bar charts (Studio Usage + Frequency Spectrum)
- **Artists data table** with avatars, status badges, and responsive columns
- **Glass morphism styling** with backdrop blur effects
- **Chart.js integration** for data visualization
- **Lucide icons** throughout

---

## **INTEGRATION REQUIREMENTS:**

### 1. 🔄 **Preserve All Existing Functionality**
   - Maintain project design system tokens from `design-system/design.md`
   - Keep centralized type definitions pattern (`ui/components/types/`)
   - Preserve accessibility standards (WCAG 2.1 AA)
   - Maintain existing Chart.js hooks (`ui/hooks/useChartSetup.ts`)

### 2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React functional components
   - Replace inline Tailwind classes with design system tokens where applicable
   - Convert vanilla JS Chart.js initialization to React hooks pattern
   - Extract reusable sub-components:
     - `Sidebar` - Collapsible navigation with mobile support
     - `DashboardHeader` - Top bar with user profile and notifications
     - `StatsCard` - Metric display with icon and value
     - `RevenueChart` - Line chart component
     - `GenreChart` - Doughnut chart component
     - `UsageChart` - Bar chart component
     - `SpectrumChart` - Frequency spectrum visualization
     - `ArtistsTable` - Data table with avatars and status badges
     - `DashboardLayout` - Main layout wrapper
   - Ensure responsive design for mobile, tablet, and desktop
   - Maintain glass morphism effects and gradient backgrounds
   - Preserve icon usage pattern with Lucide React

### 3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces/types in `ui/components/types/dashboard-sidebar.types.ts`
   - Define prop types for all components:
     - `SidebarProps` (navigation items, logo, mobile state)
     - `StatsCardProps` (title, value, icon, trend)
     - `ChartDataProps` (chart-specific data structures)
     - `ArtistProps` (artist data table schema)
     - `DashboardLayoutProps` (children, header config)
   - Use React hooks for:
     - Mobile menu toggle state (`useState`)
     - Chart.js initialization (`useEffect`, `useRef`)
     - Chart data management
   - Implement proper event handlers (menu toggle, chart interactions)
   - Add error boundaries for chart rendering failures
   - Optimize re-renders (memoization only if profiling reveals issues)

### 4. 📱 **Feature Integration**
   - **Mobile menu behavior:** Sidebar slides in/out with overlay
   - **Responsive stats grid:** 1 col mobile → 2 col tablet → 4 col desktop
   - **Chart responsiveness:** Maintain aspect ratios, handle container resizing
   - **Table responsiveness:** Hide columns on smaller screens (progressive disclosure)
   - **Keyboard navigation:** Sidebar links accessible via keyboard
   - **Focus states:** Visible focus indicators for all interactive elements
   - **Loading states:** Skeleton loaders for charts and table data
   - **Empty states:** Placeholders when no data available
   - **Dark theme optimization:** Ensure chart colors work in dark mode

### 5. 🎯 **Specific Adaptations Needed**
   - Replace CDN Chart.js with local Chart.js dependency (`chart.js` already in package.json)
   - Convert Lucide CDN script to `lucide-react` imports
   - Map color palette to design system tokens:
     - Primary: `#4f46e5` → use design system primary
     - Accent: `#06b6d4` (cyan) → use design system secondary
     - Success: `#10b981` → use design system chart-2
     - Warning: `#f59e0b` → use design system accent
     - Danger: `#ef4444` → use design system destructive
   - Create Chart.js theme configuration using design system colors
   - Extract chart configurations to reusable utilities
   - Implement data prop interfaces for easy customization
   - Support both static demo data and dynamic data sources

---

## **COMPONENT ARCHITECTURE:**

```
ui/components/dashboard-sidebar/
├── DashboardLayout.tsx          # Main layout with sidebar + content
├── Sidebar.tsx                  # Collapsible navigation sidebar
├── SidebarLogo.tsx              # Brand logo component
├── SidebarNav.tsx               # Navigation menu items
├── SidebarUpgrade.tsx           # Upgrade CTA card
├── DashboardHeader.tsx          # Top bar with breadcrumbs and user menu
├── StatsCard.tsx                # Metric card component
├── RevenueChart.tsx             # Line chart for revenue trends
├── GenreChart.tsx               # Doughnut chart for genre distribution
├── UsageChart.tsx               # Bar chart for studio usage
├── SpectrumChart.tsx            # Frequency spectrum bar chart
├── ArtistsTable.tsx             # Data table with artist information
├── hooks/
│   ├── useSidebarToggle.ts     # Mobile sidebar state management
│   └── useChartResize.ts       # Chart responsive behavior
├── types.ts                     # Re-exports from ../types/
├── index.ts                     # Public API exports
├── README.md                    # Component documentation
├── USAGE_EXAMPLE.tsx            # Demo implementation
├── INTEGRATION_SUMMARY.md       # Integration details
└── INSTALLATION.md              # Setup instructions
```

**Centralized Types:**
```
ui/components/types/dashboard-sidebar.types.ts  # All TypeScript definitions
```

---

## **TYPE DEFINITIONS REQUIRED:**

```typescript
// ui/components/types/dashboard-sidebar.types.ts

export interface SidebarNavItem {
  id: string;
  label: string;
  icon: string; // Lucide icon name
  href: string;
  badge?: {
    text: string;
    variant: 'live' | 'new' | 'beta';
  };
  isActive?: boolean;
}

export interface SidebarProps {
  logo?: {
    icon: string;
    text: string;
  };
  newActionButton?: {
    label: string;
    shortcut?: string;
    onClick: () => void;
  };
  navItems: SidebarNavItem[];
  upgradeCard?: {
    title: string;
    description: string;
    highlight?: string;
    ctaText: string;
    dismissText?: string;
    onUpgrade: () => void;
    onDismiss?: () => void;
  };
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string; // Lucide icon name
  iconColor: 'blue' | 'cyan' | 'green' | 'purple';
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
}

export interface RevenueChartData {
  labels: string[];
  revenue: number[];
  target?: number[];
}

export interface GenreChartData {
  labels: string[];
  values: number[];
  colors?: string[];
}

export interface UsageChartData {
  labels: string[];
  values: number[];
}

export interface SpectrumChartData {
  frequencies: string[];
  amplitudes: number[];
}

export interface Artist {
  id: string;
  name: string;
  avatar: string;
  genre: string;
  isFeatured?: boolean;
  status: {
    label: 'Online' | 'Recording' | 'Away' | 'Offline';
    variant: 'green' | 'yellow' | 'gray';
  };
  location: string;
}

export interface ArtistsTableProps {
  artists: Artist[];
  onArtistAction?: (artistId: string) => void;
}

export interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  notifications?: number;
  userAvatar?: string;
  onNotificationClick?: () => void;
  onHelpClick?: () => void;
  onProfileClick?: () => void;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}
```

---

## **DELIVERABLES:**

1. ✅ Complete React + TypeScript component implementation
2. ✅ Centralized TypeScript interfaces in `ui/components/types/dashboard-sidebar.types.ts`
3. ✅ Design system token integration (no hard-coded colors)
4. ✅ Chart.js integration with React hooks pattern
5. ✅ Mobile-responsive layout with hamburger menu
6. ✅ Glass morphism and gradient styling
7. ✅ Accessibility features (ARIA labels, keyboard navigation, focus states)
8. ✅ Documentation:
   - `README.md` - Component overview and API
   - `USAGE_EXAMPLE.tsx` - Working demo implementation
   - `INTEGRATION_SUMMARY.md` - Technical details and decisions
   - `INSTALLATION.md` - Setup and dependency instructions
9. ✅ Demo page in `src/DashboardSidebarDemo.tsx`

---

## **TESTING REQUIREMENTS:**

- Ensure all components render without TypeScript errors
- Verify mobile menu toggle works (sidebar slides, overlay appears)
- Test responsive breakpoints (mobile, tablet, desktop)
- Confirm all charts render with sample data
- Validate table columns hide/show at correct breakpoints
- Check keyboard navigation through sidebar links
- Verify focus states are visible on all interactive elements
- Test Chart.js responsive behavior on window resize
- Confirm design system tokens applied correctly
- Validate WCAG 2.1 AA contrast ratios
- Test with empty/loading states

---

## **DESIGN SYSTEM MAPPING:**

### **Color Mapping:**
```css
/* Original → Design System Token */
#0f172a (dark bg) → hsl(var(--background)) [dark mode]
#1e293b (slate) → hsl(var(--card))
#06b6d4 (cyan) → hsl(var(--secondary))
#3b82f6 (blue) → hsl(var(--primary))
#10b981 (green) → hsl(var(--chart-5))
#f59e0b (amber) → hsl(var(--accent))
#ef4444 (red) → hsl(var(--destructive))
#8b5cf6 (purple) → hsl(var(--chart-4))
```

### **Typography:**
- Font: Inter (already in design system as `--font-sans`)
- Scale: Use design system heading and text classes

### **Spacing:**
- Use design system spacing scale (p-4, p-6, gap-4, etc.)

### **Effects:**
- Backdrop blur: `backdrop-blur-lg`
- Glass morphism: `bg-slate-900/40` with `border-white/10`
- Shadows: Use design system shadow tokens

---

## **IMPLEMENTATION NOTES:**

1. **Chart.js Integration:**
   - Use `useChartSetup` hook from `ui/hooks/useChartSetup.ts` if compatible
   - Or create new chart hooks following project patterns
   - Set Chart.js global defaults for dark theme
   - Clean up chart instances on unmount

2. **Mobile Menu Pattern:**
   - Use `useState` for menu open/close state
   - Add overlay with click-outside-to-close behavior
   - Prevent body scroll when mobile menu is open
   - Add transition classes for smooth slide-in animation

3. **Responsive Strategy:**
   - Mobile-first approach
   - Stats cards: stack on mobile, 2-col on tablet, 4-col on desktop
   - Charts: maintain readable size on all screens
   - Table: hide less critical columns on mobile
   - Sidebar: fixed off-canvas on mobile, static on desktop

4. **Performance Considerations:**
   - Lazy load chart components if needed
   - Memoize chart configurations
   - Debounce window resize events for charts
   - Use CSS transforms for sidebar animation (GPU-accelerated)

5. **Accessibility:**
   - Add `aria-label` to icon buttons
   - Use semantic HTML (`<nav>`, `<header>`, `<main>`, `<table>`)
   - Ensure keyboard focus order is logical
   - Add skip links for keyboard users
   - Use `aria-expanded` for mobile menu button

---

## **SUCCESS CRITERIA:**

✅ All components compile without TypeScript errors  
✅ Design matches reference HTML aesthetic (glass morphism, gradients)  
✅ Mobile menu functions correctly with smooth animations  
✅ All charts render and display data properly  
✅ Table is responsive and columns hide/show correctly  
✅ Keyboard navigation works throughout  
✅ No hard-coded colors (design system tokens only)  
✅ Documentation is complete and accurate  
✅ Demo page showcases all features  
✅ Code follows project constitution principles  

---

**Please analyze the provided HTML design and implement it step-by-step, maintaining our existing component library structure while delivering the exact visual design and functionality requested.**

# 🎯 **DeFi Earn Dashboard Landing Page Integration Prompt**

## 📋 **Integration Request**

I want to integrate a custom UI design into our **project-componets** React component library. Please extract and adapt this AetherFund DeFi Earn Dashboard interface to work with our **React 19 + Vite + TypeScript + Tailwind CSS** stack.

---

## **CURRENT PROJECT CONTEXT:**

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (design system tokens from `design-system/design.md`)
- **Backend:** Static/Demo data (no blockchain integration required for now)
- **Language:** TypeScript 5 (strict mode, no `any` types)
- **Target Location:** `ui/components/defi-earn/`
- **Existing Functionality:** Component library with domain-organized UI slices
- **Design System:** Centralized tokens for colors, typography, spacing, radius, shadows

---

## **UI TO INTEGRATE:**

**Reference File:** `ideas/DeFi Earn Dashboard Landing Page Template.html`

### **Design Overview:**
A modern DeFi yield aggregation platform featuring:
- **Dark theme** (neutral-950 background with glass morphism)
- **Sticky header** with navigation, search, notifications, and wallet connection
- **Hero banner** with image overlay and CTA buttons
- **Two-column dashboard layout:**
  - Main section: Hero card with portfolio stats, deposit/transfer actions
  - Sidebar: Net deposits overview with utilization metrics
- **Vaults table** with filterable/sortable rows displaying:
  - Vault name with gradient icon
  - TVL (Total Value Locked)
  - APY estimates
  - Strategy tags
  - Hover states and navigation
- **Footer** with brand info, social links, navigation columns
- **Gradient icons** for vault tokens
- **Lucide icons** throughout
- **Responsive design** (mobile-first, stacks on small screens)

---

## **INTEGRATION REQUIREMENTS:**

### 1. 🔄 **Preserve All Existing Functionality**
   - Maintain project design system tokens from `design-system/design.md`
   - Keep centralized type definitions pattern (`ui/components/types/`)
   - Preserve accessibility standards (WCAG 2.1 AA)
   - Follow React 19 best practices

### 2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React functional components
   - Replace inline styles with design system tokens where applicable
   - Extract reusable sub-components:
     - `DeFiHeader` - Sticky nav with wallet connection
     - `HeroBanner` - Image banner with overlay and CTAs
     - `PortfolioCard` - Main dashboard card with token stats and actions
     - `DepositsSidebar` - Net deposits overview with metrics
     - `VaultsTable` - Filterable/sortable vaults list
     - `VaultRow` - Individual vault item with gradient icon
     - `StrategyBadge` - Strategy tag component
     - `DeFiFooter` - Footer with social links and nav columns
     - `DeFiLayout` - Main layout wrapper
   - Ensure responsive design for mobile, tablet, and desktop
   - Maintain glass morphism effects (`bg-white/5 ring-1 ring-white/10`)
   - Preserve gradient icon patterns
   - Convert Lucide CDN to `lucide-react` imports

### 3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces/types in `ui/components/types/defi-earn.types.ts`
   - Define prop types for all components:
     - `DeFiHeaderProps` (nav items, wallet address, notifications)
     - `HeroBannerProps` (title, description, image, CTAs)
     - `PortfolioCardProps` (token data, balance, APY, actions)
     - `DepositsSidebarProps` (net deposits, utilization, flow data)
     - `VaultsTableProps` (vaults array, filter/sort handlers)
     - `VaultProps` (name, symbol, icon, TVL, APY, strategy)
     - `StrategyBadgeProps` (label, variant)
     - `DeFiFooterProps` (social links, nav columns)
   - Use React hooks for:
     - Search modal state (`useState`)
     - Filter/sort state for vaults table
     - Mobile menu toggle (if needed)
   - Implement proper event handlers (wallet connection, deposit, filter, sort)
   - Add loading states for data fetching
   - Add empty states for vaults list

### 4. 📱 **Feature Integration**
   - **Sticky header:** Backdrop blur with border on scroll
   - **Wallet connection:** Display truncated address (0x3C...9D2)
   - **Search functionality:** Modal or dropdown search interface
   - **Vaults filtering:** Filter by strategy, asset type, APY range
   - **Vaults sorting:** Sort by TVL, APY, name
   - **Responsive table:** Hide columns on mobile, stack vault info
   - **Hover states:** Subtle background change on row hover
   - **Gradient icons:** Dynamic gradient based on token color
   - **Utilization bar:** Animated progress indicator
   - **Keyboard navigation:** Accessible vault selection

### 5. 🎯 **Specific Adaptations Needed**
   - Replace Lucide CDN script with `lucide-react` imports
   - Map color palette to design system tokens:
     - Background: `neutral-950` → use design system background
     - Card: `white/5` → use design system card with opacity
     - Accent: `amber-500/orange-600` → use design system accent gradient
     - Success: `emerald-400` → use design system chart-5
     - Text: `neutral-200/300/400` → use design system foreground variants
   - Convert gradient combinations to reusable utilities
   - Implement responsive breakpoints using Tailwind's `sm:`, `md:`, `lg:`
   - Extract vault data to JSON or TypeScript constants
   - Support pagination or infinite scroll for vaults list (future enhancement)
   - Add skeleton loaders for initial data fetch

---

## **COMPONENT ARCHITECTURE:**

```
ui/components/defi-earn/
├── DeFiLayout.tsx               # Main layout wrapper
├── DeFiHeader.tsx               # Sticky header with nav and wallet
├── SearchModal.tsx              # Search overlay component
├── HeroBanner.tsx               # Hero image banner with CTA
├── PortfolioCard.tsx            # Main portfolio stats card
├── TokenIcon.tsx                # Gradient token icon component
├── DepositsSidebar.tsx          # Net deposits and metrics sidebar
├── UtilizationBar.tsx           # Animated utilization progress bar
├── VaultsTable.tsx              # Vaults table container
├── VaultRow.tsx                 # Individual vault row component
├── StrategyBadge.tsx            # Strategy tag badge
├── VaultsFilters.tsx            # Filter and sort controls
├── DeFiFooter.tsx               # Footer with social links
├── hooks/
│   ├── useWallet.ts            # Wallet connection mock
│   ├── useVaultsFilters.ts     # Filter and sort state
│   └── useVaultsData.ts        # Vaults data management
├── types.ts                     # Re-exports from ../types/
├── index.ts                     # Public API exports
├── README.md                    # Component documentation
├── USAGE_EXAMPLE.tsx            # Demo implementation
├── INTEGRATION_SUMMARY.md       # Integration details
└── INSTALLATION.md              # Setup instructions
```

**Centralized Types:**
```
ui/components/types/defi-earn.types.ts  # All TypeScript definitions
```

---

## **TYPE DEFINITIONS REQUIRED:**

```typescript
// ui/components/types/defi-earn.types.ts

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface DeFiHeaderProps {
  logo?: {
    icon: string;
    text: string;
  };
  navItems: NavItem[];
  walletAddress?: string;
  notifications?: number;
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
  onWalletConnect?: () => void;
  onWalletDisconnect?: () => void;
}

export interface HeroBannerProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaPrimary?: {
    label: string;
    onClick: () => void;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}

export interface TokenData {
  symbol: string;
  name: string;
  icon: string;
  iconGradient: {
    from: string;
    to: string;
  };
  balance: string;
  balanceUSD: string;
  supplyAPY: string;
}

export interface PortfolioCardProps {
  title: string;
  description: string;
  token: TokenData;
  portfolio: {
    amount: string;
    symbol: string;
  };
  stats: {
    supplyAPY: string;
    balance: string;
  };
  onDeposit: () => void;
  onTransfer: () => void;
  image?: string;
}

export interface DepositsMetrics {
  netDeposits: string;
  utilization: number; // 0-100
  weeklyInflow: string;
  weeklyOutflow: string;
}

export interface DepositsSidebarProps {
  metrics: DepositsMetrics;
  onAddFunds: () => void;
  onWithdraw: () => void;
}

export interface VaultStrategy {
  label: string;
  variant: 'bullish' | 'trending' | 'limited-downside';
  icon: string;
}

export interface Vault {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  iconGradient: {
    from: string;
    to: string;
  };
  tvl: string;
  tvlAmount: string;
  apy: string;
  apyRange?: {
    min: number;
    max: number;
  };
  strategy: VaultStrategy;
  description?: string;
}

export interface VaultsTableProps {
  vaults: Vault[];
  onVaultClick?: (vaultId: string) => void;
  onFilterChange?: (filters: VaultFilters) => void;
  onSortChange?: (sort: VaultSort) => void;
}

export interface VaultFilters {
  strategy?: string[];
  apyMin?: number;
  tvlMin?: number;
  searchQuery?: string;
}

export interface VaultSort {
  field: 'name' | 'tvl' | 'apy';
  direction: 'asc' | 'desc';
}

export interface StrategyBadgeProps {
  label: string;
  variant: 'bullish' | 'trending' | 'limited-downside';
  icon: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface DeFiFooterProps {
  logo: {
    icon: string;
    text: string;
  };
  description: string;
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
  tagline?: string;
}

export interface DeFiLayoutProps {
  children: React.ReactNode;
}
```

---

## **DELIVERABLES:**

1. ✅ Complete React + TypeScript component implementation
2. ✅ Centralized TypeScript interfaces in `ui/components/types/defi-earn.types.ts`
3. ✅ Design system token integration (no hard-coded colors)
4. ✅ Responsive layout with mobile-first approach
5. ✅ Glass morphism and gradient styling
6. ✅ Accessibility features (ARIA labels, keyboard navigation, focus states)
7. ✅ Documentation:
   - `README.md` - Component overview and API
   - `USAGE_EXAMPLE.tsx` - Working demo implementation with sample data
   - `INTEGRATION_SUMMARY.md` - Technical details and decisions
   - `INSTALLATION.md` - Setup and dependency instructions
8. ✅ Demo page in `src/DeFiEarnDemo.tsx`
9. ✅ Sample vault data constants

---

## **TESTING REQUIREMENTS:**

- Ensure all components render without TypeScript errors
- Verify sticky header behavior on scroll
- Test responsive breakpoints (mobile, tablet, desktop)
- Confirm vaults table renders with sample data
- Validate filter and sort functionality
- Check hover states on vault rows
- Verify gradient icons render correctly
- Test keyboard navigation through vaults
- Verify focus states are visible on all interactive elements
- Confirm design system tokens applied correctly
- Validate WCAG 2.1 AA contrast ratios
- Test with empty/loading states
- Verify utilization bar animation

---

## **DESIGN SYSTEM MAPPING:**

### **Color Mapping:**
```css
/* Original → Design System Token */
neutral-950 (bg) → hsl(var(--background)) [dark mode]
white/5 (card) → hsl(var(--card)) with opacity
amber-500 to orange-600 (accent gradient) → hsl(var(--accent)) gradient
emerald-400 (success) → hsl(var(--chart-5))
cyan-400/sky-500 (blue gradients) → hsl(var(--secondary))
neutral-200/300/400 (text variants) → hsl(var(--foreground)) with opacity
white/10 (border) → hsl(var(--border))
```

### **Typography:**
- Font: Inter → Use design system `--font-sans`
- Logo font: Geist → Map to design system heading font
- Scale: Use design system text classes

### **Spacing:**
- Use design system spacing scale (p-4, p-6, gap-4, etc.)

### **Effects:**
- Backdrop blur: `backdrop-blur`
- Glass morphism: `bg-white/5 ring-1 ring-white/10`
- Gradients: `bg-gradient-to-r` with design system colors
- Shadows: Use design system shadow tokens

---

## **IMPLEMENTATION NOTES:**

1. **Gradient Icons:**
   - Create a `TokenIcon` component that accepts gradient colors
   - Use `bg-gradient-to-br` with `from-{color}` and `to-{color}`
   - Support Lucide icon names as children
   - Apply dark text color for icon contrast

2. **Vaults Table Responsiveness:**
   - Use CSS Grid with `grid-cols-1 md:grid-cols-12`
   - Stack vault info vertically on mobile
   - Hide less critical columns (TVL amount, strategy description) on small screens
   - Show chevron icon for navigation hint

3. **Sticky Header:**
   - Use `sticky top-0 z-30`
   - Add `backdrop-blur` and semi-transparent background
   - Include bottom border for visual separation

4. **Glass Morphism Pattern:**
   - Consistent use of `bg-white/5 ring-1 ring-white/10`
   - Apply to cards, buttons, and hover states
   - Use `backdrop-blur-lg` where needed

5. **Performance Considerations:**
   - Lazy load vault rows if list is long (>50 items)
   - Memoize filtered/sorted vault data
   - Use virtual scrolling for large datasets (future enhancement)
   - Optimize gradient rendering

6. **Accessibility:**
   - Add `aria-label` to icon-only buttons
   - Use semantic HTML (`<header>`, `<main>`, `<footer>`, `<table>` or `<ul>`)
   - Ensure keyboard focus order is logical
   - Add `role="button"` to clickable vault rows
   - Use `aria-sort` for sortable table headers
   - Provide skip links for keyboard users

---

## **SUCCESS CRITERIA:**

✅ All components compile without TypeScript errors  
✅ Design matches reference HTML aesthetic (dark theme, glass morphism)  
✅ Header is sticky and backdrop blurs on scroll  
✅ Vaults table is responsive and interactive  
✅ Filter and sort controls function correctly  
✅ Gradient icons render beautifully  
✅ Keyboard navigation works throughout  
✅ No hard-coded colors (design system tokens only)  
✅ Documentation is complete and accurate  
✅ Demo page showcases all features with sample vault data  
✅ Code follows project constitution principles  

---

**Please analyze the provided HTML design and implement it step-by-step, maintaining our existing component library structure while delivering the exact visual design and functionality requested.**

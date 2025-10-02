# 🎯 LYRA Modern Apparel Landing Page Template - UI Integration Prompt

**Source**: `ideas/LYRA Modern Apparel Landing Page Template.html`

Integrate this minimalist e-commerce apparel landing page into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/ecommerce/`
- Types: `ui/components/types/ecommerce.types.ts`

**UI FEATURES:**
- **Announcement bar** (shipping notice)
- **Sticky header** with primary/secondary navigation
- **Split hero** (2 images side-by-side with centered brand overlay)
- **Mobile menu drawer** (slide-in from left)
- **Search overlay** (modal with backdrop)
- **Product grids** with hover effects
- **Denim fit selector** (5-column grid)
- **New arrivals cards** with "New" badges
- **Craftsmanship section** (2-column image + content)

**TypeScript Types:**
```typescript
export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
  badge?: string;
}

export interface DenimFit {
  name: string;
  href: string;
}

export interface ApparelHeroProps {
  leftImage: string;
  rightImage: string;
  brandName: string;
  leftCta: { label: string; href: string };
  rightCta: { label: string; href: string };
}
```

**KEY FEATURES:**
- Sticky header with blur backdrop
- Mobile menu with slide animation
- Search modal overlay
- Product hover scale effects
- Split hero with centered text overlay
- Responsive grid layouts

**COMPONENTS TO CREATE:**
1. `ApparelLanding.tsx` - Main layout
2. `ApparelHeader.tsx` - Sticky navigation
3. `SplitHero.tsx` - Dual image hero
4. `MobileMenuDrawer.tsx` - Slide-in menu
5. `SearchOverlay.tsx` - Search modal
6. `ProductGrid.tsx` - Product cards
7. `DenimFitSelector.tsx` - Fit grid

**DELIVERABLES:**
- ✅ React components with TypeScript
- ✅ Mobile menu state management
- ✅ Search overlay with focus trap
- ✅ Lucide React icons
- ✅ README with usage examples
- ✅ Demo in `src/ApparelLandingDemo.tsx`

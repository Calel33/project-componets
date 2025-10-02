# 🎯 Interior Design Portfolio Landing Page Template - UI Integration Prompt

**Source**: `ideas/Interior Design Portfolio Landing Page Template.html`

Integrate this comprehensive interior design portfolio with Spline 3D background, sticky scroll cards, and animated transitions into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/interior-design/` (extending existing)
- Types: `ui/components/types/interior-design.types.ts`

**UI FEATURES:**
- **Spline 3D background** (animated shape blend - optional iframe)
- **Fixed navigation** with glassmorphism
- **Hero section** with animated button (rotating border, gradient overlay)
- **Sticky scroll portfolio cards** (3 cards stack on scroll with parallax images)
- **Process grid** (5 expandable cards with hover effects)
- **Logo ticker** (infinite scroll animation)
- **Blog/insights grid** with hover image effects

**TypeScript Types:**
```typescript
export interface PortfolioProject {
  image: string;
  title: string;
  description: string;
  category: string;
  stats: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  backgroundImage: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured?: boolean;
}
```

**KEY FEATURES:**
- Sticky scroll cards with z-index stacking
- Parallax image transforms on scroll
- Expandable process cards (flex-grow animation)
- Logo ticker with seamless loop
- Animated button with rotating border effect
- Hover scale/blur effects on images

**COMPONENTS TO CREATE:**
1. `DesignPortfolioLanding.tsx` - Main layout
2. `StickyPortfolioCards.tsx` - Sticky scroll cards
3. `ExpandableProcessGrid.tsx` - Process step cards
4. `LogoTicker.tsx` - Infinite scroll ticker
5. `AnimatedGradientButton.tsx` - Button with rotating border

**DELIVERABLES:**
- ✅ React components with scroll animations
- ✅ Sticky positioning logic hook
- ✅ Parallax scroll hook
- ✅ Logo ticker animation
- ✅ README with usage examples
- ✅ Demo in `src/DesignPortfolioDemo.tsx`

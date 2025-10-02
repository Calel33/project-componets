# 🎯 Interactive Product Feature Section with Tabs - UI Integration Prompt

**Source**: `ideas/Interactive Product Feature Section with Tabs.html`

Integrate this tabbed feature section with animated diagram into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/product/`
- Types: `ui/components/types/product.types.ts`

**UI FEATURES:**
- Tab navigation (Technology, Specs, Certifications)
- Animated network diagram with floating nodes
- Hover effects on nodes (scale, color transitions)
- Animated rating counter
- Responsive 2-column layout (diagram + content)
- Spec list with borders
- Certification grid cards

**TypeScript Types:**
```typescript
export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface CertificationBadge {
  title: string;
  subtitle: string;
}

export interface ProductFeatureTabsProps {
  tabs: TabItem[];
  specs: SpecItem[];
  certifications: CertificationBadge[];
  rating: number;
  totalReviews: string;
  recommendPercent: number;
}
```

**COMPONENTS TO CREATE:**
1. `ProductFeatureTabs.tsx` - Main container
2. `DiagramWithNodes.tsx` - Animated network visualization
3. `SpecList.tsx` - Technical specifications list
4. `CertificationGrid.tsx` - Certification badges

**KEY FEATURES:**
- Tab switching with state management
- Animated counter hook (`useCounterAnimation`)
- Network diagram with pulse animations
- Hover effects on nodes
- Responsive grid layout

**DELIVERABLES:**
- ✅ React components with TypeScript
- ✅ Lucide React icons
- ✅ README with usage examples
- ✅ Demo in `src/ProductFeaturesDemo.tsx`

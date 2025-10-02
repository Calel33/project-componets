# 🎯 Interactive Camping Experience Selector - UI Integration Prompt

**Source**: `ideas/Interactive Camping Experience Selector.html`

Integrate this expandable card selector into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/interactive/`
- Types: `ui/components/types/interactive.types.ts`

**UI FEATURES:**
- 5 expandable camping experience cards
- Smooth flex-grow animation (cubic-bezier)
- Background images with gradient overlays
- Icons with glassmorphism circles
- Staggered entrance animations (slide-fade from left)
- Click to expand/collapse with transition

**TypeScript Types:**
```typescript
export interface CampingExperienceProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  defaultActive?: boolean;
}

export interface ExperienceSelectorProps {
  experiences: CampingExperienceProps[];
  onSelect?: (index: number) => void;
}
```

**COMPONENTS TO CREATE:**
1. `ExperienceCard.tsx` - Individual expandable card
2. `ExperienceSelector.tsx` - Container with click handling
3. `ui/components/types/interactive.types.ts`

**KEY ANIMATIONS:**
- Flex-grow transition (0.8s cubic-bezier)
- Slide-fade entrance (0.7s with 180ms stagger)
- Background-size/position transitions
- Label opacity/transform on expand

**DELIVERABLES:**
- ✅ React components with TypeScript
- ✅ Responsive (4 cols → 2 cols → 1 col)
- ✅ Font Awesome icon support
- ✅ README with usage examples
- ✅ Demo in `src/CampingExperienceDemo.tsx`

# 🎯 Features Grid Layout - UI Integration Prompt

## Source Design
**Component Name**: Features Bento Grid Layout  
**Source File**: `ideas/Features Grid Layout.html`  
**Design Style**: Dark theme bento grid with animated feature cards

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/feature-grid/`
- Types Location: `ui/components/types/feature-grid.types.ts`
- Existing functionality: Reusable component library with centralized type definitions

**UI TO INTEGRATE:**

Dark theme bento grid with the following structure:
- 4-column grid layout with mixed column spans (1/4, 2/4, 1/4)
- Feature cards with icons, titles, and descriptions
- Highlight cards with "New" badges
- Dark background colors: #101010, #151515, #19191a
- Border color: #232323
- Typography: Inter font family
- Card hover effects and shadow elevations

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   - Create `FeaturesGridLayout.tsx` component
   - Create `FeatureCard.tsx` sub-component
   - Create `HighlightFeatureCard.tsx` for featured items
   - Support responsive bento grid layout (1/4, 2/4, 1/4 columns)

2. 🎨 **Design System Integration**
   - Replace hard-coded colors (#101010, #151515) with design tokens
   - Use Tailwind CSS utility classes
   - Maintain dark theme aesthetic
   - Support light/dark theme variants via design tokens

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/feature-grid.types.ts`:
   ```typescript
   export interface FeatureCardProps {
     icon: React.ReactNode;
     title: string;
     description: string;
     variant?: 'default' | 'highlight';
     badge?: string;
     iconColor?: string;
   }
   
   export interface FeaturesGridLayoutProps {
     features: FeatureCardProps[];
     columns?: 3 | 4;
     gridStyle?: 'bento' | 'uniform';
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: 4-column bento grid (1/4, 2/4, 1/4)
   - Tablet: 2-column grid
   - Mobile: Single column stack
   - Maintain card hover effects and animations

5. 🎯 **Feature Requirements**
   - Configurable grid layouts (bento vs uniform)
   - Support for Lucide React icons
   - Optional "New" badge for highlight cards
   - Hover effects with border color transitions
   - Shadow elevation system from design tokens

**DELIVERABLES:**
1. ✅ `ui/components/feature-grid/FeaturesGridLayout.tsx`
2. ✅ `ui/components/feature-grid/FeatureCard.tsx`
3. ✅ `ui/components/types/feature-grid.types.ts`
4. ✅ `ui/components/feature-grid/index.ts` barrel export
5. ✅ `ui/components/feature-grid/README.md` with usage examples
6. ✅ Demo in `src/FeaturesGridDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify responsive breakpoints
- Test icon rendering with lucide-react
- Validate TypeScript types
- Check design token compliance
- Test hover interactions

Please implement this step-by-step following our project constitution (vertical slice ownership, type safety, design fidelity).

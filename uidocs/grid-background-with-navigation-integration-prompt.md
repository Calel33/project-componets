# 🎯 Grid Background with Navigation UI - UI Integration Prompt

## Source Design
**Component Name**: ChainNavigator - Grid Background with Navigation  
**Source File**: `ideas/Grid Background with Navigation UI.html`  
**Design Style**: Dark theme with animated grid background, cursor glow effect, and comprehensive landing page

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/web3/` or `ui/components/background/`
- Types Location: `ui/components/types/background.types.ts`
- Existing functionality: Reusable component library with centralized type definitions

**UI TO INTEGRATE:**

The ChainNavigator includes:
- **Animated grid background** with 12 cells that reveal on hover
- **Cursor glow effect** following mouse movement with blur
- **Fixed navigation** with logo, menu items, sign-in/join CTAs
- **Hero section** with badge, heading, description, animated button
- **Side cards** with "How to Join" steps and "Categories" list
- **Responsive grid** (4 cols → 2 cols → 1 col)

**Key Design Features:**
- Animated grid cells (`grid-cell` with `reveal` class on hover)
- Cursor follower with radial gradient glow
- Smooth mouse tracking (0.1 interpolation)
- Custom animated button with rotating border
- Glassmorphism cards
- Dark theme (#222 background)

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   Create modular components:
   - `AnimatedGridBackground.tsx` - Interactive grid
   - `CursorGlow.tsx` - Mouse follower effect
   - `GridHero.tsx` - Hero content area
   - `InfoCard.tsx` - Side information cards
   - `AnimatedButton.tsx` - Custom button with border animation

2. 🎨 **Design System Integration**
   - Replace hard-coded colors (#222, #111, #bbb) with design tokens
   - Use Tailwind utilities where possible
   - Implement cursor tracking with React hooks
   - Create reusable animation classes

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/background.types.ts`:
   ```typescript
   export interface GridBackgroundProps {
     cellCount?: number;
     baseColor?: string;
     highlightColor?: string;
     enableHover?: boolean;
   }
   
   export interface CursorGlowProps {
     glowSize?: number;
     glowColor?: string;
     followSpeed?: number;
     blurAmount?: number;
   }
   
   export interface AnimatedButtonProps {
     children: React.ReactNode;
     onClick?: () => void;
     href?: string;
     variant?: 'primary' | 'secondary';
   }
   
   export interface InfoCardStep {
     icon: React.ReactNode;
     title: string;
     description: string;
   }
   
   export interface InfoCardProps {
     title: string;
     icon?: React.ReactNode;
     steps?: InfoCardStep[];
     glassmorphism?: boolean;
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: 4-column grid (3x4)
   - Tablet: 2-column grid
   - Mobile: 1-column grid
   - Disable cursor glow on touch devices

5. 🎯 **Feature Requirements**
   - Mouse position tracking hook (`useMousePosition`)
   - Smooth interpolation for cursor follower
   - Grid cell hover reveal animation
   - Rotating border animation on button
   - Glassmorphism with backdrop-blur
   - Lucide React icons

6. ⚡ **Performance Considerations**
   - Use `requestAnimationFrame` for smooth tracking
   - Throttle mouse events if needed
   - GPU-accelerated transforms (translate3d)
   - Conditional cursor glow (desktop only)

**DELIVERABLES:**
1. ✅ `ui/components/background/AnimatedGridBackground.tsx`
2. ✅ `ui/components/background/CursorGlow.tsx`
3. ✅ `ui/components/web3/GridHero.tsx`
4. ✅ `ui/components/web3/InfoCard.tsx`
5. ✅ `ui/components/web3/AnimatedButton.tsx`
6. ✅ `ui/hooks/useMousePosition.ts`
7. ✅ `ui/components/types/background.types.ts`
8. ✅ `ui/components/background/README.md`
9. ✅ Demo in `src/GridBackgroundDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify cursor tracking performance
- Test grid cell hover effects
- Validate responsive grid layout
- Check button animation smoothness
- Test touch device behavior (no cursor glow)
- Verify TypeScript types

Please implement this animated grid background system following our project constitution and performance best practices.

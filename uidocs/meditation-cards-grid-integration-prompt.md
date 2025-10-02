# 🎯 Meditation Cards Grid UI - UI Integration Prompt

**Source**: `ideas/Meditation Cards Grid UI.html`

Integrate this comprehensive mindfulness app interface with animated cards, progress tracking, and session library into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/wellness/`
- Types: `ui/components/types/wellness.types.ts`

**UI FEATURES:**
- **6 distinct card types**: Daily streak, sleep stories, breath work, analytics, session library, community
- **Card animations**: FadeIn + SlideUp + Blur effect on scroll
- **Background images** with overlays
- **Color-coded categories**: Emerald, blue, purple, amber, rose
- **Progress metrics** and badges
- **Lucide icons** for visual elements
- Hover scale effects (1.05)

**TypeScript Types:**
```typescript
export interface MeditationSession {
  id: string;
  title: string;
  category: 'daily' | 'sleep' | 'breath' | 'focus' | 'anxiety' | 'compassion';
  duration: number;
  completed?: boolean;
  backgroundImage: string;
  badge?: string;
  stats?: SessionStats;
}

export interface SessionStats {
  streak?: number;
  minutesCompleted?: number;
  improvement?: number;
}

export interface SessionCategory {
  name: string;
  color: string;
  sessionCount: number;
  icon: React.ReactNode;
}

export interface MeditationGridProps {
  sessions: MeditationSession[];
  categories: SessionCategory[];
  userProgress?: {
    hoursThisMonth: number;
    focusImprovement: number;
    stressReduction: number;
  };
}
```

**KEY FEATURES:**
- Staggered card animation (0.5s → 1.0s delays)
- Scroll-triggered IntersectionObserver
- Responsive 3-column grid (sm:grid-cols-2, lg:grid-cols-3)
- Card hover effects with shadow transitions
- Color-coded progress indicators
- Background images with overlay gradients

**COMPONENTS TO CREATE:**
1. `MeditationGrid.tsx` - Main grid layout
2. `MeditationCard.tsx` - Individual card component
3. `SessionLibraryCard.tsx` - Specialized library card with session list
4. `ProgressAnalyticsCard.tsx` - Stats display card
5. `CommunityCard.tsx` - Live community features
6. `useScrollAnimation.ts` - Scroll animation hook
7. `ui/components/types/wellness.types.ts`

**DELIVERABLES:**
- ✅ React components with scroll animations
- ✅ IntersectionObserver hook
- ✅ Staggered animation timing
- ✅ Responsive grid layout
- ✅ Color-coded category system
- ✅ README with usage examples
- ✅ Demo in `src/MeditationGridDemo.tsx`

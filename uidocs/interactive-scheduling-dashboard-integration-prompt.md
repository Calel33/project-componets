# 🎯 Interactive Scheduling Dashboard - UI Integration Prompt

**Source**: `ideas/Interactive Scheduling Dashboard.html`

Integrate this scheduling dashboard with calendar and meeting details into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/scheduling/`
- Types: `ui/components/types/scheduling.types.ts`

**UI FEATURES:**
- **Fixed header** with logo and navigation
- **Calendar card** with month navigation, date picker, quick range buttons
- **Meeting details card** with guests, date/time, actions
- **Video background** (optional integration)
- **Glassmorphism** cards with backdrop-blur
- **Staggered fade-in** animations

**TypeScript Types:**
```typescript
export interface CalendarDate {
  year: number;
  month: number;
  day: number;
}

export interface Guest {
  name: string;
  avatar: string;
  role: string;
  badgeColor: 'indigo' | 'amber' | 'teal' | 'blue';
}

export interface Meeting {
  title: string;
  guests: Guest[];
  date: Date;
  startTime: string;
  endTime: string;
  timezone: string;
}
```

**COMPONENTS TO CREATE:**
1. `SchedulingDashboard.tsx` - Main layout
2. `CalendarCard.tsx` - Interactive calendar with navigation
3. `MeetingCard.tsx` - Meeting details and actions
4. `GuestList.tsx` - Guest list with badges

**KEY FEATURES:**
- Calendar generation logic (Monday start)
- Month prev/next navigation
- Date selection with visual feedback
- Quick range buttons (Today, Yesterday, This Week, Next Week)
- Lucide React icons
- Responsive 2-column → 1-column layout

**DELIVERABLES:**
- ✅ React components with TypeScript
- ✅ Calendar logic hook (`useCalendar`)
- ✅ README with usage examples
- ✅ Demo in `src/SchedulingDashboardDemo.tsx`

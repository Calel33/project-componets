# 🎯 GPU Cluster Resource Dashboard - UI Integration Prompt

## Source Design
**Component Name**: Quantum GPU Analytics - Resource Overview  
**Source File**: `ideas/GPU Cluster Resource Dashboard.html`  
**Design Style**: Dark dashboard with 3D Spline background, real-time charts, and resource monitoring

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/dashboard/`
- Types Location: `ui/components/types/dashboard.types.ts`
- Existing functionality: Reusable component library with centralized type definitions, Chart.js integration

**UI TO INTEGRATE:**

The GPU Dashboard includes:
- **3D Spline background** (animated grid - optional integration)
- **Resource overview cards** (Total GPUs, Active Units, A100s, H100s)
- **Chart.js stacked bar chart** showing GPU usage by project
- **Performance metrics** (Temperature, Power Draw, Uptime)
- **Sidebar sections** (System Status, Active Jobs, Resource Allocation)
- **Real-time data updates** every 5 seconds

**Key Design Features:**
- Dark theme (neutral-900, black backgrounds)
- Monospace font for metrics (Space Mono)
- Sans-serif for UI (Inter)
- Animated chart with stacked bars
- Color-coded status indicators (green, yellow, red)
- Progress bars for resource allocation

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   Create modular dashboard components:
   - `GPUDashboard.tsx` - Main dashboard layout
   - `ResourceOverviewCard.tsx` - Stat cards
   - `UsageChart.tsx` - Chart.js integration
   - `PerformanceMetrics.tsx` - Metric cards
   - `SystemStatus.tsx` - Status indicators
   - `ActiveJobs.tsx` - Job list with status
   - `ResourceAllocation.tsx` - Progress bars

2. 🎨 **Design System Integration**
   - Replace hard-coded colors with design tokens
   - Use Tailwind border/ring utilities
   - Implement hover effects
   - Support theme variants (dark mode required)
   - Use existing Chart.js setup from `hooks/useChartSetup.ts`

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/dashboard.types.ts`:
   ```typescript
   export interface GPUResourceStats {
     totalGPUs: number;
     activeUnits: number;
     a100Count: number;
     h100Count: number;
     utilizationPercent: number;
   }
   
   export interface PerformanceMetric {
     label: string;
     value: string;
     status: 'optimal' | 'moderate' | 'warning';
     icon: React.ReactNode;
   }
   
   export interface ActiveJob {
     name: string;
     gpuCount: number;
     status: 'running' | 'queued' | 'starting';
     eta: string;
   }
   
   export interface ChartDataset {
     label: string;
     data: number[];
     backgroundColor: string;
   }
   
   export interface GPUDashboardProps {
     stats: GPUResourceStats;
     metrics: PerformanceMetric[];
     jobs: ActiveJob[];
     chartData: ChartDataset[];
     refreshInterval?: number;
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: 3-column layout (2/3 + 1/3)
   - Tablet: 2-column layout
   - Mobile: Single column stack
   - Scrollable chart on mobile

5. 🎯 **Feature Requirements**
   - Chart.js stacked bar chart integration
   - Real-time data refresh (configurable interval)
   - Animated counter updates
   - Status badge colors (green/yellow/red)
   - Progress bar animations
   - Hover effects on cards
   - Time-based chart updates
   - Lucide React icons

6. 🔌 **Chart.js Integration**
   - Use Chart.js 4.5+ (already in project)
   - Stacked bar chart type
   - Custom tooltip styling
   - Responsive chart sizing
   - Dark theme colors
   - Legend configuration

**DELIVERABLES:**
1. ✅ `ui/components/dashboard/GPUDashboard.tsx`
2. ✅ `ui/components/dashboard/ResourceOverviewCard.tsx`
3. ✅ `ui/components/dashboard/UsageChart.tsx`
4. ✅ `ui/components/dashboard/PerformanceMetrics.tsx`
5. ✅ `ui/components/dashboard/SystemStatus.tsx`
6. ✅ `ui/components/dashboard/ActiveJobs.tsx`
7. ✅ `ui/components/types/dashboard.types.ts`
8. ✅ `ui/components/dashboard/README.md`
9. ✅ Demo in `src/GPUDashboardDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify Chart.js rendering
- Test data refresh intervals
- Validate responsive layout
- Check TypeScript types
- Test status color coding
- Verify progress bar animations

Please implement this GPU dashboard following our project standards and Chart.js integration patterns already established in the codebase.

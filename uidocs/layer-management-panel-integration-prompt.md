# 🎯 Layer Management Panel UI - UI Integration Prompt

**Source**: `ideas/Layer Management Panel UI.html`

Integrate this Figma-style design editor with layers panel, canvas, and properties panel into our **project-componets** React library.

**CURRENT PROJECT CONTEXT:**
- React 19 + Vite, TypeScript 5, Tailwind CSS 3
- Component Location: `ui/components/design-tools/`
- Types: `ui/components/types/design-tools.types.ts`

**UI FEATURES:**
- **Left Panel**: Layer hierarchy with search, visibility toggles, nested layers, drag-drop
- **Center Canvas**: Design viewport with grid background, zoom controls, floating toolbar
- **Right Panel**: Properties editor (position, size, fill, stroke, effects, export)
- **Interactive controls**: Sliders, color pickers, number inputs
- **Lucide icons** throughout

**TypeScript Types:**
```typescript
export interface Layer {
  id: string;
  name: string;
  type: 'folder' | 'rectangle' | 'text' | 'circle' | 'frame';
  visible: boolean;
  locked: boolean;
  selected?: boolean;
  children?: Layer[];
  properties?: LayerProperties;
}

export interface LayerProperties {
  position: { x: number; y: number };
  size: { width: number; height: number };
  rotation: number;
  fill: FillStyle;
  stroke?: StrokeStyle;
  cornerRadius?: number[];
  effects?: Effect[];
}

export interface FillStyle {
  type: 'solid' | 'gradient';
  color: string;
  opacity: number;
}

export interface LayerManagementPanelProps {
  layers: Layer[];
  selectedLayer?: Layer;
  onLayerSelect: (id: string) => void;
  onLayerUpdate: (id: string, updates: Partial<Layer>) => void;
  onLayerDelete: (id: string) => void;
}
```

**KEY FEATURES:**
- Collapsible layer hierarchy
- Search/filter layers
- Visibility/lock toggles
- Properties panel with live editing
- Zoom controls (100%, fit, etc)
- Export options (PNG/SVG/JPG/PDF)

**COMPONENTS TO CREATE:**
1. `DesignEditor.tsx` - Main 3-panel layout
2. `LayersPanel.tsx` - Left sidebar with tree
3. `CanvasViewport.tsx` - Center design area
4. `PropertiesPanel.tsx` - Right sidebar
5. `LayerTreeItem.tsx` - Recursive layer item
6. `ToolbarFloating.tsx` - Canvas toolbar
7. `ui/components/types/design-tools.types.ts`

**DELIVERABLES:**
- ✅ React components with state management
- ✅ Layer hierarchy with drag-drop (optional)
- ✅ Real-time property editing
- ✅ Responsive 3-panel layout
- ✅ README with usage examples
- ✅ Demo in `src/DesignEditorDemo.tsx`

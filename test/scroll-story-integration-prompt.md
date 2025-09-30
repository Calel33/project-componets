# 🎯 Multi-Chapter Scroll Story UI Integration Prompt

## Generated from UI Integration Template
**Source Component:** `test/Multi-Chapter Scroll Story UI.html`  
**Generated:** 2025-09-29

---

```
I want to integrate a custom UI design into our React Component Library project. Please extract and adapt this interface to work with our React + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS (with design system tokens)
- Backend: Static content (storytelling/narrative content)
- Language: TypeScript
- Target file: src/components/storytelling/ScrollStory.tsx
- Existing functionality: Component library for immersive storytelling experiences

**UI TO INTEGRATE:**

The Digital Odyssey is a multi-chapter scroll-based storytelling experience with:
- 6 full-screen chapters with vertical scroll navigation
- Custom cursor with mix-blend-mode
- Fixed navigation showing current chapter
- Animated fade-in effects with blur and scale
- Large chapter numbers as background elements
- Gradient backgrounds for each chapter
- Animated decorative elements (spinning circles, pulsing dots)
- Keyboard navigation (Arrow Up/Down)
- Smooth transitions between chapters
- Staggered content animations

Key Design Features:
- Font: System fonts (font-thin for body, clamp() for responsive typography)
- Color scheme: Dark (black background) with vibrant gradients
- Typography: Ultra-thin weights (font-weight: 100, 200)
- Responsive text sizing with clamp()
- Custom cursor: white circle with mix-blend-mode: difference
- Scroll behavior: Locked vertical scroll with wheel hijacking
- Animations: Cubic bezier easing, blur effects, scale transforms
- Chapter transitions: 1.2s smooth transitions

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component modularity and reusability
   - Keep TypeScript type safety
   - Preserve responsive design patterns
   - Maintain accessibility standards (keyboard navigation, ARIA labels)

2. 🎨 **Adapt Design Elements**
   - Convert HTML to React TSX components
   - Use Tailwind CSS for styling
   - Implement custom CSS for complex animations
   - Convert clamp() typography to Tailwind responsive classes
   - Gradients: from-black via-gray-900, from-purple-900 via-blue-900, etc.
   - Ensure responsive breakpoints work correctly
   - Maintain ultra-thin font weights (font-thin, font-extralight)
   - Implement custom cursor with mix-blend-mode

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for:
     - `Chapter` (number, title, content, gradient, decorations)
     - `ScrollStoryProps` (chapters array, onChapterChange callback)
     - `ChapterContent` (heading, paragraphs, features)
   - Use React best practices:
     - Functional components with proper typing
     - useState for current chapter tracking
     - useEffect for scroll event listeners
     - useRef for DOM manipulation
     - Custom hooks for scroll logic
   - Implement proper event handlers (wheel, keyboard, mouse)
   - Add smooth chapter transitions
   - Optimize for React 19 performance

4. 📱 **Feature Integration**
   - Vertical scroll hijacking (prevent default scroll)
   - Wheel event navigation (scroll up/down to change chapters)
   - Keyboard navigation (Arrow Up/Down, Page Up/Down)
   - Custom cursor tracking (mousemove)
   - Staggered fade-in animations with blur
   - Chapter indicator updates
   - Smooth container transforms (translateY)
   - Animation state management
   - Scroll lock/unlock mechanism

5. 🎯 **Specific Adaptations Needed**
   - Convert vanilla JS scroll logic to React hooks
   - Implement wheel event with preventDefault
   - Create custom cursor component
   - Build chapter transition system with state management
   - Convert CSS animations to Tailwind + custom CSS
   - Implement staggered animation delays
   - Handle blur filter animations
   - Create reusable chapter layout components
   - Make content data-driven (accept chapters via props)
   - Create separate sub-components:
     - `ScrollStory.tsx` - Main container
     - `CustomCursor.tsx` - Custom cursor component
     - `ChapterNavigation.tsx` - Fixed navigation
     - `Chapter.tsx` - Individual chapter component
     - `ChapterContent.tsx` - Chapter content wrapper
     - `useScrollNavigation.ts` - Custom hook for scroll logic
   - Ensure all content is configurable

**COMPONENT STRUCTURE:**
```
src/components/storytelling/
├── ScrollStory.tsx            # Main container component
├── CustomCursor.tsx            # Custom cursor with mix-blend-mode
├── ChapterNavigation.tsx       # Fixed chapter indicator
├── Chapter.tsx                 # Individual chapter component
├── ChapterContent.tsx          # Content wrapper with animations
├── hooks/
│   └── useScrollNavigation.ts  # Scroll logic hook
├── types.ts                    # TypeScript interfaces
├── scroll-story.css            # Custom animations
└── index.ts                    # Barrel export

alimonyapp/componets/types/
└── storytelling.types.ts       # Centralized type definitions
```

**DELIVERABLES:**
1. ✅ Complete React + TypeScript component implementation
2. ✅ TypeScript interfaces in `types/storytelling.types.ts`
3. ✅ Tailwind CSS with custom animation CSS
4. ✅ Custom cursor component
5. ✅ Scroll hijacking with wheel events
6. ✅ Keyboard navigation (Arrow keys)
7. ✅ Staggered fade-in animations with blur
8. ✅ Chapter transition system
9. ✅ Responsive typography with clamp()
10. ✅ Responsive design (mobile-first approach)
11. ✅ README.md with usage examples
12. ✅ INSTALLATION.md with setup instructions
13. ✅ USAGE_EXAMPLE.tsx with implementation example
14. ✅ LAYOUT_EXAMPLES.tsx with different story variations

**TESTING REQUIREMENTS:**
- Ensure component renders without errors
- Verify wheel scroll navigation works correctly
- Test keyboard navigation (Arrow Up/Down)
- Confirm custom cursor follows mouse
- Test chapter transitions are smooth
- Verify staggered animations work correctly
- Test blur effects during transitions
- Confirm responsive behavior on mobile, tablet, desktop
- Validate TypeScript types are correct
- Check accessibility (keyboard navigation, focus management)
- Test scroll lock mechanism
- Verify chapter indicator updates correctly
- Test animation timing and easing

**DESIGN SYSTEM NOTES:**
This component uses a unique immersive design language:
- **Typography**: 
  - Ultra-thin weights (font-weight: 100, 200)
  - Responsive sizing with clamp()
  - hero-text: clamp(4rem, 10vw, 8rem)
  - story-text: clamp(2.5rem, 6vw, 5rem)
  - large-text: clamp(3rem, 7vw, 6rem)
- **Color Palette**: 
  - Background: black (#000000)
  - Text: white with opacity variants
  - Gradients: Multi-stop gradients for each chapter
- **Animations**:
  - Cubic bezier: cubic-bezier(0.19, 1, 0.22, 1)
  - Blur effects: filter: blur(20px) → blur(0px)
  - Scale: scale(0.95) → scale(1)
  - Transform: translateY(80px) → translateY(0)
- **Custom Cursor**: 
  - 20px circle with white border
  - mix-blend-mode: difference
  - Follows mouse position
- **Chapter Numbers**: 
  - Massive background text (clamp(10rem, 20vw, 25rem))
  - opacity: 0.08
  - Centered absolutely

**SPECIAL FEATURES:**
1. **Scroll Hijacking**: Prevents default scroll, uses wheel events for chapter navigation
2. **Custom Cursor**: Circular cursor with mix-blend-mode for visual effect
3. **Staggered Animations**: Content fades in with delays (i * 400ms)
4. **Blur Transitions**: Elements blur out and in during chapter changes
5. **Chapter Backgrounds**: Each chapter has unique gradient background
6. **Decorative Elements**: Animated circles, dots, spinning elements
7. **Keyboard Support**: Arrow keys for navigation
8. **Smooth Transitions**: 1.2s cubic-bezier easing
9. **Full-Screen Chapters**: Each chapter is 100vh
10. **Dynamic Content**: All chapters accept data via props

**CUSTOM ANIMATIONS CSS:**
```css
.fade-in {
  opacity: 0;
  transform: translateY(80px) scale(0.95);
  filter: blur(20px);
  transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
  visibility: hidden;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  visibility: visible;
}

.section {
  transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
}

.cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s;
}
```

**ACCESSIBILITY REQUIREMENTS:**
- Keyboard navigation (Arrow Up/Down, Page Up/Down)
- Focus management during chapter transitions
- ARIA labels for navigation
- Skip links for chapter navigation
- Reduced motion support (prefers-reduced-motion)
- Screen reader announcements for chapter changes
- Semantic HTML (nav, section, article)
- Proper heading hierarchy
- Alternative navigation for users who can't use wheel events

**SCROLL NAVIGATION LOGIC:**
```typescript
// Wheel event handler
- Prevent default scroll behavior
- Detect scroll direction (deltaY)
- Increment/decrement current chapter
- Trigger chapter transition
- Update chapter indicator
- Reset and replay animations

// Keyboard event handler
- Listen for ArrowDown, ArrowUp, PageDown, PageUp
- Navigate to next/previous chapter
- Same transition logic as wheel

// Chapter transition
- Hide all content with fade-out + blur
- Transform container (translateY)
- Wait for transition
- Show new chapter content with staggered delays
- Update navigation indicator
```

Please analyze the provided UI design and implement it step-by-step, maintaining our component library standards while delivering the exact visual design requested. Follow the file structure pattern established in `alimonyapp/componets/portfolio/` and `alimonyapp/componets/medical/` for consistency.
```

---

## 📦 **Expected Output Structure**

```
alimonyapp/componets/storytelling/
├── ScrollStory.tsx
├── CustomCursor.tsx
├── ChapterNavigation.tsx
├── Chapter.tsx
├── ChapterContent.tsx
├── hooks/
│   └── useScrollNavigation.ts
├── types.ts (re-exports)
├── scroll-story.css
├── index.ts
├── README.md
├── INSTALLATION.md
├── USAGE_EXAMPLE.tsx
└── LAYOUT_EXAMPLES.tsx

alimonyapp/componets/types/
└── storytelling.types.ts
```

## 🎨 **Design Tokens**

**Typography:**
- Font Weights: 100 (thin), 200 (extralight), 300 (light)
- Hero Text: clamp(4rem, 10vw, 8rem)
- Story Text: clamp(2.5rem, 6vw, 5rem)
- Large Text: clamp(3rem, 7vw, 6rem)
- Chapter Number: clamp(10rem, 20vw, 25rem)

**Colors:**
- Background: black (#000000)
- Text: white (#ffffff)
- Opacity variants: 60%, 70%, 80%
- Gradients per chapter:
  - Ch1: from-black via-gray-900 to-black
  - Ch2: from-purple-900 via-blue-900 to-black
  - Ch3: from-blue-900 via-cyan-900 to-teal-900
  - Ch4: from-teal-900 via-green-900 to-emerald-900
  - Ch5: from-emerald-900 via-yellow-900 to-orange-900
  - Ch6: from-orange-900 via-red-900 to-black

**Animations:**
- Duration: 1.2s
- Easing: cubic-bezier(0.19, 1, 0.22, 1)
- Stagger delay: 400ms per element
- Blur: 20px → 0px
- Scale: 0.95 → 1.0
- TranslateY: 80px → 0px

## 🚀 **Next Steps**

1. Copy this entire prompt
2. Submit to AI agent for implementation
3. Review generated components
4. Test scroll navigation
5. Test keyboard navigation
6. Integrate into main application

---

**Template Version:** 1.0  
**Component Type:** Multi-Chapter Scroll Story UI  
**Complexity:** Very High  
**Estimated Implementation Time:** 6-8 hours  
**Components Count:** 5 components + 1 custom hook + animations

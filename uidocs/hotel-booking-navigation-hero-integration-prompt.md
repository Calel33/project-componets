# 🎯 Hotel Booking Navigation and Hero UI - UI Integration Prompt

## Source Design
**Component Name**: Serenity Suites - Luxury Hotel Booking Interface  
**Source File**: `ideas/Hotel Booking Navigation and Hero UI.html`  
**Design Style**: Elegant hotel booking interface with glassmorphism, fade-in animations, and comprehensive booking form

---

I want to integrate this custom UI design into our **project-componets** React component library. Please extract and adapt this interface to work with our React 19 + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 (design tokens from design-system/)
- Language: TypeScript 5 (strict mode, no `any` types)
- Component Location: `ui/components/hotel/` or `ui/components/booking/`
- Types Location: `ui/components/types/booking.types.ts`
- Existing functionality: Reusable component library with centralized type definitions

**UI TO INTEGRATE:**

The Serenity Suites UI includes:
- **Fixed navigation** with glassmorphism (`bg-white/90`, `backdrop-blur-lg`)
- **Full-screen hero** with gradient overlay and background image
- **Booking form card** with 5 fields (check-in, checkout, guests, room type, search)
- **Room cards grid** (3 columns) with hover effects, badges, and pricing
- **Reveal animations** with Intersection Observer and staggered delays
- **Mobile menu** toggle functionality

**Key Design Features:**
- Glassmorphism effects on navigation and booking card
- Gradient overlay on hero background
- Staggered fade-in reveal animations (`@keyframes reveal`)
- Fancy underline hover effects on nav links
- Date/select inputs with Lucide icons
- Room cards with image zoom on hover

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Component Structure**
   Create modular components:
   - `HotelNav.tsx` - Fixed navigation with mobile menu
   - `HotelHero.tsx` - Hero section with booking form
   - `BookingForm.tsx` - Booking form with validation
   - `RoomCard.tsx` - Individual room card
   - `RoomsGrid.tsx` - Grid layout for room cards

2. 🎨 **Design System Integration**
   - Replace hard-coded colors with design tokens
   - Use Tailwind glassmorphism utilities
   - Implement reveal animations with CSS or Framer Motion
   - Support gradient overlays

3. 🔧 **TypeScript Types**
   Define in `ui/components/types/booking.types.ts`:
   ```typescript
   export interface BookingFormData {
     checkIn: Date;
     checkOut: Date;
     guests: number;
     roomType: string;
   }
   
   export interface RoomCardProps {
     image: string;
     title: string;
     description: string;
     pricePerNight: number;
     badge?: {
       icon: React.ReactNode;
       label: string;
       color: 'blue' | 'indigo' | 'yellow';
     };
     onBook: () => void;
   }
   
   export interface NavItem {
     label: string;
     href: string;
   }
   
   export interface HotelNavProps {
     brandName: string;
     tagline: string;
     navItems: NavItem[];
     phone: string;
     onReserve: () => void;
   }
   ```

4. 📱 **Responsive Adaptations**
   - Desktop: Full layout with 3-column grid
   - Tablet: 2-column grid
   - Mobile: Single column, mobile menu overlay
   - Responsive booking form (5 cols → stacked)

5. 🎯 **Feature Requirements**
   - Intersection Observer for reveal animations
   - Mobile menu toggle state
   - Form validation (date selection, guest count)
   - Hover effects (nav underlines, card zoom, button transforms)
   - Lucide React icons integration
   - Date picker inputs
   - Select dropdowns with custom styling

6. ⚡ **Animation Requirements**
   - Staggered reveal animations (0.12s delay between elements)
   - Fade-in-up effect with blur
   - Smooth transitions on hover/focus
   - Transform scale on buttons
   - Image zoom on room cards

**DELIVERABLES:**
1. ✅ `ui/components/hotel/HotelNav.tsx`
2. ✅ `ui/components/hotel/HotelHero.tsx`
3. ✅ `ui/components/hotel/BookingForm.tsx`
4. ✅ `ui/components/hotel/RoomCard.tsx`
5. ✅ `ui/components/hotel/RoomsGrid.tsx`
6. ✅ `ui/components/types/booking.types.ts`
7. ✅ `ui/hooks/useRevealAnimation.ts`
8. ✅ `ui/components/hotel/README.md`
9. ✅ Demo in `src/HotelBookingDemo.tsx`

**TESTING REQUIREMENTS:**
- Verify reveal animations timing
- Test mobile menu functionality
- Validate form inputs
- Check responsive breakpoints
- Test hover/focus effects
- Verify date picker integration

Please implement this elegant hotel booking interface following our project constitution and animation best practices.

# E-Commerce Product Detail Page - UI Integration Prompt

I want to integrate a custom UI design into our project-componets project. Please extract and adapt this interface to work with our React 19 + Vite + TypeScript + Tailwind CSS stack.

**CURRENT PROJECT CONTEXT:**
- Framework: React 19 + Vite
- Styling: Tailwind CSS 3 + Design System Tokens (from `design -system/`)
- Backend: N/A (Component Library - Demo purposes only)
- Language: TypeScript 5
- Target file: `ui/components/ecommerce/`
- Existing functionality: N/A (New domain for e-commerce product components)

**UI TO INTEGRATE:**

See `ideas/E-Commerce Product Detail Page Template.html` - Sephora-style product detail page featuring:
- Fixed glassmorphic header with search, wishlist, cart
- Breadcrumb navigation
- Two-column layout: Product gallery (left) + Product info (right)
- Vertical thumbnail gallery with main image zoom
- Floating UI badges and info cards on product image
- Product details: title, rating, pricing, shade selection
- Key features list with icons
- Quantity selector and add to cart
- Brand info card, delivery options
- Tabbed content sections (Details, Ingredients, Reviews, How to Use)
- Review system with star ratings and user feedback

**Key Design Elements:**
- Font: SF Pro Display (fallback to system fonts)
- Color Scheme: Clean white background, blue accents (#007AFF), subtle grays
- Glass-morphism: backdrop-filter blur effects
- Animations: fadeIn, slideInUp, blurIn, hover-lift transitions
- Button styles: Gradient primary buttons with hover effects
- Icons: Lucide icons
- Images: High-quality product photography with zoom capability

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture
   - Keep TypeScript type safety
   - Preserve design system token usage
   - Follow vertical slice ownership pattern

2. 🎨 **Adapt Design Elements**
   - Convert HTML structure to React 19 components
   - Replace inline styles with Tailwind CSS + design tokens
   - Implement image gallery with zoom functionality
   - Create tab navigation with state management
   - Ensure responsive design for all breakpoints
   - Add accessibility attributes (WCAG 2.1 AA)

3. 🔧 **Technical Adaptations**
   - Convert to TypeScript interfaces (export from `ui/components/types/ecommerce.types.ts`)
   - Use React 19 patterns (no unnecessary memoization)
   - Implement proper event handlers with TypeScript types
   - Add form validation for quantity and variants
   - Create reusable sub-components (ImageGallery, ProductInfo, TabPanel)
   - Optimize for performance (lazy loading, virtualization if needed)

4. 📱 **Feature Integration**
   - Product image gallery with thumbnail navigation
   - Zoom on hover for main product image
   - Color/variant selection with visual feedback
   - Quantity increment/decrement controls
   - Add to cart/wishlist/share functionality
   - Tab-based content sections
   - Review display with rating breakdown
   - Delivery options display
   - Mobile-responsive collapsible sections

5. 🎯 **Specific Adaptations Needed**
   - Replace SF Pro Display with design system fonts
   - Convert glass-morphism effects to Tailwind utilities
   - Adapt blue accent colors to design system tokens
   - Create hover states with smooth transitions
   - Implement responsive grid layouts
   - Add loading states for images
   - Create empty states for reviews/wishlist

**COMPONENT STRUCTURE:**
```
ui/components/ecommerce/
├── ProductDetailPage.tsx          # Main container component
├── ProductGallery.tsx             # Image gallery with thumbnails + zoom
├── ProductInfo.tsx                # Product details, pricing, variants
├── ProductTabs.tsx                # Tabbed content sections
├── ReviewCard.tsx                 # Individual review display
├── DeliveryOptions.tsx            # Delivery/pickup information
├── BrandCard.tsx                  # Brand information display
├── QuantitySelector.tsx           # Increment/decrement control
├── ColorSelector.tsx              # Variant/shade selection
├── types.ts                       # Re-export from types/ecommerce.types.ts
├── index.ts                       # Public exports
└── README.md                      # Component documentation
```

**TYPE DEFINITIONS:**
```typescript
// ui/components/types/ecommerce.types.ts
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: ProductImage[];
  variants: ProductVariant[];
  features: string[];
  ingredients?: string[];
  stock: StockInfo;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  thumbnail: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  color?: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 component implementations
2. ✅ Updated TypeScript interfaces in `ui/components/types/ecommerce.types.ts`
3. ✅ Tailwind CSS + Design System Token styling
4. ✅ Responsive product gallery with zoom functionality
5. ✅ Working tab navigation and content switching
6. ✅ Quantity selector and variant selection
7. ✅ Review system with rating breakdown
8. ✅ Mobile-responsive layouts
9. ✅ Documentation with usage examples
10. ✅ Integration summary document

**TESTING REQUIREMENTS:**
- Ensure all components render without errors
- Verify image gallery navigation and zoom work correctly
- Test tab switching and content display
- Confirm quantity selector bounds (min/max)
- Validate variant selection updates price/availability
- Test add to cart/wishlist interactions
- Verify responsive behavior on mobile, tablet, desktop
- Check accessibility compliance (keyboard navigation, ARIA labels)
- Test with different product data scenarios

**DESIGN SYSTEM COMPLIANCE:**
- Use design tokens from `design -system/` for colors, spacing, typography
- No hard-coded values for colors or spacing
- Follow component naming conventions (PascalCase)
- Maintain file size limit (<500 lines per file)
- Co-locate related components
- Document all props and variants

**ACCESSIBILITY REQUIREMENTS:**
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Sufficient color contrast (4.5:1 minimum)

Please analyze the provided UI design and implement it step-by-step, creating a production-ready e-commerce product detail page component that follows our project standards.

# 🎯 **Payment Dashboard - UI Integration Prompt**

## 📋 **Integration Request**

I want to integrate a custom UI design into our **Component Library** project. Please extract and adapt this interface to work with our **React 19 + TypeScript + Tailwind CSS** stack.

**CURRENT PROJECT CONTEXT:**
- Framework: **React 19 + Vite** 
- Styling: **Tailwind CSS + Design System Tokens** 
- Backend: **Form submission handlers (configurable)** 
- Language: **TypeScript** 
- Target location: **ui/components/payment/** 
- Existing functionality: **Reusable component library with design system integration**

**UI TO INTEGRATE:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-gray-100 font-['Plus_Jakarta_Sans']">
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="md:flex">
        <!-- Left Column: Payment Form -->
        <div class="md:w-3/5 p-8">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800">Complete your payment</h2>
            <p class="text-gray-500 mt-2">Enter your card details to process your payment</p>
          </div>
          
          <!-- Payment Form -->
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Card number</label>
              <div class="relative">
                <input type="text" placeholder="1234 5678 9012 3456" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                <div class="absolute right-3 top-3 flex space-x-2">
                  <i class="fa-brands fa-cc-visa text-blue-700 text-xl"></i>
                  <i class="fa-brands fa-cc-mastercard text-xl"></i>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Expiration date</label>
                <input type="text" placeholder="MM / YY" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Security code</label>
                <div class="relative">
                  <input type="text" placeholder="CVC" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                  <div class="absolute right-3 top-3 text-gray-400">
                    <i class="fa-solid fa-circle-question"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
              <input type="text" placeholder="Your name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
            </div>
            
            <div class="pt-4">
              <button class="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition font-medium flex items-center justify-center">
                <span>Pay $149.00</span>
                <i class="fa-solid fa-lock ml-2 text-sm"></i>
              </button>
              <p class="text-xs text-center text-gray-500 mt-3 flex items-center justify-center">
                <i class="fa-solid fa-shield-halved mr-1 text-gray-400"></i>
                Your payment information is encrypted and secure
              </p>
            </div>
          </div>
        </div>
        
        <!-- Right Column: Order Summary -->
        <div class="md:w-2/5 bg-gray-50 p-8 border-l border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 mb-6">Order summary</h3>
          
          <div class="space-y-4 mb-6">
            <div class="flex justify-between items-start">
              <div class="flex items-center">
                <div class="h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center">
                  <i class="fa-solid fa-briefcase text-indigo-500"></i>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-800">Business Plan</p>
                  <p class="text-xs text-gray-500">Annual billing</p>
                </div>
              </div>
              <p class="text-sm font-medium">$129.00</p>
            </div>
            
            <div class="flex justify-between items-start">
              <div class="flex items-center">
                <div class="h-12 w-12 rounded-md bg-green-100 flex items-center justify-center">
                  <i class="fa-solid fa-headset text-green-500"></i>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-800">Premium Support</p>
                  <p class="text-xs text-gray-500">24/7 customer service</p>
                </div>
              </div>
              <p class="text-sm font-medium">$20.00</p>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-4 mb-6">
            <div class="flex justify-between mb-2">
              <p class="text-sm text-gray-600">Subtotal</p>
              <p class="text-sm font-medium text-gray-800">$149.00</p>
            </div>
            <div class="flex justify-between">
              <p class="text-sm text-gray-600">Tax</p>
              <p class="text-sm font-medium text-gray-800">$0.00</p>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-4">
            <div class="flex justify-between">
              <p class="text-base font-medium text-gray-800">Total</p>
              <p class="text-base font-bold text-gray-800">$149.00</p>
            </div>
            <p class="text-xs text-gray-500 mt-2">
              By completing this purchase you agree to our <a href="#" class="text-indigo-600 hover:text-indigo-500">terms and conditions</a>
            </p>
          </div>
          
          <div class="mt-8">
            <div class="flex items-center justify-center space-x-3">
              <i class="fa-brands fa-cc-visa text-blue-700 text-2xl"></i>
              <i class="fa-brands fa-cc-mastercard text-2xl"></i>
              <i class="fa-brands fa-cc-amex text-blue-500 text-2xl"></i>
              <i class="fa-brands fa-cc-paypal text-blue-800 text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

**INTEGRATION REQUIREMENTS:**

1. 🔄 **Preserve All Existing Functionality**
   - Maintain component library architecture
   - Keep design system token integration
   - Preserve TypeScript type safety
   - Maintain reusability patterns

2. 🎨 **Adapt Design Elements**
   - Convert HTML to React 19 functional component
   - Replace Font Awesome icons with Lucide React
   - Replace hardcoded colors with design system tokens
   - Convert inline Tailwind classes to design system utilities where applicable
   - Ensure responsive design for mobile, tablet, desktop
   - Maintain accessibility standards (ARIA labels, semantic HTML, form validation)
   - Replace hardcoded text with configurable props

3. 🔧 **Technical Adaptations**
   - Create TypeScript interfaces for:
     - `PaymentFormProps` (title, subtitle, amount, onSubmit callback)
     - `PaymentFormData` (cardNumber, expiryDate, securityCode, cardholderName)
     - `OrderSummaryProps` (items array, subtotal, tax, total, termsLink)
     - `OrderItem` (icon, title, description, price, iconColor)
     - `PaymentMethodIcon` (type enum: visa, mastercard, amex, paypal, etc.)
   - Use React 19 best practices (hooks, controlled forms)
   - Implement proper form validation and submission handlers
   - Add error boundaries and loading states
   - Optimize with React.memo for performance
   - Add card number formatting (spaces every 4 digits)
   - Add expiry date formatting (MM / YY)
   - Add CVV/CVC validation (3-4 digits)

4. 📱 **Feature Integration**
   - Payment form with validation (card number, expiry, CVV, name)
   - Card number formatting (automatic spacing)
   - Expiry date formatting and validation
   - CVV/CVC field with tooltip/help icon
   - Card type detection (Visa, Mastercard, etc.)
   - Real-time validation feedback
   - Order summary with configurable items
   - Subtotal/tax/total calculations
   - Payment method icons display
   - Terms and conditions link
   - Form submission callback (onPaymentSubmit)
   - Loading state during payment processing
   - Success/error feedback messages
   - Security badge with encryption message

5. 🎯 **Specific Adaptations Needed**
   - Replace Font Awesome icons with Lucide React equivalents:
     - `fa-briefcase` → `Briefcase`
     - `fa-headset` → `Headphones`
     - `fa-lock` → `Lock`
     - `fa-shield-halved` → `Shield`
     - `fa-circle-question` → `HelpCircle`
   - Create custom card brand icons (Visa, Mastercard, Amex, PayPal) as SVG components
   - Convert form elements to controlled React inputs
   - Adapt indigo color scheme to design system primary colors
   - Ensure compatibility with existing component patterns
   - Create flexible order summary system supporting multiple items
   - Replace inline form handlers with callback props
   - Add form validation states (pristine, touched, error, valid)
   - Add field-level error messages
   - Implement card number masking for security
   - Add automatic focus management (next field on completion)

**DESIGN SYSTEM INTEGRATION:**
- **Colors**: Use design system tokens instead of:
  - `bg-white` → `bg-surface-primary`
  - `bg-gray-50` → `bg-surface-secondary`
  - `bg-gray-100` → `bg-background`
  - `border-gray-300` → `border-surface-border`
  - `text-gray-800` → `text-primary`
  - `text-gray-500` → `text-secondary`
  - `bg-indigo-600` → `bg-primary`
  - `focus:ring-indigo-500` → `focus:ring-primary`
- **Typography**: Replace hardcoded font sizes with design system tokens
- **Spacing**: Use design system spacing scale
- **Radius**: Use design system border radius tokens (`rounded-lg` → `radius-md`)
- **Shadows**: Apply design system shadow tokens (`shadow-lg` → `shadow-card`)
- **Focus States**: Use design system focus ring utilities

**COMPONENT API STRUCTURE:**

```typescript
interface PaymentDashboardProps {
  title?: string;
  subtitle?: string;
  orderSummary: OrderSummary;
  onPaymentSubmit: (data: PaymentFormData) => Promise<PaymentResult>;
  paymentMethods?: PaymentMethod[];
  securityMessage?: string;
  termsLink?: string;
  className?: string;
}

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
  cardholderName: string;
}

interface OrderSummary {
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
}

interface OrderItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  price: number;
  iconBgColor?: string;
  iconColor?: string;
}

interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

type PaymentMethod = 'visa' | 'mastercard' | 'amex' | 'paypal' | 'discover';

interface CardValidation {
  cardNumber: {
    isValid: boolean;
    error?: string;
    cardType?: 'visa' | 'mastercard' | 'amex' | 'discover';
  };
  expiryDate: {
    isValid: boolean;
    error?: string;
  };
  securityCode: {
    isValid: boolean;
    error?: string;
  };
  cardholderName: {
    isValid: boolean;
    error?: string;
  };
}
```

**DELIVERABLES:**
1. ✅ Complete React 19 + TypeScript component (`ui/components/payment/PaymentDashboard.tsx`)
2. ✅ Separate sub-components:
   - `PaymentForm.tsx` - Payment form with validation
   - `OrderSummary.tsx` - Order summary display
   - `CardBrandIcons.tsx` - Card brand SVG components
3. ✅ TypeScript interfaces and types (`ui/components/types/payment.types.ts`)
4. ✅ Design system token integration (no hardcoded colors)
5. ✅ Lucide React icons integration
6. ✅ Form validation logic with error states
7. ✅ Card number formatting utilities
8. ✅ Working animations (focus states, hover effects)
9. ✅ Responsive design for mobile/tablet/desktop
10. ✅ Form submission handlers with loading/success/error states
11. ✅ Documentation with usage examples
12. ✅ Centralized type definitions in `ui/components/types/payment.types.ts`
13. ✅ Domain folder with types re-export
14. ✅ Public API exports via `index.ts`
15. ✅ Update main `ui/index.ts` with Payment namespace

**TESTING REQUIREMENTS:**
- Ensure component renders without errors
- Verify form validation works correctly (card number, expiry, CVV, name)
- Test card number formatting (spaces every 4 digits)
- Test expiry date formatting (MM / YY)
- Test CVV validation (3-4 digits)
- Test card type detection (Visa starts with 4, Mastercard 51-55/2221-2720)
- Test form submission callbacks (success, error, loading states)
- Verify all interactive elements work (inputs, buttons)
- Test responsive behavior on mobile (320px), tablet (768px), desktop (1280px)
- Confirm accessibility compliance (keyboard navigation, screen readers, ARIA labels)
- Validate TypeScript types are correct
- Test with various order summary configurations
- Verify payment method icons render correctly
- Test field validation on blur and on submit
- Check error message display
- Test loading states during submission

**FILE STRUCTURE:**
```
ui/
  components/
    types/
      payment.types.ts              # Centralized type definitions
    payment/
      PaymentDashboard.tsx          # Main component
      PaymentForm.tsx               # Payment form sub-component
      OrderSummary.tsx              # Order summary sub-component
      CardBrandIcons.tsx            # Card brand SVG components
      types.ts                      # Type re-exports
      index.ts                      # Public API exports
      README.md                     # Component documentation
      USAGE_EXAMPLE.md              # Usage examples
      INTEGRATION_SUMMARY.md        # Integration details
  hooks/
    useCardValidation.ts            # Card validation hook
    useCardFormatter.ts             # Card formatting hook
test/
  PaymentDemo.tsx                   # Demo component
```

**VALIDATION RULES:**
- **Card Number**: 
  - Required, 13-19 digits
  - Luhn algorithm validation
  - Auto-detect card type (Visa, Mastercard, Amex, Discover)
  - Format with spaces every 4 digits
- **Expiry Date**: 
  - Required, MM/YY format
  - Valid month (01-12)
  - Not expired
  - Auto-format with slash
- **Security Code**: 
  - Required, 3-4 digits
  - 3 digits for Visa/Mastercard
  - 4 digits for Amex
- **Cardholder Name**: 
  - Required, 2+ characters
  - Letters, spaces, hyphens only

Please analyze the provided UI design and implement it step-by-step, creating a fully reusable, type-safe React component that integrates seamlessly with our design system and component library architecture.

---

## 🎨 **Design Notes**

**Key Visual Features:**
- Two-column layout (60/40 split)
- Left column: Payment form with card details
- Right column: Order summary with items and pricing
- Clean white background with subtle gray accents
- Rounded corners and soft shadows
- Card brand icons inline with input
- Security indicators (lock icon, shield icon)
- Payment method icons at bottom
- Indigo primary color for CTAs

**Interaction Patterns:**
- Real-time card number formatting
- Card type auto-detection
- Expiry date auto-formatting
- CVV with help tooltip
- Form validation on blur and submit
- Loading state during submission
- Success/error feedback
- Responsive stacked layout on mobile

**Form Features:**
- Card number (formatted with spaces)
- Expiration date (MM / YY format)
- Security code (CVC/CVV)
- Cardholder name
- Submit button with payment amount
- Security message below button

**Order Summary Features:**
- Item list with icons, titles, descriptions, prices
- Icon badges with background colors
- Subtotal calculation
- Tax display
- Total with bold styling
- Terms and conditions link
- Accepted payment method icons

**Accessibility Considerations:**
- Semantic HTML structure (form, labels, inputs)
- Proper form labels and field associations
- ARIA labels for icon-only elements
- Keyboard-navigable form fields
- Focus indicators on all interactive elements
- Required field indicators
- Error message support
- Screen reader friendly
- Help tooltips for complex fields

**Layout Sections:**
1. **Payment Form Section** (left, 60%):
   - Header with title and subtitle
   - Card number field with brand icons
   - Expiry and CVV fields (side-by-side)
   - Cardholder name field
   - Submit button
   - Security message

2. **Order Summary Section** (right, 40%):
   - Header
   - Item list with icons
   - Subtotal and tax
   - Total
   - Terms link
   - Payment method icons

**Responsive Behavior:**
- Desktop: Two columns side-by-side
- Tablet: Two columns (narrower)
- Mobile: Stacked single column (payment form first, then summary)

---

## 🚀 **Implementation Priority**

1. **Phase 1**: Core component structure with TypeScript types
2. **Phase 2**: PaymentForm component with validation
3. **Phase 3**: OrderSummary component
4. **Phase 4**: Card validation utilities and hooks
5. **Phase 5**: Card formatting utilities (spaces, expiry)
6. **Phase 6**: Card type detection logic
7. **Phase 7**: Card brand icon components
8. **Phase 8**: Design system token integration
9. **Phase 9**: Form submission handlers and states
10. **Phase 10**: Documentation and examples
11. **Phase 11**: Demo component
12. **Phase 12**: Testing and refinement

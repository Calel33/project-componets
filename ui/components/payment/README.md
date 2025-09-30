# Payment Components

Two comprehensive payment systems with card validation, formatting, and beautiful UI.

## Available Components

### 1. PaymentDashboard
Two-column payment interface with order summary (light theme).

### 2. PaymentCompletion
Animated 3D card preview with mesh gradient background (dark theme).

### 3. BillPaymentConfirmation
Success confirmation card for completed payments with receipt download.

## Common Features

- **Card Validation**: Luhn algorithm, card type detection (Visa, Mastercard, Amex, Discover)
- **Auto-Formatting**: Card number (spaces), expiry date (MM/YY), CVC
- **Real-time Validation**: Field-level error messages, touched state tracking
- **Form States**: Loading, success, error with feedback
- **Responsive Design**: Mobile, tablet, desktop optimized
- **Type-Safe**: Full TypeScript support
- **Accessible**: WCAG compliant, semantic HTML, keyboard navigation

## Quick Start

### PaymentDashboard (Light Theme)

```tsx
import { PaymentDashboard } from '@/ui/components/payment';
import { Briefcase, Headphones } from 'lucide-react';

<PaymentDashboard
  orderSummary={{
    items: [
      {
        id: '1',
        icon: <Briefcase />,
        title: 'Business Plan',
        description: 'Annual billing',
        price: 129.00,
      },
    ],
    subtotal: 129.00,
    tax: 0.00,
    total: 129.00,
  }}
  onPaymentSubmit={async (data) => {
    // Process payment
    return { success: true, transactionId: 'TXN-123' };
  }}
/>
```

### PaymentCompletion (Dark Theme)

```tsx
import { PaymentCompletion } from '@/ui/components/payment';

<PaymentCompletion
  amount={149.99}
  currency="USD"
  onSubmit={async (data) => {
    // Process payment
    return { success: true, transactionId: 'TXN-456' };
  }}
  cardPreviewEnabled={true}
/>
```

## Validation Rules

- **Card Number**: 13-19 digits, Luhn algorithm, auto-detect type
- **Expiry Date**: MM/YY format, valid month (01-12), not expired
- **CVV/CVC**: 3 digits (Visa/Mastercard), 4 digits (Amex)
- **Cardholder Name**: 2+ characters, letters/spaces/hyphens only

## Card Type Detection

- **Visa**: Starts with 4
- **Mastercard**: Starts with 51-55 or 2221-2720
- **Amex**: Starts with 34 or 37
- **Discover**: Starts with 6011 or 65

## Components

### Payment Dashboard System

#### PaymentDashboard
Main component with two-column layout (payment form + order summary). Light theme with white background.

**Features:**
- Order summary with item list
- Payment method icons (Visa, MC, Amex, PayPal)
- Configurable terms link
- Light, professional design

#### PaymentForm
Standalone payment form with validation.

#### OrderSummary
Standalone order summary display.

#### CardBrandIcons
SVG icons for payment methods.

---

### Payment Completion System

#### PaymentCompletion
Animated 3D card preview with mesh gradient background. Dark theme with black background.

**Features:**
- Animated 3D credit card preview
- 4 mesh gradient blob animations (7s, 6.3s, 4.8s, 8.2s)
- Live card updates as user types
- Glass-effect dark inputs
- Animated gradient button (blue → indigo → orange)
- Country selector with flags
- Optional card number masking

#### PaymentCompletionForm
Form component with validation logic.

#### CardPreview
Animated 3D card with live updates.

#### MeshGradientBackground
4 animated gradient blobs for card background.

#### CardChip
Realistic SVG card chip component.

#### CardLogo
SVG card logo with gradient fill.

#### GlassInput
Glass-effect input field (dark theme).

#### GradientButton
Animated gradient button with loading state.

#### CountrySelector
Country dropdown with flag emojis.

## Hooks

### useCardValidation

Card validation with Luhn algorithm and field validation.

### useCardFormatter

Card number, expiry date, and CVV formatting utilities.

## Import

### Payment Dashboard Components
```typescript
import { 
  PaymentDashboard, 
  PaymentForm, 
  OrderSummary,
  CardBrandIcon,
  VisaIcon,
  MastercardIcon,
  AmexIcon,
  PayPalIcon
} from '@/ui/components/payment';

import type { 
  PaymentFormData, 
  PaymentResult,
  OrderSummary,
  OrderItem 
} from '@/ui/components/payment/types';
```

### Payment Completion Components
```typescript
import { 
  PaymentCompletion,
  PaymentCompletionForm,
  CardPreview,
  MeshGradientBackground,
  CardChip,
  CardLogo,
  GlassInput,
  GradientButton,
  CountrySelector
} from '@/ui/components/payment';

import type { 
  PaymentCompletionFormData,
  PaymentCompletionProps,
  CountryOption,
  CardPreviewProps
} from '@/ui/components/payment/types';
```

### Hooks
```typescript
import { useCardFormatter, useCardValidation } from '@/ui';
```

## Documentation

- **Payment Completion Guide**: See [PAYMENT_COMPLETION_USAGE.md](./PAYMENT_COMPLETION_USAGE.md) for detailed documentation
- **Demo**: See `test/PaymentCompletionDemo.tsx` for working examples

## Choosing Between Components

### Use **PaymentDashboard** when:
- You need an order summary with item list
- Light theme matches your design
- Business/professional context
- Displaying multiple items and pricing breakdown

### Use **PaymentCompletion** when:
- You want a modern, animated experience
- Dark theme matches your design
- Single payment amount (no item breakdown needed)
- Consumer/retail context
- Want to showcase the card visually

Both components share the same validation logic and hooks, so you can switch between them easily.

---

### Bill Payment Confirmation System

#### BillPaymentConfirmation
Success confirmation card displaying payment details with download receipt option.

**Features:**
- Success icon with checkmark badge
- Payment details panel (amount, recipient, date, transaction ID)
- Download receipt action
- Three display variants (modal, inline, toast)
- Fade-in/fade-out animations
- ESC key dismissal
- Auto-dismiss option
- Keyboard accessible (WCAG 2.1 AA)
- Currency formatting (USD, EUR, GBP, CAD, etc.)
- Dark theme design

#### SuccessIcon
Circular success badge with animated checkmark. Configurable sizes (sm, md, lg).

#### PaymentDetailsPanel
Dark panel displaying transaction details in key-value format with proper currency and date formatting.

#### ConfirmationActions
Action button group with download receipt (primary) and dismiss (secondary) actions. Supports loading states.

### Quick Start: Bill Payment Confirmation

```tsx
import { BillPaymentConfirmation } from '@/ui/components/payment';

// Inline variant
<BillPaymentConfirmation
  transactionId="#9823451"
  amount={120.50}
  currency="USD"
  recipient="Acme Utilities"
  date="2024-06-11"
  variant="inline"
  onDismiss={() => setShowConfirmation(false)}
  onDownloadReceipt={async () => {
    // Download receipt logic
    await downloadReceipt();
  }}
/>

// Modal variant
<BillPaymentConfirmation
  variant="modal"
  transactionId="#7654321"
  amount={249.99}
  currency="USD"
  recipient="Premium Service"
  date={new Date()}
  onDismiss={() => setShowModal(false)}
/>

// Toast notification
<BillPaymentConfirmation
  variant="toast"
  transactionId="#5551234"
  amount={89.95}
  currency="USD"
  recipient="Monthly Bill"
  date={new Date()}
  autoDismiss={5000}
  onDismiss={() => setShowToast(false)}
/>
```

### Import: Bill Payment Confirmation

```typescript
import { 
  BillPaymentConfirmation,
  SuccessIcon,
  PaymentDetailsPanel,
  ConfirmationActions
} from '@/ui/components/payment';

import type { 
  BillPaymentConfirmationProps,
  PaymentDetails,
  ConfirmationVariant,
  SuccessIconProps,
  PaymentDetailsPanelProps,
  ConfirmationActionsProps
} from '@/ui/components/payment/types';
```

### Documentation: Bill Payment Confirmation

- **Usage Guide**: See [BILL_PAYMENT_CONFIRMATION_USAGE.md](./BILL_PAYMENT_CONFIRMATION_USAGE.md) for comprehensive documentation
- **Examples**: See [CONFIRMATION_EXAMPLES.tsx](./CONFIRMATION_EXAMPLES.tsx) for implementation examples
- **Types**: See `ui/components/types/payment.types.ts` for TypeScript definitions

### Complete Payment Flow

```tsx
import { PaymentCompletion, BillPaymentConfirmation } from '@/ui/components/payment';

function PaymentFlow() {
  const [step, setStep] = useState<'payment' | 'confirmation'>('payment');
  const [transactionData, setTransactionData] = useState(null);

  const handlePayment = async (data) => {
    const result = await processPayment(data);
    setTransactionData(result);
    setStep('confirmation');
    return result;
  };

  if (step === 'confirmation' && transactionData) {
    return (
      <BillPaymentConfirmation
        variant="modal"
        {...transactionData}
        onDismiss={() => setStep('payment')}
        onDownloadReceipt={generateReceipt}
      />
    );
  }

  return (
    <PaymentCompletion
      amount={149.99}
      onSubmit={handlePayment}
    />
  );
}
```

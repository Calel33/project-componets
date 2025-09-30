/**
 * Payment component domain exports
 * @module payment
 */

// Payment Dashboard Components
export { PaymentDashboard } from './PaymentDashboard';
export { PaymentForm } from './PaymentForm';
export { OrderSummary } from './OrderSummary';
export { CardBrandIcon, VisaIcon, MastercardIcon, AmexIcon, PayPalIcon, DiscoverIcon } from './CardBrandIcons';

// Payment Completion Portal Components
export { PaymentCompletion } from './PaymentCompletion';
export { PaymentCompletionForm } from './PaymentCompletionForm';
export { CardPreview } from './CardPreview';
export { CardChip } from './CardChip';
export { CardLogo } from './CardLogo';
export { MeshGradientBackground } from './MeshGradientBackground';
export { GlassInput } from './GlassInput';
export { GradientButton } from './GradientButton';
export { CountrySelector } from './CountrySelector';

// Bill Payment Confirmation Components
export { BillPaymentConfirmation } from './BillPaymentConfirmation';
export { SuccessIcon } from './SuccessIcon';
export { PaymentDetailsPanel } from './PaymentDetailsPanel';
export { ConfirmationActions } from './ConfirmationActions';

export type {
  PaymentDashboardProps,
  PaymentFormProps,
  PaymentFormData,
  OrderSummaryProps,
  OrderSummary,
  OrderItem,
  PaymentResult,
  PaymentMethod,
  CardType,
  CardValidation,
  FormStatus,
  FormState,
  PaymentCompletionProps,
  PaymentCompletionFormData,
  CountryOption,
  CardPreviewProps,
  ValidationState,
  PaymentCompletionValidation,
  GlassInputProps,
  GradientButtonProps,
  CountrySelectorProps,
  BillPaymentConfirmationProps,
  PaymentDetails,
  ConfirmationVariant,
  SuccessIconProps,
  PaymentDetailsPanelProps,
  ConfirmationActionsProps,
} from './types';

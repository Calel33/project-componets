import { Briefcase, Headphones } from 'lucide-react';
import { PaymentDashboard } from '../ui/components/payment';
import type { PaymentFormData, PaymentResult } from '../ui/components/payment/types';

export const PaymentDemo = () => {
  const handlePaymentSubmit = async (data: PaymentFormData): Promise<PaymentResult> => {
    console.log('Payment data submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success (90% success rate for demo)
    if (Math.random() > 0.1) {
      return {
        success: true,
        transactionId: `TXN-${Date.now()}`,
      };
    } else {
      return {
        success: false,
        error: 'Payment declined. Please try a different card.',
      };
    }
  };

  return (
    <PaymentDashboard
      title="Complete your payment"
      subtitle="Enter your card details to process your payment"
      orderSummary={{
        items: [
          {
            id: '1',
            icon: <Briefcase className="w-6 h-6" />,
            title: 'Business Plan',
            description: 'Annual billing',
            price: 129.00,
            iconBgColor: 'bg-indigo-100',
            iconColor: 'text-indigo-500',
          },
          {
            id: '2',
            icon: <Headphones className="w-6 h-6" />,
            title: 'Premium Support',
            description: '24/7 customer service',
            price: 20.00,
            iconBgColor: 'bg-green-100',
            iconColor: 'text-green-500',
          },
        ],
        subtotal: 149.00,
        tax: 0.00,
        total: 149.00,
      }}
      onPaymentSubmit={handlePaymentSubmit}
      paymentMethods={['visa', 'mastercard', 'amex', 'paypal']}
      securityMessage="Your payment information is encrypted and secure"
      termsLink="#terms"
    />
  );
};

export default PaymentDemo;

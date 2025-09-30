/**
 * PaymentCompletionDemo Component
 * Demo implementation of the PaymentCompletion component
 */

import React from 'react';
import { PaymentCompletion } from '../ui/components/payment';
import type { PaymentCompletionFormData, PaymentResult } from '../ui/components/payment';

export const PaymentCompletionDemo: React.FC = () => {
  const handlePaymentSubmit = async (
    data: PaymentCompletionFormData
  ): Promise<PaymentResult> => {
    console.log('Payment submitted:', data);

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate successful payment
        resolve({
          success: true,
          transactionId: `TXN-${Date.now()}`,
          timestamp: new Date(),
        });

        // Show success message
        alert(`Payment successful! Transaction ID: TXN-${Date.now()}`);
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <PaymentCompletion
        title="Complete Your Payment"
        amount={149.99}
        currency="USD"
        onSubmit={handlePaymentSubmit}
        cardPreviewEnabled={true}
        maskCardNumber={false}
        securityMessage="Your payment is secured with industry-standard encryption."
      />
    </div>
  );
};

export default PaymentCompletionDemo;

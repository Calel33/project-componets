// SimpleProteinTest.tsx - Minimal test to see what's working
import { PaymentForm, OrderSummary } from '../ui/components/payment';
import type { OrderItem, PaymentFormData, PaymentResult } from '../ui/components/payment/types';
import { Droplet, Flame, Sparkles } from 'lucide-react';

const proteinProducts: OrderItem[] = [
  {
    id: 'thunder-vanilla',
    icon: <Droplet className="w-6 h-6" />,
    iconBgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    title: 'Thunder Vanilla Pack',
    description: '24 servings',
    price: 49.99,
  },
  {
    id: 'blaze-chocolate',
    icon: <Flame className="w-6 h-6" />,
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Blaze Chocolate Pack',
    description: '24 servings',
    price: 49.99,
  },
  {
    id: 'premium-shaker',
    icon: <Sparkles className="w-6 h-6" />,
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Limited Edition Shaker',
    description: 'Insulated stainless steel',
    price: 24.99,
  },
];

const subtotal = proteinProducts.reduce((sum, item) => sum + item.price, 0);
const tax = subtotal * 0.08;
const total = subtotal + tax;

const handlePayment = async (data: PaymentFormData): Promise<PaymentResult> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    transactionId: `UPTOWN-${Date.now()}`,
  };
};

export default function SimpleProteinTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🔥 Uptown Protein Payment
          </h1>
          <p className="text-xl text-gray-700">
            Premium protein. Clean ingredients. Explosive results.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <PaymentForm
              title="Complete Your Order"
              subtitle="Secure payment powered by Stripe"
              amount={total}
              onSubmit={handlePayment}
            />
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary
              items={proteinProducts}
              subtotal={subtotal}
              tax={tax}
              total={total}
              paymentMethods={["visa", "mastercard", "amex", "paypal"]}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

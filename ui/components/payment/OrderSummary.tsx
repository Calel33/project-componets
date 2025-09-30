import type { OrderSummaryProps } from './types';
import { CardBrandIcon } from './CardBrandIcons';

export const OrderSummary = ({
  items,
  subtotal,
  tax,
  total,
  termsLink = '#',
  paymentMethods = ['visa', 'mastercard', 'amex', 'paypal'],
  className = '',
}: OrderSummaryProps) => {
  return (
    <div className={`bg-gray-50 p-8 border-l border-gray-200 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Order summary</h3>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-start">
            <div className="flex items-center">
              <div
                className={`h-12 w-12 rounded-md flex items-center justify-center ${
                  item.iconBgColor || 'bg-indigo-100'
                }`}
              >
                <div className={item.iconColor || 'text-indigo-500'}>{item.icon}</div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-800">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Subtotal and Tax */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm font-medium text-gray-800">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Tax</p>
          <p className="text-sm font-medium text-gray-800">${tax.toFixed(2)}</p>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between">
          <p className="text-base font-medium text-gray-800">Total</p>
          <p className="text-base font-bold text-gray-800">${total.toFixed(2)}</p>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          By completing this purchase you agree to our{' '}
          <a href={termsLink} className="text-indigo-600 hover:text-indigo-500">
            terms and conditions
          </a>
        </p>
      </div>

      {/* Payment Methods */}
      <div className="mt-8">
        <div className="flex items-center justify-center space-x-3">
          {paymentMethods.map((method) => (
            <CardBrandIcon key={method} brand={method} className="w-10 h-7" />
          ))}
        </div>
      </div>
    </div>
  );
};

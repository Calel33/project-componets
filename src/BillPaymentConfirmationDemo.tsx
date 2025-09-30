import React, { useState } from 'react';
import { BillPaymentConfirmation } from '../ui/components/payment';

/**
 * Demo page for Bill Payment Confirmation Component
 * Showcases the three variants: inline, modal, and toast
 */
export const BillPaymentConfirmationDemo: React.FC = () => {
  const [showInline, setShowInline] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownload = async () => {
    console.log('Downloading receipt...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Download complete!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Bill Payment Confirmation
          </h1>
          <p className="text-gray-400 text-lg">
            Success confirmation card with three variants
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setShowInline(!showInline)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {showInline ? 'Hide' : 'Show'} Inline
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            Show Modal
          </button>
          <button
            onClick={() => setShowToast(true)}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            Show Toast
          </button>
        </div>

        {/* Inline Variant */}
        {showInline && (
          <div className="flex justify-center mb-8">
            <BillPaymentConfirmation
              transactionId="#9823451"
              amount={120.50}
              currency="USD"
              recipient="Acme Utilities"
              date="2024-06-11"
              variant="inline"
              onDismiss={() => setShowInline(false)}
              onDownloadReceipt={handleDownload}
            />
          </div>
        )}

        {/* Modal Variant */}
        {showModal && (
          <BillPaymentConfirmation
            transactionId="#MOD-7654321"
            amount={249.99}
            currency="USD"
            recipient="Premium Subscription"
            date={new Date()}
            variant="modal"
            onDismiss={() => setShowModal(false)}
            onDownloadReceipt={handleDownload}
          />
        )}

        {/* Toast Variant */}
        {showToast && (
          <BillPaymentConfirmation
            transactionId="#TST-5551234"
            amount={89.95}
            currency="USD"
            recipient="Monthly Bill"
            date={new Date()}
            variant="toast"
            autoDismiss={8000}
            onDismiss={() => setShowToast(false)}
          />
        )}

        {/* Feature List */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Three display variants: inline, modal, and toast</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Smooth fade-in/fade-out animations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>ESC key to dismiss confirmation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Download receipt with async loading state</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Currency formatting (USD, EUR, GBP, CAD, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Auto-dismiss option for toast notifications</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>WCAG 2.1 AA accessible with ARIA labels</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>TypeScript support with no any types</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillPaymentConfirmationDemo;

import { useMemo } from 'react';
import { Droplet, Leaf, Sparkles, ShieldCheck, Timer, Flame } from 'lucide-react';
import {
  PaymentForm,
  OrderSummary,
} from '../ui/components/payment';
import type {
  OrderItem,
  PaymentFormData,
  PaymentResult,
} from '../ui/components/payment/types';

const mixAndMatchItems: OrderItem[] = [
  {
    id: 'berry-blast-pack',
    icon: <Droplet className="w-6 h-6" />,
    iconBgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    title: 'Berry Blast Pack',
    description: '12 bottles • Adaptogenic berry protein',
    price: 36.0,
  },
  {
    id: 'cocoa-crunch-pack',
    icon: <Flame className="w-6 h-6" />,
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-500',
    title: 'Cocoa Crunch Pack',
    description: '12 bottles • Toasted cacao crunch',
    price: 36.0,
  },
  {
    id: 'bonus-shaker',
    icon: <Sparkles className="w-6 h-6" />,
    iconBgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-500',
    title: 'Complimentary shaker',
    description: 'Limited edition neon shaker',
    price: 0,
  },
];

const subtotal = mixAndMatchItems.reduce((sum, item) => sum + item.price, 0);
const tax = 4.68;
const total = subtotal + tax;

const submitPayment = async (data: PaymentFormData): Promise<PaymentResult> => {
  await new Promise((resolve) => setTimeout(resolve, 900));

  return {
    success: true,
    transactionId: `PRO-${data.cardholderName.slice(0, 3).toUpperCase()}-${Math.floor(Math.random() * 10000)}`,
  };
};

const highlightPills = [
  {
    id: 'ships-48',
    icon: <Timer className="w-4 h-4" />,
    label: 'Ships in 48 hours',
  },
  {
    id: 'electrolytes',
    icon: <Droplet className="w-4 h-4" />,
    label: 'Electrolyte boosted',
  },
  {
    id: 'carbon-neutral',
    icon: <Leaf className="w-4 h-4" />,
    label: 'Carbon neutral delivery',
  },
];

const badgeStyle = {
  backgroundColor: 'var(--accent, #f59e0b)',
  color: 'var(--foreground, #000000)',
};

const containerStyle = {
  backgroundColor: 'var(--background, #f7f9f3)',
};

const headlineGradientStyle = {
  backgroundImage: 'linear-gradient(90deg, var(--primary, #4f46e5), var(--accent, #f59e0b))',
};

const ProteinPaymentDemo = () => {
  const orderSummary = useMemo(() => ({
    items: mixAndMatchItems,
    subtotal,
    tax,
    total,
  }), []);

  return (
    <div className="min-h-screen" style={containerStyle}>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-20 h-72 bg-gradient-to-br from-indigo-100 via-transparent to-orange-100 opacity-60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide"
              style={badgeStyle}
            >
              <Sparkles className="w-4 h-4" /> Fuel & Flow Mix & Match
            </span>
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              256-bit encrypted checkout powered by Stripe
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent"
              style={headlineGradientStyle}
            >
              Remix your protein. Keep the rhythm high.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Pick the flavors that match your training cycle, lock in recurring delivery, and stay fueled with clean,
              plant-powered protein on the go.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {highlightPills.map((pill) => (
                <span
                  key={pill.id}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {pill.icon}
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.55fr_1fr]">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-xl shadow-indigo-100/50">
              <PaymentForm
                title="Complete your Fuel & Flow order"
                subtitle="Enter your details to secure your monthly mix. Pause, swap, or skip anytime."
                amount={total}
                onSubmit={submitPayment}
                securityMessage="Triple-verified plant protein supply chain with buyer protection."
                className="p-8"
              />
            </div>

            <div className="lg:self-start">
              <OrderSummary
                items={orderSummary.items}
                subtotal={orderSummary.subtotal}
                tax={orderSummary.tax}
                total={orderSummary.total}
                termsLink="#fuel-flow-terms"
                paymentMethods={["visa", "mastercard", "amex", "paypal", "discover"]}
                className="rounded-2xl border border-gray-200 bg-white shadow-lg shadow-orange-100/60"
              />

              <div className="mt-6 rounded-2xl border border-indigo-100 bg-white/80 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-indigo-700">Subscription perks</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 text-indigo-500" />
                    <span>Drop new seasonal flavors into your mix every cycle—no extra checkout required.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplet className="mt-0.5 h-4 w-4 text-indigo-500" />
                    <span>Hydration amplifiers included in every box for endurance training days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="mt-0.5 h-4 w-4 text-indigo-500" />
                    <span>Certified compostable packaging made with 70% reclaimed fibres.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProteinPaymentDemo;

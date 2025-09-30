// UptownProteinPayment.tsx - Upbeat protein brand payment page remixing multiple domains
import { useMemo, useState } from 'react';
import { 
  Zap, Droplet, Flame, Sparkles, ShieldCheck, Timer, 
  Leaf, Award, TrendingUp, Heart, Star, Package 
} from 'lucide-react';
import {
  PaymentForm,
  OrderSummary,
  MeshGradientBackground,
} from '../ui/components/payment';
import type {
  OrderItem,
  PaymentFormData,
  PaymentResult,
} from '../ui/components/payment/types';
import { SkincareToast } from '../ui/components/skincare';
import type { ToastNotification } from '../ui/components/types/skincare.types';

// Product items with vibrant styling
const proteinProducts: OrderItem[] = [
  {
    id: 'thunder-vanilla',
    icon: <Zap className="w-6 h-6" />,
    iconBgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    title: 'Thunder Vanilla Pack',
    description: '24 servings • Lightning-fast absorption',
    price: 49.99,
  },
  {
    id: 'blaze-chocolate',
    icon: <Flame className="w-6 h-6" />,
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Blaze Chocolate Pack',
    description: '24 servings • Pre-workout amplified',
    price: 49.99,
  },
  {
    id: 'aqua-berry',
    icon: <Droplet className="w-6 h-6" />,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Aqua Berry Fusion',
    description: '24 servings • Electrolyte enhanced',
    price: 54.99,
  },
  {
    id: 'premium-shaker',
    icon: <Sparkles className="w-6 h-6" />,
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Limited Edition Shaker',
    description: 'Insulated stainless steel • LED tracker',
    price: 24.99,
  },
];

// Trust badges
const trustBadges = [
  { icon: <Timer className="w-4 h-4" />, label: 'Ships in 24h', color: 'text-green-600' },
  { icon: <Award className="w-4 h-4" />, label: 'Lab Tested', color: 'text-blue-600' },
  { icon: <Leaf className="w-4 h-4" />, label: '100% Natural', color: 'text-emerald-600' },
  { icon: <Heart className="w-4 h-4" />, label: '10k+ Reviews', color: 'text-red-500' },
];

// Calculate totals
const subtotal = proteinProducts.reduce((sum, item) => sum + item.price, 0);
const discount = 29.97; // 15% off bundle
const shipping = 0; // Free shipping
const tax = (subtotal - discount) * 0.08;
const total = subtotal - discount + shipping + tax;

const submitPayment = async (data: PaymentFormData): Promise<PaymentResult> => {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    success: true,
    transactionId: `UPTOWN-${Date.now().toString(36).toUpperCase()}`,
  };
};

export default function UptownProteinPayment() {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const orderSummary = useMemo(() => ({
    items: proteinProducts,
    subtotal,
    discount,
    shipping,
    tax,
    total,
  }), []);

  const handleRemoveToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showToast = (message: string) => {
    const newToast: ToastNotification = {
      id: `${Date.now()}-toast`,
      message,
      type: 'success',
      duration: 3000,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <MeshGradientBackground />
      </div>

      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Header section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                    UPTOWN PROTEIN
                  </h1>
                  <p className="text-sm text-gray-600">Elevate Your Performance</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold text-sm mb-6 shadow-lg shadow-orange-500/30 animate-bounce">
              <Star className="w-4 h-4" />
              <span>15% OFF - BUNDLE BONUS ACTIVE</span>
              <Star className="w-4 h-4" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Power Up
              </span>
              <br />
              <span className="text-gray-900">Your Fitness Game</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Premium protein blends crafted for champions. Clean ingredients, explosive flavors, 
              unstoppable results.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className={badge.color}>{badge.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment grid */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
            {/* Payment form */}
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl shadow-purple-500/10 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Complete Your Order</h3>
                  </div>
                  <p className="text-blue-100">
                    Join 50,000+ athletes fueling their best performance
                  </p>
                </div>
                
                <div className="p-8">
                  <PaymentForm
                    title=""
                    subtitle="Secure payment powered by Stripe. Your card details are encrypted and never stored."
                    amount={total}
                    onSubmit={async (data) => {
                      const result = await submitPayment(data);
                      if (result.success) {
                        showToast(`Payment successful! Order #${result.transactionId}`);
                      }
                      return result;
                    }}
                    securityMessage="256-bit SSL encryption • PCI DSS Level 1 certified"
                  />
                </div>
              </div>

              {/* Money-back guarantee */}
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">
                      100% Satisfaction Guarantee
                    </h4>
                    <p className="text-sm text-green-700">
                      Not loving your Uptown Protein? Get a full refund within 60 days, no questions asked. 
                      We're that confident you'll crush your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-8">
              <OrderSummary
                items={orderSummary.items}
                subtotal={orderSummary.subtotal}
                discount={orderSummary.discount}
                shipping={orderSummary.shipping}
                tax={orderSummary.tax}
                total={orderSummary.total}
                termsLink="#terms"
                paymentMethods={["visa", "mastercard", "amex", "paypal", "apple-pay"]}
                className="rounded-3xl border-2 border-purple-200 bg-white/90 backdrop-blur-xl shadow-2xl shadow-purple-500/20"
              />

              {/* Benefits callout */}
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  What's Included
                </h4>
                <ul className="space-y-3 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" />
                    <span><strong>72g premium protein</strong> per pack with complete amino profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Flame className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                    <span><strong>Thermogenic boost</strong> for enhanced metabolic performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplet className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                    <span><strong>Electrolyte blend</strong> for optimal hydration during training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                    <span><strong>Zero artificial ingredients</strong> - clean, plant-based formula</span>
                  </li>
                </ul>
              </div>

              {/* Social proof */}
              <div className="mt-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">4.9/5 from 12,847 reviews</span>
                </div>
                <blockquote className="text-sm text-gray-600 italic">
                  "Best-tasting protein I've ever tried. The Thunder Vanilla is addictive! 
                  My recovery time has cut in half since switching to Uptown."
                </blockquote>
                <p className="text-xs text-gray-500 mt-2">— Marcus T., Professional Athlete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer trust bar */}
        <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Active Athletes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-1">72g</div>
                <div className="text-sm text-gray-600">Protein Per Pack</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">24h</div>
                <div className="text-sm text-gray-600">Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notifications */}
      <div className="fixed top-20 right-6 z-[100] space-y-2">
        {toasts.map((toast) => (
          <SkincareToast
            key={toast.id}
            {...toast}
            onClose={() => handleRemoveToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

// UptownProteinSimple.tsx - Uptown Protein Payment with Design System
// no local state required
import { OrderSummary, MeshGradientBackground } from '../ui/components/payment';
import type { OrderItem } from '../ui/components/payment/types';
import { Zap, Droplet, Flame, Sparkles, ShieldCheck, Star, Award, Leaf, Timer, Heart } from 'lucide-react';
import { useScrollAnimation } from '../ui/hooks/useScrollAnimation';

const proteinProducts: OrderItem[] = [
  {
    id: 'thunder-vanilla',
    icon: <Zap className="w-6 h-6" />,
    iconBgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    title: 'Thunder Vanilla Pack',
    description: '24 servings • Lightning absorption',
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

const subtotal = proteinProducts.reduce((sum, item) => sum + item.price, 0);
const tax = subtotal * 0.08;
const total = subtotal + tax;

export default function UptownProteinSimple() {
  // Removed unused local form state to satisfy strict TS
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  // Additional section animations removed to satisfy strict TS (unused)

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-40">
        <MeshGradientBackground />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-6">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-9 h-9 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                UPTOWN PROTEIN
              </h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium mt-1">
                Elevate Your Performance
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg shadow-emerald-500/10">
            <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <div className="text-left">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">256-bit SSL</p>
              <p className="text-sm font-bold text-neutral-900 dark:text-white">Secure Checkout</p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section ref={heroRef as React.RefObject<HTMLElement>} className={`text-center mb-20 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-sm mb-8 shadow-2xl shadow-orange-500/50 animate-bounce">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-base">15% OFF - BUNDLE BONUS ACTIVE</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
          
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Power Up
            </span>
            <span className="block text-neutral-900 dark:text-white mt-2">Your Fitness Game</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            Premium protein blends crafted for champions. Clean ingredients, explosive flavors, 
            <span className="text-orange-600 dark:text-orange-400 font-bold"> unstoppable results</span>.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {[
              { icon: Timer, label: 'Ships in 24h', color: 'emerald' },
              { icon: Award, label: 'Lab Tested', color: 'blue' },
              { icon: Leaf, label: '100% Natural', color: 'green' },
              { icon: Heart, label: '10K+ Reviews', color: 'red' }
            ].map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <badge.icon className={`w-5 h-5 text-${badge.color}-600 dark:text-${badge.color}-400`} />
                <span className="text-sm font-bold text-neutral-900 dark:text-white">{badge.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Order Summary */}
          <div>
            <OrderSummary
              items={proteinProducts}
              subtotal={subtotal}
              tax={tax}
              total={total}
              paymentMethods={["visa", "mastercard", "amex", "paypal", "apple-pay"]}
              className="rounded-3xl border-2 border-purple-200 bg-white/90 backdrop-blur-xl shadow-2xl"
            />

            {/* Benefits */}
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200">
              <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
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
                  <span><strong>Electrolyte blend</strong> for optimal hydration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                  <span><strong>Zero artificial ingredients</strong> - clean formula</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Form Placeholder */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Ready to Upgrade?</h3>
              <p className="text-blue-100">Complete your order to join 50,000+ athletes</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input 
                      type="text" 
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Complete Purchase - ${total.toFixed(2)}
                </button>

                <p className="text-center text-sm text-gray-500">
                  🔒 256-bit SSL encryption • PCI DSS Level 1 certified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 border-t border-gray-200 bg-white/80 backdrop-blur-sm rounded-2xl p-8">
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
  );
}

// UptownProteinDesignSystem.tsx - Using ACTUAL design system tokens
import { useState } from 'react';
import { OrderSummary, MeshGradientBackground } from '../ui/components/payment';
import type { OrderItem } from '../ui/components/payment/types';
import { Zap, Droplet, Flame, Sparkles, ShieldCheck, Star, Award, Leaf, Timer, Heart, Lock, Moon, Sun } from 'lucide-react';
import { useScrollAnimation } from '../ui/hooks/useScrollAnimation';
import { useTheme } from '../ui/hooks/useTheme';

const proteinProducts: OrderItem[] = [
  {
    id: 'thunder-vanilla',
    icon: <Zap className="w-6 h-6" />,
    iconBgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    title: 'Thunder Vanilla Pack',
    description: '24 servings • Lightning absorption',
    price: 49.99,
  },
  {
    id: 'blaze-chocolate',
    icon: <Flame className="w-6 h-6" />,
    iconBgColor: 'bg-accent/10',
    iconColor: 'text-accent',
    title: 'Blaze Chocolate Pack',
    description: '24 servings • Pre-workout amplified',
    price: 49.99,
  },
  {
    id: 'aqua-berry',
    icon: <Droplet className="w-6 h-6" />,
    iconBgColor: 'bg-secondary/10',
    iconColor: 'text-secondary',
    title: 'Aqua Berry Fusion',
    description: '24 servings • Electrolyte enhanced',
    price: 54.99,
  },
  {
    id: 'premium-shaker',
    icon: <Sparkles className="w-6 h-6" />,
    iconBgColor: 'bg-chart-4/10',
    iconColor: 'text-chart-4',
    title: 'Limited Edition Shaker',
    description: 'Insulated stainless steel • LED tracker',
    price: 24.99,
  },
];

const subtotal = proteinProducts.reduce((sum, item) => sum + item.price, 0);
const tax = subtotal * 0.08;
const total = subtotal + tax;

export default function UptownProteinDesignSystem() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background dark:bg-background relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <MeshGradientBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-6">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-9 h-9 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-normal text-foreground">
                UPTOWN PROTEIN
              </h1>
              <p className="text-sm text-muted-foreground font-semibold mt-1">
                Elevate Your Performance
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-card border-2 border-border shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-accent" />
              ) : (
                <Moon className="w-6 h-6 text-primary" />
              )}
            </button>

            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border-2 border-secondary shadow-lg">
              <ShieldCheck className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">256-bit SSL</p>
                <p className="text-sm font-bold text-card-foreground">Secure Checkout</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section 
          ref={heroRef as React.RefObject<HTMLElement>} 
          className={`text-center mb-20 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-base mb-8 shadow-2xl animate-bounce">
            <Star className="w-5 h-5 fill-current" />
            <span>15% OFF - BUNDLE BONUS ACTIVE</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
          
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
            <span className="block text-primary">
              Power Up
            </span>
            <span className="block text-foreground mt-2">Your Fitness Game</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed font-semibold">
            Premium protein blends crafted for champions. Clean ingredients, explosive flavors, 
            <span className="text-accent font-bold"> unstoppable results</span>.
          </p>

          {/* Trust badges using design system */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {[
              { icon: Timer, label: 'Ships in 24h', color: 'secondary' },
              { icon: Award, label: 'Lab Tested', color: 'primary' },
              { icon: Leaf, label: '100% Natural', color: 'chart-5' },
              { icon: Heart, label: '10K+ Reviews', color: 'destructive' }
            ].map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border-2 border-border shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <badge.icon className={`w-5 h-5 text-${badge.color}`} />
                <span className="text-sm font-bold text-card-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div 
          ref={productsRef as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-[1fr_1.2fr] gap-8 transition-all duration-1000 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Order Summary */}
          <div>
            <OrderSummary
              items={proteinProducts}
              subtotal={subtotal}
              tax={tax}
              total={total}
              paymentMethods={["visa", "mastercard", "amex", "paypal", "apple-pay"]}
              className="rounded-xl border-2 border-primary bg-card shadow-2xl"
            />

            {/* Benefits - using design tokens */}
            <div className="mt-8 p-6 rounded-xl bg-muted border-2 border-border">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                What's Included
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span><strong className="text-foreground">72g premium protein</strong> per pack with complete amino profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                  <span><strong className="text-foreground">Thermogenic boost</strong> for enhanced metabolic performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                  <span><strong className="text-foreground">Electrolyte blend</strong> for optimal hydration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-4 h-4 mt-0.5 flex-shrink-0 text-chart-5" />
                  <span><strong className="text-foreground">Zero artificial ingredients</strong> - clean formula</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Form - using design system */}
          <div className="rounded-xl bg-card border-2 border-border shadow-2xl overflow-hidden">
            <div className="bg-primary p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-2">Ready to Upgrade?</h3>
              <p className="text-primary-foreground/80">Complete your order to join 50,000+ athletes</p>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-input focus:ring-4 focus:ring-ring focus:border-primary outline-none transition-all text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Card Number</label>
                <input 
                  type="text" 
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-input focus:ring-4 focus:ring-ring focus:border-primary outline-none transition-all text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Expiry</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-input focus:ring-4 focus:ring-ring focus:border-primary outline-none transition-all text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123"
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-input focus:ring-4 focus:ring-ring focus:border-primary outline-none transition-all text-foreground"
                  />
                </div>
              </div>

              <button className="w-full py-4 rounded-lg bg-accent text-accent-foreground font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Complete Purchase - ${total.toFixed(2)}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>256-bit SSL encryption • PCI DSS Level 1 certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar - using design tokens */}
        <div className="mt-16 border-2 border-border bg-card rounded-xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground font-semibold">Active Athletes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground font-semibold">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-1">72g</div>
              <div className="text-sm text-muted-foreground font-semibold">Protein Per Pack</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-5 mb-1">24h</div>
              <div className="text-sm text-muted-foreground font-semibold">Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

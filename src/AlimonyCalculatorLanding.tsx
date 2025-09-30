/**
 * Alimony Calculator Landing Page
 * Mixing nova (SaaS) + web3 (modern) + portfolio components
 */

'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Shield,
  Star,
  Check,
  Scale,
  FileText,
  TrendingUp,
  Users,
  Lock,
  Zap,
  Menu,
  X,
  DollarSign,
  Calendar,
  BarChart3,
} from 'lucide-react';

export const AlimonyCalculatorLanding: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [income1, setIncome1] = useState('');
  const [income2, setIncome2] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateAlimony = () => {
    const inc1 = parseFloat(income1) || 0;
    const inc2 = parseFloat(income2) || 0;
    const yrs = parseFloat(years) || 0;
    
    // Simple calculation formula (30% of income difference)
    const difference = Math.abs(inc1 - inc2);
    const baseAmount = difference * 0.3;
    const yearMultiplier = Math.min(yrs / 10, 2); // Max 2x for 20+ years
    const estimated = baseAmount * yearMultiplier;
    
    setResult(estimated);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white antialiased min-h-screen">
      {/* Header - Web3 Style */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="relative">
              <span className="block h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg"></span>
              <span className="absolute inset-0 block h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
            </div>
            <span className="text-xl font-semibold tracking-tight">AlimonyCalc Pro</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-sm font-medium space-x-8 items-center">
            <li>
              <a href="#calculator" className="transition-all duration-200 hover:text-blue-400 hover:bg-white/5 rounded-lg px-3 py-2">
                Calculator
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="transition-all duration-200 hover:text-blue-400 hover:bg-white/5 rounded-lg px-3 py-2">
                How It Works
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition-all duration-200 hover:text-blue-400 hover:bg-white/5 rounded-lg px-3 py-2">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-all duration-200 hover:text-blue-400 hover:bg-white/5 rounded-lg px-3 py-2">
                FAQ
              </a>
            </li>
          </ul>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <a
              href="#pricing"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-blue-500 hover:text-white hover:scale-105 shadow-lg"
            >
              <Zap className="w-4 h-4" />
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col gap-6 bg-black/95 px-6 pt-24 text-lg font-medium backdrop-blur-xl md:hidden">
            <button
              className="absolute top-5 right-5 p-2 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            <a href="#calculator" className="transition-colors hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>
              Calculator
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#pricing" className="transition-colors hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>

            <a
              href="#pricing"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-all hover:bg-blue-500 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Zap className="w-4 h-4" />
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section - Nova Style */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl mb-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_400px_at_20%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(700px_300px_at_90%_10%,rgba(147,51,234,0.12),transparent)]" />

          <div className="max-w-7xl md:py-20 mr-auto ml-auto pt-16 pr-8 pb-16 pl-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Column - Copy */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-6 ring-1 ring-blue-400/20">
                  <Shield className="w-4 h-4" />
                  Attorney-Approved Calculations
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight">
                  Calculate Alimony —{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Fast & Accurate
                  </span>
                </h1>
                <p className="mt-5 text-gray-300/90 leading-relaxed">
                  Get instant alimony estimates based on your state's guidelines. Our calculator uses real legal formulas trusted by attorneys nationwide.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/15 bg-white/10 rounded-full px-6 py-3 hover:bg-white/15 hover:shadow-lg transition backdrop-blur"
                  >
                    <Calculator className="w-4 h-4" />
                    Try Calculator
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 text-sm font-medium border border-white/15 text-white rounded-full px-6 py-3 hover:bg-white/10 transition backdrop-blur"
                  >
                    <FileText className="w-4 h-4" />
                    Learn More
                  </a>
                </div>

                {/* Feature Highlights */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center ring-1 ring-green-400/20">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        State-Specific Formulas
                      </h4>
                      <p className="text-sm text-gray-300/90 leading-relaxed">
                        Calculations based on your state's actual alimony guidelines and laws.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center ring-1 ring-blue-400/20">
                      <Lock className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        100% Private & Secure
                      </h4>
                      <p className="text-sm text-gray-300/90 leading-relaxed">
                        Your data never leaves your device. All calculations happen locally.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center ring-1 ring-purple-400/20">
                      <Scale className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        Attorney-Reviewed
                      </h4>
                      <p className="text-sm text-gray-300/90 leading-relaxed">
                        Formulas verified by licensed family law attorneys.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Calculator Card */}
              <div className="relative">
                <article className="group relative overflow-hidden transition-shadow hover:shadow-xl bg-white/5 border-white/10 border rounded-3xl shadow-2xl backdrop-blur-xl">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Calculator className="w-6 h-6 text-blue-400" />
                      <h3 className="text-2xl text-white font-bold tracking-tight">
                        Quick Estimate
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Annual Income
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            value={income1}
                            onChange={(e) => setIncome1(e.target.value)}
                            placeholder="75,000"
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Spouse's Annual Income
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            value={income2}
                            onChange={(e) => setIncome2(e.target.value)}
                            placeholder="50,000"
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Years of Marriage
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            value={years}
                            onChange={(e) => setYears(e.target.value)}
                            placeholder="10"
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      <button
                        onClick={calculateAlimony}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2"
                      >
                        <BarChart3 className="w-5 h-5" />
                        Calculate Estimate
                      </button>

                      {result !== null && (
                        <div className="mt-6 p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl">
                          <div className="text-center">
                            <div className="text-sm text-blue-300 mb-2">Estimated Monthly Alimony</div>
                            <div className="text-4xl font-bold text-white">
                              ${(result / 12).toFixed(0)}
                              <span className="text-lg text-gray-300">/mo</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-2">
                              ${result.toFixed(0)} annually
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-gray-400 mt-4 text-center">
                      This is an estimate only. Consult an attorney for accurate calculations.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-sm text-gray-400">Calculations Completed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm text-gray-400">Accuracy Rate</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50</div>
              <div className="text-sm text-gray-400">States Supported</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-gray-400">4.9/5 User Rating</div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Nova Style */}
        <section id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core calculator.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-gray-900/60 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/10">
                Basic
              </span>
              <div className="mt-6">
                <div className="text-4xl font-bold tracking-tight">
                  $0
                  <span className="ml-1 text-gray-400 text-base italic font-normal">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Perfect for one-time calculations
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Basic calculator</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">State-specific formulas</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">PDF export</span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 w-full inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan - Featured */}
            <div className="relative rounded-2xl border-2 border-blue-500/60 bg-gradient-to-b from-blue-900/30 to-blue-900/10 p-8 shadow-lg">
              <span className="inline-flex items-center rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-400/30">
                Pro
              </span>
              <div className="mt-6 text-white">
                <div className="text-4xl font-bold tracking-tight">
                  $29
                  <span className="ml-1 text-gray-300 text-base italic font-normal">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-300">
                  For individuals and couples
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="text-gray-100">Everything in Basic</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="text-gray-100">Advanced scenarios</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="text-gray-100">Save calculations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="text-gray-100">Email support</span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 w-full inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
              >
                Start Free Trial
              </a>
            </div>

            {/* Attorney Plan */}
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-gray-900/60 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/10">
                Attorney
              </span>
              <div className="mt-6">
                <div className="text-4xl font-bold tracking-tight">
                  $99
                  <span className="ml-1 text-gray-400 text-base italic font-normal">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  For legal professionals
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Unlimited clients</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">White-label reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 w-full inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer Section */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center ring-1 ring-amber-400/30">
                  <Scale className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Important Legal Disclaimer
                  </h3>
                  <p className="text-amber-200/90 text-sm">
                    Please read this carefully before using our calculator
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Not Legal Advice:</strong> The calculations and estimates provided by AlimonyCalc Pro are for informational purposes only and do not constitute legal advice. This tool should not be used as a substitute for consultation with a qualified family law attorney.
                </p>

                <p>
                  <strong className="text-white">Estimates Only:</strong> All calculations are estimates based on general formulas and may not reflect the actual alimony amount determined by a court. Actual alimony awards depend on numerous factors including but not limited to: state laws, judge discretion, custody arrangements, health conditions, earning capacity, standard of living, and other case-specific circumstances.
                </p>

                <p>
                  <strong className="text-white">State Variations:</strong> Alimony laws vary significantly by state and jurisdiction. Some states use specific formulas while others rely on judicial discretion. Our calculator provides general estimates and may not account for all state-specific nuances, recent law changes, or local court practices.
                </p>

                <p>
                  <strong className="text-white">No Attorney-Client Relationship:</strong> Use of this calculator does not create an attorney-client relationship. We are not a law firm and do not provide legal representation or advice.
                </p>

                <p>
                  <strong className="text-white">Consult an Attorney:</strong> We strongly recommend consulting with a licensed family law attorney in your jurisdiction for accurate legal advice tailored to your specific situation. An attorney can provide guidance on your rights, obligations, and the likely outcome of your case.
                </p>

                <p>
                  <strong className="text-white">No Guarantee:</strong> We make no warranties or guarantees regarding the accuracy, completeness, or reliability of the calculations. Results may differ from actual court determinations.
                </p>

                <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-white/10">
                  By using this calculator, you acknowledge that you have read and understood this disclaimer and agree that AlimonyCalc Pro and its affiliates shall not be liable for any decisions made based on the information provided by this tool.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  View Full Terms of Service
                </a>
                <span className="text-gray-500">•</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Trusted by thousands
            </h2>
            <p className="text-gray-400">
              See what our users are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Incredibly accurate and easy to use. Saved me thousands in attorney fees for initial estimates."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-sm">Jennifer Davis</div>
                  <div className="text-xs text-gray-400">California</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "As an attorney, I use this tool daily for client consultations. The accuracy is impressive."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div>
                  <div className="font-semibold text-sm">Michael Thompson</div>
                  <div className="text-xs text-gray-400">Family Law Attorney</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Simple, straightforward, and gave me peace of mind during a difficult time. Highly recommend."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  SR
                </div>
                <div>
                  <div className="font-semibold text-sm">Sarah Rodriguez</div>
                  <div className="text-xs text-gray-400">Texas</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            © 2025 AlimonyCalc Pro. All rights reserved. Not a substitute for legal advice.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlimonyCalculatorLanding;

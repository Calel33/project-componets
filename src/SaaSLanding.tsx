/**
 * SaaS Product Landing Page
 * Demonstrates mixing portfolio + childcare + agency components (NO medical)
 */

'use client';

import React from 'react';
import {
  Zap,
  Shield,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Globe,
  Sparkles,
  CheckCircle2,
  Play,
  Code,
  Rocket,
} from 'lucide-react';

export const SaaSLanding: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 text-gray-900 antialiased min-h-screen">
      {/* Navigation - Childcare Style */}
      <header className="fixed z-50 top-0 right-0 left-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 rounded-xl border backdrop-blur supports-[backdrop-filter]:bg-white/95 border-indigo-100 bg-indigo-50/50">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-lg tracking-tight">
                  FlowMetrics
                </span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden items-center gap-8 md:flex">
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-indigo-600"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-indigo-600"
                  href="#pricing"
                >
                  Pricing
                </a>
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-indigo-600"
                  href="#customers"
                >
                  Customers
                </a>
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-indigo-600"
                  href="#docs"
                >
                  Docs
                </a>
              </nav>

              {/* Actions */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition border-indigo-200 bg-white text-gray-700 hover:bg-indigo-50"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                >
                  <Rocket className="h-4 w-4" />
                  Start Free Trial
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border transition border-indigo-200 bg-white hover:bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section - Portfolio Style */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Trusted by 10,000+ teams worldwide
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-200">
            Analytics That
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in animate-delay-400">
            Transform your data into actionable insights. FlowMetrics helps teams
            make smarter decisions with real-time analytics, beautiful dashboards,
            and AI-powered recommendations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in animate-delay-600">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Start Free Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 transition hover:bg-indigo-50 text-base font-medium text-gray-700 border border-indigo-200 rounded-xl px-8 py-4"
            >
              <Code className="w-5 h-5" />
              View Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in animate-delay-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview - Portfolio Style */}
        <div className="relative mb-32 animate-fade-in animate-delay-1000">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-indigo-200">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
              alt="Dashboard preview"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
          </div>

          {/* Floating Stats Cards - Agency Style */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+127%</div>
                    <div className="text-xs text-gray-500">Revenue Growth</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50K+</div>
                    <div className="text-xs text-gray-500">Active Users</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.4M</div>
                    <div className="text-xs text-gray-500">Data Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Portfolio Grid Style */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Everything you need to scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for modern teams who want to move fast
              without breaking things.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden bg-white border border-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                See your data update instantly. No delays, no waiting. Make
                decisions based on what's happening right now.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden bg-white border border-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                SOC 2 Type II certified with end-to-end encryption. Your data is
                safe with us, always.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden bg-white border border-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Let AI find patterns you might miss. Get smart recommendations to
                optimize your metrics.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden bg-white border border-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developer-Friendly API</h3>
              <p className="text-gray-600 leading-relaxed">
                Clean, well-documented APIs. Integrate in minutes with SDKs for
                every major language.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group relative overflow-hidden bg-white border border-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                99.99% uptime with servers in 15 regions. Fast performance
                wherever your users are.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group relative overflow-hidden bg-white border border-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Share dashboards, set permissions, and work together seamlessly
                across your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof - Portfolio Style */}
        <section id="customers" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Trusted by industry leaders
            </h2>
            <p className="text-gray-600">
              Join thousands of companies using FlowMetrics to grow faster
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-12 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 font-semibold">LOGO {i}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white border border-indigo-100 rounded-2xl p-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "FlowMetrics transformed how we make decisions. The insights are
                incredible and the interface is beautiful."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop"
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">Alex Chen</div>
                  <div className="text-xs text-gray-500">CEO, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-indigo-100 rounded-2xl p-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Best analytics platform we've used. Setup was easy and the
                support team is incredibly responsive."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">Sarah Johnson</div>
                  <div className="text-xs text-gray-500">VP Product, StartupCo</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-indigo-100 rounded-2xl p-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "The AI recommendations alone have saved us hours every week.
                Absolutely worth it."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop"
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">Michael Brown</div>
                  <div className="text-xs text-gray-500">CTO, DataFlow</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Childcare Form Style */}
        <section className="py-20">
          <div className="overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center p-8 sm:p-12">
              <div className="text-white">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Ready to transform your data?
                </h2>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Start your 14-day free trial. No credit card required. Cancel
                  anytime.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Full access to all features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  Start your free trial
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Start Free Trial
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By signing up, you agree to our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-100 bg-indigo-50/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-indigo-200 text-center text-sm text-gray-600">
            © 2025 FlowMetrics. All rights reserved. Built with ❤️ for data-driven
            teams.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaaSLanding;

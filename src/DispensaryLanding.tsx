/**
 * Dispensary Landing Page
 * Demonstrates reusability of medical components for cannabis industry
 */

'use client';

import React from 'react';
import {
  Leaf,
  ShieldCheck,
  Star,
  Clock,
  Award,
  Users,
  Package,
  Sparkles,
  ThumbsUp,
  MapPin,
} from 'lucide-react';
import { BentoCard } from '../alimonyapp/componets/medical/BentoCard';
import { useScrollAnimation } from '../alimonyapp/componets/medical/hooks/useScrollAnimation';

export const DispensaryLanding: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50/30 text-gray-900 antialiased min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-[20px] bg-white/95 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight">
                GreenLeaf Dispensary
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#products"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#menu"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Menu
              </a>
              <a
                href="#education"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Education
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                About
              </a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:py-24">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between mb-16 ${
            heroVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Main Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Licensed & Lab Tested
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] font-semibold tracking-tight">
              Premium Cannabis
              <br />
              <span className="font-normal text-green-700">Delivered Daily</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Experience the finest selection of cannabis products with expert
              guidance, lab-tested quality, and convenient delivery to your door.
            </p>
          </div>

          {/* Stats & Ratings */}
          <div
            ref={statsRef}
            className={`flex flex-col gap-6 lg:items-end ${
              statsVisible ? 'animate-slide-left animate-delay-200' : 'opacity-0'
            }`}
          >
            {/* Rating Card */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-green-400 text-green-400"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">4.8 Customer Rating</div>
                <div className="text-sm text-gray-500">8,500+ reviews</div>
              </div>
            </div>

            {/* Customer Avatars */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                Trusted by customers
              </span>
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop"
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop"
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop"
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="w-10 h-10 bg-green-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-xs font-semibold text-green-700">8K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-[800px] lg:h-[600px]">
          {/* Main Product Showcase */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1"
            animationType="scale-in"
            animationDelay={400}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1612091683937-1d4e1e5c3e3d?w=1080&q=80"
                alt="Premium cannabis products"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-xs">
                <div className="backdrop-blur-[20px] bg-white/95 border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <Leaf className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        Premium Selection
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Curated strains from top growers, lab-tested for quality
                        and potency.
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="text-center">
                          <div className="font-semibold text-green-600 text-sm">
                            200+
                          </div>
                          <div className="text-xs text-gray-500">Products</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600 text-sm">
                            24/7
                          </div>
                          <div className="text-xs text-gray-500">Delivery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Product Categories */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
            animationType="slide-up"
            animationDelay={600}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-green-800 to-emerald-900 text-white p-6 lg:p-8 relative overflow-hidden shadow-2xl group hover:-translate-y-0.5 transition-transform duration-300">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                      <Package className="w-5 h-5 text-green-200" />
                    </div>
                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">
                      Product Categories
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-4">
                    Complete Product Range
                  </h3>

                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-3">
                      <Leaf className="w-4 h-4 text-green-300 shrink-0" />
                      <span>Flower & Pre-Rolls</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-green-300 shrink-0" />
                      <span>Concentrates & Extracts</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Package className="w-4 h-4 text-green-300 shrink-0" />
                      <span>Edibles & Beverages</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-green-300 shrink-0" />
                      <span>Premium Accessories</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="text-xs text-green-200">All Lab Tested</div>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-2 rounded-full text-sm font-medium transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Customer Review */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
            animationType="slide-left"
            animationDelay={800}
          >
            <div className="h-full rounded-3xl bg-white p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ThumbsUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-green-400 text-green-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  "Best quality and service in town. Fast delivery every time!"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop"
                  alt="Alex M."
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div>
                  <div className="font-medium text-sm">Alex M.</div>
                  <div className="text-xs text-gray-500">Regular Customer</div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Same-Day Delivery */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            animationType="slide-up"
            animationDelay={1000}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-emerald-100 to-green-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
                  Same-Day Delivery
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Order before 6 PM for same-day delivery. Fast, discreet, and
                  reliable.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-green-700">
                  <MapPin className="w-4 h-4" />
                  Free delivery over $50
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Expert Staff */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            animationType="scale-in"
            animationDelay={1200}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-amber-50 to-yellow-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
                  Expert Budtenders
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Knowledgeable staff to help you find the perfect product for
                  your needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Customer satisfaction</span>
                    <span className="font-semibold text-amber-600">98%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Years experience</span>
                    <span className="font-semibold text-amber-600">10+</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Store Image */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
            animationType="slide-left"
            animationDelay={600}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1080&q=80"
                alt="Dispensary interior"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  Modern Dispensary
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  Clean, welcoming environment with premium products
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Visit Store
                </button>
              </div>
            </div>
          </BentoCard>
        </section>

        {/* Bottom CTA */}
        <div className="text-center mt-48 animate-fade-in animate-delay-1000">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            First-time customer? Get 20% off
          </div>
          <h2 className="text-3xl font-semibold mb-4 tracking-tight">
            Ready to Explore Our Menu?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Browse our selection of premium cannabis products and place your order
            today.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
            Shop Our Menu
          </button>
        </div>
      </main>
    </div>
  );
};

export default DispensaryLanding;

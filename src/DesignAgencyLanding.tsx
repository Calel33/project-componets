/**
 * Design Agency Landing Page
 * Demonstrates mixing medical + portfolio + childcare components for creative industry
 */

'use client';

import React from 'react';
import {
  Sparkles,
  Palette,
  Star,
  Award,
  Users,
  Zap,
  Eye,
  Layers,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Target,
} from 'lucide-react';
import { BentoCard } from '../alimonyapp/componets/medical/BentoCard';
import { useScrollAnimation } from '../alimonyapp/componets/medical/hooks/useScrollAnimation';
import '../alimonyapp/componets/medical/medical-animations.css';

export const DesignAgencyLanding: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50/30 text-gray-900 antialiased min-h-screen">
      {/* Navigation - Childcare Style with Creative Twist */}
      <header className="fixed z-50 top-0 right-0 left-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 rounded-xl border backdrop-blur supports-[backdrop-filter]:bg-white/95 border-purple-100 bg-purple-50/50">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-lg tracking-tight">
                  Pixel & Co.
                </span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden items-center gap-8 md:flex">
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-purple-600"
                  href="#work"
                >
                  Work
                </a>
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-purple-600"
                  href="#services"
                >
                  Services
                </a>
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-purple-600"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="text-sm font-medium transition text-gray-700 hover:text-purple-600"
                  href="#contact"
                >
                  Contact
                </a>
              </nav>

              {/* Actions */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition border-purple-200 bg-white text-gray-700 hover:bg-purple-50"
                >
                  <MessageCircle className="h-4 w-4" />
                  Let's Talk
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                >
                  <Eye className="h-4 w-4" />
                  View Work
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border transition border-purple-200 bg-white hover:bg-purple-50">
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
        {/* Hero Section - Medical Style with Creative Flair */}
        <div
          ref={heroRef}
          className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between mb-16 ${
            heroVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Main Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Award-Winning Creative Studio
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] font-bold tracking-tight">
              Design That
              <br />
              <span className="font-normal bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Drives Results
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              We craft stunning digital experiences that captivate audiences and
              elevate brands. From concept to launch, we bring your vision to life
              with creativity and precision.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105"
              >
                <Eye className="w-4 h-4" />
                View Our Work
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 transition hover:bg-purple-50 text-sm font-medium text-gray-700 border border-purple-200 rounded-xl px-5 py-3"
              >
                <Palette className="w-4 h-4" />
                Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span>98% Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Stats & Awards - Medical Style */}
          <div
            ref={statsRef}
            className={`flex flex-col gap-6 lg:items-end ${
              statsVisible ? 'animate-slide-left animate-delay-200' : 'opacity-0'
            }`}
          >
            {/* Rating Card */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-purple-100">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-purple-400 text-purple-400"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">5.0 Rating</div>
                <div className="text-sm text-gray-500">Clutch & Dribbble</div>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Awwwards Winner</div>
                <div className="text-sm text-gray-500">Site of the Day 2024</div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                Trusted by brands
              </span>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">
                  B
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">
                  C
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">
                  D
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-xs font-semibold text-purple-700">50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid - Mixed Style */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {/* Main Portfolio Showcase */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1"
            animationType="scale-in"
            animationDelay={400}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80"
                alt="Design work showcase"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-xs">
                <div className="backdrop-blur-[20px] bg-white/95 border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center shrink-0">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        Creative Excellence
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Award-winning designs that blend aesthetics with
                        functionality.
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="text-center">
                          <div className="font-semibold text-purple-600 text-sm">
                            100+
                          </div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600 text-sm">
                            15+
                          </div>
                          <div className="text-xs text-gray-500">Awards</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Services Card */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
            animationType="slide-up"
            animationDelay={600}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 lg:p-8 relative overflow-hidden shadow-2xl group hover:-translate-y-0.5 transition-transform duration-300">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                      <Layers className="w-5 h-5 text-purple-200" />
                    </div>
                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">
                      Our Services
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-4">
                    Full-Service Design Studio
                  </h3>

                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-3">
                      <Palette className="w-4 h-4 text-purple-200 shrink-0" />
                      <span>Brand Identity & Strategy</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Layers className="w-4 h-4 text-purple-200 shrink-0" />
                      <span>UI/UX Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-purple-200 shrink-0" />
                      <span>Web Development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Target className="w-4 h-4 text-purple-200 shrink-0" />
                      <span>Digital Marketing</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="text-xs text-purple-200">Custom Solutions</div>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-2 rounded-full text-sm font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Client Testimonial */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
            animationType="slide-left"
            animationDelay={800}
          >
            <div className="h-full rounded-3xl bg-white p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-purple-400 text-purple-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  "Exceptional creativity and flawless execution. Highly recommend!"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
                  alt="Sarah K."
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div>
                  <div className="font-medium text-sm">Sarah K.</div>
                  <div className="text-xs text-gray-500">CEO, TechCorp</div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Fast Turnaround */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            animationType="slide-up"
            animationDelay={1000}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
                  Lightning Fast Delivery
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Agile workflow ensures rapid turnaround without compromising
                  quality.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
                  <TrendingUp className="w-4 h-4" />
                  2-week average delivery
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Process Stats */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            animationType="scale-in"
            animationDelay={1200}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
                  Collaborative Approach
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  We work closely with you at every stage to ensure perfect results.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Client satisfaction</span>
                    <span className="font-semibold text-amber-600">98%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Repeat clients</span>
                    <span className="font-semibold text-amber-600">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Studio Image */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
            animationType="slide-left"
            animationDelay={600}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1080&q=80"
                alt="Design studio"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Creative Studio</h3>
                <p className="text-sm text-white/90 mb-4">
                  Where ideas come to life through design and innovation
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Virtual Tour
                </button>
              </div>
            </div>
          </BentoCard>
        </section>

        {/* CTA Section - Childcare Style */}
        <section className="pb-20" id="contact">
          <div className="overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100 border rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="sm:p-10 pt-8 pr-8 pb-8 pl-8">
                <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur border-purple-200 bg-white text-purple-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Let's create something amazing
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl tracking-tight font-semibold">
                  Ready to Start Your Project?
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Tell us about your vision and let's bring it to life together.
                </p>

                <form
                  className="grid gap-3 sm:grid-cols-2 mt-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thanks! We will get back to you shortly.');
                  }}
                >
                  <input
                    className="placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 text-sm bg-white w-full border-purple-200 border rounded-lg pt-3 pr-3.5 pb-3 pl-3.5"
                    placeholder="Your name"
                    required
                  />
                  <input
                    type="email"
                    className="placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 text-sm bg-white w-full border-purple-200 border rounded-lg pt-3 pr-3.5 pb-3 pl-3.5"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    className="placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 sm:col-span-2 text-sm bg-white w-full border-purple-200 border rounded-lg pt-3 pr-3.5 pb-3 pl-3.5"
                    placeholder="Tell us about your project"
                    rows={4}
                  ></textarea>
                  <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition sm:col-span-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                    <ArrowRight className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
                <p className="mt-3 text-[11px] text-gray-500">
                  We typically respond within 24 hours.
                </p>
              </div>
              <div className="relative">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Creative team collaboration"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l to-transparent md:bg-gradient-to-t md:from-purple-950/0 from-purple-50/40"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-100 bg-purple-50/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-lg">Pixel & Co.</span>
              </div>
              <p className="text-sm text-gray-600 max-w-md">
                A creative design studio crafting beautiful digital experiences
                that drive results and inspire audiences.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white border border-purple-200 flex items-center justify-center hover:bg-purple-50 transition-colors"
                >
                  <span className="sr-only">Dribbble</span>
                  <Palette className="w-4 h-4 text-purple-600" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white border border-purple-200 flex items-center justify-center hover:bg-purple-50 transition-colors"
                >
                  <span className="sr-only">Behance</span>
                  <Briefcase className="w-4 h-4 text-purple-600" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white border border-purple-200 flex items-center justify-center hover:bg-purple-50 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <Eye className="w-4 h-4 text-purple-600" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-200 text-center text-sm text-gray-600">
            © 2025 Pixel & Co. All rights reserved. Crafted with{' '}
            <span className="text-purple-600">❤️</span> and creativity.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignAgencyLanding;

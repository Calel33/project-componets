/**
 * Lawyer Landing Page
 * Demonstrates mixing medical + portfolio components for legal industry
 */

'use client';

import React from 'react';
import {
  Scale,
  ShieldCheck,
  Star,
  Award,
  Users,
  FileText,
  Briefcase,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { BentoCard } from '../alimonyapp/componets/medical/BentoCard';
import { useScrollAnimation } from '../alimonyapp/componets/medical/hooks/useScrollAnimation';
import '../alimonyapp/componets/medical/medical-animations.css';

export const LawyerLanding: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/20 text-gray-900 antialiased min-h-screen">
      {/* Navigation - Medical Style */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-[20px] bg-white/95 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Sterling & Associates
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#practice"
                className="text-gray-600 hover:text-slate-700 transition-colors"
              >
                Practice Areas
              </a>
              <a
                href="#attorneys"
                className="text-gray-600 hover:text-slate-700 transition-colors"
              >
                Attorneys
              </a>
              <a
                href="#results"
                className="text-gray-600 hover:text-slate-700 transition-colors"
              >
                Case Results
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-slate-700 transition-colors"
              >
                About
              </a>
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:py-24">
        {/* Hero Section - Medical Style */}
        <div
          ref={heroRef}
          className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between mb-16 ${
            heroVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Main Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted Legal Counsel Since 1985
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] font-semibold tracking-tight">
              Experienced Legal
              <br />
              <span className="font-normal text-slate-700">Representation</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Providing strategic legal solutions with integrity, expertise, and
              unwavering commitment to protecting your rights and interests.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition bg-slate-700 text-white hover:bg-slate-800"
              >
                <Phone className="w-4 h-4" />
                Schedule Consultation
              </a>
              <a
                href="#practice"
                className="inline-flex items-center gap-2 transition hover:bg-slate-50 text-sm font-medium text-slate-700 border border-slate-200 rounded-xl px-5 py-3"
              >
                <Briefcase className="w-4 h-4" />
                Our Practice Areas
              </a>
            </div>
          </div>

          {/* Stats & Ratings - Medical Style */}
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
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">5.0 Client Rating</div>
                <div className="text-sm text-gray-500">200+ reviews</div>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Top Rated Firm</div>
                <div className="text-sm text-gray-500">Super Lawyers 2024</div>
              </div>
            </div>

            {/* Success Stats */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                Trusted by clients
              </span>
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="w-10 h-10 bg-slate-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-xs font-semibold text-slate-700">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid - Mixed Portfolio + Medical Style */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {/* Main Practice Showcase */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1"
            animationType="scale-in"
            animationDelay={400}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&q=80"
                alt="Legal team"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-xs">
                <div className="backdrop-blur-[20px] bg-white/95 border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        Expert Legal Team
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        40+ years combined experience in complex litigation and
                        corporate law.
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="text-center">
                          <div className="font-semibold text-slate-700 text-sm">
                            95%
                          </div>
                          <div className="text-xs text-gray-500">Win Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-slate-700 text-sm">
                            $50M+
                          </div>
                          <div className="text-xs text-gray-500">Recovered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Practice Areas Card */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
            animationType="slide-up"
            animationDelay={600}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 lg:p-8 relative overflow-hidden shadow-2xl group hover:-translate-y-0.5 transition-transform duration-300">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                      <Briefcase className="w-5 h-5 text-slate-200" />
                    </div>
                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">
                      Practice Areas
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-4">
                    Comprehensive Legal Services
                  </h3>

                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-slate-300 shrink-0" />
                      <span>Business & Corporate Law</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-slate-300 shrink-0" />
                      <span>Employment & Labor Law</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4 text-slate-300 shrink-0" />
                      <span>Personal Injury</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Scale className="w-4 h-4 text-slate-300 shrink-0" />
                      <span>Civil Litigation</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="text-xs text-slate-200">Free Consultation</div>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-2 rounded-full text-sm font-medium transition-colors">
                    View All
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
            <div className="h-full rounded-3xl bg-white p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  "Professional, responsive, and achieved excellent results for our case."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop"
                  alt="James T."
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div>
                  <div className="font-medium text-sm">James T.</div>
                  <div className="text-xs text-gray-500">Business Client</div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 24/7 Availability */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            animationType="slide-up"
            animationDelay={1000}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
                  24/7 Emergency Support
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Urgent legal matters require immediate attention. We're available
                  around the clock.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Experience Stats */}
          <BentoCard
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            animationType="scale-in"
            animationDelay={1200}
          >
            <div className="h-full rounded-3xl bg-gradient-to-br from-amber-50 to-yellow-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
              <div>
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
                  Proven Track Record
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Decades of experience delivering favorable outcomes for our clients.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Cases won</span>
                    <span className="font-semibold text-amber-600">500+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Years experience</span>
                    <span className="font-semibold text-amber-600">40+</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Office Image */}
          <BentoCard
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
            animationType="slide-left"
            animationDelay={600}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080&q=80"
                alt="Law office"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  Modern Law Office
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  Conveniently located in downtown with ample parking
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </BentoCard>
        </section>

        {/* Contact CTA - Portfolio Style */}
        <div className="text-center animate-fade-in animate-delay-1000">
          <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Free initial consultation available
          </div>
          <h2 className="text-3xl font-semibold mb-4 tracking-tight">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Contact us today for a confidential consultation with our experienced
            legal team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Us
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-lg">Sterling & Associates</span>
              </div>
              <p className="text-sm text-gray-600">
                Trusted legal counsel providing strategic solutions since 1985.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@sterlinglaw.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  123 Legal Plaza, Suite 500
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Monday - Friday: 8am - 6pm</div>
                <div>Saturday: 9am - 2pm</div>
                <div>Sunday: Closed</div>
                <div className="text-blue-600 font-medium mt-2">
                  24/7 Emergency Line Available
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            © 2025 Sterling & Associates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawyerLanding;

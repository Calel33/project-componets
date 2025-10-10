import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Shield,
  Heart,
  Scale,
  FileText,
  HandshakeIcon,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

// Using existing components
import { TestimonialsGrid } from '@/ui/components/testimonials';
import type { Testimonial } from '@/ui/components/types/testimonials.types';

// Types
interface LawyerInfo {
  name: string;
  title: string;
  experience: string;
  image: string;
  credentials: string[];
}

interface PracticeArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DivorceLawyerLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseDescription: '',
    preferredContact: 'email'
  });

  // Lawyer information
  const lawyerInfo: LawyerInfo = {
    name: 'Sarah Mitchell, Esq.',
    title: 'Family Law Attorney',
    experience: '15+ Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    credentials: [
      'Board Certified in Family Law',
      'Martindale-Hubbell AV Rated',
      'Member, American Academy of Matrimonial Lawyers',
      'Featured in Best Lawyers in America'
    ]
  };

  // Practice areas
  const practiceAreas: PracticeArea[] = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Divorce & Separation',
      description: 'Compassionate guidance through contested and uncontested divorce proceedings.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Child Custody & Support',
      description: 'Protecting your parental rights and ensuring the best interests of your children.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Alimony & Spousal Support',
      description: 'Fair and equitable spousal support arrangements based on your circumstances.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Property Division',
      description: 'Strategic asset protection and equitable distribution of marital property.'
    },
    {
      icon: <HandshakeIcon className="w-8 h-8" />,
      title: 'Mediation & Settlement',
      description: 'Cost-effective alternative dispute resolution to avoid lengthy court battles.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Protective Orders',
      description: 'Immediate legal protection for you and your family in urgent situations.'
    }
  ];

  // Why choose us features
  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
      title: 'Free Initial Consultation',
      description: 'Get personalized legal advice with no obligation'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      title: 'Transparent Pricing',
      description: 'Clear fee structures with no hidden costs'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: 'Quick Response Times',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: <Star className="w-6 h-6 text-emerald-600" />,
      title: '5-Star Client Reviews',
      description: 'Consistently rated excellent by our clients'
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: 'Sarah guided me through every step of my divorce with care and understanding. She fought for my rights while keeping things as amicable as possible for my children.',
      author: {
        name: 'Jennifer M.',
        role: 'Client',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
      },
      rating: 5
    },
    {
      id: '2',
      quote: 'Professional, responsive, and genuinely caring. The team made a difficult time manageable and achieved outcomes that exceeded my expectations.',
      author: {
        name: 'Michael T.',
        role: 'Client',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
      },
      rating: 5
    },
    {
      id: '3',
      quote: 'Excellent communication throughout the entire process. They explained everything clearly and were always available when I had questions.',
      author: {
        name: 'Lisa R.',
        role: 'Client',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
      },
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-4 z-50 mx-4 animate-fade-in">
        <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-2xl px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight text-slate-900">Mitchell Family Law</div>
                <div className="text-xs text-slate-600">Compassionate Representation</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">About</a>
              <a href="#practice-areas" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Practice Areas</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Testimonials</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:555-123-4567" className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Free Consultation
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-16 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-float animation-delay-2s" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-blue-100/60 border border-blue-200/60 text-blue-900 rounded-full px-6 py-2 mb-6 text-sm font-medium">
                <Heart className="w-4 h-4" />
                Compassionate Legal Support
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-2">
                  Compassionate
                </span>
                <span className="block font-serif text-slate-800">
                  Divorce Representation
                </span>
                <span className="block text-4xl sm:text-5xl text-slate-600 mt-2">
                  You Can Trust
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We'll protect your rights and help you move forward with confidence. Over 15 years helping families navigate complex divorce proceedings.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <a 
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl px-8 py-4 text-base font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Your Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:555-123-4567"
                  className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/80 border border-slate-200 text-slate-800 rounded-2xl px-8 py-4 text-base font-medium hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="h-12 w-px bg-slate-300" />
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Cases Resolved</div>
                </div>
                <div className="h-12 w-px bg-slate-300" />
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={lawyerInfo.image}
                  alt="Sarah Mitchell - Family Law Attorney"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/90 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-xl font-semibold text-slate-900 mb-1">{lawyerInfo.name}</div>
                      <div className="text-sm text-slate-600 mb-2">{lawyerInfo.title}</div>
                      <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                        <Shield className="w-4 h-4" />
                        {lawyerInfo.experience}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-4 block">About Sarah Mitchell</span>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
                Experience You Can
                <span className="block font-serif text-blue-900">Trust</span>
              </h2>
              
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  With over 15 years of experience helping clients through complex divorces and family law matters, 
                  Sarah Mitchell combines legal expertise with genuine compassion for families in transition.
                </p>
                <p>
                  As a board-certified family law attorney, Sarah understands that divorce is more than just a legal 
                  process—it's a profound life change that affects every aspect of your future.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {lawyerInfo.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{credential}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-6 py-3 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Experience', value: 'Strategic legal planning', icon: Shield },
                { title: 'Empathy', value: 'Compassionate support', icon: Heart },
                { title: 'Results', value: 'Favorable outcomes', icon: Star },
                { title: 'Communication', value: 'Always available', icon: MessageCircle }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <div className="text-lg font-semibold text-slate-900 mb-2">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-4 block">Our Services</span>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
              <span className="block">Practice Areas</span>
              <span className="block font-serif text-blue-900">We Can Help With</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive family law services tailored to your unique situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="group backdrop-blur-xl bg-white/80 border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
              <span className="block">Your Trusted Partner</span>
              <span className="block font-serif text-blue-900">Every Step of the Way</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 backdrop-blur-xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-900">5.0 Google Rating</div>
              <div className="text-xs text-slate-600">Based on 127 reviews</div>
            </div>
            <div className="h-16 w-px bg-slate-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1">AV</div>
              <div className="text-sm font-medium text-slate-900">Martindale-Hubbell</div>
              <div className="text-xs text-slate-600">Highest Rating</div>
            </div>
            <div className="h-16 w-px bg-slate-300" />
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-slate-900">Board Certified</div>
              <div className="text-xs text-slate-600">Family Law Specialist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-4 block">Client Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
              <span className="block">What Our Clients</span>
              <span className="block font-serif text-blue-900">Are Saying</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real experiences from families we've helped through difficult times
            </p>
          </div>

          <TestimonialsGrid 
            title="Client Testimonials"
            testimonials={testimonials}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-light mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized legal advice today. Schedule your free consultation and take the first step toward a better future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 rounded-full px-8 py-4 text-base font-medium hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </a>
            <a 
              href="tel:555-123-4567"
              className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/30 text-white rounded-full px-8 py-4 text-base font-medium hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <span className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-4 block">Get In Touch</span>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
                <span className="block">Schedule Your</span>
                <span className="block font-serif text-blue-900">Free Consultation</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form and we'll contact you within 24 hours to schedule your free, confidential consultation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Phone</div>
                    <a href="tel:555-123-4567" className="text-slate-600 hover:text-blue-600 transition">(555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Email</div>
                    <a href="mailto:sarah@mitchellfamilylaw.com" className="text-slate-600 hover:text-blue-600 transition">sarah@mitchellfamilylaw.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Office</div>
                    <div className="text-slate-600">
                      123 Main Street, Suite 500<br />
                      Downtown, CA 90210
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Office Hours</div>
                    <div className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: By appointment only
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder (replace with your map component; do not embed secrets) */}
              <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-slate-200 to-slate-300 grid place-items-center text-slate-600 text-sm">
                <span>Map placeholder — integrate Map component using env-configured API keys</span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="caseDescription" className="block text-sm font-medium text-slate-900 mb-2">
                    Brief Description of Your Case *
                  </label>
                  <textarea
                    id="caseDescription"
                    name="caseDescription"
                    required
                    rows={4}
                    value={formData.caseDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Please briefly describe your situation..."
                  />
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-slate-900 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-8 py-4 text-base font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Get Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-slate-600 text-center">
                  By submitting this form, you agree to our privacy policy. 
                  All consultations are confidential and protected by attorney-client privilege.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Mitchell Family Law</div>
                  <div className="text-sm text-slate-400">Compassionate Representation</div>
                </div>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Providing compassionate and effective family law representation for over 15 years. 
                Your trusted partner during life's most challenging transitions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#practice-areas" className="hover:text-white transition">Practice Areas</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>(555) 123-4567</li>
                <li>sarah@mitchellfamilylaw.com</li>
                <li>123 Main Street, Suite 500</li>
                <li>Downtown, CA 90210</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <div>
                © {new Date().getFullYear()} Mitchell Family Law. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Sitemap</a>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500 text-center md:text-left">
              ATTORNEY ADVERTISING. Prior results do not guarantee a similar outcome. 
              This website is for informational purposes only and does not constitute legal advice.
            </div>
          </div>
        </div>
      </footer>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2s {
          animation-delay: -2s;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DivorceLawyerLanding;

import React from 'react';
import { Search, DollarSign, Check, ArrowRight } from 'lucide-react';

export const ServiceSelection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            How Can We Help You Today?
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto text-muted-foreground"
          >
            Whether you're looking to buy your dream property or sell land quickly, we have tailored solutions for your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Find Your Land */}
          <div
            className="p-8 rounded-2xl transition-all hover:shadow-lg bg-gradient-to-br from-card to-muted border border-border"
          >
            <div className="flex items-center mb-4">
              <div
                className="p-3 rounded-full mr-4 bg-primary text-primary-foreground"
              >
                <Search className="h-6 w-6" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground"
              >
                Find Your Land
              </h3>
            </div>
            <p
              className="mb-6 text-muted-foreground"
            >
              Browse our extensive inventory of residential, commercial, and recreational land. Filter by location, price, and acreage to find your perfect property.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Access to exclusive listings not available elsewhere</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Detailed property information and documentation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Flexible financing options including owner financing</span>
              </li>
            </ul>
            <a
              href="#listings"
              className="inline-flex items-center font-semibold transition-colors text-primary hover:text-primary/80"
            >
              Browse Listings
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          {/* Sell Your Land Fast */}
          <div
            className="p-8 rounded-2xl transition-all hover:shadow-lg bg-gradient-to-br from-card to-muted border border-border"
          >
            <div className="flex items-center mb-4">
              <div
                className="p-3 rounded-full mr-4 bg-secondary text-secondary-foreground"
              >
                <DollarSign className="h-6 w-6" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground"
              >
                Sell Your Land Fast
              </h3>
            </div>
            <p
              className="mb-6 text-muted-foreground"
            >
              Get a competitive cash offer for your land in as little as 24 hours. We handle all the paperwork and closing costs for a hassle-free experience.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-muted-foreground">Fast cash offers with no obligation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-muted-foreground">We cover all closing costs and fees</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-muted-foreground">Close on your timeline - as fast as 7 days</span>
              </li>
            </ul>
            <a
              href="#sell"
              className="inline-flex items-center font-semibold transition-colors text-secondary hover:text-secondary/80"
            >
              Get Cash Offer
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelection;

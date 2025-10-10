import React from 'react';
import { Home, DollarSign, Check } from 'lucide-react';

export const FinancingOptions: React.FC = () => {
  return (
    <section id="financing" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Flexible Financing Options
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto text-muted-foreground"
          >
            We offer tailored financing solutions to meet your unique needs. Whether you're looking for traditional financing or owner financing, we have options that work for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Owner Financing */}
          <div
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200"
          >
            <div className="flex items-center mb-4">
              <div
                className="p-3 rounded-full mr-4 bg-secondary text-secondary-foreground"
              >
                <Home className="h-6 w-6" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground"
              >
                Owner Financing
              </h3>
            </div>
            <p
              className="mb-6 text-card-foreground"
            >
              Skip the bank approval process with our owner financing options. We make it easy to acquire land with flexible terms and competitive rates.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-card-foreground">No credit check required</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-card-foreground">Low down payment options</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-card-foreground">Flexible repayment terms</span>
              </li>
            </ul>
            <button
              className="px-6 py-3 rounded-lg transition-colors text-secondary-foreground font-medium bg-secondary hover:bg-secondary/90"
            >
              Explore Owner Financing
            </button>
          </div>
          
          {/* Cash Offers */}
          <div
            className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
          >
            <div className="flex items-center mb-4">
              <div
                className="p-3 rounded-full mr-4 bg-primary text-primary-foreground"
              >
                <DollarSign className="h-6 w-6" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground"
              >
                Quick Cash Offers
              </h3>
            </div>
            <p
              className="mb-6 text-card-foreground"
            >
              Need to sell quickly? Get a competitive cash offer for your land in as little as 24 hours. We handle all the paperwork and closing costs.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">Receive offer within 24 hours</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">Close in as little as 7 days</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-card-foreground">We cover all closing costs</span>
              </li>
            </ul>
            <button
              className="px-6 py-3 rounded-lg transition-colors text-primary-foreground font-medium bg-primary hover:bg-primary/90"
            >
              Get a Free Cash Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingOptions;

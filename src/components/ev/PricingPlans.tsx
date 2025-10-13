import { pricingPlans } from '../../EVCarData';
import { Button } from '../../ui/components/button';
import { Badge } from '../../ui/components/badge';
import { Check, Star } from 'lucide-react';

interface PricingPlansProps {
  selectedPlan: string;
  onPlanChange: (planId: string) => void;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ selectedPlan, onPlanChange }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Choose Your Model
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Select the perfect electric vehicle for your lifestyle. All models come with our industry-leading warranty and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 ${
                selectedPlan === plan.id
                  ? 'border-2 border-blue-600 shadow-lg'
                  : 'border border-slate-200 shadow-sm'
              } transition-all duration-200 hover:shadow-lg`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-slate-900">${plan.price.toLocaleString()}</span>
                  <span className="text-slate-600">Starting price</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button
                  onClick={() => onPlanChange(plan.id)}
                  className={`w-full ${
                    selectedPlan === plan.id
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select This Model'}
                </Button>
                
                <Button variant="outline" className="w-full">
                  Schedule Test Drive
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Flexible Financing Options</h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We offer a variety of financing options to make owning an electric vehicle more affordable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2zm0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Low APR Financing</h4>
              <p className="text-slate-600">
                Get rates as low as 1.99% APR for qualified buyers on all models.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Lease Options</h4>
              <p className="text-slate-600">
                Flexible lease terms with low monthly payments and the option to purchase at lease end.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Trade-In Program</h4>
              <p className="text-slate-600">
                Get competitive offers for your current vehicle and apply the value toward your new EV.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Pre-Approved in Minutes
            </Button>
            <p className="text-sm text-slate-500 mt-2">
              No impact on your credit score
            </p>
          </div>
        </div>

        {/* Incentives Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Government Incentives Available</h3>
                <p className="text-green-100 mb-6">
                  Save up to $7,500 with federal tax credits and additional state incentives.
                  Our team can help you navigate all available incentives.
                </p>
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  Learn About Incentives
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Potential Savings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Federal Tax Credit</span>
                    <span className="font-semibold">$7,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>State Rebate (CA)</span>
                    <span className="font-semibold">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home Charger Rebate</span>
                    <span className="font-semibold">$500</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 flex justify-between">
                    <span className="font-semibold">Total Potential Savings</span>
                    <span className="font-bold text-xl">$10,000</span>
                  </div>
                </div>
                <p className="text-green-100 text-sm mt-4">
                  *Incentives vary by location and eligibility. Consult with a tax professional for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
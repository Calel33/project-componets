import React, { useState } from 'react';
import { GlassCard, GlassCardHeader, GlassCardStats } from '../../ui/components/glass-card';
import PaymentCalculator from '../../ui/components/payment-calculator';
import { Button } from '../../ui/components/button';
import { Badge } from '../../ui/components/badge';
import { pricingPlans, evModels } from '../../EVCarData';

const EnhancedPricingPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [selectedModel, setSelectedModel] = useState('model-y');
  const [showCalculator, setShowCalculator] = useState(false);

  const handlePlanChange = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
  };

  const selectedModelData = evModels.find(model => model.id === selectedModel);
  const selectedPlanData = pricingPlans.find(plan => plan.id === selectedPlan);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Choose Your Electric Future
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Select the perfect model and financing option for your lifestyle. 
            All models come with our industry-leading warranty and 24/7 support.
          </p>
        </div>

        {/* Model Selection */}
        <div className="mb-12">
          <GlassCard variant="elevated" className="p-6">
            <GlassCardHeader
              title="Select Your Model"
              subtitle="Choose the vehicle that fits your lifestyle"
            />
            
            <div className="grid md:grid-cols-3 gap-6">
              {evModels.map((model) => (
                <GlassCard
                  key={model.id}
                  variant={selectedModel === model.id ? 'elevated' : 'interactive'}
                  click={true}
                  onClick={() => handleModelChange(model.id)}
                  className={`border-2 transition-all ${
                    selectedModel === model.id 
                      ? 'border-blue-400 bg-blue-500/10' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{model.name}</h3>
                    <p className="text-sm text-white/70 mb-4">{model.tagline}</p>
                    
                    <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                      <img 
                        src={model.image} 
                        alt={model.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <div className="text-2xl font-bold text-white">
                        ${model.price.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Range:</span>
                        <span className="text-white">{model.range} miles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">0-60:</span>
                        <span className="text-white">{model.acceleration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Power:</span>
                        <span className="text-white">{model.power} hp</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Seats:</span>
                        <span className="text-white">{model.seats}</span>
                      </div>
                    </div>
                    
                    {selectedModel === model.id && (
                      <Badge className="mt-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                        Selected
                      </Badge>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Pricing Plans */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Financing Options</h3>
            <p className="text-white/70">Choose the plan that works best for your budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <GlassCard
                key={plan.id}
                variant={selectedPlan === plan.id ? 'elevated' : 'interactive'}
                click={true}
                onClick={() => handlePlanChange(plan.id)}
                className={`border-2 transition-all ${
                  selectedPlan === plan.id 
                    ? 'border-blue-400 bg-blue-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <div className="text-center">
                  {plan.recommended && (
                    <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                      Recommended
                    </Badge>
                  )}
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    ${plan.price.toLocaleString()}
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                    <ul className="space-y-2 text-sm text-left">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      selectedPlan === plan.id 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Payment Calculator Toggle */}
        <div className="text-center mb-8">
          <Button
            size="lg"
            onClick={() => setShowCalculator(!showCalculator)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {showCalculator ? 'Hide' : 'Show'} Payment Calculator
          </Button>
        </div>

        {/* Payment Calculator */}
        {showCalculator && selectedModelData && (
          <div className="mb-12">
            <PaymentCalculator vehiclePrice={selectedModelData.price} />
          </div>
        )}

        {/* Summary */}
        <GlassCard variant="elevated" className="p-8">
          <GlassCardHeader
            title="Your Selection Summary"
            subtitle="Review your chosen configuration"
          />
          
          {selectedModelData && selectedPlanData && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Vehicle</h4>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={selectedModelData.image} 
                      alt={selectedModelData.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h5 className="text-xl font-semibold text-white">{selectedModelData.name}</h5>
                      <p className="text-white/70">{selectedModelData.tagline}</p>
                    </div>
                  </div>
                  
                  <GlassCardStats
                    stats={[
                      {
                        label: "Base Price",
                        value: `$${selectedModelData.price.toLocaleString()}`,
                        icon: <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      },
                      {
                        label: "Range",
                        value: `${selectedModelData.range} mi`,
                        icon: <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      },
                      {
                        label: "Performance",
                        value: selectedModelData.acceleration,
                        icon: <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      }
                    ]}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Financing Plan</h4>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="mb-4">
                    <h5 className="text-xl font-semibold text-white mb-2">{selectedPlanData.name}</h5>
                    <div className="text-2xl font-bold text-white mb-2">
                      ${selectedPlanData.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {selectedPlanData.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Proceed to Configuration
                  </Button>
                </div>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  );
};

export default EnhancedPricingPlans;
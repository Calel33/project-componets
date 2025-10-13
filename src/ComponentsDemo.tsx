import React, { useState } from 'react';
import {
  GlassCard,
  GlassCardHeader,
  GlassCardFeature,
  GlassCardStats
} from './ui/components/glass-card';
import ChargingStationFinder from './ui/components/charging-station-finder';
import PaymentCalculator from './ui/components/payment-calculator';
import { Button } from './ui/components/button';
import { Badge } from './ui/components/badge';

// Sample data for charging stations
const sampleChargingStations = [
  {
    id: '1',
    name: 'Electra Supercharger',
    address: '123 Main St, San Francisco, CA',
    distance: 2.5,
    availableSlots: 8,
    totalSlots: 12,
    power: 250,
    price: 0.28,
    type: 'supercharger' as const,
    amenities: ['Restrooms', 'Coffee Shop', 'WiFi'],
    rating: 4.8,
    isOpen: true
  },
  {
    id: '2',
    name: 'Green Energy Hub',
    address: '456 Oak Ave, Palo Alto, CA',
    distance: 5.2,
    availableSlots: 3,
    totalSlots: 8,
    power: 150,
    price: 0.35,
    type: 'destination' as const,
    amenities: ['Restaurant', 'Shopping'],
    rating: 4.5,
    isOpen: true
  },
  {
    id: '3',
    name: 'Power Partner Station',
    address: '789 Elm St, Mountain View, CA',
    distance: 8.7,
    availableSlots: 0,
    totalSlots: 6,
    power: 100,
    price: 0.25,
    type: 'partner' as const,
    amenities: ['24/7 Access'],
    rating: 4.2,
    isOpen: true
  }
];

const ComponentsDemo: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<any>(null);

  const handleStationSelect = (station: any) => {
    setSelectedStation(station);
    console.log('Selected station:', station);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            UI Components Showcase
          </h1>
          <p className="text-xl text-white/70">
            Interactive components inspired by modern design patterns
          </p>
        </div>

        {/* Glass Card Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Glass Card Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Basic Glass Card */}
            <GlassCard>
              <GlassCardHeader
                title="Basic Card"
                subtitle="Simple glassmorphic design"
                icon={
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
              <p className="text-white/70">
                A clean, minimal glass card with backdrop blur and transparency effects.
              </p>
            </GlassCard>

            {/* Interactive Glass Card */}
            <GlassCard variant="interactive" click={true}>
              <GlassCardHeader
                title="Interactive Card"
                subtitle="Click to interact"
                badge="New"
                icon={
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                  </svg>
                }
              />
              <p className="text-white/70 mb-4">
                This card responds to clicks with state changes and animations.
              </p>
              <Button size="sm" className="bg-white/10 hover:bg-white/20">
                Click Me
              </Button>
            </GlassCard>

            {/* Elevated Glass Card */}
            <GlassCard variant="elevated">
              <GlassCardHeader
                title="Elevated Card"
                subtitle="Enhanced visual depth"
                icon={
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                }
              />
              <p className="text-white/70">
                Features enhanced blur effects and stronger shadows for emphasis.
              </p>
            </GlassCard>
          </div>

          {/* Glass Card with Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard variant="elevated">
              <GlassCardHeader
                title="Performance Metrics"
                subtitle="Real-time vehicle statistics"
              />
              <div className="space-y-3">
                <GlassCardFeature
                  title="Range"
                  description="Current battery range"
                  value={285}
                  unit="miles"
                  trend="up"
                  icon={
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                />
                <GlassCardFeature
                  title="Efficiency"
                  description="Energy consumption"
                  value={3.2}
                  unit="mi/kWh"
                  trend="up"
                  icon={
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  }
                />
              </div>
            </GlassCard>

            <GlassCard variant="elevated">
              <GlassCardHeader
                title="Vehicle Stats"
                subtitle="Key performance indicators"
              />
              <GlassCardStats
                stats={[
                  {
                    label: "Top Speed",
                    value: "155",
                    unit: "mph",
                    icon: <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  },
                  {
                    label: "0-60 mph",
                    value: "3.1",
                    unit: "sec",
                    icon: <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  },
                  {
                    label: "Power",
                    value: "670",
                    unit: "hp",
                    icon: <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  },
                  {
                    label: "Battery",
                    value: "85",
                    unit: "%",
                    icon: <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                ]}
              />
            </GlassCard>
          </div>
        </section>

        {/* Charging Station Finder */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Charging Station Finder</h2>
          <ChargingStationFinder
            stations={sampleChargingStations}
            onStationSelect={handleStationSelect}
          />
          {selectedStation && (
            <div className="mt-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <p className="text-blue-300">
                Selected: {selectedStation.name} - {selectedStation.address}
              </p>
            </div>
          )}
        </section>

        {/* Payment Calculator */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Payment Calculator</h2>
          <PaymentCalculator vehiclePrice={62999} />
        </section>

        {/* Component Variants */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-8">Component Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/70">Buttons</h3>
              <div className="space-y-2">
                <Button variant="default" size="sm">Default</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/70">Badges</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="destructive">Alert</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/70">Glass Effects</h3>
              <div className="space-y-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-2 text-xs text-white/70">
                  Subtle Blur
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded p-2 text-xs text-white/70">
                  Medium Blur
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/70">Status Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-white/70">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-xs text-white/70">Limited</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-xs text-white/70">Unavailable</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentsDemo;
import React, { useState } from 'react';
import { GlassCard, GlassCardHeader, GlassCardStats } from '../../ui/components/glass-card';
import ChargingStationFinder from '../../ui/components/charging-station-finder';
import { Button } from '../../ui/components/button';
import { chargingNetwork } from '../../EVCarData';

// Sample charging stations data
const chargingStations = [
  {
    id: '1',
    name: 'Electra Supercharger - Downtown',
    address: '123 Main St, San Francisco, CA 94102',
    distance: 2.5,
    availableSlots: 8,
    totalSlots: 12,
    power: 250,
    price: 0.28,
    type: 'supercharger' as const,
    amenities: ['Restrooms', 'Coffee Shop', 'WiFi', 'Restaurant'],
    rating: 4.8,
    isOpen: true
  },
  {
    id: '2',
    name: 'Green Energy Hub - Palo Alto',
    address: '456 Oak Ave, Palo Alto, CA 94301',
    distance: 5.2,
    availableSlots: 3,
    totalSlots: 8,
    power: 150,
    price: 0.35,
    type: 'destination' as const,
    amenities: ['Shopping Center', 'Gym', 'Restaurants'],
    rating: 4.5,
    isOpen: true
  },
  {
    id: '3',
    name: 'Power Partner Station',
    address: '789 Elm St, Mountain View, CA 94040',
    distance: 8.7,
    availableSlots: 0,
    totalSlots: 6,
    power: 100,
    price: 0.25,
    type: 'partner' as const,
    amenities: ['24/7 Access', 'Security'],
    rating: 4.2,
    isOpen: true
  },
  {
    id: '4',
    name: 'Electra Supercharger - Airport',
    address: '1000 Airport Blvd, San Francisco, CA 94128',
    distance: 12.3,
    availableSlots: 15,
    totalSlots: 20,
    power: 350,
    price: 0.32,
    type: 'supercharger' as const,
    amenities: ['Lounge', 'Restrooms', 'Food Court', 'WiFi'],
    rating: 4.9,
    isOpen: true
  },
  {
    id: '5',
    name: 'Hotel Charging Station',
    address: '555 Beach Rd, Santa Cruz, CA 95060',
    distance: 28.5,
    availableSlots: 2,
    totalSlots: 4,
    power: 50,
    price: 0.22,
    type: 'destination' as const,
    amenities: ['Hotel Access', 'Pool', 'Restaurant'],
    rating: 4.0,
    isOpen: false
  }
];

const EnhancedChargingNetwork: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<any>(null);
  const [showNetworkStats, setShowNetworkStats] = useState(true);

  const handleStationSelect = (station: any) => {
    setSelectedStation(station);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Charging Network
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Access over {chargingNetwork.totalStations.toLocaleString()} charging stations worldwide. 
            From superchargers to destination chargers, we've got you covered.
          </p>
        </div>

        {/* Network Statistics */}
        {showNetworkStats && (
          <div className="mb-12">
            <GlassCard variant="elevated" className="p-8">
              <GlassCardHeader
                title="Network Overview"
                subtitle="Global charging infrastructure at your fingertips"
              />
              
              <GlassCardStats
                stats={[
                  {
                    label: "Total Stations",
                    value: chargingNetwork.totalStations.toLocaleString(),
                    icon: <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  },
                  {
                    label: "Superchargers",
                    value: chargingNetwork.superchargers.toLocaleString(),
                    icon: <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  },
                  {
                    label: "Destination",
                    value: chargingNetwork.destinationChargers.toLocaleString(),
                    icon: <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  },
                  {
                    label: "Partners",
                    value: chargingNetwork.partnerLocations.toLocaleString(),
                    icon: <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  }
                ]}
              />

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Average Power</span>
                    <span className="text-2xl font-bold text-white">{chargingNetwork.averagePower}kW</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Network Coverage</span>
                    <span className="text-2xl font-bold text-white">50+</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Charging Station Finder */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-white">Find Charging Stations</h3>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowNetworkStats(!showNetworkStats)}
              className="bg-white/10 hover:bg-white/20"
            >
              {showNetworkStats ? 'Hide Stats' : 'Show Stats'}
            </Button>
          </div>
          
          <ChargingStationFinder
            stations={chargingStations}
            onStationSelect={handleStationSelect}
          />
        </div>

        {/* Selected Station Details */}
        {selectedStation && (
          <GlassCard variant="elevated" className="p-6">
            <GlassCardHeader
              title="Selected Station"
              subtitle={selectedStation.name}
              badge="Selected"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">Station Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Address:</span>
                      <span className="text-white">{selectedStation.address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Distance:</span>
                      <span className="text-white">{selectedStation.distance} miles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Power:</span>
                      <span className="text-white">{selectedStation.power}kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Price:</span>
                      <span className="text-white">${selectedStation.price}/kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Rating:</span>
                      <span className="text-white">⭐ {selectedStation.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">Availability</h4>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">Available Slots</span>
                      <span className="text-xl font-bold text-white">
                        {selectedStation.availableSlots}/{selectedStation.totalSlots}
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-300 ${
                          selectedStation.availableSlots > 0 ? 'bg-green-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${(selectedStation.availableSlots / selectedStation.totalSlots) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Navigate
                    </Button>
                    <Button variant="secondary" className="flex-1 bg-white/10 hover:bg-white/20">
                      Save Station
                    </Button>
                  </div>
                </div>
                
                {selectedStation.amenities.length > 0 && (
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStation.amenities.map((amenity: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        )}

        {/* App Features */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Smart Charging App
              </h3>
              <p className="text-white/70 mb-6">
                Take control of your charging experience with our mobile app. Find stations, 
                monitor charging progress, and pay automatically.
              </p>
              <ul className="space-y-3">
                {chargingNetwork.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Download for iOS
                </Button>
                <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm border border-white/20">
                <div className="bg-black/50 rounded-xl p-4 mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Charging Complete</h4>
                    <p className="text-sm text-white/70 mb-4">85% battery • 45 min • $12.50</p>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/60 text-center">
                  Real-time notifications and charging updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedChargingNetwork;
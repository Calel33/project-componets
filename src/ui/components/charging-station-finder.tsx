import React, { useState, useEffect } from 'react';
import { GlassCard, GlassCardHeader, GlassCardFeature } from './glass-card';
import { Button } from './button';
import { Input } from './input';
import { Badge } from './badge';

export interface ChargingStation {
  id: string;
  name: string;
  address: string;
  distance: number;
  availableSlots: number;
  totalSlots: number;
  power: number; // kW
  price: number; // $/kWh
  type: 'supercharger' | 'destination' | 'partner';
  amenities: string[];
  rating: number;
  isOpen: boolean;
}

export interface ChargingStationFinderProps {
  stations: ChargingStation[];
  userLocation?: { lat: number; lng: number };
  onStationSelect?: (station: ChargingStation) => void;
  className?: string;
}

const ChargingStationFinder: React.FC<ChargingStationFinderProps> = ({
  stations,
  userLocation,
  onStationSelect,
  className
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'distance' | 'price' | 'available'>('distance');
  const [filteredStations, setFilteredStations] = useState<ChargingStation[]>(stations);

  useEffect(() => {
    let filtered = stations;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(station =>
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(station => station.type === selectedType);
    }

    // Sort stations
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return a.distance - b.distance;
        case 'price':
          return a.price - b.price;
        case 'available':
          return b.availableSlots - a.availableSlots;
        default:
          return 0;
      }
    });

    setFilteredStations(filtered);
  }, [searchQuery, selectedType, sortBy, stations]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'supercharger':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'destination':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'partner':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return 'text-green-400';
    if (percentage > 20) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search and Filter Controls */}
      <GlassCard className="p-6">
        <GlassCardHeader
          title="Find Charging Stations"
          subtitle="Locate the nearest charging stations for your electric vehicle"
        />
        
        <div className="space-y-4">
          <Input
            placeholder="Search by name or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedType === 'all' ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedType('all')}
              className={selectedType === 'all' ? 'bg-blue-600' : 'bg-white/10'}
            >
              All Stations
            </Button>
            <Button
              variant={selectedType === 'supercharger' ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedType('supercharger')}
              className={selectedType === 'supercharger' ? 'bg-red-600' : 'bg-white/10'}
            >
              Superchargers
            </Button>
            <Button
              variant={selectedType === 'destination' ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedType('destination')}
              className={selectedType === 'destination' ? 'bg-blue-600' : 'bg-white/10'}
            >
              Destination
            </Button>
            <Button
              variant={selectedType === 'partner' ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedType('partner')}
              className={selectedType === 'partner' ? 'bg-green-600' : 'bg-white/10'}
            >
              Partners
            </Button>
          </div>
          
          <div className="flex gap-2">
            <span className="text-sm text-white/70">Sort by:</span>
            <Button
              variant={sortBy === 'distance' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSortBy('distance')}
              className="text-white/70 hover:text-white"
            >
              Distance
            </Button>
            <Button
              variant={sortBy === 'price' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSortBy('price')}
              className="text-white/70 hover:text-white"
            >
              Price
            </Button>
            <Button
              variant={sortBy === 'available' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSortBy('available')}
              className="text-white/70 hover:text-white"
            >
              Availability
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Station List */}
      <div className="space-y-4">
        {filteredStations.length === 0 ? (
          <GlassCard className="p-8 text-center">
            <p className="text-white/70">No charging stations found matching your criteria.</p>
          </GlassCard>
        ) : (
          filteredStations.map((station) => (
            <GlassCard
              key={station.id}
              variant="interactive"
              className="p-6"
              click={true}
              onClick={() => onStationSelect?.(station)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{station.name}</h3>
                    <Badge className={getTypeColor(station.type)}>
                      {station.type}
                    </Badge>
                    {station.isOpen ? (
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                        Open
                      </Badge>
                    ) : (
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                        Closed
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-white/70 mb-2">{station.address}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-white/70">{station.distance} miles away</span>
                    <span className="text-white/70">${station.price}/kWh</span>
                    <span className="text-white/70">{station.power}kW</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white/70">{station.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getAvailabilityColor(station.availableSlots, station.totalSlots)}`}>
                    {station.availableSlots}/{station.totalSlots}
                  </div>
                  <div className="text-xs text-white/70">Available</div>
                </div>
              </div>
              
              {station.amenities.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {station.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              )}
            </GlassCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ChargingStationFinder;
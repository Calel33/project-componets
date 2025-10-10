import React from 'react';
import { Search, MapPin, DollarSign, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  searchLocation: string;
  priceRange: string;
  acreage: string;
  setSearchLocation: (value: string) => void;
  setPriceRange: (value: string) => void;
  setAcreage: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchLocation,
  priceRange,
  acreage,
  setSearchLocation,
  setPriceRange,
  setAcreage,
  handleSearch
}) => {
  return (
    <section
      className="relative py-16 md:py-24 bg-gradient-to-br from-background to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Your Next Investment Starts Here
          </h1>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground"
          >
            Discover premium land opportunities with flexible financing options. From residential lots to commercial parcels, find your perfect property today.
          </p>
          
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg bg-card"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none transition-colors border border-input bg-background text-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none appearance-none transition-colors border border-input bg-background text-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                >
                  <option value="">Price Range</option>
                  <option value="0-100k">$0 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div>
              <div className="relative">
                <TrendingUp className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <select
                  value={acreage}
                  onChange={(e) => setAcreage(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none appearance-none transition-colors border border-input bg-background text-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                >
                  <option value="">Acreage</option>
                  <option value="0-5">0 - 5 acres</option>
                  <option value="5-10">5 - 10 acres</option>
                  <option value="10-20">10 - 20 acres</option>
                  <option value="20+">20+ acres</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg transition-colors flex items-center justify-center text-primary-foreground font-medium bg-primary hover:bg-primary/90"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

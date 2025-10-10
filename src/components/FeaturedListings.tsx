import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  price: string;
  acreage: string;
  location: string;
}

interface FeaturedListingsProps {
  listings: Listing[];
}

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({ listings }) => {
  return (
    <section id="listings" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Featured Properties
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto text-muted-foreground"
          >
            Explore our handpicked selection of premium land opportunities across the country.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="rounded-xl overflow-hidden transition-all bg-card shadow-md hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.alt}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="absolute top-4 right-4 px-2 py-1 rounded-lg shadow-md bg-card"
                >
                  <p
                    className="text-sm font-bold text-primary"
                  >
                    {listing.price}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p
                  className="text-sm mb-1 text-muted-foreground"
                >
                  {listing.category}
                </p>
                <h3
                  className="text-lg font-semibold mb-2 text-card-foreground"
                >
                  {listing.title}
                </h3>
                <div className="flex items-center text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground/70" />
                  <span className="text-muted-foreground">{listing.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 mr-1 text-muted-foreground/70" />
                  <span className="text-muted-foreground">{listing.acreage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            className="px-6 py-3 rounded-lg transition-colors text-primary-foreground font-medium bg-primary hover:bg-primary/90"
          >
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;

import React from 'react';
import { Home, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Home className="h-8 w-8" style={{ color: 'var(--green-600)' }} />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-card-foreground">LandInvest Pro</h1>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#listings" className="font-medium text-muted-foreground transition-colors hover:text-primary">Listings</a>
            <a href="#sell" className="font-medium text-muted-foreground transition-colors hover:text-primary">Sell Land</a>
            <a href="#about" className="font-medium text-muted-foreground transition-colors hover:text-primary">About</a>
            <a href="#contact" className="font-medium text-muted-foreground transition-colors hover:text-primary">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-muted-foreground transition-colors hover:text-primary">
              <Phone className="h-5 w-5" />
            </button>
            <button
              className="px-4 py-2 rounded-lg transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

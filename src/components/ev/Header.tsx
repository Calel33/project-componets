import { useState } from 'react';
import { Button } from '../../ui/components/button';
import { Menu, X, Zap, Phone, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900">ElectraDrive</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#models" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Models
            </a>
            <a href="#charging" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Charging
            </a>
            <a href="#technology" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Technology
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              1-800-ELECTRA
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Test Drive
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-700 hover:text-blue-600">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-slate-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#models"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                Models
              </a>
              <a
                href="#charging"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                Charging
              </a>
              <a
                href="#technology"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                Technology
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                About
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-slate-200">
              <div className="px-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-slate-700 hover:text-blue-600">
                  <Phone className="w-4 h-4 mr-2" />
                  1-800-ELECTRA
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Test Drive
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-700 hover:text-blue-600">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
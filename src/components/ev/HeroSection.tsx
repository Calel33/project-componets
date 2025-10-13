import { useState } from 'react';
import { evModels } from '../../EVCarData';
import { Button } from '../../ui/components/button';
import { Input } from '../../ui/components/input';
import { Badge } from '../../ui/components/badge';
import { Zap, MapPin, Calendar, ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  selectedModel: string;
  onModelChange: (modelId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ selectedModel, onModelChange }) => {
  const [testDriveDate, setTestDriveDate] = useState('');
  const [testDriveLocation, setTestDriveLocation] = useState('');

  const currentModel = evModels.find(model => model.id === selectedModel) || evModels[0];

  const handleTestDriveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test drive requested:', { date: testDriveDate, location: testDriveLocation, model: selectedModel });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.1),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.05),transparent_60%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center">
              <Badge variant="secondary" className="px-4 py-1.5 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors">
                <Zap className="w-3 h-3 mr-1.5" />
                Now shipping in all 50 states
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {currentModel.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300">
                {currentModel.tagline}
              </p>
            </div>

            {/* Key Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">{currentModel.range}</div>
                <div className="text-xs text-slate-300">Miles Range</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">{currentModel.acceleration}</div>
                <div className="text-xs text-slate-300">Acceleration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">{currentModel.topSpeed}</div>
                <div className="text-xs text-slate-300">Top Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">{currentModel.seats}</div>
                <div className="text-xs text-slate-300">Seats</div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">${currentModel.price.toLocaleString()}</span>
              <span className="text-slate-300">Starting price</span>
            </div>

            {/* Test Drive Form */}
            <form onSubmit={handleTestDriveSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Your location"
                    value={testDriveLocation}
                    onChange={(e) => setTestDriveLocation(e.target.value)}
                    className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    type="date"
                    value={testDriveDate}
                    onChange={(e) => setTestDriveDate(e.target.value)}
                    className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Schedule Test Drive
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>

            {/* Secondary Actions */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Column - Car Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentModel.image}
                alt={`${currentModel.name} electric vehicle`}
                className="w-full h-auto object-cover"
              />
              
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              In Stock
            </div>
          </div>
        </div>

        {/* Model Selector */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-xl font-semibold mb-6">Choose Your Model</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {evModels.map((model) => (
              <div
                key={model.id}
                onClick={() => onModelChange(model.id)}
                className={`relative rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                  selectedModel === model.id
                    ? 'bg-white/20 border-2 border-white/30'
                    : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 rounded-md overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{model.name}</h4>
                    <p className="text-sm text-slate-300">{model.range} miles range</p>
                  </div>
                  {selectedModel === model.id && (
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-xs text-slate-400">{model.tagline}</p>
                <p className="mt-1 font-semibold">${model.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
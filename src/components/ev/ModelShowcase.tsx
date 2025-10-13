import { useState } from 'react';
import { evModels } from '../../EVCarData';
import { Button } from '../../ui/components/button';
import { Badge } from '../../ui/components/badge';
import { Zap, Users, Settings, Fuel, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface ModelShowcaseProps {
  selectedModel: string;
  onModelChange: (modelId: string) => void;
}

const ModelShowcase: React.FC<ModelShowcaseProps> = ({ selectedModel, onModelChange }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(evModels[0].availableColors[0]);

  const currentModel = evModels.find(model => model.id === selectedModel) || evModels[0];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % 3); // Assuming 3 images per model
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Explore Our Models
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From sedans to SUVs, our electric vehicles combine performance, luxury, and sustainability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Gallery */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={currentModel.image}
                alt={`${currentModel.name} - Image ${activeImageIndex + 1}`}
                className="w-full h-auto object-cover"
              />
              
              {/* Gallery Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 rounded-full p-2 shadow-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 rounded-full p-2 shadow-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Choose Color</h3>
              <div className="flex flex-wrap gap-2">
                {currentModel.availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Model Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                {currentModel.name}
              </h3>
              <p className="text-lg text-slate-600 mb-4">{currentModel.tagline}</p>
              
              <div className="flex items-center space-x-2 mb-6">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <Zap className="w-3 h-3 mr-1" />
                  Electric
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {currentModel.range} miles range
                </Badge>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Acceleration</span>
                </div>
                <p className="text-xl font-bold text-slate-900">{currentModel.acceleration}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Settings className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Top Speed</span>
                </div>
                <p className="text-xl font-bold text-slate-900">{currentModel.topSpeed} mph</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Seats</span>
                </div>
                <p className="text-xl font-bold text-slate-900">{currentModel.seats}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Fuel className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Power</span>
                </div>
                <p className="text-xl font-bold text-slate-900">{currentModel.power} hp</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h4>
              <ul className="space-y-2">
                {currentModel.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and CTA */}
            <div className="border-t pt-6">
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-slate-900">${currentModel.price.toLocaleString()}</span>
                <span className="text-slate-600">Starting price</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Configure & Order
                </Button>
                <Button variant="outline" className="flex-1">
                  Schedule Test Drive
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Model Selector Tabs */}
        <div className="mt-16">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8">
              {evModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => onModelChange(model.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    selectedModel === model.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;
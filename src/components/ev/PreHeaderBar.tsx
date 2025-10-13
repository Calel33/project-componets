import { Megaphone, Zap } from 'lucide-react';

const PreHeaderBar = () => {
  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3 text-center">
        <Zap className="w-4 h-4 text-blue-400" />
        <span className="hidden sm:inline">Unleash the Future of Driving</span>
        <span className="sm:mx-2">•</span>
        <Megaphone className="w-4 h-4 text-green-400" />
        <span className="font-medium">Reserve Your Model Today & Get Free Supercharging for a Year</span>
      </div>
    </div>
  );
};

export default PreHeaderBar;

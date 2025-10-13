import { chargingNetwork } from '../../EVCarData';
import { MapPin, Zap, Clock, Smartphone, Navigation, CheckCircle } from 'lucide-react';

const ChargingNetwork = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Charging Made Simple
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            With over 50,000 charging stations worldwide, you're never far from a charge. Our network
            covers major highways and urban areas, making long-distance travel effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              alt="Charging station network map"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            
            {/* Map Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center text-white mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Find charging stations on your route</span>
                </div>
                <p className="text-white/80 text-sm">
                  Our navigation system automatically plans charging stops on long trips.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Charging Network Info */}
          <div className="space-y-8">
            {/* Network Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Superchargers</span>
                </div>
                <p className="text-3xl font-bold text-slate-900">{chargingNetwork.superchargers.toLocaleString()}</p>
                <p className="text-xs text-slate-500 mt-1">High-speed stations</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Total Stations</span>
                </div>
                <p className="text-3xl font-bold text-slate-900">{chargingNetwork.totalStations.toLocaleString()}</p>
                <p className="text-xs text-slate-500 mt-1">Worldwide</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Avg. Power</span>
                </div>
                <p className="text-3xl font-bold text-slate-900">{chargingNetwork.averagePower} kW</p>
                <p className="text-xs text-slate-500 mt-1">Charging speed</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Destinations</span>
                </div>
                <p className="text-3xl font-bold text-slate-900">{chargingNetwork.destinationChargers.toLocaleString()}</p>
                <p className="text-xs text-slate-500 mt-1">Hotels, restaurants</p>
              </div>
            </div>

            {/* App Features */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Charging App Features</h3>
              <div className="space-y-4">
                {chargingNetwork.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold">Download the Charging App</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Find stations, monitor charging, and pay automatically with our mobile app.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.31.79-1.31.03-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.6-.15-1.15.07-2.35.57-3.29z"/>
                  </svg>
                  Download for iOS
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Charging Types */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Charging Options</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Home Charging</h4>
              <p className="text-slate-600 mb-4">
                Charge overnight at home with our included home charging station. Wake up to a full battery every morning.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Up to 44 miles of range per hour
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Included with vehicle purchase
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Schedule charging during off-peak hours
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Supercharger</h4>
              <p className="text-slate-600 mb-4">
                Our fastest charging option for long-distance travel. Add up to 200 miles of range in just 15 minutes.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Up to 250 kW charging power
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Located along major highways
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Automatic payment through app
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Destination Charging</h4>
              <p className="text-slate-600 mb-4">
                Charge while you shop, dine, or stay at hotels. Our destination chargers are located at places you already visit.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Up to 22 kW charging power
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Often free for customers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Available at 15,000+ locations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingNetwork;
import { technologyFeatures } from '../../EVCarData';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/components/card';
import { Zap, Navigation, Download, Smartphone, Volume2, Sun } from 'lucide-react';

const TechnologyFeatures = () => {
  const iconMap = {
    'Zap': Zap,
    'Navigation': Navigation,
    'Download': Download,
    'Smartphone': Smartphone,
    'Volume2': Volume2,
    'Sun': Sun
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our electric vehicles are packed with innovative features that enhance safety, comfort, and driving experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <Card key={feature.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Over-the-Air Updates
              </h3>
              <p className="text-blue-100 mb-6">
                Your vehicle gets better over time with regular software updates that add new features and improve existing ones.
                No service visits required - updates download automatically.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Performance improvements and optimizations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>New features and functionality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Enhanced safety and security features</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
                <div className="bg-white/20 rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Update Available</h4>
                    <p className="text-sm text-blue-100 mb-4">Version 2.4.1 (1.2 GB)</p>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs text-blue-100">Downloading... 65%</p>
                  </div>
                </div>
                <p className="text-sm text-blue-100 text-center">
                  Updates install automatically while your vehicle is parked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyFeatures;
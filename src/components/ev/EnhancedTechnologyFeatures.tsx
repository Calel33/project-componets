import { technologyFeatures } from '../../EVCarData';
import { GlassCard, GlassCardHeader, GlassCardFeature, GlassCardStats } from '../../ui/components/glass-card';
import { Zap, Navigation, Download, Smartphone, Volume2, Sun } from 'lucide-react';

const EnhancedTechnologyFeatures = () => {
  const iconMap = {
    'Zap': Zap,
    'Navigation': Navigation,
    'Download': Download,
    'Smartphone': Smartphone,
    'Volume2': Volume2,
    'Sun': Sun
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Our electric vehicles are packed with innovative features that enhance safety, comfort, and driving experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologyFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <GlassCard key={feature.id} variant="interactive" className="group">
                <GlassCardHeader
                  title={feature.title}
                  subtitle={feature.description}
                  icon={IconComponent && <IconComponent className="w-6 h-6 text-blue-400" />}
                />
                <p className="text-white/70 mt-4">{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>

        {/* Performance Metrics Dashboard */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Real-Time Performance</h3>
            <p className="text-white/70">Monitor your vehicle's key metrics at a glance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard variant="elevated">
              <GlassCardHeader
                title="Battery Status"
                subtitle="Current charge and health"
                icon={
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
              <div className="space-y-3">
                <GlassCardFeature
                  title="Charge Level"
                  description="Current battery percentage"
                  value={85}
                  unit="%"
                  trend="up"
                  icon={
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                />
                <GlassCardFeature
                  title="Range Remaining"
                  description="Estimated miles remaining"
                  value={285}
                  unit="mi"
                  icon={
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  }
                />
              </div>
            </GlassCard>

            <GlassCard variant="elevated">
              <GlassCardHeader
                title="Energy Efficiency"
                subtitle="Power consumption metrics"
                icon={
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              />
              <GlassCardStats
                stats={[
                  {
                    label: "Efficiency",
                    value: "3.2",
                    unit: "mi/kWh",
                    icon: <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  },
                  {
                    label: "Avg. Consumption",
                    value: "285",
                    unit: "Wh/mi",
                    icon: <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  },
                  {
                    label: "Regen",
                    value: "12",
                    unit: "%",
                    icon: <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  }
                ]}
              />
            </GlassCard>

            <GlassCard variant="elevated">
              <GlassCardHeader
                title="Driving Stats"
                subtitle="Current trip and lifetime data"
                icon={
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
              <div className="space-y-3">
                <GlassCardFeature
                  title="Current Speed"
                  description="Real-time vehicle speed"
                  value={45}
                  unit="mph"
                  icon={
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                />
                <GlassCardFeature
                  title="Trip Distance"
                  description="Current trip odometer"
                  value={12.5}
                  unit="mi"
                  icon={
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  }
                />
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Over-the-Air Updates
              </h3>
              <p className="text-white/70 mb-6">
                Your vehicle gets better over time with regular software updates that add new features and improve existing ones.
                No service visits required - updates download automatically.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="text-white/80">Performance improvements and optimizations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="text-white/80">New features and functionality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="text-white/80">Enhanced safety and security features</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <GlassCard variant="elevated" className="max-w-sm">
                <div className="bg-white/10 rounded-xl p-4 mb-4 border border-white/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Update Available</h4>
                    <p className="text-sm text-white/70 mb-4">Version 2.4.1 (1.2 GB)</p>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                      <div className="bg-blue-400 h-2 rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs text-white/70">Downloading... 65%</p>
                  </div>
                </div>
                <p className="text-sm text-white/60 text-center">
                  Updates install automatically while your vehicle is parked.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTechnologyFeatures;
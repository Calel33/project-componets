import { Zap, Gauge, BatteryCharging, Shield } from 'lucide-react';

type Spec = { icon: JSX.Element; stat: string; label: string };

const specs: Spec[] = [
  { icon: <Zap className="w-4 h-4" />, stat: '3.1s', label: '0-60 mph' },
  { icon: <Gauge className="w-4 h-4" />, stat: '400 mi', label: 'Max Range' },
  { icon: <BatteryCharging className="w-4 h-4" />, stat: '15 min', label: '10-80% Fast Charge' },
  { icon: <Shield className="w-4 h-4" />, stat: '5-Star', label: 'Safety Rating' },
];

const MiniSpecsBar = () => {
  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {specs.map((s, i) => (
          <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
            <div className="text-blue-600">{s.icon}</div>
            <div>
              <div className="text-lg font-semibold text-slate-900">{s.stat}</div>
              <div className="text-xs text-slate-600">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniSpecsBar;

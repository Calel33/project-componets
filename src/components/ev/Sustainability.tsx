import { Leaf } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Driven by Progress. Powered by the Planet.</h3>
          <p className="text-slate-600 mb-6">
            We commit to recycled materials, renewable energy, and carbon‑neutral manufacturing across our fleet.
          </p>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-center"><Leaf className="w-4 h-4 text-green-600 mr-2"/> Recycled and bio‑based interiors</li>
            <li className="flex items-center"><Leaf className="w-4 h-4 text-green-600 mr-2"/> 100% renewable assembly plants</li>
            <li className="flex items-center"><Leaf className="w-4 h-4 text-green-600 mr-2"/> Verified carbon‑neutral logistics</li>
          </ul>
          <a href="#mission" className="inline-block mt-6 text-blue-600 font-medium">Learn About Our Mission →</a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=800&fit=crop" alt="Renewable energy" className="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

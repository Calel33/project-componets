import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/src/ui/components/button';
import { Badge } from '@/src/ui/components/badge';
import { ShoppingBag, User, Leaf, Zap, Ban, CupSoda, ChevronRight, Star } from 'lucide-react';

type BestSeller = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  ingredients: string[];
  benefit: string;
};

const bestSellers: BestSeller[] = [
  {
    id: 'tropical-sunrise',
    name: 'Tropical Sunrise',
    tagline: 'Your Vacation in a Cup!',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1546177461-9f0315a22b24?w=800&h=800&fit=crop',
    ingredients: ['Mango', 'Pineapple', 'Coconut', 'Turmeric'],
    benefit: 'Immune Booster',
  },
  {
    id: 'green-glow',
    name: 'Green Glow',
    tagline: 'Radiance, Bottled.',
    price: 8.49,
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=800&h=800&fit=crop',
    ingredients: ['Spinach', 'Kale', 'Apple', 'Ginger'],
    benefit: 'Detox & Vitality',
  },
  {
    id: 'berry-blast',
    name: 'Berry Blast',
    tagline: 'Sweet, Tart, Perfect.',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop',
    ingredients: ['Strawberry', 'Blueberry', 'Raspberry', 'Chia'],
    benefit: 'Antioxidant Power',
  },
  {
    id: 'peanut-power-bowl',
    name: 'Peanut Power Bowl',
    tagline: 'Creamy Protein Dreams.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1512621776951-2b5d0a4b84e8?w=800&h=800&fit=crop',
    ingredients: ['Banana', 'Peanut Butter', 'Cacao', 'Oats'],
    benefit: 'Energy',
  },
];

const PreHeader = () => (
  <div className="w-full bg-amber-50 text-amber-900 border-b border-amber-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center text-sm flex items-center justify-center gap-3">
      <span>🥬 100% Real Fruit & Veggies</span>
      <span className="text-amber-400">•</span>
      <span className="font-semibold">🎉 First Order? Get 20% Off! Use Code: SUNSHINE</span>
    </div>
  </div>
);

const Header = () => (
  <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-lime-400 to-amber-400 flex items-center justify-center">
          <CupSoda className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-extrabold tracking-tight text-slate-900">SunnyBlend</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-slate-700">
        <a href="#menu" className="hover:text-lime-600">Menu</a>
        <a href="#story" className="hover:text-lime-600">Our Story</a>
        <a href="#catering" className="hover:text-lime-600">Catering</a>
        <a href="#locations" className="hover:text-lime-600">Locations</a>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-slate-700">
          <User className="w-5 h-5" />
        </Button>
        <Button variant="ghost" className="relative text-slate-700">
          <ShoppingBag className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Cart</span>
          <span className="ml-2 inline-flex items-center justify-center text-xs font-semibold bg-lime-600 text-white rounded-full w-5 h-5 animate-pulse">2</span>
        </Button>
        <Button className="group relative overflow-hidden bg-lime-600 hover:bg-lime-700">
          <span className="relative z-10">Order Now</span>
          <span className="pointer-events-none absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10" />
        </Button>
      </div>
    </div>
  </header>
);

const Hero = ({ offset = 0 }: { offset?: number }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-lime-50">
    <div className="absolute -top-16 -right-16 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-60" />
    <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-lime-200 rounded-full blur-3xl opacity-60" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <Badge className="bg-lime-100 text-lime-700 border-lime-200">Fuel Your Greatness</Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Blend Your Happy.</h1>
        <p className="text-lg md:text-xl text-slate-600">Supercharged smoothies & bowls, packed with real ingredients for real energy.</p>
        <div className="flex flex-wrap gap-3">
          <Button className="group relative overflow-hidden bg-lime-600 hover:bg-lime-700">
            <span className="relative z-10">Order for Pickup/Delivery</span>
            <span className="pointer-events-none absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10" />
          </Button>
          <a href="#menu" className="inline-flex items-center font-medium text-lime-700 hover:text-lime-800">View Our Menu <ChevronRight className="ml-1 w-4 h-4"/></a>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
        <img src="https://images.unsplash.com/photo-1514996937319-344454492b37?w=1400&h=1100&fit=crop" alt="Colorful smoothie pour" className="w-full h-full object-cover will-change-transform" style={{ transform: `translateY(${offset * -0.15}px)` }} />
        <div className="pointer-events-none absolute inset-0">
          <div className="fruit-confetti">
            <span>🍓</span><span>🥭</span><span>🍌</span><span>🍍</span><span>🥝</span>
          </div>
        </div>
      </div>
    </div>
    <style>
      {`
        .fruit-confetti span{position:absolute;animation:float 6s ease-in-out infinite;opacity:.9;font-size:18px}
        .fruit-confetti span:nth-child(1){top:10%;left:8%;animation-delay:0s}
        .fruit-confetti span:nth-child(2){top:20%;right:12%;animation-delay:.6s}
        .fruit-confetti span:nth-child(3){bottom:15%;left:15%;animation-delay:1.2s}
        .fruit-confetti span:nth-child(4){bottom:10%;right:18%;animation-delay:1.8s}
        .fruit-confetti span:nth-child(5){top:50%;left:45%;animation-delay:2.2s}
        @keyframes float{0%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(8deg)}100%{transform:translateY(0) rotate(0)} }
      `}
    </style>
  </section>
);

const MiniBenefits = () => (
  <section className="bg-white border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[{icon:<Leaf className='w-4 h-4'/>,text:'Always Organic & Natural'},{icon:<Zap className='w-4 h-4'/>,text:'Blended in Under 3 Minutes'},{icon:<Ban className='w-4 h-4'/>,text:'No Added Sugars or Syrups'},{icon:<CupSoda className='w-4 h-4'/>,text:'Eco-Friendly Packaging'}].map((b,i)=>(
        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-lime-50/60 hover:bg-lime-100 transition-colors">
          <div className="text-lime-700">{b.icon}</div>
          <div className="text-sm font-medium text-slate-800">{b.text}</div>
        </div>
      ))}
    </div>
  </section>
);

const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const max = 8;
  return (
    <div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: -(py * max), y: px * max });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform 120ms ease' }}
    >
      {children}
    </div>
  );
};

const BestSellers = () => (
  <section id="menu" className="py-16 bg-gradient-to-b from-white to-amber-50/40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">The All-Star Lineup!</h2>
        <p className="text-slate-600">Bright, bold, and unbelievably delicious.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map(item => (
          <TiltCard key={item.id}>
            <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">{item.name}</h3>
                  <span className="text-sm font-semibold text-lime-700">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-slate-600">{item.tagline}</p>
                <div className="text-xs text-slate-500">{item.ingredients.join(', ')}</div>
                <div className="pt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full"><Star className="w-3 h-3"/> {item.benefit}</span>
                  <Button size="sm" className="group relative overflow-hidden bg-lime-600 hover:bg-lime-700">
                    <span className="relative z-10">Add to Order</span>
                    <span className="pointer-events-none absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10" />
                  </Button>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Your Boost is Just 3 Steps Away!</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {n:'01',t:'Pick Your Potion',d:'Browse our menu of delicious blends.'},
          {n:'02',t:'Customize & Cart',d:'Add boosts like protein, chia, and more.'},
          {n:'03',t:'Grab & Go!',d:'Pickup in‑store or get it delivered.'}
        ].map((s,i)=> (
          <div key={i} className="rounded-2xl p-6 ring-1 ring-slate-200 bg-lime-50/40">
            <div className="w-10 h-10 rounded-full bg-lime-600 text-white flex items-center justify-center font-bold mb-3">{s.n}</div>
            <h3 className="font-semibold text-slate-900 mb-1">{s.t}</h3>
            <p className="text-slate-600 text-sm">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button size="lg" className="bg-lime-600 hover:bg-lime-700">Start Your Order</Button>
      </div>
    </div>
  </section>
);

const IngredientSpotlight = () => (
  <section className="py-16 bg-gradient-to-br from-lime-50 to-amber-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-3">We’re Picky About Our Friends.</h3>
        <p className="text-slate-600 mb-4">We partner with local farms to source the freshest, most vibrant ingredients. If it's not good enough for our own fridge, it’s not going in your smoothie.</p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Superfood Boosts: protein, immunity, or energy for an extra kick.</li>
          <li>• House‑Made Nut Milks: creamy, delicious, and dairy‑free.</li>
          <li>• Fresh, Never Frozen? Just kidding! We use flash‑frozen at peak ripeness for texture and nutrients.</li>
        </ul>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200">
        <img src="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1400&h=1000&fit=crop" alt="Fresh ingredients" className="w-full h-full object-cover"/>
      </div>
    </div>
  </section>
);

const TestimonialsUGC = () => {
  const items = useMemo(() => (
    [
      { img: 'https://images.unsplash.com/photo-1532634896-26909d0d4b6a?w=600&h=600&fit=crop', name: 'Sarah K.', quote: 'The “Green Glow” is my secret weapon! The best part of my morning.' },
      { img: 'https://images.unsplash.com/photo-1544223915-8f0b3d0590b6?w=600&h=600&fit=crop', name: 'Leo R.', quote: 'Berry Blast after workouts = instant happiness.' },
      { img: 'https://images.unsplash.com/photo-1532634896-26909d0d4b6a?w=600&h=600&fit=crop', name: 'Amaya T.', quote: 'Tropical Sunrise tastes like vacation—on a Tuesday.' },
    ]
  ), []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">What Our #SmoothieSquad is Saying!</h3>
          <p className="text-slate-600">Tag us @SunnyBlend to be featured.</p>
        </div>
        <div className="overflow-hidden mb-8">
          <div className="whitespace-nowrap animate-[ticker_18s_linear_infinite] text-sm text-lime-700/90">
            <span className="mx-4">#SunnyBlend</span>
            <span className="mx-4">#BlendYourHappy</span>
            <span className="mx-4">#GreenGlow</span>
            <span className="mx-4">#BerryBlast</span>
            <span className="mx-4">#TropicalSunrise</span>
            <span className="mx-4">#FuelYourGreatness</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t,i)=> (
            <div key={i} className="rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <p className="text-slate-800 text-sm mb-2">“{t.quote}”</p>
                <span className="text-xs text-slate-500">— {t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
};

const BundlesCatering = () => (
  <section id="catering" className="py-16 bg-gradient-to-b from-amber-50/60 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Spread the Good Vibes!</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Smoothie Bundles</h4>
          <p className="text-slate-600 mb-4">The Office Boost — 6 smoothies for the price of 5. Perfect for the team.</p>
          <Button className="bg-lime-600 hover:bg-lime-700">Explore Bundles</Button>
        </div>
        <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Event Catering</h4>
          <p className="text-slate-600 mb-4">Fuel your next event—yoga class, birthday party, corporate meeting. We’ve got you covered.</p>
          <Button className="bg-lime-600 hover:bg-lime-700">Plan Your Event</Button>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-16 bg-lime-700">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-2">Ready to Feel the Difference?</h3>
      <p className="text-white/90 mb-6">Your body will thank you. Grab a smoothie and taste the goodness.</p>
      <div className="flex items-center justify-center gap-4">
        <Button size="lg" className="bg-white text-lime-800 hover:bg-lime-100">Order Now</Button>
        <a href="#locations" className="text-white hover:underline">Find a Location Near You</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-400 to-amber-400" />
          <span className="font-extrabold text-slate-900">SunnyBlend</span>
        </div>
        <p className="text-sm text-slate-600">Mixing happiness into every cup since 2024.</p>
        <div className="flex gap-3 mt-4 text-slate-500">
          <a aria-label="Instagram" href="#">IG</a>
          <a aria-label="TikTok" href="#">TT</a>
          <a aria-label="Facebook" href="#">FB</a>
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-slate-900 mb-2">Explore</h5>
        <ul className="space-y-2 text-sm text-slate-600">
          <li><a href="#menu">Our Menu</a></li>
          <li><a href="#nutrition">Nutrition Facts</a></li>
          <li><a href="#allergens">Allergens</a></li>
          <li><a href="#story">Our Story</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-slate-900 mb-2">Company</h5>
        <ul className="space-y-2 text-sm text-slate-600">
          <li><a href="#locations">Locations</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#catering">Catering</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-slate-900 mb-2">Newsletter</h5>
        <p className="text-sm text-slate-600 mb-3">Get smoothie tips, recipes, and exclusive deals!</p>
        <div className="flex gap-2">
          <input className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="you@example.com"/>
          <Button className="bg-lime-600 hover:bg-lime-700">Blend In!</Button>
        </div>
      </div>
    </div>
    <div className="py-4 text-center text-xs text-slate-500 border-t border-slate-200">© 2024 SunnyBlend. All rights reserved. | Privacy Policy | Terms of Service</div>
  </footer>
);

export default function SmoothieLanding() {
  const [served, setServed] = useState(12435);
  const [offset, setOffset] = useState(0);
  useEffect(()=>{ const id = setInterval(()=> setServed(s=> s + Math.floor(Math.random()*3)), 2000); return ()=> clearInterval(id); },[]);
  useEffect(()=>{ const onScroll = ()=> setOffset(window.scrollY || 0); window.addEventListener('scroll', onScroll, { passive: true }); return ()=> window.removeEventListener('scroll', onScroll); },[]);
  return (
    <div className="min-h-screen bg-white">
      <PreHeader />
      <Header />
      <Hero offset={offset} />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-lime-50 text-lime-700 ring-1 ring-lime-200">
            <span className="text-sm">Smoothies Served Today</span>
            <span className="font-extrabold tabular-nums">{served.toLocaleString()}</span>
          </div>
        </div>
      </section>
      <MiniBenefits />
      <BestSellers />
      <HowItWorks />
      <IngredientSpotlight />
      <TestimonialsUGC />
      <BundlesCatering />
      <FinalCTA />
      <Footer />
    </div>
  );
}

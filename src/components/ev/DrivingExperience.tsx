const DrivingExperience = () => {
  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&h=900&fit=crop"
          alt="EV driving through scenic landscapes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Not Just a Car. A Catalyst for Adventure.</h3>
            <ul className="grid sm:grid-cols-3 gap-3 text-white/90 text-sm">
              <li className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">Silent, Smooth Power</li>
              <li className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">Spacious, Zen Interior</li>
              <li className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">Always Getting Smarter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingExperience;

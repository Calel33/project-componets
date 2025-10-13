import { Button } from '../../ui/components/button';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-3">Your Future on the Road Awaits.</h3>
        <p className="text-white/80 mb-6">Reserve your vehicle today with a fully refundable $100 deposit.</p>
        <div className="flex items-center justify-center gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">Reserve Your Vehicle Now</Button>
          <a href="#test-drive" className="text-white/90 hover:text-white underline-offset-4 hover:underline">Schedule a Test Drive</a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate('/products');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="relative w-full bg-gradient py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527674979-4bdd6ec37065?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex flex-col md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Quality Industrial Machine Spares <span className="text-orange">For Every Need</span>
            </h1>
            <p className="text-gray-100 md:text-lg max-w-xl">
              Your trusted partner for high-quality excavator parts, engine spares, radiators, 
              and all industrial machine components. Built to last with precision engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={handleExploreProducts}
                className="bg-orange hover:bg-orange/90 text-white px-6 py-6 text-base"
              >
                Explore Products
              </Button>
              <Button 
                onClick={handleContactUs}
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-6 text-base"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-slide-in">
            <img 
              src="https://images.unsplash.com/photo-1518386427402-1f0c6a90a858?q=80&w=1974&auto=format&fit=crop" 
              alt="Industrial Machinery" 
              className="rounded-lg shadow-xl max-w-full md:max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

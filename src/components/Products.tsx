
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const productCategories = [
  {
    name: "Excavator Parts",
    image: "https://images.unsplash.com/photo-1508352483487-5d0cc50a1e4a?q=80&w=2070&auto=format&fit=crop",
    description: "High-quality bucket teeth, pins, bushings, hydraulic cylinders, and track components."
  },
  {
    name: "Engine Spares",
    image: "https://images.unsplash.com/photo-1595584298134-52e3fe339c91?q=80&w=1974&auto=format&fit=crop",
    description: "Premium engine components including pistons, liners, valves, and gasket kits."
  },
  {
    name: "Radiators & Cooling",
    image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
    description: "Advanced cooling systems, radiators, and temperature control components."
  },
  {
    name: "Hydraulic Systems",
    image: "https://images.unsplash.com/photo-1590323767270-47e05a116013?q=80&w=1974&auto=format&fit=crop",
    description: "Hydraulic pumps, motors, valves, cylinders, and hoses for various machinery."
  },
  {
    name: "Electrical Components",
    image: "https://images.unsplash.com/photo-1659179277258-1f37efdb7d7d?q=80&w=1974&auto=format&fit=crop",
    description: "Sensors, controllers, wiring harnesses, and electronic control modules."
  },
  {
    name: "Filtration Systems",
    image: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?q=80&w=2070&auto=format&fit=crop",
    description: "Air, fuel, oil, and hydraulic filters for optimal machine performance."
  }
];

const Products = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h2>
            <p className="text-gray-600">Explore our extensive range of industrial machine spares</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              className="mr-2" 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {productCategories.map((product, index) => (
            <Card 
              key={index} 
              className="min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-orange/30"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-navy">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-orange hover:bg-orange/90 text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;

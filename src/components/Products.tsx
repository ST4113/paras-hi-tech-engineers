import React from "react";

const productCategories = [
  {
    title: "Engine Spares",
    image: "https://images.unsplash.com/photo-1581090700227-1e8cfc27c29a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Engine Gaskets",
    image: "https://images.unsplash.com/photo-1631515243346-df573c408f5d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Radiators and Hydraulic Oil Cooler",
    image: "https://images.unsplash.com/photo-1617083727145-8ef34c3f3949?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "AC Spares",
    image: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Mining Truck Body Spares",
    image: "https://images.unsplash.com/photo-1613758947301-78abf354cd83?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Industrial Electrical Components",
    image: "https://images.unsplash.com/photo-1581092787766-8be01c0e7804?q=80&w=2070&auto=format&fit=crop"
  }
];

const AutoSlider: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">Our Products</h2>
        </div>
        
        <div className="animate-scroll flex w-max gap-6">
          {[...productCategories, ...productCategories].map((product, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[320px] flex-shrink-0 border-2 border-[#d3791a]/30 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#d3791a] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-[#143355]">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;

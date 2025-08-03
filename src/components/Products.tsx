import React from "react";

const productCategories = [
  {
    title: "Engine Spares",
    image: "/images/engine-spares.jpg"
  },
  {
    title: "Engine Gaskets",
    image: "/images/engine-gasket.jpg"
  },
  {
    title: "Radiators and Hydraulic Oil Cooler",
    image: "/images/radiator-cooler.jpg"
  },
  {
    title: "AC Spares",
    image: "./images/AC-spares.jpg"
  },
  {
    title: "Mining Truck Body Spares",
    image: "/images/body-parts.jpg"
  },
  {
    title: "Industrial Electrical Components",
    image: "/images/electrical.jpg"
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
              className="w-[300px] h-[350px] flex-shrink-0 border-2 border-[#d3791a]/30 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#d3791a] transition-all duration-300 bg-white"
            >
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center h-[150px] flex items-center justify-center">
                <h3 className="font-bold text-lg text-[#143355] leading-snug">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;

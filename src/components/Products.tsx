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
    image: "/images/AC-spares.jpg"
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
    <section className="py-16 bg-background overflow-hidden">
      <div className="relative w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
        </div>

        <div className="animate-scroll flex w-max gap-6 px-6">
          {[...productCategories, ...productCategories].map((product, index) => (
            <div
              key={index}
              className="w-[300px] h-[350px] flex-shrink-0 border border-border rounded-2xl overflow-hidden bg-card shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center h-[150px] flex items-center justify-center">
                <h3 className="font-bold text-lg text-foreground leading-snug">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;

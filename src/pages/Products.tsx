import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productCategories = [
  {
    title: "Engine Spares",
    description: "Durable and high-performance engine spares to keep your heavy machinery running reliably.",
    image: "/images/engine-spares.jpg"
  },
  {
    title: "Engine Gaskets",
    description: "Precision-engineered engine gaskets to ensure perfect seals and prevent leaks.",
    image: "/images/engine-gasket.jpg"
  },
  {
    title: "Radiators and Hydraulic Oil Cooler",
    description: "Reliable radiators and hydraulic oil coolers for superior cooling in all conditions.",
    image: "/images/radiator-cooler.jpg"
  },
  {
    title: "AC Spares",
    description: "High-quality AC components designed for maximum efficiency and comfort.",
    image: "/images/AC-spares.jpg"
  },
  {
    title: "Mining Truck Body Spares",
    description: "Heavy-duty body parts for mining trucks to ensure strength and reliability in tough environments.",
    image: "/images/body-parts.jpg"
  },
  {
    title: "Industrial Electrical Components",
    description: "Advanced electrical components for robust industrial automation and power needs.",
    image: "/images/electrical.jpg"
  }
];

const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#143355] text-white py-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Product Range</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Engineered for performance, durability, and reliability across industries.</p>
        </section>

        {/* Product Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {productCategories.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-lg border border-[#d3791a] hover:shadow-xl transition-shadow duration-300"
                >
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#143355] mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
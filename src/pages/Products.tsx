import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const productCategories = [
  {
    title: "Engine Spares",
    description: "Durable and high-performance engine spares to keep your heavy machinery running reliably.",
    image: "/images/engine-spares.webp"
  },
  {
    title: "Engine Gaskets",
    description: "Precision-engineered engine gaskets to ensure perfect seals and prevent leaks.",
    image: "/images/engine-gasket.webp"
  },
  {
    title: "Radiators and Hydraulic Oil Cooler",
    description: "Reliable radiators and hydraulic oil coolers for superior cooling in all conditions.",
    image: "/images/radiator-cooler.webp"
  },
  {
    title: "AC Spares",
    description: "High-quality AC components designed for maximum efficiency and comfort.",
    image: "/images/AC-spares.webp"
  },
  {
    title: "Mining Truck Body Spares",
    description: "Heavy-duty body parts for mining trucks to ensure strength and reliability in tough environments.",
    image: "/images/body-parts.webp"
  },
  {
    title: "Industrial Electrical Components",
    description: "Advanced electrical components for robust industrial automation and power needs.",
    image: "/images/electrical.webp"
  }
];

const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Industrial Machine Parts & Spares | Excavator, Engine, Radiators - Paras Hi-Tech</title>
        <meta
          name="description"
          content="Browse our complete range of industrial machine spares including excavator parts, engine spares, radiators, hydraulic coolers, AC components, and electrical parts."
        />
        <meta
          name="keywords"
          content="excavator parts, engine spares, radiators, hydraulic coolers, AC spares, mining truck parts, electrical components, industrial machine parts"
        />
        <link rel="canonical" href="https://parashitech.in/products" />
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy text-white">
          <div className="container mx-auto px-6 py-20 md:py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Machine Parts & Spares</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">Engineered for performance, durability, and reliability across industries.</p>
          </div>
        </section>

        {/* Product Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {productCategories.map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-orange/30 bg-white shadow-sm transition-all duration-300 hover:border-orange hover:shadow-lg"
                >
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const images = [
  "/images/Volvo-FMX.jpg",
  "/images/mine2.jpg",
  "/images/slagloader.jpg",
  "/images/power-plant.jpg",
  "/images/power.jpg"
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Sliding images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            width: `calc(${images.length} * 100vw)`,
            transform: `translateX(-${currentIndex * 100}vw)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[100vw] h-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4 md:px-10">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl mx-auto animate-enter">
            Quality Industrial Machine Spares <span className="text-orange">For Every Need</span>
          </h1>
          <p className="text-gray-200 md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in">
            Your trusted partner for high-quality excavator parts, engine spares, radiators, and all industrial machine components. Built to last with precision engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

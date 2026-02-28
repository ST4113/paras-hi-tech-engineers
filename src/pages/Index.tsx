import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Distributors from '@/components/Distributors';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("popupShown");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Paras Hi-Tech Engineers | Industrial Machine Parts & Spares Supplier India</title>
        <meta
          name="description"
          content="Leading supplier of high-quality excavator parts, engine spares, radiators, and industrial machinery components. Quality assured parts with fast delivery across India."
        />
        <meta
          name="keywords"
          content="industrial parts supplier India, excavator parts, engine spares, radiators, hydraulic coolers, machine parts, industrial components, Ahmedabad"
        />
        <link rel="canonical" href="https://parashitech.in/" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Distributors />
        <Products />
      </main>
      <Footer />

      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg relative w-full max-w-2xl">

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 bg-[#d3791a] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:opacity-90 transition"
              aria-label="Close"
            >
              ×
            </button>

            {/* Top Text */}
            <div className="text-center px-4 py-4 bg-[#143355]">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Let's Connect at the Exhibition!!
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#d3791a]">
                EXCON 2025
              </p>
            </div>


            {/* Popup Image */}
            <img
              src="/images/popup.webp"
              alt="Popup"
              className="w-full h-auto object-contain"
            />

            {/* Bottom Text */}
            {/* Bottom Text */}
            <div className="text-center px-4 py-4 bg-[#143355]">
              <p className="text-xl md:text-2xl font-semibold text-[#d3791a]">
                Discover What's New!
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

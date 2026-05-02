import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Distributors from '@/components/Distributors';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {

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

      
    </div>
  );
};

export default Index;

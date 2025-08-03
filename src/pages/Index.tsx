
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Distributors from '@/components/Distributors';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Distributors />
        <Products />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

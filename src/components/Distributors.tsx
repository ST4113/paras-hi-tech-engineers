
import React from 'react';
import { cn } from '@/lib/utils';

const distributors = [
  {
    name: "Caterpillar Inc.",
    logo: "https://images.unsplash.com/photo-1550029402-226115b7c579?q=80&w=1936&auto=format&fit=crop",
    description: "Official distributor of genuine Caterpillar machine parts and components."
  },
  {
    name: "Komatsu Ltd.",
    logo: "https://images.unsplash.com/photo-1518219870542-81fab33b3d6e?q=80&w=1886&auto=format&fit=crop",
    description: "Authorized dealer for Komatsu heavy machinery spare parts."
  },
  {
    name: "Cummins Inc.",
    logo: "https://images.unsplash.com/photo-1561130374-8c0c8e814a61?q=80&w=1974&auto=format&fit=crop",
    description: "Certified distributor for Cummins engine components and systems."
  },
  {
    name: "Volvo Construction",
    logo: "https://images.unsplash.com/photo-1541380798564-72abe9502451?q=80&w=1905&auto=format&fit=crop",
    description: "Partner supplier of authentic Volvo construction equipment spares."
  }
];

const Distributors = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Official Distributor</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Paras Hi Tech Engineers is proud to be an authorized distributor for leading global manufacturers of industrial machinery and components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {distributors.map((distributor, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300",
                "hover:shadow-xl border border-gray-200 hover:border-orange/30"
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={distributor.logo} 
                  alt={distributor.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-navy mb-2">{distributor.name}</h3>
                <p className="text-gray-600 text-sm">{distributor.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-medium text-gray-700">
            Our official distributor status ensures you receive genuine parts with full warranty and technical support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Distributors;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Quality Machine Parts",
    description: "Premium excavator parts, engine components, hydraulic systems and more, built to last and ensure optimal performance.",
    icon: "🔧"
  },
  {
    title: "Technical Expertise",
    description: "Our team of engineers offers specialized knowledge to help you select the right parts for your specific machinery.",
    icon: "👨‍🔧"
  },
  {
    title: "Custom Solutions",
    description: "Customized parts and components tailored to your unique industrial requirements and specifications.",
    icon: "⚙️"
  },
  {
    title: "Prompt Delivery",
    description: "Extensive inventory and efficient logistics to ensure you receive your parts when you need them.",
    icon: "🚚"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services & Development</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Paras Hi Tech Engineers, we provide comprehensive solutions for all your industrial machine spare needs, combining quality products with expert services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
                <a href="#" className="inline-flex items-center mt-4 text-orange hover:text-navy">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 md:p-10 rounded-lg shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Continuous Development & Innovation</h3>
              <p className="text-gray-600 mb-4">
                We constantly evolve our product range and services to meet the changing needs of the industrial sector. Our R&D team works tirelessly to improve product quality, durability, and performance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Implementation of advanced manufacturing techniques</li>
                <li>Rigorous quality control processes</li>
                <li>Research into sustainable and eco-friendly materials</li>
                <li>Customization options for specialized machinery</li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1970&auto=format&fit=crop" 
                alt="Industrial Innovation" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

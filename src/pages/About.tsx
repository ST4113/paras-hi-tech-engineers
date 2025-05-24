
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner in industrial machinery solutions since our inception
            </p>
          </div>
        </section>

        {/* Our Legacy Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">Our Legacy</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Paras Hi Tech Engineers has been at the forefront of industrial machinery solutions for over two decades. 
                  Founded with a vision to provide high-quality, reliable parts and components, we have grown from a small 
                  local business to a trusted name in the industry.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began with a simple mission: to ensure that industrial machinery operates at peak performance 
                  with minimal downtime. Over the years, we have built strong relationships with manufacturers, suppliers, 
                  and clients, establishing ourselves as a reliable partner in the industrial sector.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we serve a diverse clientele across various industries, from construction and mining to 
                  manufacturing and agriculture, providing them with the parts and expertise they need to keep their 
                  operations running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pictures Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">Our Facility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Manufacturing Facility" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">Manufacturing Facility</h3>
                  <p className="text-gray-600">State-of-the-art manufacturing equipment ensuring precision and quality</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Quality Control Lab" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">Quality Control Lab</h3>
                  <p className="text-gray-600">Advanced testing facilities to ensure every product meets our standards</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Warehouse" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">Warehouse</h3>
                  <p className="text-gray-600">Extensive inventory to meet immediate customer requirements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Motto Section */}
        <section className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Motto</h2>
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
                "Excellence in Every Part, Trust in Every Service"
              </blockquote>
              <p className="text-lg leading-relaxed">
                This motto reflects our unwavering commitment to delivering superior quality products and services. 
                Every component we supply and every service we provide is backed by our dedication to excellence 
                and our promise to earn and maintain your trust.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We are committed to providing only the highest quality parts and components, 
                    rigorously tested to meet industry standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Customer Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our dedicated team provides exceptional customer service, ensuring your needs 
                    are met with professionalism and efficiency.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We continuously invest in new technologies and processes to stay ahead of 
                    industry trends and provide cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can count on us for consistent, reliable supply of parts and services 
                    that keep your operations running smoothly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Environmental Responsibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We are committed to sustainable practices and environmental stewardship 
                    in all aspects of our business operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe in building long-term partnerships with our clients, 
                    working together towards mutual success and growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

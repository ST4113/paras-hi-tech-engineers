import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section
          className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 sm:py-24 md:py-32 px-4"
          style={{
            backgroundImage: 'url("/images/hero-about.png")',
          }}
        >
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              About <span className="text-orange">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              Your Trusted Partner in Industrial Machinery Solutions<br />Committed to Industrial Growth Through Quality, Consistency, and Technical Support
            </p>
          </div>
        </section>

        {/* Our Legacy Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-[#143355] mb-10">Our Legacy</h2>
              <p className="text-lg leading-relaxed mb-6">
                For over two decades, Paras Hi Tech Engineers has been a cornerstone of reliability and precision in the industrial machinery sector. From humble beginnings, our growth has been powered by our commitment to quality and customer satisfaction.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With a vision rooted in excellence, we provide top-tier parts and support to ensure your machinery performs at its best. Our relationships span global manufacturers to grassroots clients—each one backed by trust and technical integrity.
              </p>
              <p className="text-lg leading-relaxed">
                Today, our name is synonymous with industry leadership, powering sectors including construction, mining, and manufacturing.
              </p>
            </div>
          </div>
        </section>

        {/* Pictures Section - Alternating Layout */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#143355] mb-14 text-center">Our Facility</h2>
            <div className="space-y-20">
              {[{
                title: "Manufacturing Facility",
                description: "State-of-the-art manufacturing equipment ensuring precision and quality",
                image: "/placeholder.svg"
              }, {
                title: "Quality Sourcing",
                description: "Global Standards, Locally Delivered. Precision-Sourced Components for Peak Industrial Performance",
                image: "/placeholder.svg"
              }, {
                title: "Warehouse",
                description: "Extensive Inventory, Immediate Dispatch. Supporting Your Operations Without Delay.",
                image: "/placeholder.svg"
              }].map((item, idx) => (
                <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.01] transition-transform`}>
                  <img src={item.image} alt={item.title} className="w-full lg:w-1/2 h-72 object-cover" />
                  <div className="p-6 text-center lg:text-left">
                    <h3 className="text-2xl font-semibold text-[#143355] mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section - Creative Layout */}
        <section className="py-20 bg-[#f9fafb] text-[#143355] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Core Values</h2>
              <p className="text-xl font-medium mb-14 italic">
                "Driven by <span className="text-[#d3791a] font-semibold">Precision</span>. Defined by <span className="text-[#d3791a] font-semibold">Reliability</span>. Dedicated to <span className="text-[#d3791a] font-semibold">Industry</span>."
              </p>

              <p>In industries where downtime is costly and precision is critical, we stand as a reliable partner. Our extensive experience in engineering services and machinery spares allows us to deliver not just products, but complete sourcing and support solutions. We are committed to helping our clients maintain operational continuity through quality, consistency, and technical reliability.</p>
            </div>
          </div>
        </section>

        {/* Our Commitment Section - Horizontal Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#143355] mb-14 text-center">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Assurance",
                  content:
                    "We supply only genuine and precision-engineered parts, backed by strict quality checks and reliable sourcing.",
                },
                {
                  title: "Customer Service",
                  content:
                    "We provide reliable technical support and after-sales service to help clients maintain operational continuity and reduce downtime.",
                },
                {
                  title: "Innovation",
                  content:
                    "We invest in high-quality, precision-engineered spares offering long-term reliability and faster lead times.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 border-2 border-[#d3791a] rounded-2xl bg-[#f9fafb] hover:bg-white hover:border-[#143355] transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#143355] mb-4 text-center group-hover:text-[#d3791a]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed text-center">
                    {item.content}
                  </p>
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

export default About;

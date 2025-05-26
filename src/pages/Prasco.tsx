
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Award, Users, Target } from "lucide-react";

const Prasco: React.FC = () => {
  const { toast } = useToast();
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your interest in Prasco products. We'll get back to you soon!",
    });
    setInquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  const prascoProducts = [
    {
      id: 1,
      name: "Prasco Premium Engine Parts",
      category: "Engine Components",
      description: "High-performance engine parts engineered for excellence and durability.",
      features: ["Advanced Materials", "Precision Engineering", "Extended Warranty"]
    },
    {
      id: 2,
      name: "Prasco Hydraulic Solutions",
      category: "Hydraulic Systems",
      description: "Complete hydraulic solutions designed for maximum efficiency and reliability.",
      features: ["High Pressure Rating", "Corrosion Resistant", "Easy Maintenance"]
    },
    {
      id: 3,
      name: "Prasco Smart Cooling Systems",
      category: "Cooling Technology",
      description: "Innovative cooling systems with smart temperature management capabilities.",
      features: ["Smart Controls", "Energy Efficient", "IoT Enabled"]
    },
    {
      id: 4,
      name: "Prasco Elite Excavator Components",
      category: "Heavy Machinery",
      description: "Premium excavator parts built to withstand the toughest conditions.",
      features: ["Heavy Duty Construction", "Weather Resistant", "Performance Optimized"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section with Prasco Theme */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/2f1c5dc4-1bbe-4593-a735-0ba5390ad70b.png" 
              alt="Prasco Logo" 
              className="h-20 mx-auto mb-8 filter brightness-110"
            />
            <p className="text-xl mb-4 font-medium text-white/90">DELIVERING EXCELLENCE</p>
            <p className="text-lg mb-8 opacity-90 text-white/80">
              Advanced engineering solutions that set new standards in precision, quality, and innovation. 
              Experience the future of industrial excellence.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover Prasco Innovation
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <Tabs defaultValue="products" className="container mx-auto px-4 py-12">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-emerald-100 via-cyan-100 to-blue-100">
            <TabsTrigger 
              value="products" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:via-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              Prasco Products
            </TabsTrigger>
            <TabsTrigger 
              value="about" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:via-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              About Prasco
            </TabsTrigger>
            <TabsTrigger 
              value="contact" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:via-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              Contact Info
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Prasco Engineering Excellence
              </h2>
              <p className="text-lg text-gray-600">
                Discover our comprehensive range of precision-engineered solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prascoProducts.map(product => (
                <Card key={product.id} className="border-2 border-transparent hover:border-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl bg-white">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white">
                        {product.category}
                      </Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{product.name}</CardTitle>
                    <CardDescription className="text-gray-600">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-700">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white"
                      onClick={() => toast({ title: "Product Inquiry", description: "Prasco representative will contact you soon!" })}
                    >
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                About Prasco
              </h2>
              <p className="text-lg text-gray-600">Precision Engineering, Innovation Excellence</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 border-l-4 border-emerald-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the premier brand in precision engineering solutions, establishing new benchmarks 
                    for quality, innovation, and technical excellence in industrial applications.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-l-4 border-cyan-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Our Mission</h3>
                  <p className="text-gray-700">
                    Delivering precision through innovative engineering solutions that surpass expectations, 
                    while maintaining uncompromising standards of quality and reliability.
                  </p>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center bg-white shadow-md border border-emerald-200">
                    <Award className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                    <h4 className="font-bold text-lg text-gray-800">15+</h4>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </Card>
                  <Card className="p-4 text-center bg-white shadow-md border border-cyan-200">
                    <Users className="w-8 h-8 mx-auto mb-2 text-cyan-600" />
                    <h4 className="font-bold text-lg text-gray-800">500+</h4>
                    <p className="text-sm text-gray-600">Satisfied Clients</p>
                  </Card>
                  <Card className="p-4 text-center bg-white shadow-md border border-blue-200">
                    <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-bold text-lg text-gray-800">1000+</h4>
                    <p className="text-sm text-gray-600">Products Delivered</p>
                  </Card>
                  <Card className="p-4 text-center bg-white shadow-md border border-yellow-200">
                    <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                    <h4 className="font-bold text-lg text-gray-800">99%</h4>
                    <p className="text-sm text-gray-600">Quality Rating</p>
                  </Card>
                </div>

                <Card className="p-6 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-3">Why Choose Prasco?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Precision-engineered components and materials
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      State-of-the-art manufacturing processes
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Comprehensive quality assurance and support
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Innovation-driven technical solutions
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Connect with Prasco
              </h2>
              <p className="text-lg text-gray-600">Ready to experience precision engineering? Contact our Prasco specialists</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 border border-cyan-200">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Prasco Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Prasco Division Address</h4>
                        <p className="text-gray-600">
                          Prasco Wing, Paras Hi Tech Engineers<br />
                          Industrial Area, Sector 15<br />
                          Faridabad, Haryana 121007, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-600" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Prasco Direct Line</h4>
                        <p className="text-gray-600">+91 129 4567 890</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Prasco Email</h4>
                        <p className="text-gray-600">info@prasco.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-lg text-white">
                    <h4 className="font-semibold mb-2">Prasco Business Hours</h4>
                    <p className="text-sm">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="p-6 border border-cyan-200">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                    <Input
                      type="text"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                      placeholder="Your Name"
                      required
                      className="border-gray-300 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                    <Input
                      type="email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-300 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
                    <Input
                      type="tel"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                      className="border-gray-300 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                    <textarea
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      placeholder="Tell us about your Prasco product requirements..."
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold py-3"
                  >
                    Send Message to Prasco Team
                  </Button>
                </form>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Prasco;

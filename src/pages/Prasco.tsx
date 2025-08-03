import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductInquiryDialog from "@/components/ProductInquiryDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Star, Award, Users, Target, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  manufacturer: string;
  machineType: string;
  partName: string;
  model: string;
  partNumber: string;
  description: string;
  category: string;
  brand: string;
}

const Prasco: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedMachineType, setSelectedMachineType] = useState<string>("all");
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("all");
  const [selectedModel, setSelectedModel] = useState<string>("all");
  const [selectedPartName, setSelectedPartName] = useState<string>("all");
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Prasco product data
  const prascoProducts: Product[] = [
    {
      id: 101,
      name: "Prasco Premium Engine Radiator",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "PRASCO",
      machineType: "ENGINE",
      partName: "RADIATOR",
      model: "PRX-500",
      partNumber: "PRC123456",
      description: "High-performance engine radiator engineered for excellence and maximum cooling efficiency in heavy-duty applications.",
      category: "Engine Components",
      brand: "PRASCO"
    },
    {
      id: 102,
      name: "Prasco Hydraulic Pump Assembly",
      image: "https://images.unsplash.com/photo-1659179277258-1f37efdb7d7d?q=80&w=1974&auto=format&fit=crop",
      manufacturer: "PRASCO",
      machineType: "HYDRAULIC",
      partName: "PUMP",
      model: "PHX-750",
      partNumber: "PRC789012",
      description: "Complete hydraulic pump assembly designed for maximum efficiency and reliability in demanding conditions.",
      category: "Hydraulic Systems",
      brand: "PRASCO"
    },
    {
      id: 103,
      name: "Prasco Smart Cooling Condenser",
      image: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?q=80&w=2070&auto=format&fit=crop",
      manufacturer: "PRASCO",
      machineType: "COOLING",
      partName: "CONDENSER",
      model: "PSC-900",
      partNumber: "PRC345678",
      description: "Innovative cooling condenser with smart temperature management capabilities and IoT connectivity.",
      category: "Cooling Technology",
      brand: "PRASCO"
    },
    {
      id: 104,
      name: "Prasco Elite Excavator Filter",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "PRASCO",
      machineType: "EXCAVATOR",
      partName: "FILTER",
      model: "PEX-1200",
      partNumber: "PRC901234",
      description: "Premium excavator filter built to withstand the toughest conditions with advanced filtration technology.",
      category: "Heavy Machinery",
      brand: "PRASCO"
    },
    {
      id: 105,
      name: "Prasco Advanced Transmission Unit",
      image: "https://images.unsplash.com/photo-1659179277258-1f37efdb7d7d?q=80&w=1974&auto=format&fit=crop",
      manufacturer: "PRASCO",
      machineType: "TRANSMISSION",
      partName: "GEARBOX",
      model: "PAT-800",
      partNumber: "PRC567890",
      description: "Advanced transmission unit with precision engineering for optimal power transfer and durability.",
      category: "Transmission Systems",
      brand: "PRASCO"
    },
    {
      id: 106,
      name: "Prasco Pro Compressor Assembly",
      image: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?q=80&w=2070&auto=format&fit=crop",
      manufacturer: "PRASCO",
      machineType: "COMPRESSOR",
      partName: "ASSEMBLY",
      model: "PPC-600",
      partNumber: "PRC234567",
      description: "Professional-grade compressor assembly designed for continuous operation and maximum efficiency.",
      category: "Air Systems",
      brand: "PRASCO"
    }
  ];

  // Get unique values for filters based on selections
  const machineTypes = [...new Set(prascoProducts.map(product => product.machineType))];

  const manufacturers = selectedMachineType === "all"
    ? []
    : [...new Set(prascoProducts
      .filter(product => product.machineType === selectedMachineType)
      .map(product => product.manufacturer))];

  const models = selectedManufacturer === "all"
    ? []
    : [...new Set(prascoProducts
      .filter(product =>
        product.machineType === selectedMachineType &&
        product.manufacturer === selectedManufacturer)
      .map(product => product.model))];

  const partNames = selectedModel === "all"
    ? []
    : [...new Set(prascoProducts
      .filter(product =>
        product.machineType === selectedMachineType &&
        product.manufacturer === selectedManufacturer &&
        product.model === selectedModel)
      .map(product => product.partName))];

  // Filter products based on selected filters
  const filteredProducts = prascoProducts.filter(product => {
    const matchesMachineType = selectedMachineType === "all" ? true : product.machineType === selectedMachineType;
    const matchesManufacturer = selectedManufacturer === "all" ? true : product.manufacturer === selectedManufacturer;
    const matchesModel = selectedModel === "all" ? true : product.model === selectedModel;
    const matchesPartName = selectedPartName === "all" ? true : product.partName === selectedPartName;
    return matchesMachineType && matchesManufacturer && matchesModel && matchesPartName;
  });

  const clearFilters = () => {
    setSelectedMachineType("all");
    setSelectedManufacturer("all");
    setSelectedModel("all");
    setSelectedPartName("all");
  };

  const handleMachineTypeChange = (value: string) => {
    setSelectedMachineType(value);
    setSelectedManufacturer("all");
    setSelectedModel("all");
    setSelectedPartName("all");
  };

  const handleManufacturerChange = (value: string) => {
    setSelectedManufacturer(value);
    setSelectedModel("all");
    setSelectedPartName("all");
  };

  const handleModelChange = (value: string) => {
    setSelectedModel(value);
    setSelectedPartName("all");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your interest in Prasco products. We'll get back to you soon!",
    });
    setInquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleViewProduct = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const handleInquireNow = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleInquirySubmit = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your inquiry. We will get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      <Navbar />

      {/* Hero Section with Prasco Theme */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <img
              src="/images/prasco.png"
              alt="Prasco Logo"
              className="h-20 mx-auto mb-8 filter brightness-110"
            />
            <p className="text-xl mb-4 font-medium text-white/90">DELIVERING EXCELLENCE</p>
            <p className="text-lg mb-8 opacity-90 text-white/80">
              Advanced engineering solutions that set new standards in precision, quality, and innovation.
              Experience the future of industrial excellence.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Products Section */}
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Prasco Engineering Excellence
              </h2>
              <p className="text-lg text-gray-600">
                Discover our comprehensive range of precision-engineered solutions
              </p>
            </div>

            {/* Product Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-300 hover:shadow-xl transition-all duration-300 hover:border-cyan-400">
                <img 
                  src="/images/AC-spares.jpg" 
                  alt="AC Parts" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    AC Parts
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    High-quality AC components designed for maximum efficiency and comfort in heavy-duty applications.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-300 hover:shadow-xl transition-all duration-300 hover:border-cyan-400">
                <img 
                  src="/images/radiator.png" 
                  alt="Radiator" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Radiator
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reliable radiators and hydraulic oil coolers for superior cooling performance in all operating conditions.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-300 hover:shadow-xl transition-all duration-300 hover:border-cyan-400">
                <img 
                  src="/images/body-parts.jpg" 
                  alt="Mining Truck Parts" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Mining Truck Parts
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Heavy-duty body parts for mining trucks ensuring strength and reliability in tough mining environments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="space-y-8">
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
                    <h4 className="font-bold text-lg text-gray-800">20+</h4>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </Card>
                  <Card className="p-4 text-center bg-white shadow-md border border-cyan-200">
                    <Users className="w-8 h-8 mx-auto mb-2 text-cyan-600" />
                    <h4 className="font-bold text-lg text-gray-800">100%</h4>
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
          </section>

          
        </div>
      </main>

      {selectedProduct && (
        <ProductInquiryDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={selectedProduct}
          onSubmit={handleInquirySubmit}
        />
      )}
      <Footer />
    </div>
  );
};

export default Prasco;
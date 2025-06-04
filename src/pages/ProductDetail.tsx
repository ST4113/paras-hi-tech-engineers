
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductInquiryDialog from "@/components/ProductInquiryDialog";
import PrascoProductInquiryDialog from "@/components/PrascoProductInquiryDialog";

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

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample product data (same as in Products page)
  const productsData: Product[] = [
    {
      id: 1,
      name: "VOLVO EC 480 Radiator",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "VOLVO",
      machineType: "EXCAVATOR",
      partName: "RADIATOR",
      model: "EC 480",
      partNumber: "456789",
      description: "High-quality radiator for VOLVO EC 480 excavator with enhanced cooling capacity.",
      category: "Cooling Systems",
      brand: "VOLVO"
    },
    {
      id: 2,
      name: "VOLVO FMX 460 Condenser",
      image: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?q=80&w=2070&auto=format&fit=crop",
      manufacturer: "VOLVO",
      machineType: "TIPPER",
      partName: "CONDENSER",
      model: "FMX 460",
      partNumber: "7812345",
      description: "Premium condenser for VOLVO FMX 460 tipper with superior cooling performance.",
      category: "Air Conditioning",
      brand: "VOLVO"
    },
    {
      id: 3,
      name: "KOMATSU D 155 Radiator",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "KOMATSU",
      machineType: "DOZER",
      partName: "RADIATOR",
      model: "D 155",
      partNumber: "8765432190",
      description: "Heavy-duty radiator for KOMATSU D 155 dozer designed for extreme conditions.",
      category: "Cooling Systems",
      brand: "KOMATSU"
    },
    {
      id: 4,
      name: "HITACHI ZAXIS 470 Radiator",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "HITACHI",
      machineType: "EXCAVATOR",
      partName: "RADIATOR",
      model: "ZAXIS 470",
      partNumber: "2345678",
      description: "Advanced radiator for HITACHI ZAXIS 470 excavator with optimal cooling efficiency.",
      category: "Cooling Systems",
      brand: "HITACHI"
    },
    {
      id: 5,
      name: "CATERPILLAR 120 K2 Radiator",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "CATERPILLAR",
      machineType: "MOTOR GRADER",
      partName: "RADIATOR",
      model: "120 K2",
      partNumber: "A9876599",
      description: "Durable radiator for CATERPILLAR 120 K2 motor grader with enhanced performance.",
      category: "Cooling Systems",
      brand: "CATERPILLAR"
    },
    {
      id: 6,
      name: "VOLVO FMX 460 Blower Motor",
      image: "https://images.unsplash.com/photo-1659179277258-1f37efdb7d7d?q=80&w=1974&auto=format&fit=crop",
      manufacturer: "VOLVO",
      machineType: "TIPPER",
      partName: "BLOWER MOTOR",
      model: "FMX 460",
      partNumber: "2345678",
      description: "High-performance blower motor for VOLVO FMX 460 tipper with reliable operation.",
      category: "Air Conditioning",
      brand: "VOLVO"
    },
    {
      id: 7,
      name: "VOLVO FMX 460 Evaporator",
      image: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?q=80&w=2070&auto=format&fit=crop",
      manufacturer: "VOLVO",
      machineType: "TIPPER",
      partName: "EVAPORATOR",
      model: "FMX 460",
      partNumber: "23458768",
      description: "Premium evaporator for VOLVO FMX 460 tipper with superior cooling performance.",
      category: "Air Conditioning",
      brand: "VOLVO"
    },
    {
      id: 8,
      name: "VOLVO FMX 440 Condenser",
      image: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?q=80&w=2070&auto=format&fit=crop",
      manufacturer: "VOLVO",
      machineType: "TIPPER",
      partName: "CONDENSER",
      model: "FMX 440",
      partNumber: "7812345",
      description: "High-quality condenser for VOLVO FMX 440 tipper with excellent cooling capacity.",
      category: "Air Conditioning",
      brand: "VOLVO"
    },
    {
      id: 9,
      name: "VOLVO FMX 460 Radiator",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "VOLVO",
      machineType: "TIPPER",
      partName: "RADIATOR",
      model: "FMX 460",
      partNumber: "21649619",
      description: "Durable radiator for VOLVO FMX 460 tipper with enhanced cooling performance.",
      category: "Cooling Systems",
      brand: "VOLVO"
    },
    {
      id: 10,
      name: "VOLVO FMX 440 Radiator",
      image: "https://images.unsplash.com/photo-1670261604206-3bdc7d542334?q=80&w=1965&auto=format&fit=crop",
      manufacturer: "VOLVO",
      machineType: "TIPPER",
      partName: "RADIATOR",
      model: "FMX 440",
      partNumber: "21649619",
      description: "Reliable radiator for VOLVO FMX 440 tipper with superior cooling technology.",
      category: "Cooling Systems",
      brand: "VOLVO"
    }
  ];

  // Add Prasco products data
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

  // Combine all products
  const allProducts = [...productsData, ...prascoProducts];
  const product = allProducts.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/products')} variant="outline">
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isPrascoProduct = product.brand === 'PRASCO';

  const handleInquireClick = () => {
    setIsDialogOpen(true);
  };

  const handleFormSubmit = () => {
    setIsDialogOpen(false);
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your inquiry. We will get back to you soon!",
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${isPrascoProduct ? 'bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50' : ''}`}>
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate(isPrascoProduct ? '/prasco' : '/products')} 
          variant="outline" 
          className={isPrascoProduct ? 
            "mb-6 border-emerald-500 text-emerald-600 hover:bg-emerald-50" : 
            "mb-6 border-navy text-navy hover:bg-navy hover:text-white"
          }
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {isPrascoProduct ? 'Prasco' : 'Products'}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className={`relative pb-[75%] bg-gray-100 rounded-lg overflow-hidden ${isPrascoProduct ? 'border-2 border-cyan-200' : ''}`}>
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${isPrascoProduct ? 
                'bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent' : 
                'text-navy'
              }`}>
                {product.name}
              </h1>
              <p className="text-lg text-gray-600">{product.description}</p>
            </div>

            <Card className={isPrascoProduct ? 'bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 border-2 border-cyan-200' : ''}>
              <CardHeader>
                <h2 className={`text-xl font-semibold ${isPrascoProduct ? 
                  'bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent' : 
                  'text-navy'
                }`}>
                  Product Specifications
                </h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium text-gray-700">Manufacturer:</span>
                    <p className="text-gray-900">{product.manufacturer}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Machine Type:</span>
                    <p className="text-gray-900">{product.machineType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Model:</span>
                    <p className="text-gray-900">{product.model}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Part Name:</span>
                    <p className="text-gray-900">{product.partName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Part Number:</span>
                    <p className="text-gray-900">{product.partNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Category:</span>
                    <p className="text-gray-900">{product.category}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Brand:</span>
                    <p className="text-gray-900">{product.brand}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleInquireClick}
              className={isPrascoProduct ? 
                "w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white text-lg py-6 font-semibold" :
                "w-full bg-orange hover:bg-orange/90 text-white text-lg py-6"
              }
            >
              Inquire Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {isPrascoProduct ? (
        <PrascoProductInquiryDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={product}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <ProductInquiryDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={product}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default ProductDetail;

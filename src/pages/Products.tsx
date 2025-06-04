import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("all");
  const [selectedMachineType, setSelectedMachineType] = useState<string>("all");
  const [selectedPartName, setSelectedPartName] = useState<string>("all");

  // Sample product data based on the provided table
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

  // Get unique values for filters
  const manufacturers = [...new Set(productsData.map(product => product.manufacturer))];
  const machineTypes = [...new Set(productsData.map(product => product.machineType))];
  const partNames = [...new Set(productsData.map(product => product.partName))];

  // Filter products based on selected filters
  const filteredProducts = productsData.filter(product => {
    const matchesManufacturer = selectedManufacturer === "all" ? true : product.manufacturer === selectedManufacturer;
    const matchesMachineType = selectedMachineType === "all" ? true : product.machineType === selectedMachineType;
    const matchesPartName = selectedPartName === "all" ? true : product.partName === selectedPartName;
    return matchesManufacturer && matchesMachineType && matchesPartName;
  });

  const handleViewClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const clearFilters = () => {
    setSelectedManufacturer("all");
    setSelectedMachineType("all");
    setSelectedPartName("all");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-navy">Our Products</h1>
        
        {/* Filters */}
        <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-navy">Filter Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Manufacturer</label>
              <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Manufacturer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Manufacturers</SelectItem>
                  {manufacturers.map(manufacturer => (
                    <SelectItem key={manufacturer} value={manufacturer}>{manufacturer}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Machine Type</label>
              <Select value={selectedMachineType} onValueChange={setSelectedMachineType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Machine Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Machine Types</SelectItem>
                  {machineTypes.map(machineType => (
                    <SelectItem key={machineType} value={machineType}>{machineType}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Part Name</label>
              <Select value={selectedPartName} onValueChange={setSelectedPartName}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Part Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Part Names</SelectItem>
                  {partNames.map(partName => (
                    <SelectItem key={partName} value={partName}>{partName}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Product Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={() => handleViewClick(product)} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products match your selected filters.</p>
              <Button onClick={clearFilters} variant="link" className="text-orange mt-2">
                Clear filters to see all products
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

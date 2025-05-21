
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductInquiryDialog from "@/components/ProductInquiryDialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  brand: string;
  description: string;
}

const Products: React.FC = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample product data (in a real app, this would come from an API)
  const productsData: Product[] = [
    {
      id: 1,
      name: "Excavator Bucket Tooth",
      image: "/placeholder.svg",
      category: "Excavator Parts",
      brand: "Komastu",
      description: "Heavy-duty excavator bucket teeth designed for extreme digging conditions."
    },
    {
      id: 2,
      name: "Engine Piston Assembly",
      image: "/placeholder.svg",
      category: "Engine Spares",
      brand: "Caterpillar",
      description: "High-performance piston assembly for industrial engines."
    },
    {
      id: 3,
      name: "Industrial Radiator",
      image: "/placeholder.svg",
      category: "Cooling Systems",
      brand: "Hitachi",
      description: "Heavy-duty radiator for industrial machinery with enhanced cooling capacity."
    },
    {
      id: 4,
      name: "Hydraulic Pump",
      image: "/placeholder.svg",
      category: "Hydraulic Systems",
      brand: "Komastu",
      description: "High-pressure hydraulic pump for construction equipment."
    },
    {
      id: 5,
      name: "Track Chain Assembly",
      image: "/placeholder.svg",
      category: "Excavator Parts",
      brand: "Caterpillar",
      description: "Durable track chain assembly for excavators and bulldozers."
    },
    {
      id: 6,
      name: "Oil Filter",
      image: "/placeholder.svg",
      category: "Engine Spares",
      brand: "Hitachi",
      description: "Premium quality oil filter for heavy machinery engines."
    }
  ];

  // Get unique categories and brands for filters
  const categories = [...new Set(productsData.map(product => product.category))];
  const brands = [...new Set(productsData.map(product => product.brand))];

  // Filter products based on selected filters
  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === "all" ? true : product.category === selectedCategory;
    const matchesBrand = selectedBrand === "all" ? true : product.brand === selectedBrand;
    return matchesCategory && matchesBrand;
  });

  const handleInquireClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleFormSubmit = () => {
    setIsDialogOpen(false);
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your inquiry. We will get back to you soon!",
    });
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-navy">Our Products</h1>
        
        {/* Filters */}
        <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-navy">Filter Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Brand</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
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
                onInquire={() => handleInquireClick(product)} 
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

      {selectedProduct && (
        <ProductInquiryDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={selectedProduct}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Products;

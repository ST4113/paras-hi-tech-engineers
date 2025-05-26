
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
}

interface ProductCardProps {
  product: Product;
  onInquire: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onInquire }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative pb-[60%] bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold line-clamp-2 text-navy">{product.name}</h3>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600"><span className="font-medium">Manufacturer:</span> {product.manufacturer}</p>
          <p className="text-sm text-gray-600"><span className="font-medium">Machine Type:</span> {product.machineType}</p>
          <p className="text-sm text-gray-600"><span className="font-medium">Model:</span> {product.model}</p>
          <p className="text-sm text-gray-600"><span className="font-medium">Part Name:</span> {product.partName}</p>
          <p className="text-sm text-gray-600"><span className="font-medium">Part Number:</span> {product.partNumber}</p>
        </div>
        <p className="text-sm text-gray-700 line-clamp-3">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onInquire} 
          className="w-full bg-orange hover:bg-orange/90 text-white"
        >
          Inquire Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

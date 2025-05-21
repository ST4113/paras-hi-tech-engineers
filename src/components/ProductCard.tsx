
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  brand: string;
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
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold line-clamp-2 text-navy">{product.name}</h3>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-sm text-gray-500 mb-2">Brand: {product.brand}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
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


import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  brand: string;
  description: string;
}

interface ProductInquiryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onSubmit: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  company: z.string().min(2, { message: "Company is required" }),
  mobile: z.string().min(10, { message: "Valid mobile number is required" }),
  email: z.string().email({ message: "Valid email is required" }).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const ProductInquiryDialog: React.FC<ProductInquiryDialogProps> = ({ 
  isOpen, 
  onClose, 
  product, 
  onSubmit 
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      mobile: "",
      email: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", values);
    console.log("Product inquiry for:", product.name);
    
    // Reset form
    form.reset();
    
    // Close dialog and show success message
    onSubmit();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Product Inquiry</DialogTitle>
          <DialogDescription>
            Fill out this form to inquire about <span className="font-medium">{product.name}</span>
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your mobile number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-orange hover:bg-orange/90 text-white">
                Send Inquiry
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductInquiryDialog;

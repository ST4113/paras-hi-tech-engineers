
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

interface PrascoProductInquiryDialogProps {
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

const PrascoProductInquiryDialog: React.FC<PrascoProductInquiryDialogProps> = ({ 
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
    console.log("Prasco form submitted:", values);
    console.log("Product inquiry for:", product.name);
    
    form.reset();
    onSubmit();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 border-2 border-cyan-200">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Prasco Product Inquiry
          </DialogTitle>
          <DialogDescription className="text-gray-700">
            Fill out this form to inquire about <span className="font-medium bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">{product.name}</span>
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      {...field} 
                      className="border-cyan-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
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
                  <FormLabel className="text-gray-700 font-medium">Company</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your Company" 
                      {...field} 
                      className="border-cyan-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
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
                  <FormLabel className="text-gray-700 font-medium">Mobile Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your mobile number" 
                      {...field} 
                      className="border-cyan-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
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
                  <FormLabel className="text-gray-700 font-medium">Email (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your.email@example.com" 
                      {...field} 
                      className="border-cyan-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold"
              >
                Send Inquiry
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PrascoProductInquiryDialog;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Thank you for subscribing!', {
        description: 'You will now receive our latest product updates and news.',
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-8 text-gray-100">
            Subscribe to our newsletter to receive the latest product updates, industry news, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-200 border-white/30 focus:border-orange"
            />
            <Button 
              type="submit" 
              className="bg-orange hover:bg-orange/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-sm text-gray-200 mt-4">
            We respect your privacy. Your information will not be shared with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

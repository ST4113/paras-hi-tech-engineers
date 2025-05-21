
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Prasco', href: '/prasco' },
  { label: 'News and Updates', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/6870fcf3-af78-41ac-9465-7e4e5084904b.png" 
                alt="Paras Hi Tech Engineers Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors relative group",
                  item.href === '/' 
                    ? "text-navy" 
                    : "text-gray-700 hover:text-orange"
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="ml-2 bg-orange hover:bg-orange/90 text-white">
              Request Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-navy focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-base font-medium block transition-colors",
                    item.href === '/' 
                      ? "text-navy" 
                      : "text-gray-700 hover:text-orange"
                  )}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mx-3 bg-orange hover:bg-orange/90 text-white">
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Prasco', href: '/prasco' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-background/80 supports-[backdrop-filter]:bg-background/80 backdrop-blur border-b border-border shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/images/paras-logo.webp"
                alt="Paras Hi Tech Engineers Logo"
                className="h-16 w-auto drop-shadow-sm"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-base font-semibold text-foreground/80 hover:text-primary transition-colors group",
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
          <div className="md:hidden py-2 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-1 rounded-xl border border-border bg-popover p-2 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-colors text-foreground/80 hover:text-primary hover:bg-muted"
                  )}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;

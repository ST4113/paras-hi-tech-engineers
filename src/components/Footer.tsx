import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Paras Hi Tech Engineers</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for high-quality industrial machine spares and components.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-orange"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:info@parashitech.com" 
                className="text-white hover:text-orange"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+911234567890" 
                className="text-white hover:text-orange"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-orange transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-orange transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange transition-colors">About Us</a></li>
              <li><a href="/prasco" className="text-gray-300 hover:text-orange transition-colors">Prasco</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-orange transition-colors">News & Updates</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange transition-colors">Excavator Parts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange transition-colors">Engine Spares</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange transition-colors">Radiators</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange transition-colors">Hydraulic Systems</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange transition-colors">Electrical Components</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange transition-colors">Filtration Systems</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-orange" />
                <p className="text-gray-300">
                  123 Industrial Area, Sector 5<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-orange" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-orange">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-orange" />
                <a href="mailto:info@parashitech.com" className="text-gray-300 hover:text-orange">
                  info@parashitech.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Paras Hi Tech Engineers. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-orange text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange text-sm">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

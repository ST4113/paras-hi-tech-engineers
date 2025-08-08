import React from 'react';
import { Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import WhatsappIcon from "@/components/ui/WhatsappIcon";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center md:justify-items-start">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-6">Paras Hi Tech Engineers</h3>
            <p className="text-gray-300 mb-6 max-w-sm">
              Your trusted partner for high-quality industrial machine spares and components.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-orange transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-orange transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange transition-colors">About Us</a></li>
              <li><a href="/prasco" className="text-gray-300 hover:text-orange transition-colors">Prasco</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>


          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-orange" />
                <p className="text-gray-300 text-left">
                  55, Ashwamegh Industrial Estate, Sarkhej-Bavla Rd, Changodar, Gujarat 382210
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="mr-3 flex-shrink-0 text-orange" />
                <div className="flex flex-col">
                  <a href="tel:+919712442299" className="text-gray-300 hover:text-orange">
                    +91 9712442299
                  </a>
                  <a href="tel:+919276767601" className="text-gray-300 hover:text-orange">
                    +91 9276767601
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <WhatsappIcon className="w-5 h-5 mr-3 flex-shrink-0 text-[#F37021]" />
                <a
                  href="https://wa.me/919712442299?text=Hi%20Paras%20Hi%20Tech%20Engineers%2C%20I'm%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F37021]"
                >
                  +91 9712442299
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="mr-3 flex-shrink-0 text-orange" />
                <a href="mailto:info@parashitech.in" className="text-gray-300 hover:text-orange">
                  info@parashitech.in
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Linkedin size={18} className="mr-3 flex-shrink-0 text-orange" />
                <a
                  href="https://www.linkedin.com/company/paras-hi-tech-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange"
                >
                  Paras Hi Tech Engineers
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Laravel Development',
    'Filament Admin Panels',
    'SaaS Applications',
    'API Development',
    'Database Design',
    'System Integration'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">FilamentDev</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Specialized Laravel Filament developer creating powerful admin panels and SaaS applications. 
                Transform your business processes with modern, scalable solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:hello@filamentdev.com"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 FilamentDev. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
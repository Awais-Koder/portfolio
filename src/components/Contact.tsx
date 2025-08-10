import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with a powerful Laravel Filament solution? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-4 mb-12 lg:mb-0">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-blue-100">hello@filamentdev.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-blue-100">+92 300 1234567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-blue-100">Karachi, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Tell me about your project requirements, timeline, and budget..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>

            {/* Additional CTA */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I typically respond to all inquiries within 24 hours. Let's schedule a call to discuss 
                your Laravel Filament project in detail and provide you with a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@filamentdev.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  <Mail className="mr-2" size={20} />
                  Email Me Directly
                </a>
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-600 text-orange-600 dark:text-orange-400 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium rounded-lg transition-colors duration-300"
                >
                  <Phone className="mr-2" size={20} />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { ArrowRight, Code, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 dark:text-white leading-tight">
                Laravel Filament Developer
                <span className="block text-blue-600 dark:text-blue-400">
                  for SaaS & Custom Dashboards
                </span>
              </h1>
              
              <p className="mt-6 text-xl text-gray-900 dark:text-gray-300 leading-relaxed">
                I build fast, scalable, and beautiful admin panels using Laravel & Filament. 
                Transform your business processes with powerful dashboard solutions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Hire Me
                  <ArrowRight className="ml-2" size={20} />
                </a>
                
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-400 text-base font-medium rounded-lg text-orange-600 dark:text-orange-400 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300"
                >
                  View Portfolio
                </a>
              </div>

              <div className="mt-12 flex items-center space-x-8">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Code className="mr-2 text-blue-600" size={16} />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Database className="mr-2 text-green-500" size={16} />
                  <span>50+ Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative animate-fade-in-up animation-delay-300">
              {/* Dashboard Mockup */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Admin Dashboard</h3>
                    <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Live</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Users</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">2,847</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">Revenue</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">$24,8k</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Orders</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">1,247</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Recent Activity</span>
                      <span className="text-blue-600 dark:text-blue-400">View All</span>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">U</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">New user registered</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
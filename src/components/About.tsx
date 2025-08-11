import React from 'react';
import { CheckCircle, User, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  const expertise = [
    'Laravel Filament Custom Dashboards',
    'Multi-tenant SaaS Applications',
    'API Integrations & Development',
    'PDF Reporting Tools & Analytics',
    'Subscription & Billing Systems',
    'Database Design & Optimization'
  ];

  const stats = [
    { icon: Briefcase, value: '10+', label: 'Projects Completed' },
    { icon: User, value: '5+', label: 'Happy Clients' },
    { icon: Award, value: '2+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Laravel Filament developer with over 2 years of experience building 
                robust admin panels and SaaS applications. I specialize in creating intuitive, 
                scalable solutions that streamline business operations and drive growth.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                My expertise lies in transforming complex business requirements into elegant, 
                user-friendly dashboard interfaces using Laravel's powerful ecosystem and 
                Filament's modern admin panel framework.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-2">
                      <stat.icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="animate-fade-in-up animation-delay-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Expertise
              </h3>
              
              <div className="space-y-4">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Why Choose Me?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I deliver clean, maintainable code with a focus on performance and user experience. 
                  Every project is crafted with attention to detail and built to scale with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
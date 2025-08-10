import React from 'react';
import { Check, Zap, TrendingUp, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Zap,
      name: "Starter",
      description: "Perfect for small feature additions and bug fixes",
      price: "Starting from $500",
      pkrPrice: "PKR 140,000",
      features: [
        "Small feature additions",
        "Bug fixes and optimizations",
        "Basic UI improvements",
        "Code refactoring",
        "Documentation updates",
        "1 week delivery"
      ],
      color: "blue"
    },
    {
      icon: TrendingUp,
      name: "Growth",
      description: "Ideal for new modules and API integrations",
      price: "Starting from $1,500",
      pkrPrice: "PKR 420,000",
      features: [
        "New module development",
        "API integrations",
        "Database design & optimization",
        "Custom reporting features",
        "User management systems",
        "2-4 weeks delivery",
        "3 months support"
      ],
      color: "orange",
      popular: true
    },
    {
      icon: Rocket,
      name: "Scale",
      description: "Complete dashboard build and ongoing maintenance",
      price: "Starting from $5,000",
      pkrPrice: "PKR 1,400,000",
      features: [
        "Full dashboard development",
        "Multi-tenant architecture",
        "Advanced analytics",
        "Payment integration",
        "Security implementation",
        "Performance optimization",
        "6+ weeks delivery",
        "6 months maintenance",
        "Priority support"
      ],
      color: "green"
    }
  ];

  const getColorClasses = (color: string, popular: boolean = false) => {
    const colors = {
      blue: {
        bg: popular ? 'bg-blue-600' : 'bg-white dark:bg-gray-800',
        border: 'border-blue-200 dark:border-blue-700',
        icon: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
        price: 'text-blue-600 dark:text-blue-400',
        button: 'bg-blue-600 hover:bg-blue-700 text-white'
      },
      orange: {
        bg: popular ? 'bg-orange-600' : 'bg-white dark:bg-gray-800',
        border: 'border-orange-200 dark:border-orange-700',
        icon: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
        price: 'text-orange-600 dark:text-orange-400',
        button: 'bg-orange-600 hover:bg-orange-700 text-white'
      },
      green: {
        bg: popular ? 'bg-green-600' : 'bg-white dark:bg-gray-800',
        border: 'border-green-200 dark:border-green-700',
        icon: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
        price: 'text-green-600 dark:text-green-400',
        button: 'bg-green-600 hover:bg-green-700 text-white'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your Laravel Filament development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color, service.popular);
            
            return (
              <div
                key={index}
                className={`relative ${colors.bg} ${colors.border} border-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-400 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-8 ${service.popular ? 'text-white' : ''}`}>
                  <div className={`w-12 h-12 ${service.popular ? 'bg-white/20' : colors.icon} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon size={24} className={service.popular ? 'text-white' : ''} />
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${service.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {service.name}
                  </h3>
                  
                  <p className={`mb-6 ${service.popular ? 'text-orange-100' : 'text-gray-600 dark:text-gray-300'}`}>
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <div className={`text-3xl font-bold ${service.popular ? 'text-white' : colors.price}`}>
                      {service.price}
                    </div>
                    <div className={`text-sm ${service.popular ? 'text-orange-100' : 'text-gray-500 dark:text-gray-400'}`}>
                      {service.pkrPrice}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check 
                          size={16} 
                          className={`${service.popular ? 'text-white' : 'text-green-500'} flex-shrink-0 mt-0.5`} 
                        />
                        <span className={`text-sm ${service.popular ? 'text-orange-100' : 'text-gray-600 dark:text-gray-300'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full ${service.popular ? 'bg-white text-orange-600 hover:bg-orange-50' : colors.button} font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a custom package 
              that perfectly fits your business needs and budget.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
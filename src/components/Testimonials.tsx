import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "MarketPlace Pro",
      role: "CEO",
      content: "The dashboard completely transformed our business operations. We can now make data-driven decisions instantly and our operational efficiency increased by 60%. The attention to detail and user experience is outstanding.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Working with this developer was a game-changer for our HR department. The HRMS system automated all our manual processes and improved employee satisfaction significantly. Highly recommended for any Laravel project.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Project Manager",
      content: "The project management SaaS platform exceeded all our expectations. The multi-tenant architecture is solid, and the real-time collaboration features have revolutionized how our teams work together.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      id: 4,
      name: "David Kumar",
      company: "FinanceFlow Ltd",
      role: "Finance Director",
      content: "The financial reporting platform saved us countless hours and ensured 100% compliance with regulations. The automated reports and audit trails give us complete confidence in our financial processes.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-6">
                <Quote className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={32} />
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
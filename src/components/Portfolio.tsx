import React, { useState } from 'react';
import { ExternalLink, X, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  techStack: string[];
  features: string[];
  testimonial?: {
    text: string;
    author: string;
    company: string;
    rating: number;
  };
  image: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      description: "Multi-vendor marketplace admin panel with real-time analytics and inventory management.",
      problem: "Client needed comprehensive oversight of their multi-vendor platform with real-time sales tracking.",
      solution: "Built a custom Filament dashboard with advanced filtering, charts, and automated reporting.",
      result: "Increased operational efficiency by 60% and reduced manual reporting time by 80%.",
      techStack: ["Laravel", "Filament", "MySQL", "Chart.js", "Redis"],
      features: [
        "Real-time sales analytics",
        "Vendor performance tracking",
        "Automated inventory alerts",
        "Custom PDF reports",
        "Role-based access control"
      ],
      testimonial: {
        text: "The dashboard transformed our business operations. We can now make data-driven decisions instantly.",
        author: "Sarah Johnson",
        company: "MarketPlace Pro",
        rating: 5
      },
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
    },
    {
      id: 2,
      title: "HR Management System",
      description: "Complete HRMS with employee onboarding, payroll, and performance tracking.",
      problem: "Manual HR processes were time-consuming and error-prone for a growing company.",
      solution: "Developed a comprehensive HRMS with automated workflows and integrated payroll system.",
      result: "Reduced HR processing time by 70% and improved employee satisfaction scores by 40%.",
      techStack: ["Laravel", "Filament", "PostgreSQL", "Queue Jobs", "Notifications"],
      features: [
        "Employee lifecycle management",
        "Automated payroll calculations",
        "Performance review system",
        "Leave management",
        "Document management"
      ],
      testimonial: {
        text: "This system revolutionized our HR department. Everything is now automated and efficient.",
        author: "Michael Chen",
        company: "TechCorp Solutions",
        rating: 5
      },
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
    },
    {
      id: 3,
      title: "Project Management SaaS",
      description: "Multi-tenant project management platform with team collaboration features.",
      problem: "Need for a scalable project management solution serving multiple organizations.",
      solution: "Built a multi-tenant SaaS application with advanced project tracking and team collaboration.",
      result: "Launched with 500+ users in first month, achieving 95% user satisfaction rate.",
      techStack: ["Laravel", "Filament", "Multi-tenancy", "WebSockets", "S3"],
      features: [
        "Multi-tenant architecture",
        "Real-time collaboration",
        "Task automation",
        "Time tracking",
        "Client portals"
      ],
      testimonial: {
        text: "The platform exceeded our expectations. Our productivity increased dramatically.",
        author: "Emily Rodriguez",
        company: "Creative Agency",
        rating: 5
      },
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 4,
      title: "Financial Reporting Platform",
      description: "Advanced financial dashboard with automated reporting and compliance features.",
      problem: "Complex financial reporting requirements with strict compliance needs.",
      solution: "Created a sophisticated financial platform with automated calculations and audit trails.",
      result: "Reduced reporting time by 85% and achieved 100% compliance with regulatory requirements.",
      techStack: ["Laravel", "Filament", "MySQL", "PDF Generation", "API Integration"],
      features: [
        "Automated financial reports",
        "Compliance monitoring",
        "Audit trail system",
        "Tax calculations",
        "Bank integrations"
      ],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio & Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how I've helped businesses transform their operations with powerful Laravel Filament solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Problem</h4>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.problem}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Result</h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">{selectedProject.result}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Client Testimonial</h4>
                    <div className="flex mb-3">
                      {[...Array(selectedProject.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                      "{selectedProject.testimonial.text}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {selectedProject.testimonial.author}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {selectedProject.testimonial.company}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
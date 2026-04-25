import { useState } from "react";
import type { PortfolioItem } from "../types";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Corporate Website",
      category: "Website",
      description:
        "Modern corporate website with premium design and seamless user experience",
      image: "/portfolio-1.png",
      tags: ["React", "Tailwind", "SEO"],
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Secure mobile banking application with intuitive interface",
      image: "/portfolio-2.png",
      tags: ["React Native", "Firebase", "Security"],
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      category: "AI Solution",
      description:
        "Intelligent dashboard powered by machine learning algorithms",
      image: "/portfolio-3.png",
      tags: ["Python", "TensorFlow", "Data Viz"],
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Website",
      description: "Full-featured online store with payment integration",
      image: "/portfolio-1.png",
      tags: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Health and fitness app with real-time tracking",
      image: "/portfolio-2.png",
      tags: ["Flutter", "HealthKit", "Cloud"],
    },
    {
      id: 6,
      title: "Brand Identity Package",
      category: "Graphic Design",
      description: "Complete branding solution with logo and visual guidelines",
      image:
        "https://www.freepik.com/premium-vector/holiday-summer-travel-tourism",
      tags: ["Illustrator", "Photoshop", "Branding"],
    },
  ];

  const categories = [
    "All",
    "Website",
    "Mobile App",
    "AI Solution",
    "Graphic Design",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-deep-black pt-24">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-charcoal-200 to-deep-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our showcase of innovative projects and success stories
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black"
                    : "glass-card text-gray-300 hover:text-gold-400 hover:border-gold-400/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="glass-card overflow-hidden group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-deep-black px-4 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gold-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-deep-black to-charcoal-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can bring your vision to life
            </p>
            <a href="/contact" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

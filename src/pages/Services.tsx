import { useState } from "react";
import servicesData from "../data/services.json";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const services = servicesData;

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-deep-black text-white min-h-screen">
      {/* HEADER */}
      <section className="pt-20 pb-10 text-center">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Scalable digital solutions built for modern businesses.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-16 z-40 bg-deep-black/90 backdrop-blur border-b border-white/10">
        <div className="section-container py-4 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeCategory === category
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black"
                  : "glass-card text-gray-300 hover:text-gold-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="section-container py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = (Icons as any)[service.icon] || Icons.Box;

            // pick the first image from the array
            const coverImage = service.images?.[0] || "";

            return (
              <div
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                {/* IMAGE */}
                {coverImage && (
                  <img
                    src={coverImage}
                    alt={service.name}
                    className="w-full object-contain"
                  />
                )}

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* TEXT */}
                <div className="p-6 bg-charcoal-200/80 backdrop-blur-sm flex flex-col justify-between flex-1 relative z-10">
                  <div>
                    <div className="flex items-center mb-3">
                      <Icon className="w-7 h-7 text-gold-400 mr-2" />
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {service.name}
                      </h2>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">
                      {service.shortDescription}
                    </p>

                    <p className="text-gold-400 text-sm mb-4">
                      {service.pricing}
                    </p>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-block text-center px-4 py-2 rounded-full bg-gold-400 text-deep-black text-sm font-semibold hover:bg-gold-300 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;

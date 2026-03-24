import { useState } from "react";
import servicesData from "../data/services.json";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const services = servicesData;

  const categories = ["All", ...new Set(services.map(s => s.category))];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-deep-black text-white">

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredServices.map((service) => {
            const Icon = (Icons as any)[service.icon] || Icons.Box;

            return (
              <div
                key={service.id}
                className="glass-card p-6 flex flex-col justify-between hover:scale-[1.02] transition"
              >
                {/* TOP */}
                <div>
                  <Icon className="w-8 h-8 text-gold-400 mb-4" />

                  <h2 className="text-xl font-bold mb-2">
                    {service.name}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4">
                    {service.fullDescription.slice(0, 100)}...
                  </p>
                </div>

                {/* CTA */}
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-4 inline-block text-center px-4 py-2 rounded-full bg-gold-400 text-deep-black text-sm font-semibold hover:bg-gold-300 transition"
                >
                  Learn More
                </Link>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
};

export default Services;
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../data/services.json";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // find the service by slug
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-white p-10">Service not found</div>;
  }

  const Icon = (Icons as any)[service.icon] || Icons.Box;

  const handleContactClick = () => {
    navigate(
      `/contact?service=${encodeURIComponent(service.name)}#contact-section`,
    );
  };

  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in your ${service.name} service.`;
    const phone = "254717770536";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="bg-deep-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-charcoal-200 to-deep-black">
        <div className="section-container max-w-5xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-gold-400 mb-6 text-sm"
          >
            <Icons.ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>

          {/* SERVICE TITLE & CATEGORY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Icon className="w-12 h-12 text-gold-400" />
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold">
                  {service.name}
                </h1>
                <p className="text-gold-400">{service.category}</p>
              </div>
            </div>

            {/* FULL DESCRIPTION */}
            <p className="text-gray-300 max-w-2xl text-lg">
              {service.fullDescription}
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleContactClick}
                className="px-6 py-3 rounded-full bg-gold-400 text-deep-black font-semibold hover:bg-gold-300 transition"
              >
                Get This Service
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 rounded-full border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-deep-black transition"
              >
                WhatsApp Us
              </button>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          {service.images?.[0] && (
            <motion.img
              src={service.images[0]}
              alt={service.name}
              className="w-full h-80 md:h-[400px] object-cover rounded-xl shadow-xl mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-container max-w-5xl py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (
            <div key={i} className="flex gap-3 items-start">
              <Icons.Check className="w-5 h-5 text-gold-400 mt-1" />
              <span className="text-gray-300">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-container max-w-5xl py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Benefits</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.benefits.map((b, i) => (
            <div key={i} className="flex gap-3 items-start">
              <Icons.Check className="w-5 h-5 text-gold-400 mt-1" />
              <span className="text-gray-300">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-container max-w-5xl py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "They transformed our entire digital presence.",
            "Professional, ",
          ].map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              “{t}”
            </motion.div>
          ))}

          {/* IMAGE GALLERY */}
          {service.images && service.images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {service.images.slice(1).map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`${service.name} ${i + 2}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

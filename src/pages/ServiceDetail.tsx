import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../data/services.json";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-white p-10">Service not found</div>;
  }

  const Icon = (Icons as any)[service.icon] || Icons.Box;



const handleContactClick = () => {
  navigate(`/contact?service=${encodeURIComponent(service.name)}#contact-section`);
};

  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in your ${service.name} service.`;
    const phone = "254717770536";

window.open(
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
  "_blank",
  "noopener,noreferrer"
);

    console.log("WhatsApp Click:", service.name);
  };

  return (
    <div className="bg-deep-black text-white">

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-charcoal-200 to-deep-black">
        <div className="section-container max-w-5xl">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-gold-400 mb-6 text-sm"
          >
            <Icons.ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>

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

            <p className="text-gray-300 max-w-2xl text-lg">
              {service.fullDescription}
            </p>

            {/* CTA */}
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
            "Professional, fast, and reliable service.",
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
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-container max-w-5xl py-10 space-y-10">

        {/* FEATURES */}
        <div>
          <h2 className="text-xl font-bold mb-4">Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <div key={i} className="flex gap-3">
                <Icons.Check className="w-5 h-5 text-gold-400 mt-1" />
                <span className="text-gray-300">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div>
          <h2 className="text-xl font-bold mb-4">Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex gap-3">
                <Icons.Check className="w-5 h-5 text-gold-400 mt-1" />
                <span className="text-gray-300">{b}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};

export default ServiceDetail;
import { Link } from "react-router-dom";
import servicesData from "../data/services.json";
import * as Icons from "lucide-react";
import SocialProof from "../components/SocialProof";
//import heroImg from "../assets/hero-tech.png";
import DynamicHero from "../components/Hero";
import DashboardShowcase from "../components/DashboardShowcase";

type Service = {
  id: number;
  name: string;
  slug: string;
  category: string;
  icon: string;
  shortDescription: string;
  pricing: string;
  images?: string[];
};

const Home = () => {
  const services = servicesData as Service[];

  // ✅ still fine — but think later about tagging "featured"
  const featuredServices = services.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      {/* <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-charcoal-200 via-deep-black to-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"> */}
      {/* LEFT: TEXT */}
      {/* <div>
            <div className="inline-flex items-center glass-card px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-gold-400 mr-2"></span>
              <span className="text-sm text-gray-300">
                Registered in Kenya • Trusted Agency
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Smart & Secure{" "}
              <span className="gradient-text">Tech Solutions</span>
            </h1>

            <p className="text-gray-300 mb-8">
              We design and build modern systems, websites, and AI solutions
              that help businesses grow and scale.
            </p>

            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div> */}

      <DynamicHero />

      {/* RIGHT: IMAGE */}
      {/* <div className="relative">
            <img
              src={heroImg}
              alt="Technology Solutions"
              className="rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section> */}

      {/* HERO */}
      {/* <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-charcoal-200 via-deep-black to-deep-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-400/5"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-16">
          <div className="inline-flex items-center glass-card px-6 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-gold-400 mr-3"></span>
            <span className="text-sm text-gray-300">
              Registered in Kenya • World-Class Solutions
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="gradient-text">Smart</span> •{" "}
            <span className="gradient-text">Secure</span> Solutions
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Premium technology agency delivering modern solutions across web,
            AI, and automation.
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section> */}

      {/* SERVICES */}
      <section className="bg-deep-black py-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modern solutions designed to grow your business. Click any card to
              explore more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
            {featuredServices.map((service) => {
              // pick the first image from the array safely
              const coverImage = service.images?.[0];

              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col h-full overflow-hidden rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  {/* IMAGE */}
                  {coverImage && (
                    <div className="w-full h-48 bg-black flex items-center justify-center overflow-hidden">
                      <img
                        src={coverImage}
                        alt={service.name}
                        className="h-full object-contain"
                      />
                    </div>
                  )}

                  {/* TEXT */}
                  <div className="p-6 bg-charcoal-200/80 backdrop-blur-sm flex flex-col flex-1 justify-between">
                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    <p className="text-gold-400 text-sm mb-4">
                      {service.pricing}
                    </p>
                    <Link
                      to={`/services#${service.slug}`}
                      className="inline-flex items-center text-sm text-gray-300 hover:text-gold-400"
                    >
                      Learn more
                      <Icons.ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All {services.length} Services
            </Link>
          </div>
        </div>
      </section>

      {/* DASHBOARD SHOWCASE */}
      <DashboardShowcase />

      {/* SOCIAL PROOF */}
      <SocialProof />

      {/* CONTACT CTA */}
      <section className="bg-gradient-to-b from-deep-black to-charcoal-200 py-2">
        <div className="section-container text-center">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Ready to Start?
            </h2>

            <p className="text-gray-300 mb-8">
              Let’s build something that actually delivers results.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="tel:+254717770536"
                className="glass-card p-6 flex items-center gap-3"
              >
                <Icons.Phone className="w-5 h-5 text-gold-400" />
                <span className="text-white">0717770536</span>
              </a>

              <a
                href="mailto:brivemarctechnologies@gmail.com"
                className="glass-card p-6 flex items-center gap-3"
              >
                <Icons.Mail className="w-5 h-5 text-gold-400" />
                <span className="text-white">
                  brivemarctechnologies@gmail.com
                </span>
              </a>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

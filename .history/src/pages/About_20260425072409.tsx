import { useNavigate } from "react-router-dom";
import foundersData from "../data/founders.json";
import { motion } from "framer-motion";

type FounderPreview = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const About = () => {
  const navigate = useNavigate();

  // ✅ Only extract what this page needs (important for scalability)
  const founders: FounderPreview[] = foundersData.map((f: any) => ({
    id: f.id,
    name: f.name,
    role: f.role,
    bio: f.bio,
    image: f.image,
  }));

  return (
    <div className="min-h-screen bg-deep-black pt-24">
      {/* ===== HEADER ===== */}
      <section className="bg-gradient-to-b from-charcoal-200 to-deep-black py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            About <span className="gradient-text">Brivemarc Technologies</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your trusted technology partner delivering world-class solutions
            across Kenya and beyond
          </p>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Our Story
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg text-white/90">
              Brivemarc Technologies started with a simple frustration - most
              businesses were either overpaying for software or getting systems
              that could not scale beyond basic use.
            </p>

            <p>
              We built this company to close that gap. Not as another agency,
              but as an engineering-first team focused on building systems that
              actually survive real usage - traffic spikes, security threats,
              and business growth pressure.
            </p>

            <p>
              From backend architecture to IoT automation and mobile systems,
              every solution we design is built with one principle:{" "}
              <span className="text-gold-400 font-medium">
                if it cannot scale or secure itself, it is not finished.
              </span>
            </p>

            <p>
              Today, we work across web systems, enterprise software, mobile
              applications, and connected devices - building infrastructure that
              powers real operations, not just presentations.
            </p>
            <p>
              This is not a traditional agency structure. We operate as a small,
              engineering-heavy unit where every system is designed with
              ownership, performance, and long-term maintainability in mind.
            </p>

            <p>
              The goal is simple: build systems that behave like infrastructure,
              not prototypes - stable under load, secure by design, and built to
              evolve with the business.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BUILD ===== */}
      <section className="section-container mt-12">
        <h2 className="text-2xl font-serif text-white mb-6 text-center">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Scalable Web Systems",
              desc: "Production-grade platforms built for real traffic and business logic.",
            },
            {
              title: "Enterprise Software",
              desc: "Internal systems, dashboards, automation tools, and APIs.",
            },
            {
              title: "Mobile & IoT Systems",
              desc: "Android apps and connected devices powered by real-time data.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ENGINEERING FOCUS AREAS ===== */}
      <section className="section-container mt-16">
        <h2 className="text-2xl font-serif text-white text-center mb-8">
          Engineering Focus Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "High-performance backend systems",
            "IoT + embedded integrations",
            "Scalable mobile architectures",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MISSION / VISION / VALUES ===== */}
      <section className="py-16 bg-gradient-to-b from-deep-black to-charcoal-200">
        <div className="section-container grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="glass-card p-8 text-center">
            <svg
              className="w-10 h-10 text-gold-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l4 8-4 4-4-4 4-8zM2 12l8 4 4-4-4-4-8 4zM12 22l-4-8 4-4 4 4-4 8zM22 12l-8-4-4 4 4 4 8-4z" />
            </svg>
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Our Mission
            </h3>
            <p className="text-gray-400">
              Empowering businesses with smart, secure technology solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 text-center">
            <svg
              className="w-10 h-10 text-gold-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Our Vision
            </h3>
            <p className="text-gray-400">
              To become Kenya’s leading technology partner.
            </p>
          </div>

          {/* Values */}
          <div className="glass-card p-8 text-center">
            <svg
              className="w-10 h-10 text-gold-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Our Values
            </h3>
            <p className="text-gray-400">
              Integrity, innovation, and customer-first execution.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOUNDERS ===== */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Meet Our <span className="gradient-text">Founding Team</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A team driven by innovation, engineering, and execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder) => (
            <motion.div
              key={founder.id}
              onClick={() => navigate(`/founders/${founder.id}`)}
              className="glass-card p-6 text-center cursor-pointer group transition hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: founder.id * 0.1 }}
            >
              <div className="relative mb-6 mx-auto w-40 h-40">
                <img
                  src={founder.image}
                  alt={founder.name}
                  loading="lazy"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-gold-400/30"></div>
              </div>

              <h4 className="text-xl font-serif font-bold text-white mb-2">
                {founder.name}
              </h4>

              <p className="text-sm text-gold-400 mb-3 font-medium">
                {founder.role}
              </p>

              <p className="text-sm text-gray-400 mb-4">{founder.bio}</p>

              <span className="text-sm text-gold-400 group-hover:underline">
                View More →
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TRUST ===== */}
      <section className="py-16 bg-gradient-to-b from-charcoal-200 to-deep-black">
        <div className="section-container">
          <div className="glass-card p-8 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2l6 6-6 6-6-6 6-6z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Registered in Kenya</p>
                <p className="text-gray-400 text-sm">Verified business</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 3h14v14H3z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Expert Team</p>
                <p className="text-gray-400 text-sm">Skilled engineers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 2L3 14h7v8l10-12h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Fast Delivery</p>
                <p className="text-gray-400 text-sm">Efficient execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

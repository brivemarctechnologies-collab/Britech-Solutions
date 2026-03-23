import { useParams, useNavigate } from "react-router-dom";
import type { Founder } from "../types";

const founders: (Founder & { story: string; video?: string })[] = [
  {
    id: 1,
    name: "Brighton Wandera",
    role: "Android Dev, AI Engineer & Frontend Developer",
    bio: "AI-focused developer building intelligent, high-performance user interfaces and android applications.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    story:
      "Brighton specializes in building intelligent systems that merge AI with real-world applications. His work focuses on performance, scalability, and user-centric design.",
    //video: "/videos/brighton.mp4", // optional
  },
  {
    id: 2,
    name: "Muola Veronica",
    role: "Design Director & Cybersecurity Lead",
    bio: "Oversees design, cybersecurity, and customer experience strategy.",
    image: "/images/Vee.jpeg",
    story:
      "Veronica leads the design vision and ensures that every product is both secure and intuitive. She blends creativity with technical precision.",
    //video: "/videos/vee.mp4",
  },
  {
    id: 3,
    name: "Marcos Solomon",
    role: "Cybersecurity Expert & Systems Architect",
    bio: "Leads system architecture and visual brand through graphic design.",
    image: "/images/Marcos.jpeg",
    story:
      "Marcos designs scalable systems and ensures robust security across all platforms, while also contributing to visual branding.",
    //video: "/videos/marcos.mp4",
  },
  {
    id: 4,
    name: "Evans Kariuki",
    role: "Backend Engineer & IoT Specialist",
    bio: "Builds scalable backend systems and connected IoT solutions.",
    image: "/images/VansKE.jpeg",
    story:
      "Evans focuses on backend infrastructure and IoT integrations, enabling seamless communication between systems and devices.",
    video: "/videos/evans.mp4",
  },
];

const FounderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const founder = founders.find((f) => f.id === Number(id));

  if (!founder) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Founder not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black pt-24">
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gold-400 hover:underline"
        >
          ← Back
        </button>
      </div>

      {/* Profile Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-gold-400/30"></div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-serif font-bold text-white mb-3">
              {founder.name}
            </h1>

            <p className="text-gold-400 font-medium mb-4">
              {founder.role}
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {founder.bio}
            </p>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-serif text-white mb-4">
                Story
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {founder.story}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎥 Video Section (Conditional) */}
      {founder.video && (
        <section className="section-container">
          <div className="glass-card p-6">
            <h2 className="text-2xl font-serif text-white mb-6 text-center">
              Meet {founder.name}
            </h2>

            <div className="w-full aspect-video rounded-xl overflow-hidden">
              <video
                src={founder.video}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FounderDetails;
import { useParams, useNavigate } from "react-router-dom";
import foundersData from "../data/founders.json";
import { useEffect, useRef, useState } from "react";

type FounderDetailsType = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  story: string;
  video?: string;
  thumbnail?: string;
};

const FounderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const founders = (foundersData as unknown as FounderDetailsType[]).map(
    (f) => ({
      ...f,
      id: Number(f.id),
    }),
  );
  const founder = founders.find((f) => f.id === Number(id));

  // ===== STATE =====
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // ===== INTERSECTION OBSERVER (lazy video trigger) =====
  useEffect(() => {
    if (!videoRef.current || !founder?.video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [founder?.video]);

  if (!founder) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Founder not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black pt-24">
      {/* ===== BACK BUTTON ===== */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gold-400 hover:underline transition"
        >
          ← Back
        </button>
      </div>

      {/* ===== PROFILE SECTION ===== */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE WITH BLUR-UP EFFECT */}
          <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 overflow-hidden rounded-full">
            <img
              src={founder.image}
              alt={founder.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition duration-700 ${
                imageLoaded ? "blur-0 scale-100" : "blur-md scale-110"
              }`}
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-gold-400/30"></div>
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-4xl font-serif font-bold text-white mb-3">
              {founder.name}
            </h1>

            <p className="text-gold-400 font-medium mb-4">{founder.role}</p>

            <p className="text-gray-300 mb-6 leading-relaxed">{founder.bio}</p>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-serif text-white mb-4">Story</h2>
              <p className="text-gray-400 leading-relaxed">{founder.story}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESPONSIBILITIES ===== */}
      <div className="glass-card p-6 mt-6">
        <h3 className="text-xl text-white mb-3">Key Responsibilities</h3>
        <ul className="space-y-2">
          {founder.responsibilities.map((item, i) => (
            <li key={i} className="text-gray-400">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ===== ACHIEVEMENTS ===== */}
      <div className="mt-6">
        <h3 className="text-xl text-white mb-3">Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {founder.expertise.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ===== VIDEO SECTION ===== */}
      {founder.video && (
        <section className="section-container" ref={videoRef}>
          <div className="glass-card p-6">
            <h2 className="text-2xl font-serif text-white mb-6 text-center">
              Meet {founder.name}
            </h2>

            <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-black/40">
              {/* STAGE 1: BEFORE LOAD */}
              {!loadVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* STAGE 2: THUMBNAIL */}
              {loadVideo && !playVideo && (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setPlayVideo(true)}
                >
                  <img
                    src={founder.thumbnail || founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                  {/* play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center shadow-lg transform transition group-hover:scale-110 group-hover:shadow-gold-400/40">
                      <svg
                        className="w-8 h-8 text-deep-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 3: VIDEO */}
              {loadVideo && playVideo && (
                <video
                  src={founder.video}
                  controls
                  autoPlay
                  preload="none"
                  className="w-full h-full object-cover animate-fade-in"
                />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FounderDetails;

import { useEffect, useRef } from "react";
//import heroImg from "../assets/hero-tech.png";

const DynamicHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10,10,10,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        ctx.fillStyle = "#d4af37";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        particles.forEach((other, j) => {
          if (i === j) return;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(212,175,55,${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-charcoal-200 via-deep-black to-deep-black overflow-hidden">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-400/10 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center glass-card px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-gold-400 mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300">
              Registered in Kenya • Trusted Agency
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Smart & Secure <span className="gradient-text">Tech Solutions</span>
          </h1>

          <p className="text-gray-300 mb-8">
            We design and build modern systems, websites, and AI solutions that
            help businesses grow and scale.
          </p>

          <div className="flex gap-4">
            <a href="/contact" className="btn-primary">
              Get a Quote
            </a>
            <a href="/services" className="btn-secondary">
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative animate-slide-up">
          <img
            src={
              "https://www.optimizepress.com/wp-content/uploads/2023/11/elements-of-a-landing-page-hero.jpeg"
            }
            alt="Technology Solutions"
            className="rounded-xl shadow-2xl border border-white/12 max-h-[90vh] w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;

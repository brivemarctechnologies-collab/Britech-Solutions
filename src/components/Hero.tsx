// import { useEffect, useRef } from 'react';

// const Hero = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         if (!ctx) return;

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const particles: Array<{
//             x: number;
//             y: number;
//             size: number;
//             speedX: number;
//             speedY: number;
//         }> = [];

//         // Create particles
//         for (let i = 0; i < 100; i++) {
//             particles.push({
//                 x: Math.random() * canvas.width,
//                 y: Math.random() * canvas.height,
//                 size: Math.random() * 2 + 1,
//                 speedX: (Math.random() - 0.5) * 0.5,
//                 speedY: (Math.random() - 0.5) * 0.5,
//             });
//         }

//         const animate = () => {
//             ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
//             ctx.fillRect(0, 0, canvas.width, canvas.height);

//             // Draw and update particles
//             particles.forEach((particle, index) => {
//                 ctx.fillStyle = '#d4af37';
//                 ctx.beginPath();
//                 ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//                 ctx.fill();

//                 particle.x += particle.speedX;
//                 particle.y += particle.speedY;

//                 // Wrap around edges
//                 if (particle.x > canvas.width) particle.x = 0;
//                 if (particle.x < 0) particle.x = canvas.width;
//                 if (particle.y > canvas.height) particle.y = 0;
//                 if (particle.y < 0) particle.y = canvas.height;

//                 // Draw connections
//                 particles.forEach((otherParticle, otherIndex) => {
//                     if (index === otherIndex) return;

//                     const dx = particle.x - otherParticle.x;
//                     const dy = particle.y - otherParticle.y;
//                     const distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < 150) {
//                         ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 * (1 - distance / 150)})`;
//                         ctx.lineWidth = 0.5;
//                         ctx.beginPath();
//                         ctx.moveTo(particle.x, particle.y);
//                         ctx.lineTo(otherParticle.x, otherParticle.y);
//                         ctx.stroke();
//                     }
//                 });
//             });

//             requestAnimationFrame(animate);
//         };

//         animate();

//         const handleResize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//             {/* Animated Canvas Background */}
//             <canvas
//                 ref={canvasRef}
//                 className="absolute inset-0 z-0"
//             />

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-deep-black/50 via-transparent to-deep-black z-0"></div>

//             {/* Animated Wave Elements */}
//             <div className="animated-bg">
//                 <div className="wave" style={{ animationDelay: '0s' }}></div>
//                 <div className="wave" style={{ animationDelay: '-10s', opacity: 0.5 }}></div>
//             </div>

//             {/* Hero Content */}
//             <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//                 <div className="animate-fade-in">
//                     {/* Badge */}
//                     <div className="inline-flex items-center glass-card px-6 py-2 mb-8">
//                         <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse mr-3"></span>
//                         <span className="text-sm text-gray-300">Registered in Kenya • World-Class Solutions</span>
//                     </div>

//                     {/* Main Headline */}
//                     <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//                         <span className="gradient-text text-shadow-gold">Smart</span> •{' '}
//                         <span className="gradient-text text-shadow-gold">Secure</span> Solutions
//                     </h1>

//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-8">
//                         Get Your Job Done in <span className="text-gold-400">Minutes</span>
//                     </h2>

//                     {/* Subheadline */}
//                     <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//                         Premium technology agency delivering cutting-edge web development, AI automation,
//                         digital marketing, and innovative solutions that drive results
//                     </p>

//                     {/* CTA Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                         <a href="#contact" className="btn-primary">
//                             Get a Quote
//                         </a>
//                         <a href="#services" className="btn-secondary">
//                             Explore Services
//                         </a>
//                     </div>

//                     {/* Stats */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
//                         {[
//                             { value: '50+', label: 'Projects Delivered' },
//                             { value: '4', label: 'Expert Founders' },
//                             { value: '24/7', label: 'Support' },
//                             { value: '100%', label: 'Client Satisfaction' },
//                         ].map((stat, index) => (
//                             <div key={index} className="glass-card p-6 rounded-xl">
//                                 <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
//                                 <div className="text-sm text-gray-400">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//                 <a href="#about" className="flex flex-col items-center text-gold-400 hover:text-gold-300 transition-colors">
//                     <span className="text-sm mb-2">Scroll to explore</span>
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                     </svg>
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default Hero;

// import type { Service } from '../types';

// const Services = () => {
//     const services: Service[] = [
//         {
//             id: 1,
//             title: 'Website Development',
//             description: 'Custom, responsive websites built with modern technologies',
//             icon: '🌐',
//             benefit: 'Establish your online presence with stunning, high-performance websites',
//         },
//         {
//             id: 2,
//             title: 'System Development',
//             description: 'Robust, scalable systems tailored to your business needs',
//             icon: '⚙️',
//             benefit: 'Streamline operations with powerful custom software solutions',
//         },
//         {
//             id: 3,
//             title: 'AI Automation',
//             description: 'Intelligent automation to boost productivity and efficiency',
//             icon: '🤖',
//             benefit: 'Save time and reduce costs with cutting-edge AI technology',
//         },
//         {
//             id: 4,
//             title: 'Digital Marketing',
//             description: 'Strategic campaigns that drive engagement and growth',
//             icon: '📱',
//             benefit: 'Reach your target audience and maximize your ROI',
//         },
//         {
//             id: 5,
//             title: 'SEO Optimization',
//             description: 'Improve your search rankings and organic visibility',
//             icon: '🔍',
//             benefit: 'Make your customers find you on Google with proven SEO strategies',
//         },
//         {
//             id: 6,
//             title: 'App Development',
//             description: 'Native and cross-platform mobile applications',
//             icon: '📲',
//             benefit: 'Engage users on-the-go with intuitive mobile experiences',
//         },
//         {
//             id: 7,
//             title: 'Graphic Design',
//             description: 'Professional branding and visual identity services',
//             icon: '🎨',
//             benefit: 'Stand out with captivating designs that tell your brand story',
//         },
//     ];

//     return (
//         <section id="services" className="relative bg-deep-black">
//             <div className="section-container">
//                 {/* Section Header */}
//                 <div className="text-center mb-16 animate-fade-in">
//                     <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
//                         Our <span className="gradient-text">Services</span>
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
//                     <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                         Comprehensive technology solutions designed to elevate your business and drive measurable results
//                     </p>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div
//                             key={service.id}
//                             className="glass-card-hover p-8 relative overflow-hidden group"
//                             style={{ animationDelay: `${index * 0.1}s` }}
//                         >
//                             {/* Icon */}
//                             <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                                 {service.icon}
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
//                                 {service.title}
//                             </h3>

//                             {/* Description */}
//                             <p className="text-gray-400 mb-4 leading-relaxed">
//                                 {service.description}
//                             </p>

//                             {/* Benefit */}
//                             <div className="border-t border-white/10 pt-4 mt-4">
//                                 <p className="text-sm text-gold-400 font-medium">
//                                     ✨ {service.benefit}
//                                 </p>
//                             </div>

//                             {/* Decorative corner */}
//                             <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-500/10 to-transparent transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* CTA Section */}
//                 <div className="mt-16 text-center glass-card p-12 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-gold-400/5"></div>
//                     <div className="relative z-10">
//                         <h3 className="text-3xl font-serif font-bold text-white mb-4">
//                             Ready to Transform Your Business?
//                         </h3>
//                         <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                             Let's discuss how our services can help you achieve your goals. Get a free consultation today.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <a href="#contact" className="btn-primary">
//                                 Get Started Now
//                             </a>
//                             <a href="#portfolio" className="btn-secondary">
//                                 View Our Work
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Background Decoration */}
//             <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-500/5 rounded-full filter blur-3xl"></div>
//             <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-3xl"></div>
//         </section>
//     );
// };

// export default Services;

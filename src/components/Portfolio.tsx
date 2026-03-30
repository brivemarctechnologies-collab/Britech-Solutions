// import { useState } from 'react';
// import type { PortfolioItem } from '../types';

// const Portfolio = () => {
//     const [activeFilter, setActiveFilter] = useState<string>('All');

//     const portfolioItems: PortfolioItem[] = [
//         {
//             id: 1,
//             title: 'Corporate Website',
//             category: 'Website',
//             description: 'Modern corporate website with premium design and seamless user experience',
//             image: '/portfolio-1.png',
//             tags: ['React', 'Tailwind', 'SEO'],
//         },
//         {
//             id: 2,
//             title: 'Mobile Banking App',
//             category: 'Mobile App',
//             description: 'Secure mobile banking application with intuitive interface',
//             image: '/portfolio-2.png',
//             tags: ['React Native', 'Firebase', 'Security'],
//         },
//         {
//             id: 3,
//             title: 'AI Analytics Dashboard',
//             category: 'AI Solution',
//             description: 'Intelligent dashboard powered by machine learning algorithms',
//             image: '/portfolio-3.png',
//             tags: ['Python', 'TensorFlow', 'Data Viz'],
//         },
//         {
//             id: 4,
//             title: 'E-Commerce Platform',
//             category: 'Website',
//             description: 'Full-featured online store with payment integration',
//             image: '/portfolio-1.png',
//             tags: ['Next.js', 'Stripe', 'MongoDB'],
//         },
//         {
//             id: 5,
//             title: 'Fitness Tracking App',
//             category: 'Mobile App',
//             description: 'Health and fitness app with real-time tracking',
//             image: '/portfolio-2.png',
//             tags: ['Flutter', 'HealthKit', 'Cloud'],
//         },
//         {
//             id: 6,
//             title: 'Brand Identity Package',
//             category: 'Graphic Design',
//             description: 'Complete branding solution with logo and visual guidelines',
//             image: '/portfolio-3.png',
//             tags: ['Illustrator', 'Photoshop', 'Branding'],
//         },
//     ];

//     const categories = ['All', 'Website', 'Mobile App', 'AI Solution', 'Graphic Design'];

//     const filteredItems = activeFilter === 'All'
//         ? portfolioItems
//         : portfolioItems.filter(item => item.category === activeFilter);

//     return (
//         <section id="portfolio" className="relative bg-gradient-to-b from-deep-black via-charcoal-200 to-deep-black">
//             <div className="section-container">
//                 {/* Section Header */}
//                 <div className="text-center mb-16 animate-fade-in">
//                     <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
//                         Our <span className="gradient-text">Portfolio</span>
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
//                     <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                         Explore our showcase of innovative projects and success stories
//                     </p>
//                 </div>

//                 {/* Filter Buttons */}
//                 <div className="flex flex-wrap justify-center gap-4 mb-12">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setActiveFilter(category)}
//                             className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category
//                                     ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black'
//                                     : 'glass-card text-gray-300 hover:text-gold-400 hover:border-gold-400/50'
//                                 }`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Portfolio Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {filteredItems.map((item, index) => (
//                         <div
//                             key={item.id}
//                             className="glass-card-hover overflow-hidden group"
//                             style={{ animationDelay: `${index * 0.1}s` }}
//                         >
//                             {/* Image */}
//                             <div className="relative h-64 overflow-hidden">
//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                                 {/* Category Badge */}
//                                 <div className="absolute top-4 right-4 bg-gold-500 text-deep-black px-4 py-1 rounded-full text-sm font-medium">
//                                     {item.category}
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className="p-6">
//                                 <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-gray-400 mb-4 text-sm leading-relaxed">
//                                     {item.description}
//                                 </p>

//                                 {/* Tags */}
//                                 <div className="flex flex-wrap gap-2">
//                                     {item.tags.map((tag, tagIndex) => (
//                                         <span
//                                             key={tagIndex}
//                                             className="text-xs px-3 py-1 rounded-full bg-white/5 text-gold-400 border border-white/10"
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* View Details Overlay */}
//                             <div className="absolute inset-0 bg-deep-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <button className="btn-primary">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="mt-16 text-center">
//                     <p className="text-gray-300 mb-6">
//                         Interested in seeing more of our work?
//                     </p>
//                     <a href="#contact" className="btn-secondary">
//                         Discuss Your Project
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Portfolio;

// import { useState, type FormEvent } from 'react';
// import type { ContactFormData } from '../types';

// const Contact = () => {
//     const [formData, setFormData] = useState<ContactFormData>({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate form submission (replace with actual API call)
//         setTimeout(() => {
//             setIsSubmitting(false);
//             setSubmitStatus('success');
//             setFormData({ name: '', email: '', message: '' });

//             // Reset success message after 5 seconds
//             setTimeout(() => setSubmitStatus('idle'), 5000);
//         }, 1500);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     return (
//         <section id="contact" className="relative bg-deep-black">
//             <div className="section-container">
//                 {/* Section Header */}
//                 <div className="text-center mb-16 animate-fade-in">
//                     <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
//                         Get in <span className="gradient-text">Touch</span>
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
//                     <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                         Ready to start your project? Let's discuss how we can help bring your vision to life
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                     {/* Contact Information */}
//                     <div className="space-y-8">
//                         <div className="glass-card p-8">
//                             <h3 className="text-2xl font-serif font-bold text-white mb-6">
//                                 Contact Information
//                             </h3>

//                             {/* Phone */}
//                             <div className="flex items-start gap-4 mb-6">
//                                 <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
//                                     <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-400 mb-1">Phone</p>
//                                     <a href="tel:+254717770536" className="text-lg text-white hover:text-gold-400 transition-colors">
//                                         0717770536
//                                     </a>
//                                 </div>
//                             </div>

//                             {/* Email */}
//                             <div className="flex items-start gap-4 mb-6">
//                                 <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
//                                     <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-400 mb-1">Email</p>
//                                     <a href="mailto:info@brivemarc.co.ke" className="text-lg text-white hover:text-gold-400 transition-colors">
//                                         info@brivemarc.co.ke
//                                     </a>
//                                 </div>
//                             </div>

//                             {/* Location */}
//                             <div className="flex items-start gap-4">
//                                 <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
//                                     <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-400 mb-1">Location</p>
//                                     <p className="text-lg text-white">Nairobi, Kenya</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Social Links */}
//                         <div className="glass-card p-8">
//                             <h3 className="text-xl font-serif font-bold text-white mb-4">
//                                 Follow Us
//                             </h3>
//                             <p className="text-gray-400 mb-6">@Brivemarc-technologies</p>
//                             <div className="flex gap-4">
//                                 {['YouTube', 'LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((platform) => (
//                                     <a
//                                         key={platform}
//                                         href="#"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-400/50 transition-all"
//                                         title={platform}
//                                     >
//                                         <span className="text-gold-400">●</span>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Business Hours */}
//                         <div className="glass-card p-8">
//                             <h3 className="text-xl font-serif font-bold text-white mb-4">
//                                 Business Hours
//                             </h3>
//                             <div className="space-y-3 text-gray-300">
//                                 <div className="flex justify-between">
//                                     <span>Monday - Friday</span>
//                                     <span className="text-gold-400">8:00 AM - 6:00 PM</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Saturday</span>
//                                     <span className="text-gold-400">9:00 AM - 4:00 PM</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Sunday</span>
//                                     <span className="text-gray-500">Closed</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <div className="glass-card p-8">
//                         <h3 className="text-2xl font-serif font-bold text-white mb-6">
//                             Send Us a Message
//                         </h3>

//                         {submitStatus === 'success' && (
//                             <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
//                                 ✓ Thank you! Your message has been sent successfully.
//                             </div>
//                         )}

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             {/* Name */}
//                             <div>
//                                 <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                                     Your Name *
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     required
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
//                                     placeholder="John Doe"
//                                 />
//                             </div>

//                             {/* Email */}
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                                     Your Email *
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     required
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
//                                     placeholder="john@example.com"
//                                 />
//                             </div>

//                             {/* Message */}
//                             <div>
//                                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                                     Your Message *
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     required
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                     rows={6}
//                                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
//                                     placeholder="Tell us about your project..."
//                                 />
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                                 {isSubmitting ? 'Sending...' : 'Send Message'}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* Background Decoration */}
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl"></div>
//         </section>
//     );
// };

// export default Contact;

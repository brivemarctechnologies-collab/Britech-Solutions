import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });

    const [phone, setPhone] = useState('');
    const [serviceInterest, setServiceInterest] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // EmailJS configuration 
    const EMAILJS_SERVICE_ID = 'service_3b8rnny'; 
    const EMAILJS_TEMPLATE_ID = 'template_zuxl8ib'; 
    const EMAILJS_PUBLIC_KEY = 'AwFwrYaU1PBLCw97A'; 

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: phone || "Not provided",
        service_interest: serviceInterest || "Not specified",
        message: formData.message,
        to_email: 'brivemarctechnologies@gmail.com',
      },
      EMAILJS_PUBLIC_KEY
    );

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setPhone('');
    setServiceInterest('');

  } catch (error) {
    console.error('EmailJS error:', error);
    setIsSubmitting(false);
    setSubmitStatus('error');
  }
};

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        if (e.target.name === 'phone') {
            setPhone(e.target.value);
        } else if (e.target.name === 'serviceInterest') {
            setServiceInterest(e.target.value);
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <div className="min-h-screen bg-deep-black pt-24">
            {/* Page Header */}
            <section className="bg-gradient-to-b from-charcoal-200 to-deep-black py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Ready to start your project? Let's discuss how we can help bring your vision to life
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-serif font-bold text-white mb-6">
                                    Contact Information
                                </h2>

                                {/* Phone */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Phone</p>
                                        <a href="tel:+254717770536" className="text-lg text-white hover:text-gold-400 transition-colors">
                                            0717770536
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email</p>
                                        <a href="mailto:brivemarctechnologies@gmail.com" className="text-lg text-white hover:text-gold-400 transition-colors">
                                            brivemarctechnologies@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Location</p>
                                        <p className="text-lg text-white">Nairobi, Kenya</p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-serif font-bold text-white mb-4">
                                    Business Hours
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-gold-400">8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-gold-400">9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-gray-500">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-serif font-bold text-white mb-6">
                                    Send Us a Message
                                </h2>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                                        ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                                        ✗ Sorry, there was an error sending your message. Please try again or contact us directly.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                                                placeholder="Full Name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Your Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                                                placeholder="name@gmail.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                                                placeholder="+254... (optional)"
                                            />
                                        </div>

                                        {/* Service Interest */}
                                        <div>
                                            <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-300 mb-2">
                                                Service Interest
                                            </label>
                                            <select
                                                id="serviceInterest"
                                                name="serviceInterest"
                                                value={serviceInterest}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                                            >
                                                <option value="" className="bg-deep-black">Select a service...</option>
                                                <option value="Website Development" className="bg-deep-black">Website Development</option>
                                                <option value="App Development" className="bg-deep-black">App Development</option>
                                                <option value="AI Automation" className="bg-deep-black">AI Automation</option>
                                                <option value="Digital Marketing" className="bg-deep-black">Digital Marketing</option>
                                                <option value="SEO Optimization" className="bg-deep-black">SEO Optimization</option>
                                                <option value="Logo Design" className="bg-deep-black">Logo Design</option>
                                                <option value="IoT Integration" className="bg-deep-black">IoT Integration</option>
                                                <option value="Other" className="bg-deep-black">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    {/* Privacy Note */}
                                    <p className="text-xs text-gray-400">
                                        By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
                                    </p>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>

                                {/* EmailJS Setup Note */}
                                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                                    <p className="text-xs text-gray-400">
                                        <strong className="text-blue-400">Note:</strong> EmailJS configuration required for form to send emails.
                                        Contact admin to complete setup.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

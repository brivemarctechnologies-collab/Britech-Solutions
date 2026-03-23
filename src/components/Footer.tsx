import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Website Development', href: '/services#website-development' },
            { name: 'System Development', href: '/services#system-development' },
            { name: 'AI Automation', href: '/services#ai-automation' },
            { name: 'Digital Marketing', href: '/services#digital-marketing' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'Contact', href: '/contact' },
        ],
    };

    // Real social media links - update these with actual URLs
    const socialLinks = [
        {
            name: 'X (Twitter)',
            icon: FaXTwitter,
            url: 'https://x.com/Brivemarc_tech', //Update with real handle
            color: 'hover:text-gray-300'
        },
        {
            name: 'Facebook',
            icon: FaFacebook,
            url: 'https://facebook.com/Brivemarc-technologies', // Update with real page
            color: 'hover:text-blue-500'
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://instagram.com/brivemarc_technologies', // Update with real handle
            color: 'hover:text-pink-500'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/company/brivemarc-technologies', // Update with real company page
            color: 'hover:text-blue-400'
        },
        {
            name: 'YouTube',
            icon: FaYoutube,
            url: 'https://youtube.com/@Brivemarc-technologies', // Update with real channel
            color: 'hover:text-red-500'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/Brivemarc-technologies', // Update with real org
            color: 'hover:text-gray-300'
        },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-charcoal-200 to-deep-black border-t border-white/10">
            <div className="section-container">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/logo.jpg"
                                alt="Brivemarc Technologies"
                                className="h-12 w-12 object-contain rounded-full ring-2 ring-gold-500/50"
                            />
                            <div>
                                <h3 className="text-xl font-serif font-bold text-white">
                                    Brivemarc <span className="gradient-text">Technologies</span>
                                </h3>
                                <p className="text-sm text-gold-400">Smart • Secure</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted technology partner in Kenya, delivering world-class digital solutions
                            that drive business growth and innovation.
                        </p>
                        <div className="flex items-center gap-3 text-gray-300">
                            <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="mailto:brivemarctechnologies@gmail.com" className="hover:text-gold-400 transition-colors">
                                brivemarctechnologies@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 mt-3">
                            <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <a href="tel:+254717770536" className="hover:text-gold-400 transition-colors">
                                0717770536
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-gold-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-gold-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 mb-2">Connect with us on social media</p>
                            <p className="text-gold-400 font-medium">@Brivemarc-technologies</p>
                        </div>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all group ${social.color}`}
                                        title={social.name}
                                    >
                                        <Icon className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Brivemarc Technologies. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Registered in Kenya</span>
                            <span className="w-1 h-1 rounded-full bg-gold-400"></span>
                            <span>Licensed Technology Agency</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black shadow-lg hover:shadow-2xl transition-all z-40 flex items-center justify-center"
                title="Back to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;

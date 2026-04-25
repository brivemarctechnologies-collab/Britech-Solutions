import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  //   FaYoutube,
  //   FaGithub,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Website Development", href: "" },
      { name: "System Development", href: "" },
      { name: "AI & Automation", href: "" },
      { name: "Digital Marketing", href: "" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: FaXTwitter, url: "https://x.com/Brivemarc_tech" },
    { icon: FaFacebook, url: "https://facebook.com/Brivemarc-technologies" },
    { icon: FaInstagram, url: "https://instagram.com/brivemarc_technologies" },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/company/brivemarc-technologies",
    },
    // { icon: FaYoutube, url: 'https://youtube.com/@Brivemarc-technologies' },
    // { icon: FaGithub, url: 'https://github.com/Brivemarc-technologies' },
  ];

  return (
    <footer className="bg-gradient-to-b from-charcoal-200 to-deep-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo.jpg"
                alt="Brivemarc Technologies"
                className="h-10 w-10 rounded-full ring-2 ring-gold-500/40"
              />
              <h3 className="text-lg font-serif font-bold text-white">
                Brivemarc <span className="gradient-text">Technologies</span>
              </h3>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Smart, secure technology solutions for modern businesses.
            </p>

            {/* Social inline */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:border-gold-400/50 transition"
                  >
                    <Icon className="w-4 h-4 text-gold-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-gold-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {currentYear} Brivemarc Technologies</p>
          <p>Registered in Kenya • Licensed Agency</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black shadow-md flex items-center justify-center"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;

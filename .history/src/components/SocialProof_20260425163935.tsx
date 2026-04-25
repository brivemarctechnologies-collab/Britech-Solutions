import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  //   FaYoutube,
} from "react-icons/fa6";

const SocialProof = () => {
  const socialLinks = [
    {
      platform: "Twitter",
      url: "https://x.com/Brivemarc",
      icon: FaXTwitter,
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/BrivemarcTechnologies",
      icon: FaFacebook,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/brivemarc_technologies?igsh=Y283d2NscnI1NGVp",
      icon: FaInstagram,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/brivemarc-technologies",
      icon: FaLinkedin,
    },
    // {
    //   platform: "YouTube",
    //   url: "https://youtube.com/@Brivemarc-technologies",
    //   icon: FaYoutube,
    // },
  ];

  return (
    <section className="bg-gradient-to-b from-deep-black via-charcoal-200 to-deep-black py-20">
      <div className="section-container">
        <div className="glass-card p-10 text-center">
          {/* Heading */}
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Connect With Us
          </h3>

          <p className="text-gray-300 mb-10">
            Follow Brivemarc Technologies across all platforms
          </p>

          {/* Icons (same as footer style) */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;

              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-gold-400/50 transition"
                >
                  <Icon className="w-5 h-5 text-gold-400" />
                </a>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold gradient-text">500+</div>
              <p className="text-gray-400 text-sm">Trusted Followers</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <p className="text-gray-400 text-sm">Reviews</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">5★</div>
              <p className="text-gray-400 text-sm">Client Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

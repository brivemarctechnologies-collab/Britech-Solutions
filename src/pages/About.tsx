import type { Founder } from '../types';

const About = () => {
    const founders: Founder[] = [
        {
            id: 1,
            name: 'Brighton Wandera',
            role: 'AI Engineer & Frontend Developer',
            bio: 'AI-focused developer building intelligent, high-performance user interfaces.',
            image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
        },
        {
            id: 2,
            name: 'Muola Veronica',
            role: 'Design Director & Cybersecurity Lead',
            bio: 'Oversees design, cybersecurity, and customer experience strategy.',
            image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a',
        },
        {
            id: 3,
            name: 'Marcos Solomon',
            role: 'Cybersecurity Expert & Systems Architect',
            bio: 'Leads system architecture and visual brand through graphic design.',
            image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
        },
        {
            id: 4,
            name: 'Evans Kariuki',
            role: 'Backend Engineer & IoT Specialist',
            bio: 'Builds scalable backend systems and connected IoT solutions.',
            image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d',
        },
    ];
    

    return (
        <div className="min-h-screen bg-deep-black pt-24">
            {/* Page Header */}
            <section className="bg-gradient-to-b from-charcoal-200 to-deep-black py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        About <span className="gradient-text">Brivemarc Technologies</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Your trusted technology partner delivering world-class solutions across Kenya and beyond
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-card p-8 md:p-12">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Brivemarc Technologies was founded with a vision to bring world-class technology solutions
                                to businesses across Kenya. We are a registered technology agency committed to delivering
                                smart, secure, and innovative digital solutions.
                            </p>
                            <p>
                                Our team of passionate experts combines technical excellence with creative thinking to
                                transform ideas into reality. Whether you're a startup looking to establish your online
                                presence or an established business seeking to modernize your operations, we have the
                                expertise to help you succeed.
                            </p>
                            <p>
                                With a focus on quality, innovation, and customer satisfaction, we've successfully delivered
                                over 50 projects across various industries. Our commitment to excellence and our understanding
                                of local and international markets make us the ideal partner for your digital transformation journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-16 bg-gradient-to-b from-deep-black to-charcoal-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🎯',
                                title: 'Our Mission',
                                description: 'Empowering businesses with smart, secure technology solutions that drive growth and innovation',
                            },
                            {
                                icon: '👁️',
                                title: 'Our Vision',
                                description: 'To be Africa\'s leading technology partner, recognized for excellence and innovation',
                            },
                            {
                                icon: '⭐',
                                title: 'Our Values',
                                description: 'Integrity, innovation, quality, and customer-first approach in everything we do',
                            },
                        ].map((item, index) => (
                            <div key={index} className="glass-card p-8 text-center">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-serif font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Meet Our <span className="gradient-text">Founding Team</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Four visionaries united by a passion for technology and a commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {founders.map((founder) => (
        <div key={founder.id} className="glass-card p-6 text-center group">
            <div className="relative mb-6 mx-auto w-32 h-32">
                <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-gold-400/30"></div>
            </div>

            <h4 className="text-xl font-serif font-bold text-white mb-2">
                {founder.name}
            </h4>
            <p className="text-sm text-gold-400 mb-3 font-medium">
                {founder.role}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
                {founder.bio}
            </p>
        </div>
    ))}
</div>

                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 bg-gradient-to-b from-charcoal-200 to-deep-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-card p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Registered in Kenya</p>
                                    <p className="text-sm text-gray-400">Official Business License</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Expert Team</p>
                                    <p className="text-sm text-gray-400">4 Dedicated Founders</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Fast Delivery</p>
                                    <p className="text-sm text-gray-400">Results in Minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

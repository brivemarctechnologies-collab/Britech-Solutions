export interface Service {
    id: number;
    name: string;
    slug: string;
    category: string;
    icon: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    technologies?: string[];
    pricing: string;
}

export const services: Service[] = [
    {
        id: 1,
        name: "Website Development",
        slug: "website-development",
        category: "Development",
        icon: "🌐",
        shortDescription: "Professional, responsive websites built with modern technologies",
        fullDescription: "We create custom, high-performance websites tailored to your business needs. From corporate sites to e-commerce platforms, we deliver solutions that drive results.",
        features: [
            "Responsive Design",
            "SEO Optimized",
            "Fast Loading Speed",
            "Mobile-First Approach",
            "CMS Integration",
            "E-commerce Solutions"
        ],
        benefits: [
            "Establish strong online presence",
            "Reach customers 24/7",
            "Professional brand image",
            "Increase sales and conversions"
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        pricing: "Starting from KSh 25,000"
    },
    {
        id: 2,
        name: "System Development",
        slug: "system-development",
        category: "Development",
        icon: "⚙️",
        shortDescription: "Robust, scalable systems tailored to your business needs",
        fullDescription: "Custom software solutions that streamline your business operations. We build enterprise-grade systems that grow with your organization.",
        features: [
            "Custom Software Development",
            "Database Design",
            "API Development",
            "System Integration",
            "Legacy System Modernization",
            "Cloud-Based Solutions"
        ],
        benefits: [
            "Streamline operations",
            "Reduce manual work",
            "Improve efficiency",
            "Scale with confidence"
        ],
        technologies: ["Python", "Node.js", "PostgreSQL", "MongoDB"],
        pricing: "Custom quote based on requirements"
    },
    {
        id: 3,
        name: "AI Automation",
        slug: "ai-automation",
        category: "AI & Automation",
        icon: "🤖",
        shortDescription: "Intelligent automation to boost productivity and efficiency",
        fullDescription: "Harness the power of AI to automate repetitive tasks and make smarter business decisions. Our AI solutions save time and reduce costs.",
        features: [
            "Process Automation",
            "Chatbots & Virtual Assistants",
            "Data Analysis & Insights",
            "Machine Learning Models",
            "Natural Language Processing",
            "Predictive Analytics"
        ],
        benefits: [
            "Save time and reduce costs",
            "Eliminate human error",
            "Make data-driven decisions",
            "24/7 automated operations"
        ],
        technologies: ["Python", "TensorFlow", "OpenAI", "LangChain"],
        pricing: "Starting from KSh 50,000"
    },
    {
        id: 4,
        name: "Digital Marketing",
        slug: "digital-marketing",
        category: "Marketing",
        icon: "📱",
        shortDescription: "Strategic campaigns that drive engagement and growth",
        fullDescription: "Comprehensive digital marketing strategies that reach your target audience and maximize ROI across all digital channels.",
        features: [
            "Social Media Marketing",
            "Content Marketing",
            "Email Campaigns",
            "PPC Advertising",
            "Analytics & Reporting",
            "Brand Strategy"
        ],
        benefits: [
            "Reach target audience effectively",
            "Increase brand awareness",
            "Generate quality leads",
            "Maximize marketing ROI"
        ],
        pricing: "Starting from KSh 15,000/month"
    },
    {
        id: 5,
        name: "SEO Optimization",
        slug: "seo-optimization",
        category: "Marketing",
        icon: "🔍",
        shortDescription: "Make your customers find you on Google with proven SEO strategies",
        fullDescription: "Improve your search rankings and organic visibility with our comprehensive SEO services. Get found by customers searching for your products and services.",
        features: [
            "Keyword Research",
            "On-Page SEO",
            "Technical SEO",
            "Link Building",
            "Local SEO",
            "SEO Audits & Reporting"
        ],
        benefits: [
            "Rank higher on Google",
            "Increase organic traffic",
            "Build credibility",
            "Long-term sustainable growth"
        ],
        pricing: "Starting from KSh 20,000/month"
    },
    {
        id: 6,
        name: "App Development",
        slug: "app-development",
        category: "Development",
        icon: "📲",
        shortDescription: "Native and cross-platform mobile applications",
        fullDescription: "Engage users on-the-go with intuitive mobile experiences. We build iOS, Android, and cross-platform apps that users love.",
        features: [
            "iOS App Development",
            "Android App Development",
            "Cross-Platform Apps",
            "App Store Optimization",
            "Push Notifications",
            "In-App Purchases"
        ],
        benefits: [
            "Reach mobile users",
            "Increase engagement",
            "Build brand loyalty",
            "Generate revenue"
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        pricing: "Starting from KSh 100,000"
    },
    {
        id: 7,
        name: "Logo Design",
        slug: "logo-design",
        category: "Design",
        icon: "🎨",
        shortDescription: "Professional logo design that captures your brand essence",
        fullDescription: "Create a memorable brand identity with our professional logo design services. We craft unique logos that stand out and resonate with your audience.",
        features: [
            "Custom Logo Concepts",
            "Multiple Revisions",
            "Vector Files (AI, SVG)",
            "Brand Guidelines",
            "Social Media Versions",
            "Print-Ready Files"
        ],
        benefits: [
            "Stand out from competitors",
            "Build brand recognition",
            "Professional appearance",
            "Versatile across all media"
        ],
        pricing: "Starting from KSh 5,000"
    },
    {
        id: 8,
        name: "Brand Identity",
        slug: "brand-identity",
        category: "Design",
        icon: "✨",
        shortDescription: "Complete branding and visual identity services",
        fullDescription: "Develop a cohesive brand identity that tells your story. From logos to color palettes, we create comprehensive brand systems.",
        features: [
            "Logo & Brand Mark",
            "Color Palette",
            "Typography System",
            "Brand Guidelines",
            "Business Card Design",
            "Marketing Collateral"
        ],
        benefits: [
            "Consistent brand presence",
            "Professional image",
            "Market differentiation",
            "Customer trust"
        ],
        pricing: "Starting from KSh 25,000"
    },
    {
        id: 9,
        name: "IoT Device Integration",
        slug: "iot-integration",
        category: "IoT & Hardware",
        icon: "🔌",
        shortDescription: "Smart device integration and IoT solutions",
        fullDescription: "Connect your devices and systems with cutting-edge IoT solutions. We help businesses leverage smart technology for automation and data collection.",
        features: [
            "IoT Device Setup",
            "Sensor Integration",
            "Real-Time Monitoring",
            "Cloud Connectivity",
            "Data Analytics Dashboard",
            "Remote Control Systems"
        ],
        benefits: [
            "Real-time insights",
            "Remote monitoring",
            "Automated operations",
            "Reduced operational costs"
        ],
        technologies: ["Arduino", "Raspberry Pi", "MQTT", "AWS IoT"],
        pricing: "Starting from KSh 40,000"
    },
    {
        id: 10,
        name: "Cloud Solutions",
        slug: "cloud-solutions",
        category: "Infrastructure",
        icon: "☁️",
        shortDescription: "Scalable cloud infrastructure and migration services",
        fullDescription: "Move to the cloud confidently with our expert migration and management services. We help you leverage cloud platforms for scalability and cost savings.",
        features: [
            "Cloud Migration",
            "Infrastructure Setup",
            "Serverless Architecture",
            "Database Management",
            "Backup & Disaster Recovery",
            "Performance Optimization"
        ],
        benefits: [
            "Scale on demand",
            "Reduce IT costs",
            "Improved security",
            "Global accessibility"
        ],
        technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
        pricing: "Starting from KSh 30,000"
    },
    {
        id: 11,
        name: "Cybersecurity",
        slug: "cybersecurity",
        category: "Security",
        icon: "🔒",
        shortDescription: "Protect your business with enterprise-grade security solutions",
        fullDescription: "Safeguard your digital assets with comprehensive cybersecurity services. We protect your business from threats and ensure compliance with industry standards.",
        features: [
            "Security Audits",
            "Penetration Testing",
            "Firewall Configuration",
            "Data Encryption",
            "Compliance Consulting",
            "Incident Response"
        ],
        benefits: [
            "Protect sensitive data",
            "Prevent cyber attacks",
            "Ensure compliance",
            "Build customer trust"
        ],
        pricing: "Starting from KSh 35,000"
    }
];

export const serviceCategories = [
    "All",
    "Development",
    "AI & Automation",
    "Marketing",
    "Design",
    "IoT & Hardware",
    "Infrastructure",
    "Security"
];

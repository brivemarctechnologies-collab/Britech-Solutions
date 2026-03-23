export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    benefit: string;
}


export interface Founder {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
}


export interface PortfolioItem {
    id: number;
    title: string;
    category: 'Website' | 'Mobile App' | 'AI Solution' | 'Graphic Design';
    description: string;
    image: string;
    tags: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

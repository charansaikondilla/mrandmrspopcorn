
export interface Flavor {
    name: string;
    description: string;
    image: string;
    allergenInfo?: string;
}

export interface Package {
    title: string;
    description: string;
    price: string;
    features: string[];
    isPopular?: boolean;
}

export interface Testimonial {
    quote: string;
    author: string;
    source: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

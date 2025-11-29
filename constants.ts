import type { Flavor, Package, Testimonial, FaqItem } from './types';

export const CONTACT = {
    phone: '7200011747',
    whatsappLink: `https://wa.me/917200011747?text=${encodeURIComponent("Hi Mr & Mrs Popcorn! I'd like to place an order.")}`,
    email: 'srikanthvishwanatha@gmail.com',
    instagramHandle: '@mrmrs.popcorn',
    instagramUrl: 'https://www.instagram.com/mrmrs.popcorn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    address: 'Survey 305 To 309B, Plot 13 & 83P, 310/P, Seetha Ramanjaneya Shopping Complex, Sri Ram Nagar Colony, NH 65, Chanda Nagar, Hyderabad.'
};

export const FLAVORS: Flavor[] = [
    { name: 'Classic Salted', description: 'Timeless and crisp; great for all ages.', image: 'https://i.ibb.co/rRmDk4XB/unnamed.jpg' },
    { name: 'Butter Bliss', description: 'Rich, creamy butter aroma (all-natural).', image: 'https://i.ibb.co/67wNtjNN/unnamed.jpg', allergenInfo: 'Contains dairy' },
    { name: 'Caramel Crunch', description: 'Sticky, golden caramel with a light crunch.', image: 'https://i.ibb.co/KjqNVPC5/unnamed.jpg' },
    { name: 'Spicy Masala', description: 'Tangy, aromatic spices for guests who love heat.', image: 'https://i.ibb.co/SDkRP29f/unnamed.jpg' },
    { name: 'Cheddar Dream', description: 'Real cheese powder for savory lovers.', image: 'https://i.ibb.co/7xfh0GyT/unnamed.jpg', allergenInfo: 'Contains dairy' },
    { name: 'Chocolate Drizzle', description: 'Premium chocolate drizzle over warm popcorn.', image: 'https://i.ibb.co/5pxyTs0/unnamed.jpg' },
];

export const PACKAGES: Package[] = [
    {
        title: 'Party Pack',
        description: 'Perfect for birthdays and small gatherings.',
        price: 'Starts at ₹499',
        features: ['10-pack of 50g bags', 'Choose up to 2 flavors', 'Customizable sticker', 'Free local pickup'],
        isPopular: true,
    },
    {
        title: 'Event Box',
        description: 'Branded boxes for corporate or themed events.',
        price: 'Contact for Quote',
        features: ['Minimum 50 units', 'Custom logo printing', 'Multiple flavor options', 'Delivery to venue'],
    },
    {
        title: 'Popcorn Subscription',
        description: 'Fresh popcorn delivered to your door weekly or monthly.',
        price: 'From ₹799/month',
        features: ['4-pack of 100g bags', 'Exclusive flavor of the month', 'Cancel anytime', 'Free delivery'],
    },
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: "Mr&Mrs Popcorn delivers a perfect crunch with every bite! Their flavors are bold, fresh, and addictive—whether you love classic buttery goodness or unique gourmet twists. A must-try for any popcorn lover!", author: "Charan Sai Kondilla", source: "Google Review" },
    { quote: "One of the best ready to eat popcorn out in the market. Far better than what is available. They use healthy options for popcorn making and really great flavour without any compromise and at reasonable prices.", author: "Samatha Medithi", source: "Google Review" },
    { quote: "Mr&Mrs Popcorn never disappoints! My sons love the cheddar cheese flavour from them. The flavours are innovative and balance of taste is just right. It's become our family's favourite snack for movie nights.", author: "Prabhu K", source: "Google Review" },
    { quote: "A very tasty popcorn. Live cheese mixing. And loved the cheese taste and caramel. Must try for your kids birthday party and family gatherings. Budget friendly too.", author: "Sujal Yadav", source: "Google Review" },
    { quote: "Caramel popcorn here is the best that I’ve ever tasted. Love it so much. All flavours are of great quality. Kudos to the team!", author: "swetha mathiyalagan", source: "Google Review" },
    { quote: "Super tasty popcorn 🍿! Especially the caramel one made with organic brown sugar - it feels light, crunchy, and rich in flavor.", author: "dj Venkat mudiraj", source: "Google Review" }
];

export const FAQS: FaqItem[] = [
    { question: "How long before my event should I order?", answer: "For customized event boxes, please order at least 3-5 days in advance. For local home orders, same-day pickup may be available depending on our schedule. Please call to confirm." },
    { question: "Do you offer vegan/dairy-free options?", answer: "Yes! Our Classic Salted, Spicy Masala, and a special version of Caramel Crunch can be made vegan. Please specify your dietary needs when ordering." },
    { question: "Can you print our company logo on boxes?", answer: "Absolutely! We offer custom branding and logo printing for corporate orders above a minimum quantity. Contact us for lead times and a quote." },
    { question: "What payment methods do you accept?", answer: "We accept UPI (GPay, PhonePe, etc.), all major credit/debit cards, and Cash on Delivery for select areas in Hyderabad." }
];
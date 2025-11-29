

import React, { useEffect, useRef, useState } from 'react';
import { CONTACT } from '../constants';
import { CheckIcon, WhatsappIcon } from './Icons';

const Packages: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const offset = window.innerHeight - rect.top;
                setScrollY(offset);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const packages = [
        {
            title: "10-Pack Snack Combo",
            price: "₹399",
            description: "Perfect for small groups, gifting, or personal snacking",
            emoji: "🍿",
            details: [
                "10 mini boxes (35g each)",
                "Choose any 2 flavours",
                "Fresh batch prepared for every order",
                "Door delivery available"
            ],
            features: ["Fresh Daily", "2 Flavours", "Quick Delivery"],
            gradient: "from-amber-400 via-orange-500 to-red-500",
            icon: "🎬",
            category: "Retail"
        },
        {
            title: "Event & Bulk Box Package",
            price: "Contact for Quote",
            description: "Ideal for birthdays, school events, corporate gifting & celebrations",
            emoji: "🎁",
            subtitle: "50 Boxes",
            details: [
                "50 boxes of 35g",
                "Choose up to 4 flavours",
                "Custom logo / party name printing",
                "Fresh batch for every event",
                "Door delivery available"
            ],
            features: ["Custom Branding", "4 Flavours", "Event Support"],
            gradient: "from-pink-400 via-red-400 to-orange-400",
            icon: "🎪",
            category: "Events",
            isPopular: true
        },
        {
            title: "Live Popcorn Station Setup",
            price: "Contact for Quote",
            description: "A premium live popcorn experience for any event",
            emoji: "🔥",
            subtitle: "Birthdays • Weddings • Corporate Events",
            details: [
                "Setup for 50 to 5000 guests",
                "Professional branded live counter",
                "Live popcorn making + cheese mixing",
                "Staff, equipment & materials included"
            ],
            features: ["Live Experience", "Any Size Event", "Full Service"],
            gradient: "from-purple-400 via-pink-400 to-red-400",
            icon: "✨",
            category: "Premium"
        },
        {
            title: "Large Bulk Packs",
            price: "Contact for Quote",
            description: "Best for school parties, family gatherings & big celebrations",
            emoji: "🛍️",
            subtitle: "Available Sizes: 1kg, 2kg, 3kg, 4kg, 5kg",
            details: [
                "Choose any flavour",
                "Fresh large-batch preparation",
                "Ideal for sharing with groups"
            ],
            features: ["Bulk Pricing", "Any Flavour", "Large Groups"],
            gradient: "from-green-400 via-teal-400 to-blue-400",
            icon: "🎉",
            category: "Bulk"
        },
        {
            title: "Monthly Subscription Pack",
            price: "₹799",
            description: "Weekly popcorn delivered to your home",
            emoji: "📦",
            details: [
                "4 packs of 150g each (1 per week)",
                "Choose any flavour",
                "Fresh batch delivered weekly",
                "Pause or cancel anytime",
                "Free delivery within 3 km"
            ],
            features: ["Weekly Delivery", "Flexible Plan", "Free Delivery"],
            gradient: "from-blue-400 via-indigo-400 to-purple-400",
            icon: "🏠",
            category: "Subscription"
        }
    ];

    return (
        <section 
            ref={sectionRef}
            id="packages" 
            className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-24 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Parallax Background Pattern */}
            <div 
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ef4444" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    transform: `translateY(${scrollY * 0.1}px)`
                }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 fade-in">
                    <div className="inline-block mb-6">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-2xl glow">
                            <span className="animate-pulse">✨</span>
                            OUR PREMIUM PACKAGES
                            <span className="animate-pulse">✨</span>
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                            Our Popcorn Packages
                        </span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        From intimate movie nights to grand celebrations, we craft the perfect popcorn experience for every occasion
                    </p>
                </div>

                {/* Premium Package Cards */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {packages.map((pkg, index) => (
                        <div 
                            key={index}
                            className={`package-card-premium group relative ${
                                pkg.isPopular ? 'lg:scale-105' : ''
                            }`}
                            style={{animationDelay: `${index * 0.15}s`}}
                        >
                            {pkg.isPopular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-xl opacity-70 animate-pulse"></div>
                                        <span className="relative inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-xs font-black rounded-full shadow-2xl uppercase tracking-wider">
                                            <span className="text-base">⭐</span>
                                            Most Popular
                                            <span className="text-base">⭐</span>
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Card Content */}
                            <div className={`relative h-full bg-gradient-to-br ${pkg.gradient} p-1 rounded-3xl shadow-2xl overflow-hidden`}>
                                {/* Light background inner card */}
                                <div className="relative h-full bg-white backdrop-blur-xl rounded-3xl p-8 flex flex-col shadow-inner">
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="text-4xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                            {pkg.icon}
                                        </span>
                                    </div>

                                    {/* Header */}
                                    <div className="mb-6">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                            {pkg.emoji}
                                        </div>
                                        <span className={`inline-block px-4 py-1 bg-gradient-to-r ${pkg.gradient} text-white text-xs font-bold rounded-full mb-3 shadow-md`}>
                                            {pkg.category}
                                        </span>
                                        <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                                            {pkg.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {pkg.description}
                                        </p>
                                        {pkg.subtitle && (
                                            <div className="inline-block px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                                                <p className="text-xs font-bold text-red-700">
                                                    {pkg.subtitle}
                                                </p>
                                            </div>
                                        )}
                                        
                                        {/* Price */}
                                        <div className="mt-6 mb-4">
                                            <span className={`text-4xl font-black bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                                                {pkg.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features Pills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {pkg.features.map((feature, i) => (
                                            <span 
                                                key={i}
                                                className={`px-3 py-1 bg-gradient-to-r ${pkg.gradient} text-white text-xs font-semibold rounded-full shadow-md transform hover:scale-105 transition-transform`}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Detailed Features List */}
                                    <div className="flex-grow mb-6">
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Includes</h4>
                                        <ul className="space-y-3">
                                            {pkg.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-3 group/item">
                                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center transform group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 shadow-md`}>
                                                        <CheckIcon className="w-4 h-4 text-white"/>
                                                    </div>
                                                    <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                                                        {detail}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <a 
                                        href={CONTACT.whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`relative flex items-center justify-center gap-3 w-full font-black py-5 px-6 rounded-2xl shadow-2xl overflow-hidden group/btn transition-all duration-500 transform hover:scale-105 hover:shadow-3xl`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} transition-all duration-500`}></div>
                                        <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} opacity-0 group-hover/btn:opacity-100 blur-xl transition-all duration-500`}></div>
                                        <WhatsappIcon className="w-6 h-6 text-white relative z-10 transform group-hover/btn:rotate-12 transition-transform duration-300" />
                                        <span className="text-white relative z-10 text-lg tracking-wide">
                                            Order Now
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-5xl mb-4">🏆</div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">1.5+ Lakh Customers</h4>
                        <p className="text-gray-600 text-sm">Hyderabad's #1 rated gourmet popcorn brand</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-5xl mb-4">✨</div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">100% Fresh Daily</h4>
                        <p className="text-gray-600 text-sm">Every batch made fresh with premium ingredients</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-5xl mb-4">💯</div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Satisfaction Guaranteed</h4>
                        <p className="text-gray-600 text-sm">International quality at affordable prices</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;


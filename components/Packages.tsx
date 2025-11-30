
import React, { useEffect, useState } from 'react';
import { CONTACT } from '../constants';
import { WhatsappIcon } from './Icons';

const Packages: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const packages = [
        {
            icon: "🍿",
            badge: "Save",
            badgeColor: "bg-orange-500",
            title: "10-Pack Snack Combo",
            description: "Perfect for small groups, gifting, or personal snacking!",
            price: "₹399",
            tags: ["Fresh Daily", "2 Flavours", "Quick Delivery"],
            tagColors: ["bg-orange-100 text-orange-700", "bg-yellow-100 text-yellow-700", "bg-orange-100 text-orange-700"],
            features: [
                "10 mini boxes (35g each)",
                "Choose any 2 flavours",
                "Fresh batch prepared for every order",
                "Door delivery available"
            ],
            color: "orange",
            borderColor: "border-orange-300",
            buttonColor: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
            decorIcon: "🎁",
            decorPosition: "top-2 right-2"
        },
        {
            icon: "🎁",
            badge: "Savings",
            badgeColor: "bg-pink-500",
            title: "Event & Bulk Box Package",
            description: "Ideal for birthdays, school events, corporate gifting & celebrations",
            price: null,
            priceText: "Contact for Quote",
            tags: ["Custom Boxes", "4 Flavours", "Bulk Orders"],
            tagColors: ["bg-pink-100 text-pink-700", "bg-pink-100 text-pink-700", "bg-pink-100 text-pink-700"],
            features: [
                "50 boxes of 35g",
                "Choose up to 4 flavours",
                "Custom logo / party name printing",
                "Fresh batch for every event",
                "Door delivery available"
            ],
            color: "pink",
            borderColor: "border-pink-300",
            buttonColor: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
            decorIcon: "🎉",
            decorPosition: "top-2 right-2",
            isPopular: true
        },
        {
            icon: "🔥",
            badge: "Premium",
            badgeColor: "bg-purple-500",
            title: "Live Popcorn Station Setup",
            description: "A premium live popcorn experience for any event",
            subtitle: "Birthdays • Weddings • Corporate Events",
            price: null,
            priceText: "Contact for Quote",
            tags: ["Live Cooking", "All Equip.", "Full Staff"],
            tagColors: ["bg-purple-100 text-purple-700", "bg-purple-100 text-purple-700", "bg-purple-100 text-purple-700"],
            features: [
                "Setup for 50 to 5000 guests",
                "Professional branded live counter",
                "Live popcorn making + cheese mixing",
                "Staff, equipment & materials included"
            ],
            color: "purple",
            borderColor: "border-purple-300",
            buttonColor: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
            decorIcon: "✨",
            decorPosition: "top-2 right-2"
        },
        {
            icon: "🛍️",
            badge: "Bulk",
            badgeColor: "bg-teal-500",
            title: "Large Bulk Packs",
            description: "Best for school parties, family gatherings & big celebrations",
            subtitle: "Available Sizes: 1kg 2kg 3kg 4kg 5kg",
            price: null,
            priceText: "Contact for Quote",
            tags: ["Bulk Packs", "Any Flavour", "Large Groups"],
            tagColors: ["bg-teal-100 text-teal-700", "bg-teal-100 text-teal-700", "bg-teal-100 text-teal-700"],
            features: [
                "Choose any flavour",
                "Fresh large-batch preparation",
                "Ideal for sharing with groups"
            ],
            color: "teal",
            borderColor: "border-teal-300",
            buttonColor: "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
            decorIcon: "🎊",
            decorPosition: "top-2 right-2"
        },
        {
            icon: "📦",
            badge: "Subscription",
            badgeColor: "bg-indigo-500",
            title: "Monthly Subscription Pack",
            description: "Weekly popcorn delivered to your home",
            price: "₹799",
            tags: ["Great Savings", "Flexibility", "Free Delivery"],
            tagColors: ["bg-indigo-100 text-indigo-700", "bg-indigo-100 text-indigo-700", "bg-indigo-100 text-indigo-700"],
            features: [
                "4 packs of 150g each (1 per week)",
                "Choose any flavour",
                "Fresh batch delivered weekly",
                "Pause or cancel anytime",
                "Free delivery within 3 km"
            ],
            color: "indigo",
            borderColor: "border-indigo-300",
            buttonColor: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
            decorIcon: "🌟",
            decorPosition: "top-2 right-2"
        }
    ];

    const trustBadges = [
        { icon: "🏆", title: "1.5+ Lakh Customers", subtitle: "Trusted by families and corporates across the city" },
        { icon: "✨", title: "100% Fresh Daily", subtitle: "Fresh batches made daily with natural ingredients" },
        { icon: "💯", title: "Satisfaction Guaranteed", subtitle: "100% money back if you're not happy" }
    ];

    return (
        <section id="packages" className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 overflow-hidden">
            {/* Animated background elements with parallax */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl"
                    style={{transform: `translateY(${scrollY * 0.1}px)`}}
                ></div>
                <div 
                    className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-3xl"
                    style={{transform: `translateY(${-scrollY * 0.15}px)`}}
                ></div>
                <div 
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-100 rounded-full opacity-10 blur-3xl"
                    style={{transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px)`}}
                ></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                        Our Popcorn <span className="gradient-text">Packages</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the perfect package for your occasion - fresh, flavorful, and made with love
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-3xl p-6 pb-8 shadow-2xl border-4 ${pkg.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-3xl fade-in group overflow-hidden ${
                                pkg.isPopular ? 'lg:scale-105 ring-4 ring-red-400 ring-opacity-50' : ''
                            }`}
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                transform: `translateY(${scrollY * 0.02 * (index % 2 === 0 ? 1 : -1)}px)`
                            }}
                        >
                            {/* Popular Badge */}
                            {pkg.isPopular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase shadow-xl flex items-center gap-2 animate-pulse">
                                        <span className="text-lg">🔥</span> Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Decorative Icon */}
                            <div className={`absolute ${pkg.decorPosition} text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 group-hover:rotate-12 transform transition-transform`}>
                                {pkg.decorIcon}
                            </div>

                            {/* Badge */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                    {pkg.icon}
                                </div>
                                <span className={`${pkg.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}>
                                    {pkg.badge}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 leading-tight">
                                {pkg.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                {pkg.description}
                            </p>

                            {/* Subtitle */}
                            {pkg.subtitle && (
                                <p className="text-xs font-semibold text-gray-700 bg-gray-100 inline-block px-3 py-1 rounded-lg mb-4">
                                    {pkg.subtitle}
                                </p>
                            )}

                            {/* Price */}
                            {pkg.price ? (
                                <div className="mb-5">
                                    <span className={`text-4xl md:text-5xl font-black ${pkg.color === 'pink' || pkg.color === 'purple' ? 'gradient-text' : 'text-gray-900'}`}>
                                        {pkg.price}
                                    </span>
                                </div>
                            ) : (
                                <div className="mb-5">
                                    <span className={`text-2xl font-bold ${pkg.color === 'pink' || pkg.color === 'purple' ? 'gradient-text' : 'text-gray-700'}`}>
                                        {pkg.priceText}
                                    </span>
                                </div>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {pkg.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${pkg.tagColors[i]}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t-2 border-gray-100 mb-6"></div>

                            {/* Features */}
                            <div className="mb-6">
                                <p className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">Includes</p>
                                <ul className="space-y-2.5">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 group/item">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                                                pkg.color === 'orange' ? 'bg-orange-100' :
                                                pkg.color === 'pink' ? 'bg-pink-100' :
                                                pkg.color === 'purple' ? 'bg-purple-100' :
                                                pkg.color === 'teal' ? 'bg-teal-100' :
                                                'bg-indigo-100'
                                            } group-hover/item:scale-110 transition-transform`}>
                                                <span className={`text-xs ${
                                                    pkg.color === 'orange' ? 'text-orange-600' :
                                                    pkg.color === 'pink' ? 'text-pink-600' :
                                                    pkg.color === 'purple' ? 'text-purple-600' :
                                                    pkg.color === 'teal' ? 'text-teal-600' :
                                                    'text-indigo-600'
                                                }`}>✓</span>
                                            </div>
                                            <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors leading-snug">
                                                {feature}
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
                                className={`flex items-center justify-center gap-2 w-full text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${pkg.buttonColor} group/btn`}
                            >
                                <WhatsappIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                <span>Order Now</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in" style={{animationDelay: '0.9s'}}>
                    {trustBadges.map((badge, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                        >
                            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                {badge.icon}
                            </div>
                            <h4 className="font-black text-lg text-gray-900 mb-2">{badge.title}</h4>
                            <p className="text-sm text-gray-600">{badge.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;

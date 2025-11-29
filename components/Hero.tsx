
import React, { useEffect, useState } from 'react';
import { CONTACT } from '../constants';
import { WhatsappIcon } from './Icons';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-red-50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className={`container mx-auto px-6 py-16 md:py-24 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold animate-bounce">
                    🎉 Fresh Batches Daily!
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight fade-in">
                    Mr & Mrs Popcorn
                </h1>
                <h2 className="text-4xl md:text-7xl font-black gradient-text leading-tight mt-2 fade-in" style={{animationDelay: '0.2s'}}>
                    Homemade, Hand-popped, Heart-approved.
                </h2>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fade-in" style={{animationDelay: '0.4s'}}>
                    Irresistible flavors for parties, events and cozy nights in — made with love and only natural ingredients. Order party packs, branded event boxes, or single-serve bags.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 fade-in" style={{animationDelay: '0.6s'}}>
                    <a href={CONTACT.whatsappLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 glow pulse-animation"
                       aria-label="Order via WhatsApp">
                        <WhatsappIcon />
                        Order on WhatsApp
                    </a>
                    <a href="#flavors"
                       className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300"
                       aria-label="View flavors and packages">
                        View Flavors & Packages
                    </a>
                </div>
                
                <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Free pickup for orders over ₹500 | Delivery within Hyderabad
                </p>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">100% Natural</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Fresh Daily</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Fast Delivery</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default Hero;

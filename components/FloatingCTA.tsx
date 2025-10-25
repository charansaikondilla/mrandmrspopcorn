import React, { useState, useEffect } from 'react';
import { CONTACT } from '../constants';
import { WhatsappIcon } from './Icons';

const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 100px
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Mobile floating button */}
            <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 border-t border-gray-200 shadow-2xl z-50 transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}>
                <a 
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all glow pulse-animation"
                    aria-label="Order via WhatsApp"
                >
                    <WhatsappIcon className="w-6 h-6" />
                    <span>Order on WhatsApp</span>
                </a>
            </div>

            {/* Desktop floating button */}
            <div className={`hidden md:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'
            }`}>
                <a 
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all glow group"
                    aria-label="Chat on WhatsApp"
                >
                    <WhatsappIcon className="w-6 h-6 group-hover:animate-bounce" />
                    <span className="hidden lg:inline">Chat with us!</span>
                </a>
            </div>
        </>
    );
};

export default FloatingCTA;

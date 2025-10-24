
import React from 'react';
import { CONTACT } from '../constants';
import { WhatsappIcon } from './Icons';

const Hero: React.FC = () => {
    return (
        <section className="bg-white" style={{backgroundImage: 'linear-gradient(to bottom, #FFF9F2, #FFFFFF)'}}>
            <div className="container mx-auto px-6 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight">
                    Mr & Mrs Popcorn
                </h1>
                <h2 className="text-5xl md:text-7xl font-black text-red-600 leading-tight mt-1">
                    Homemade, Hand-popped, Heart-approved.
                </h2>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Irresistible flavors for parties, events and cozy nights in — made with love and only natural ingredients. Order party packs, branded event boxes, or single-serve bags.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href={CONTACT.whatsappLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center gap-3 w-full sm:w-auto bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
                        <WhatsappIcon />
                        Order on WhatsApp
                    </a>
                    <a href="#flavors"
                       className="w-full sm:w-auto bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300">
                        View Flavors & Packages
                    </a>
                </div>
                 <p className="mt-6 text-sm text-gray-500">Free pickup for orders over ₹500 / Delivery within Hyderabad</p>
            </div>
        </section>
    );
};

export default Hero;

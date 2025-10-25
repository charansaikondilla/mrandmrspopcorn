
import React from 'react';
import { PACKAGES, CONTACT } from '../constants';
import { CheckIcon, WhatsappIcon } from './Icons';

const Packages: React.FC = () => {
    return (
        <section id="packages" className="bg-gradient-to-br from-white via-red-50/30 to-yellow-50/30 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in">
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
                        PRICING
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800">Find Your Perfect Pack</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Bundles and subscriptions for every popcorn lover.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {PACKAGES.map((pkg, index) => (
                        <div 
                            key={index} 
                            className={`relative bg-white rounded-2xl shadow-xl p-8 flex flex-col border-2 hover-lift fade-in ${
                                pkg.isPopular 
                                    ? 'border-red-500 scale-105 lg:scale-110 z-10 shadow-2xl' 
                                    : 'border-gray-200'
                            }`}
                            style={{animationDelay: `${index * 0.2}s`}}
                        >
                            {pkg.isPopular && (
                                <>
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase shadow-lg glow">
                                        ⭐ Most Popular
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl pointer-events-none"></div>
                                </>
                            )}
                            
                            <div className="text-center relative z-10">
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{pkg.title}</h3>
                                <p className="text-gray-500">{pkg.description}</p>
                                <div className="mt-6 mb-8">
                                    <span className={`text-5xl font-extrabold ${pkg.isPopular ? 'gradient-text' : 'text-gray-900'}`}>
                                        {pkg.price}
                                    </span>
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 group">
                                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                                            pkg.isPopular ? 'bg-red-100' : 'bg-green-100'
                                        }`}>
                                            <CheckIcon className={`w-4 h-4 ${pkg.isPopular ? 'text-red-600' : 'text-green-600'}`}/>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <a 
                                href={CONTACT.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-3 w-full font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                                    pkg.isPopular 
                                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white glow' 
                                        : 'bg-gray-800 text-white hover:bg-gray-900'
                                }`}
                                aria-label={`Order ${pkg.title} package`}
                            >
                                <WhatsappIcon className="w-5 h-5" />
                                Order Now
                            </a>
                        </div>
                    ))}
                </div>
                
                {/* Money back guarantee */}
                <div className="mt-16 text-center fade-in" style={{animationDelay: '0.8s'}}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 border-2 border-green-200 rounded-full">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-800 font-semibold">100% Satisfaction Guaranteed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;

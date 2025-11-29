
import React, { useState, useEffect } from 'react';
import { FLAVORS } from '../constants';

const Flavors: React.FC = () => {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    };

    return (
        <section id="flavors" className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in">
                    <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                        OUR MENU
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800">Our Delicious Flavors</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Popping irresistible flavors for every craving!</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FLAVORS.map((flavor, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift fade-in perspective-container"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="relative overflow-hidden h-56 bg-gray-200">
                                {!loadedImages.has(index) && (
                                    <div className="absolute inset-0 skeleton"></div>
                                )}
                                <div className="image-3d-wrapper">
                                    <img 
                                        src={flavor.image} 
                                        alt={flavor.name} 
                                        loading="lazy"
                                        onLoad={() => handleImageLoad(index)}
                                        className={`w-full h-full object-cover ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    <span className="inline-block px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-semibold shadow-lg">
                                        Available Now
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">{flavor.name}</h3>
                                <p className="mt-2 text-gray-600">{flavor.description}</p>
                                {flavor.allergenInfo && (
                                    <div className="mt-3 flex items-start gap-2">
                                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm text-red-600 font-medium">{flavor.allergenInfo}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Flavors;

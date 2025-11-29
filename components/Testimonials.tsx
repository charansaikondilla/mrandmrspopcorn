
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from './Icons';

const Testimonials: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in">
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
                        REVIEWS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800">What Our Customers Say</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We love our popcorn fans, and they love us too!</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="flex text-yellow-400">
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                        <span className="text-gray-700 font-semibold">5.0</span>
                        <span className="text-gray-500">({TESTIMONIALS.length} reviews)</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col hover-lift fade-in border border-gray-100 hover:border-red-200 transition-colors"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-yellow-400">
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                </div>
                                <span className="text-sm text-gray-500">Verified Purchase</span>
                            </div>
                            <blockquote className="text-gray-700 italic leading-relaxed flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <p className="font-bold text-gray-900">{testimonial.author}</p>
                                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {testimonial.source}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Trust indicator */}
                <div className="mt-12 text-center fade-in" style={{animationDelay: '0.8s'}}>
                    <p className="text-gray-600">
                        Join <span className="font-bold text-red-600">1,000+ happy customers</span> who love our popcorn! 🍿
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

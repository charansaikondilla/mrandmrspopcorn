
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from './Icons';

const Testimonials: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-gray-800">What Our Customers Say</h2>
                    <p className="mt-4 text-lg text-gray-600">We love our popcorn fans, and they love us too!</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                            <div className="flex text-yellow-400 mb-4">
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            <div className="mt-auto pt-4">
                                <p className="font-bold text-gray-800">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.source}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

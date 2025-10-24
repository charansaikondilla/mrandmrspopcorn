
import React from 'react';
import { FLAVORS } from '../constants';

const Flavors: React.FC = () => {
    return (
        <section id="flavors" className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-gray-800">Our Delicious Flavors</h2>
                    <p className="mt-4 text-lg text-gray-600">Popping irresistible flavors for every craving!</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FLAVORS.map((flavor, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={flavor.image} alt={flavor.name} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900">{flavor.name}</h3>
                                <p className="mt-2 text-gray-600">{flavor.description}</p>
                                {flavor.allergenInfo && <p className="mt-3 text-sm text-red-600 font-medium">Allergen Info: {flavor.allergenInfo}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Flavors;

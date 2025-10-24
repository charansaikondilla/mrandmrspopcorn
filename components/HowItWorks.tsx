
import React from 'react';
import { TouchIcon, FlavorIcon, DeliveryIcon } from './Icons';

const HowItWorks: React.FC = () => {
    return (
        <section className="bg-yellow-50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-gray-800">Ordering is Easy</h2>
                    <p className="mt-4 text-lg text-gray-600">Freshly popped joy in just a few steps.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300"></div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="text-center flex flex-col items-center">
                            <div className="bg-white border-4 border-yellow-300 w-24 h-24 rounded-full flex items-center justify-center z-10">
                                <TouchIcon className="w-12 h-12 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold mt-4">1. Choose Your Pack</h3>
                            <p className="text-gray-600 mt-2">Select a party pack, event box, or a subscription for home.</p>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <div className="bg-white border-4 border-yellow-300 w-24 h-24 rounded-full flex items-center justify-center z-10">
                                <FlavorIcon className="w-12 h-12 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold mt-4">2. Pick Flavors</h3>
                            <p className="text-gray-600 mt-2">Mix and match from our delicious range of classic and gourmet flavors.</p>
                        </div>
                        <div className="text-center flex flex-col items-center">
                             <div className="bg-white border-4 border-yellow-300 w-24 h-24 rounded-full flex items-center justify-center z-10">
                                <DeliveryIcon className="w-12 h-12 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold mt-4">3. Order & Enjoy!</h3>
                            <p className="text-gray-600 mt-2">Place your order on WhatsApp for fast delivery or easy pickup.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

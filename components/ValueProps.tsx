
import React from 'react';
import { LeafIcon, GiftIcon, TruckIcon } from './Icons';

const ValueProps: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <div className="bg-yellow-100 p-4 rounded-full">
                           <LeafIcon className="w-8 h-8 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-bold mt-4">All-Natural Ingredients</h3>
                        <p className="text-gray-600 mt-2">Freshly hand-popped daily with natural ingredients and no artificial preservatives.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-red-100 p-4 rounded-full">
                           <GiftIcon className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold mt-4">Customizable for Events</h3>
                        <p className="text-gray-600 mt-2">Custom packaging, flavor stations & branded boxes for any occasion.</p>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="bg-yellow-100 p-4 rounded-full">
                           <TruckIcon className="w-8 h-8 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-bold mt-4">Fast Local Delivery</h3>
                        <p className="text-gray-600 mt-2">Easy ordering via WhatsApp and fast delivery across Hyderabad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProps;

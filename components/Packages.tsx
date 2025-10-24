
import React from 'react';
import { PACKAGES, CONTACT } from '../constants';
import { CheckIcon, WhatsappIcon } from './Icons';

const Packages: React.FC = () => {
    return (
        <section id="packages" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-gray-800">Find Your Perfect Pack</h2>
                    <p className="mt-4 text-lg text-gray-600">Bundles and subscriptions for every popcorn lover.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {PACKAGES.map((pkg, index) => (
                        <div key={index} className={`bg-white rounded-lg shadow-lg p-8 flex flex-col relative border-2 ${pkg.isPopular ? 'border-red-500' : 'border-gray-200'}`}>
                            {pkg.isPopular && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
                            )}
                            <h3 className="text-3xl font-extrabold text-center text-gray-900">{pkg.title}</h3>
                            <p className="text-center text-gray-500 mt-2">{pkg.description}</p>
                            <div className="mt-6 text-center text-gray-900">
                                <span className="text-4xl font-extrabold">{pkg.price}</span>
                            </div>
                            <ul className="mt-8 space-y-4">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mr-3"/>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-8">
                                <a href={CONTACT.whatsappLink}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className={`flex items-center justify-center gap-3 w-full text-white font-bold py-3 px-6 rounded-full shadow-md hover:opacity-90 transition-opacity ${pkg.isPopular ? 'bg-red-600' : 'bg-gray-800'}`}>
                                   <WhatsappIcon />
                                    Order Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;

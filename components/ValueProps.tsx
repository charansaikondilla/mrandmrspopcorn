
import React from 'react';
import { LeafIcon, GiftIcon, TruckIcon } from './Icons';

const ValueProps: React.FC = () => {
    const props = [
        {
            icon: LeafIcon,
            title: 'All-Natural Ingredients',
            description: 'Freshly hand-popped daily with natural ingredients and no artificial preservatives.',
            bgColor: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
            iconColor: 'text-yellow-600',
            delay: '0s'
        },
        {
            icon: GiftIcon,
            title: 'Customizable for Events',
            description: 'Custom packaging, flavor stations & branded boxes for any occasion.',
            bgColor: 'bg-gradient-to-br from-red-100 to-red-200',
            iconColor: 'text-red-600',
            delay: '0.2s'
        },
        {
            icon: TruckIcon,
            title: 'Fast Local Delivery',
            description: 'Easy ordering via WhatsApp and fast delivery across Hyderabad.',
            bgColor: 'bg-gradient-to-br from-yellow-100 to-orange-200',
            iconColor: 'text-orange-600',
            delay: '0.4s'
        }
    ];

    return (
        <section className="bg-white py-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-50/20 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {props.map((prop, index) => (
                        <div 
                            key={index}
                            className="group flex flex-col items-center text-center fade-in hover-lift cursor-pointer"
                            style={{animationDelay: prop.delay}}
                        >
                            <div className={`${prop.bgColor} p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 float-animation`}>
                                <prop.icon className={`w-10 h-10 ${prop.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-bold mt-6 text-gray-900 group-hover:text-red-600 transition-colors">
                                {prop.title}
                            </h3>
                            <p className="text-gray-600 mt-3 leading-relaxed">
                                {prop.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;

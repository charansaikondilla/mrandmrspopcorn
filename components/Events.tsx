import React from 'react';
import { CONTACT } from '../constants';

const Events: React.FC = () => {
    return (
        <section id="events" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src="https://i.ibb.co/mCb3Q5S/popcorn-event-station.jpg" alt="A vibrant popcorn station setup for a party with various toppings." className="rounded-lg shadow-2xl w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-black text-gray-800">Make Your Event Pop!</h2>
                        <p className="mt-4 text-lg text-gray-600">Planning a corporate event, birthday party, or a special celebration? Our customizable event boxes, on-site flavor stations, and personalized labels will make your snack catering simple and memorable.</p>
                        <ul className="mt-6 space-y-3 text-gray-700">
                           <li className="flex items-center"><span className="text-red-500 mr-2">🍿</span>Branded Boxes with Your Logo</li>
                           <li className="flex items-center"><span className="text-red-500 mr-2">🍿</span>Live Popcorn Flavor Stations</li>
                           <li className="flex items-center"><span className="text-red-500 mr-2">🍿</span>Personalized Labels & Stickers</li>
                           <li className="flex items-center"><span className="text-red-500 mr-2">🍿</span>Bulk Tubs for Large Crowds</li>
                        </ul>
                        <a href={CONTACT.whatsappLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block mt-8 bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
                            Get an Event Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;

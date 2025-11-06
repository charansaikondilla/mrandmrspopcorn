
import React from 'react';
import { CONTACT } from '../constants';
import { InstagramIcon } from './Icons';

const InstagramCTA: React.FC = () => {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(CONTACT.whatsappLink)}`;

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="bg-red-600 rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-black">Follow The Flavor!</h2>
                        <p className="mt-2 text-lg text-red-100">Get flavor drops, event highlights, and exclusive discounts on our Instagram.</p>
                        <a href={CONTACT.instagramUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 mt-6 bg-white text-red-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-100 transition-colors">
                           <InstagramIcon />
                           {CONTACT.instagramHandle}
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                        <img src={qrCodeUrl} alt="QR Code to order on WhatsApp" className="w-36 h-36" />
                        <p className="mt-2 text-sm text-center font-semibold text-gray-800">Scan to Order on WhatsApp!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramCTA;

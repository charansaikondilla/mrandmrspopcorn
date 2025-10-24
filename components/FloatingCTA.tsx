import React from 'react';
import { CONTACT } from '../constants';
import { WhatsappIcon } from './Icons';

const FloatingCTA: React.FC = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-3 border-t border-gray-200 shadow-lg z-50">
            <a href={CONTACT.whatsappLink}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 w-full bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-red-700 transition-colors">
                <WhatsappIcon />
                Order on WhatsApp
            </a>
        </div>
    );
};

export default FloatingCTA;

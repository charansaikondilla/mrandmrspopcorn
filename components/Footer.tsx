
import React from 'react';
import { CONTACT } from '../constants';
import { WhatsappIcon, InstagramIcon, MailIcon, MapPinIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold">Mr & Mrs Popcorn</h3>
                        <p className="mt-2 text-gray-400">🍿 Popping irresistible flavors for every craving! Made with love and all-natural ingredients. 🌟</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center">
                                <MapPinIcon className="w-5 h-5 mr-3 text-yellow-400" />
                                <span className="text-gray-300">{CONTACT.address}</span>
                            </li>
                             <li className="flex items-center">
                                <MailIcon className="w-5 h-5 mr-3 text-yellow-400" />
                                <a href={`mailto:${CONTACT.email}`} className="text-gray-300 hover:text-white">{CONTACT.email}</a>
                            </li>
                             <li className="flex items-center">
                                <WhatsappIcon className="w-5 h-5 mr-3 text-yellow-400" />
                                <a href={CONTACT.whatsappLink} className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">+{CONTACT.phone}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="text-xl font-bold">Follow Us</h3>
                         <div className="flex mt-4 space-x-4">
                            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <InstagramIcon className="w-8 h-8"/>
                            </a>
                            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <WhatsappIcon className="w-8 h-8"/>
                            </a>
                         </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Mr & Mrs Popcorn. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

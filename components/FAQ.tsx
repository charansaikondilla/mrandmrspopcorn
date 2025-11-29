
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDownIcon } from './Icons';

interface FaqItemProps {
    item: {
        question: string;
        answer: string;
    };
    isOpen: boolean;
    toggle: () => void;
}

const FaqItemComponent: React.FC<FaqItemProps> = ({ item, isOpen, toggle }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={toggle}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
            >
                <span>{item.question}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-600">{item.answer}</p>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-gray-800">Frequently Asked Questions</h2>
                </div>
                <div>
                    {FAQS.map((faq, index) => (
                       <FaqItemComponent 
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            toggle={() => toggleFaq(index)}
                       />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

import React, { useState } from 'react';

interface HeaderProps {
    activeSection: string | null;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navItems = [
        { href: '#flavors', label: 'Flavors' },
        { href: '#packages', label: 'Packages' },
        { href: '#events', label: 'Events' },
        { href: '#contact', label: 'Contact' },
    ];
    
    return (
        <header className="bg-white py-4 px-6 md:px-12 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" aria-label="Mr & Mrs Popcorn Home">
                        <img src="https://i.ibb.co/7HTbqqJ/image.png" alt="Mr & Mrs Popcorn Logo" className="h-12 w-12 md:h-16 md:w-16" />
                    </a>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map(item => (
                        <a 
                            key={item.href}
                            href={item.href} 
                            className={`font-medium transition-colors duration-300 ${activeSection === item.href.substring(1) ? 'text-red-600 font-bold' : 'text-gray-600 hover:text-red-600'}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-gray-600 hover:text-red-600 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
                    {navItems.map(item => (
                        <a 
                            key={item.href}
                            href={item.href} 
                            className={`block py-3 font-medium transition-colors duration-300 ${activeSection === item.href.substring(1) ? 'text-red-600 font-bold' : 'text-gray-600 hover:text-red-600'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;

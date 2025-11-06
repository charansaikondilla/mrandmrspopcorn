// rebuild trigger

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Flavors from './components/Flavors';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import InstagramCTA from './components/InstagramCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ErrorBoundary from './components/ErrorBoundary';
import { useActiveSection } from './hooks';

const App: React.FC = () => {
    const sectionIds = ['flavors', 'packages', 'events', 'contact'];
    const activeSection = useActiveSection(sectionIds);

    return (
        <ErrorBoundary>
            <div className="bg-white text-gray-800 antialiased">
                <Header activeSection={activeSection} />
                <main>
                    <Hero />
                    <ValueProps />
                    <Flavors />
                    <Packages />
                    <HowItWorks />
                    <Events />
                    <Testimonials />
                    <InstagramCTA />
                    <FAQ />
                </main>
                <Footer />
                <FloatingCTA />
            </div>
        </ErrorBoundary>
    );
};

export default App;

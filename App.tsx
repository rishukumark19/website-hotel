import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import RoomsPreviewSection from './components/RoomsPreviewSection';
import RestaurantHighlightSection from './components/RestaurantHighlightSection';
import AmenitiesSection from './components/AmenitiesSection';
import BookingCTASection from './components/BookingCTASection';
import GalleryPreviewSection from './components/GalleryPreviewSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import CloseIcon from './components/icons/CloseIcon';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms & Suites', href: '#rooms-suites' },
    { name: 'Restaurant', href: '#restaurant' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
];


const MobileNav: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <div 
            className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <nav className={`absolute top-0 right-0 h-full w-full max-w-sm bg-brand-dark shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
                <div className="flex justify-end p-6">
                     <button onClick={onClose} className="text-white focus:outline-none" aria-label="Close mobile menu">
                        <CloseIcon />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full -mt-16">
                    <ul className="text-center">
                        {navItems.map((item) => (
                             <li key={item.name} className="mb-8">
                                <a href={item.href} onClick={onClose} className="font-playfair text-3xl text-white transition-colors duration-300 hover:text-brand-gold-light">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                     <a href="tel:+918809757903" className="absolute bottom-16 bg-brand-gold text-brand-dark transition-all duration-300 hover:bg-brand-gold-light font-bold py-4 px-10 text-sm tracking-wider uppercase rounded-lg shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-1 active:scale-95">
                        RESERVE NOW
                    </a>
                </div>
            </nav>
        </div>
    );
};


const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <div className={`relative transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'scale-[0.9] -translate-x-[15%] rounded-3xl overflow-hidden shadow-2xl' : ''}`}>
                <main className="relative overflow-x-hidden bg-brand-dark">
                    <HeroSection isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                    <IntroductionSection />
                    <RoomsPreviewSection />
                    <RestaurantHighlightSection />
                    <AmenitiesSection />
                    <BookingCTASection />
                    <GalleryPreviewSection />
                    <LocationSection />
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default App;
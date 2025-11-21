import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms & Suites', href: '#rooms-suites' },
    { name: 'Restaurant', href: '#restaurant' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
];

interface HeaderProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-brand-dark/70 backdrop-blur-xl shadow-2xl shadow-black/20' : 'bg-transparent'}`;

    return (
        <header className={navClasses}>
            <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-playfair font-bold text-white tracking-widest transition-transform duration-300 hover:scale-105">
                    SB International
                </a>

                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center space-x-10 text-sm font-medium tracking-wider uppercase">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="text-white transition-colors duration-300 hover:text-brand-gold-light group">
                                    {item.name}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-brand-gold-light mt-1"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                     <a href="tel:+918809757903" className="ml-10 bg-brand-gold text-brand-dark hover:bg-brand-gold-light transition-all duration-300 font-bold py-3 px-8 text-sm tracking-wider uppercase rounded-lg shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-1 active:scale-95">
                        RESERVE NOW
                    </a>
                </div>
                
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none relative h-8 w-8" aria-label="Toggle mobile menu">
                        <span className={`absolute transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                           <MenuIcon />
                        </span>
                         <span className={`absolute transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                           <CloseIcon />
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};


const HeroSection: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
                style={{ objectFit: 'cover', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                poster="https://picsum.photos/1920/1080?grayscale&blur=2"
            >
                <source src="https://videos.pexels.com/video-files/8044020/8044020-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-1"></div>
            
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 tracking-wide">
                    Where Dhanbad Meets the World.
                </h1>
                <p className="font-montserrat text-lg md:text-xl max-w-3xl mx-auto font-light tracking-wider">
                    Discover a new standard of hospitality, your sanctuary of modern luxury and impeccable service.
                </p>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 z-10">
                 <a href="#about" aria-label="Scroll down to next section">
                    <ChevronDownIcon />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
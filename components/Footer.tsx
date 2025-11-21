import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Rooms & Suites', href: '#rooms-suites' },
        { name: 'Restaurant', href: '#restaurant' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Location', href: '#location' },
    ];
    const socialLinks = [
        { name: 'Facebook', icon: <FacebookIcon />, url: '#' },
        { name: 'Instagram', icon: <InstagramIcon />, url: '#' },
    ];

    return (
        <footer id="contact" className="bg-brand-dark text-gray-300">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Column 1: Brand */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <a href="#home" className="text-3xl font-playfair font-bold text-white tracking-widest mb-4 inline-block">
                            SB International
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Experience a sanctuary of modern luxury, where heartfelt hospitality and refined comfort meet in the heart of Dhanbad.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-montserrat font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-brand-gold-light transition-colors duration-300 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                         <h3 className="font-montserrat font-bold text-white uppercase tracking-wider mb-4">Contact</h3>
                         <address className="not-italic text-sm space-y-3">
                             <p>
                                 8 Lane, Bhiphore Hirak Rd, Sugiadih<br />
                                 Dhanbad, India
                             </p>
                             <p><a href="tel:+918809757903" className="hover:text-brand-gold-light transition-colors duration-300">+91 88097 57903</a></p>
                             <p><a href="mailto:sbint.hoteldhn24@gmail.com" className="hover:text-brand-gold-light transition-colors duration-300">sbint.hoteldhn24@gmail.com</a></p>
                         </address>
                    </div>
                    
                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="font-montserrat font-bold text-white uppercase tracking-wider mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(social => (
                                <a 
                                    key={social.name}
                                    href={social.url} 
                                    aria-label={social.name}
                                    className="text-gray-400 hover:text-brand-gold-light transition-colors duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6 text-center md:flex md:justify-between md:items-center">
                    <p className="text-xs text-gray-500 mb-4 md:mb-0">
                        © {new Date().getFullYear()} SB International Hotel. All Rights Reserved.
                    </p>
                    <a href="#" className="text-xs text-gray-500 hover:text-brand-gold-light transition-colors duration-300">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
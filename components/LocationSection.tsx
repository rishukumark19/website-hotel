import React from 'react';

const LocationSection: React.FC = () => {
    return (
        <section id="location" className="bg-brand-gray overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Column 1: Content (40% width on lg screens) */}
                    <div className="lg:col-span-2 flex flex-col justify-center p-12 md:p-16 lg:p-20">
                        <div>
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
                                Find Us in Dhanbad
                            </h2>
                            <address className="font-montserrat text-lg text-gray-300 not-italic mb-8">
                                <p className="font-bold">SB International Hotel</p>
                                <p>8 Lane, Bhiphore Hirak Rd, Sugiadih</p>
                                <p>Dhanbad, India</p>
                            </address>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Conveniently situated to offer both tranquil seclusion and easy access to Dhanbad's key commercial and cultural hubs. We look forward to welcoming you.
                            </p>
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=23.7918,86.4350" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-brand-gold-light font-bold text-sm tracking-wider uppercase group"
                            >
                                Get Directions <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Map (60% width on lg screens) */}
                    <div className="lg:col-span-3 h-96 lg:h-auto min-h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.590114888123!2d86.4328113154332!3d23.79815098456637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a33333333333%3A0x8a9c4b3f2c5e5e5d!2sSB%20International%20Hotel!5e0!3m2!1sen!2sin!4v1689258999333!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="filter grayscale invert-95 contrast-125 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
import React from 'react';
import AgodaLogo from './icons/AgodaLogo';
import BookingLogo from './icons/BookingLogo';

const BookingCTASection: React.FC = () => {
    const partners = [
        { name: 'Agoda', logo: <AgodaLogo />, url: '#' },
        { name: 'Booking.com', logo: <BookingLogo />, url: '#' },
    ];

    return (
        <section className="bg-brand-light text-brand-dark py-24 sm:py-32">
            <div className="container mx-auto px-6 text-center">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
                        Reserve Your Experience
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
                        For the best available rates and personalized assistance, we invite you to book your stay directly.
                    </p>
                    <a 
                        href="tel:+918809757903" 
                        className="font-montserrat text-2xl sm:text-4xl font-bold text-brand-dark tracking-wider mb-8 block hover:text-brand-gold-dark transition-colors duration-300"
                    >
                        Call Us: +91 88097 57903
                    </a>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">
                        or book through our trusted partners
                    </p>
                    <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                        {partners.map(partner => (
                            <a 
                                key={partner.name}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Book with ${partner.name}`}
                                className="filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                            >
                                {partner.logo}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCTASection;
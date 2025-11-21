import React from 'react';

const RoomsPreviewSection: React.FC = () => {
    return (
        <section id="rooms-suites" className="bg-brand-gray overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[60vh]">
                    {/* Column 1: Image (60% width on lg screens) */}
                    <div className="lg:col-span-3 h-80 lg:h-auto">
                        <img
                            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Living area of a premium suite"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Column 2: Content (40% width on lg screens) */}
                    <div className="lg:col-span-2 flex flex-col justify-center p-12 md:p-16 lg:p-20">
                        <div>
                            <p className="font-montserrat text-sm text-brand-gold-light uppercase tracking-widest mb-4">
                                Accommodation
                            </p>
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
                                Your Private Retreat
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-8">
                                Our 51 rooms and suites are designed to be your private retreat. Each space, from our Deluxe rooms to our expansive Suites, is a harmonious blend of contemporary design, plush comfort, and thoughtful amenities, ensuring a deeply restorative stay.
                            </p>
                            <a 
                                href="#rooms-suites" 
                                className="inline-block border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-bold py-3 px-8 text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-1 active:scale-95"
                            >
                                Explore Rooms & Suites
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomsPreviewSection;
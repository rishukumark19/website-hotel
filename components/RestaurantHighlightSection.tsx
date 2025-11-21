import React from 'react';

const RestaurantHighlightSection: React.FC = () => {
    return (
        <section id="restaurant" className="bg-brand-dark overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[60vh]">
                    {/* Column 1: Content (40% width on lg screens) */}
                    <div className="lg:col-span-2 flex flex-col justify-center p-12 md:p-16 lg:p-20 order-last lg:order-first">
                        <div>
                            <p className="font-montserrat text-sm text-brand-gold-light uppercase tracking-widest mb-4">
                                Culinary Excellence
                            </p>
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
                                A Journey for the Senses
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-8">
                                Step into Flavor Fusion, our signature restaurant, where global culinary artistry meets local inspiration. Our elegant dining room provides the perfect backdrop for a menu crafted to delight the senses.
                            </p>
                            <a 
                                href="#restaurant" 
                                className="inline-block border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-bold py-3 px-8 text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-1 active:scale-95"
                            >
                                Discover Our Restaurant
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Image (60% width on lg screens) */}
                    <div className="lg:col-span-3 h-80 lg:h-auto">
                        <img
                            src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Atmospheric interior of the Flavor Fusion restaurant"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestaurantHighlightSection;
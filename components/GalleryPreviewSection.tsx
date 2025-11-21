import React from 'react';

const galleryImages = [
    { src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hotel Lobby and Reception', className: 'sm:col-span-2 lg:col-span-2 lg:row-span-2' },
    { src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Luxury Hotel Poolside View', className: '' },
    { src: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Signature Cocktail by the Pool', className: '' },
    { src: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hotel Suite with Ocean View', className: 'sm:col-span-2 lg:col-span-2' },
];

const GalleryImage: React.FC<{ src: string, alt: string, className?: string }> = ({ src, alt, className = '' }) => (
    <div className={`group relative block overflow-hidden aspect-[4/3] sm:aspect-square shadow-lg ${className}`}>
        <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
        />
         <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/0"></div>
    </div>
);


const GalleryPreviewSection: React.FC = () => {
    return (
        <section id="gallery" className="bg-brand-dark py-24 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
                    <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-gold-light mb-4">
                        A Glimpse of SB International
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-auto gap-4 md:gap-6">
                    {galleryImages.map((image, index) => (
                        <GalleryImage key={index} src={image.src} alt={image.alt} className={image.className} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a 
                        href="#gallery" 
                        className="inline-block border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-bold py-3 px-8 text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-1 active:scale-95"
                    >
                        Explore the Gallery
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreviewSection;
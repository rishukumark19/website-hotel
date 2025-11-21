import React from 'react';

interface NavCardProps {
    imageUrl: string;
    title: string;
    linkUrl: string;
}

const NavCard: React.FC<NavCardProps> = ({ imageUrl, title, linkUrl }) => (
    <a href={linkUrl} className="group relative block overflow-hidden aspect-[4/5] shadow-lg">
        <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="relative flex h-full items-end p-8 text-white">
            <div>
                <h3 className="font-playfair text-2xl font-bold tracking-wide">{title}</h3>
                <span className="mt-2 inline-block text-sm font-medium uppercase tracking-widest text-brand-gold-light">
                    Explore <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">&rarr;</span>
                </span>
            </div>
        </div>
    </a>
);

const IntroductionSection: React.FC = () => {
    const navItems = [
        {
            imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Rest & Recharge',
            linkUrl: '#rooms-suites',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Savor the Moment',
            linkUrl: '#restaurant',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/1485805/pexels-photo-1485805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Celebrate in Style',
            linkUrl: '#amenities',
        },
    ];

    return (
        <section id="about" className="bg-brand-dark py-24 sm:py-32">
            <div className="container mx-auto px-6">
                {/* Centered Text Block */}
                <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
                    <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-gold-light mb-4">
                        An Unforgettable Experience Awaits
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
                        Welcome to SB International Hotel & Banquet, Dhanbad's premier destination for discerning travelers and landmark events. We have meticulously crafted an environment of sophisticated comfort, where elegant rooms, exceptional dining, and comprehensive amenities converge to create an unforgettable experience.
                    </p>
                </div>

                {/* Three-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {navItems.map((item, index) => (
                        <NavCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
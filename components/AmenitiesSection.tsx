import React from 'react';
import PoolIcon from './icons/PoolIcon';
import BanquetIcon from './icons/BanquetIcon';
import WifiIcon from './icons/WifiIcon'; // Re-purposed as "Lawn" icon visually
import RoomServiceIcon from './icons/RoomServiceIcon';

interface AmenityProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const AmenityItem: React.FC<AmenityProps> = ({ icon, title, description }) => (
    <div className="group flex flex-col items-center text-center p-4 transition-all duration-300 ease-in-out hover:-translate-y-2">
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-black/20 mb-6 transition-colors duration-300 group-hover:bg-brand-gold">
            <div className="text-brand-gold-light transition-colors duration-300 group-hover:text-brand-dark">
                {icon}
            </div>
        </div>
        <h3 className="font-montserrat text-xl font-bold text-white mb-2">
            {title}
        </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
            {description}
        </p>
    </div>
);

const AmenitiesSection: React.FC = () => {
    const amenities = [
        {
            icon: <PoolIcon />,
            title: 'Serene Swimming Pool',
            description: 'Your private oasis to relax and recharge.',
        },
        {
            icon: <BanquetIcon />,
            title: 'Banquet & Conference',
            description: 'Host unforgettable weddings and corporate events.',
        },
        {
            icon: <WifiIcon />,
            title: 'Lush Event Lawn',
            description: 'An elegant outdoor setting for your special occasions.',
        },
        {
            icon: <RoomServiceIcon />,
            title: '24/7 Hospitality',
            description: 'Attentive service, anytime you need it.',
        },
    ];

    return (
        <section id="amenities" className="bg-brand-gray py-24 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
                    <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
                        Designed for Your Comfort
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {amenities.map((item, index) => (
                        <AmenityItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AmenitiesSection;
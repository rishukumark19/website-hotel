import React from 'react';

const ChevronDownIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-10 w-10 text-white animate-bounce" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={1.5}
    >
        {/* Fix: Changed strokeLineJoin to strokeLinejoin */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export default ChevronDownIcon;
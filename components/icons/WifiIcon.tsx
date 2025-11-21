import React from 'react';

const WifiIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-12" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={1.5}
    >
        {/* Fix: Changed strokeLineJoin to strokeLinejoin */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.562a4.5 4.5 0 017.778 0M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.008z" />
        {/* Fix: Changed strokeLineJoin to strokeLinejoin */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.875 12.125a7.5 7.5 0 0114.25 0" />
    </svg>
);

export default WifiIcon;
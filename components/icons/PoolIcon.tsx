import React from 'react';

const PoolIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-12" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={1.5}
    >
        {/* Fix: Changed strokeLineJoin to strokeLinejoin */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 9.91l4.242 4.243a2 2 0 002.828 0l4.242-4.242M12 4.56v1.94" />
    </svg>
);

export default PoolIcon;
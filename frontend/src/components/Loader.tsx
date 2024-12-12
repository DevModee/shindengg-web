import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-black'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500'></div>
        </div>
    );
};

export default Loader;
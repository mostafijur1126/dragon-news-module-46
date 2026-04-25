import React from 'react';
import Marquee from "react-fast-marquee";


const BrakingNews = () => {
    return (
        <div className='w-full'>
            <div className='flex p-5 bg-gray-50 max-w-7xl mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
        </div>
    );
};

export default BrakingNews;
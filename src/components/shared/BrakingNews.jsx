import { newsInCategory } from '@/lib/dbData';
import React from 'react';
import Marquee from "react-fast-marquee";


const BrakingNews = async() => {
    const brakingHeadlines = await newsInCategory("01");
    return (
        <div className='w-full'>
            <div className='flex p-5 bg-gray-50 max-w-7xl mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest</button>
            <Marquee>
                {brakingHeadlines.map(hedline => (
                    <span key={hedline._id} className='flex items-center'>
                        <span>{hedline.title}</span>
                        <span className='mx-4 text-gray-400'>||</span>
                    </span>
                ))}
            </Marquee>
        </div>
        </div>
    );
};

export default BrakingNews;
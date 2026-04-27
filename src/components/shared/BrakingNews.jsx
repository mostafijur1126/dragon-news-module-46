import { newsInCategory } from '@/lib/dbData';
import React from 'react';
import Marquee from "react-fast-marquee";
import { FiAlertCircle, FiZap } from 'react-icons/fi';

const BrakingNews = async () => {
    const brakingHeadlines = await newsInCategory("01");
    
    return (
        <div className="w-full bg-white border-y border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                    
                    <div className="relative group">
                        <div className="flex items-center justify-center gap-2 px-5 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 sm:rounded-r-lg shadow-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                            </span>
                            <span className="font-bold text-white tracking-wider text-sm sm:text-base uppercase flex items-center gap-1">
                                <FiZap className="w-4 h-4 fill-white stroke-none" />
                                Breaking
                            </span>
                        </div>
                        <div className="hidden sm:block absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 
                            border-t-[6px] border-t-transparent border-l-[8px] border-l-red-700 border-b-[6px] border-b-transparent">
                        </div>
                    </div>

                    <div className="flex-1 bg-gray-50/80 overflow-hidden py-2 sm:py-0">
                        <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                            className="h-full flex items-center"
                        >
                            {brakingHeadlines.map((headline, idx) => (
                                <div 
                                    key={headline._id} 
                                    className="flex items-center group/item px-2"
                                >
                                    <span className="text-gray-700 text-sm sm:text-base font-medium 
                                        hover:text-red-600 transition-colors duration-200 cursor-default
                                        tracking-tight line-clamp-1 max-w-[280px] sm:max-w-md md:max-w-lg">
                                        {headline.title}
                                    </span>
                                    
                                    <span className="mx-3 sm:mx-4 text-gray-300 select-none">
                                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gray-400/60"></span>
                                        <span className="sm:hidden text-gray-300">•</span>
                                    </span>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    <div className="hidden lg:flex items-center px-4 bg-gray-50 border-l border-gray-100">
                        <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider whitespace-nowrap">
                            <FiAlertCircle className="inline mr-1 w-3 h-3" />
                            Just Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrakingNews;
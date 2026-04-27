import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdDateRange, MdOutlineTrendingUp } from 'react-icons/md';
import { FiChevronRight } from 'react-icons/fi';
import leftImg1 from '@/assets/l1.png';
import leftImg2 from '@/assets/l2.png';
import leftImg3 from '@/assets/l3.png';

// interface LeftsideProps {
//     categories: {
//         news_category: Array<{
//             category_id: string;
//             category_name: string;
//         }>;
//     };
//     isActive: string;
// }

const Leftside = ({ categories, isActive }) => {
    // Mock news data for the sidebar articles
    const sidebarArticles = [
        { id: 1, image: leftImg1, title: "Bayern Slams Authorities Over Flight Delay to Club World Cup", category: "Sports", date: "Jan 4, 2022" },
        { id: 2, image: leftImg2, title: "Bayern Slams Authorities Over Flight Delay to Club World Cup", category: "Sports", date: "Jan 4, 2022" },
        { id: 3, image: leftImg3, title: "Bayern Slams Authorities Over Flight Delay to Club World Cup", category: "Sports", date: "Jan 4, 2022" },
    ];

    return (
        <aside className="col-span-1 lg:col-span-3 space-y-8">
            {/* Categories Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <h2 className="font-bold text-lg md:text-xl text-gray-800 flex items-center gap-2">
                        <MdOutlineTrendingUp className="text-red-500 w-5 h-5" />
                        All Categories
                    </h2>
                </div>
                
                <ul className="p-4 space-y-2">
                    {categories.news_category.map((categorie) => (
                        <li key={categorie.category_id}>
                            <Link 
                                href={`/category/${categorie.category_id}`}
                                className={`
                                    group flex items-center justify-between px-4 py-3 rounded-lg
                                    transition-all duration-200 font-medium
                                    ${isActive === categorie.category_id 
                                        ? "bg-red-50 text-red-600 border-l-4 border-red-500" 
                                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                    }
                                `}
                            >
                                <span>{categorie.category_name}</span>
                                <FiChevronRight className={`
                                    w-4 h-4 transition-all duration-200
                                    ${isActive === categorie.category_id 
                                        ? "opacity-100 translate-x-0" 
                                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                    }
                                `} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Trending/Sidebar Articles Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                    <h3 className="font-bold text-lg text-gray-800">Trending Now</h3>
                </div>
                
                <div className="space-y-5">
                    {sidebarArticles.map((article, idx) => (
                        <article 
                            key={article.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <Link href="#" className="block md:flex gap-4">
                                {/* Image Container */}
                                <div className="relative md:w-28 h-40 md:h-28 overflow-hidden bg-gray-100">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Rank Badge */}
                                    <div className="absolute top-2 left-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                                        {idx + 1}
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-4 md:p-3 flex-1">
                                    <h4 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 text-sm md:text-base">
                                        {article.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                                            {article.category}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <div className="flex items-center gap-1">
                                            <MdDateRange className="w-3 h-3" />
                                            <span>{article.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Leftside;
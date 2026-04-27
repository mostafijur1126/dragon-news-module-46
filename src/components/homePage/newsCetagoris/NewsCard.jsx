import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar, FaRegBookmark } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const NewsCard = ({ cetagoriNews }) => {
    return (
        <div className="col-span-1 lg:col-span-6 space-y-8">
            {/* Header Section */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1.5 h-7 bg-red-500 rounded-full"></span>
                    Dragon News Home
                </h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {cetagoriNews.length} Articles
                </span>
            </div>

            {/* News Grid/List */}
            {cetagoriNews.length > 0 ? (
                <div className="space-y-8">
                    {cetagoriNews.map((news, idx) => (
                        <article 
                            key={news._id} 
                            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            {/* Author & Actions Bar */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <Image
                                            alt={news.author?.name || "Author"}
                                            src={news.author?.img || "/default-avatar.png"}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                                        />
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800 hover:text-red-600 transition-colors">
                                            {news.author?.name || "Anonymous Author"}
                                        </h5>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <span>📅</span> {news.author?.published_date || "Recently"}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
                                        <CiShare2 className="text-xl" />
                                    </button>
                                    <button className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all duration-200">
                                        <FaRegBookmark className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            {/* News Content */}
                            <div className="p-5 md:p-6">
                                {/* Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                                    {news.title}
                                </h2>

                                {/* Featured Image */}
                                {news.image_url && (
                                    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-5 bg-gray-100">
                                        <Image
                                            src={news.image_url}
                                            alt={news.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Gradient Overlay for better text readability if needed */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                )}

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed line-clamp-3 mb-5">
                                    {news.details}
                                </p>

                                {/* Read More Button */}
                                <div className="mb-5">
                                    <Link href={`/news/${news._id}`}>
                                        <button className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200">
                                            Read More
                                            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>

                                {/* Stats Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1.5 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full">
                                            <FaStar className="text-sm" />
                                            <span className="font-semibold text-gray-700">{news.rating?.number || "N/A"}</span>
                                        </span>
                                        <span className="flex items-center gap-1.5 text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                                            <FaEye className="text-sm" />
                                            <span className="font-medium">{news.total_view?.toLocaleString() || 0} views</span>
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        {news.category?.name || "Uncategorized"}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                // Empty State
                <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 bg-gray-50 rounded-xl text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No News Found</h3>
                    <p className="text-gray-500">There are no articles available in this category at the moment.</p>
                </div>
            )}
        </div>
    );
};

export default NewsCard;
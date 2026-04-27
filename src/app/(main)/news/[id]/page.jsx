import RightSite from '@/components/homePage/newsCetagoris/RightSite';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar, FaArrowLeft, FaRegBookmark } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { newsDetailsIncategory } from '@/lib/dbData';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const news = await newsDetailsIncategory(id);
    return {
        title: news?.title || "News Details",
        description: news?.details?.substring(0, 160) || "Read the latest news",
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await newsDetailsIncategory(id);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
                
                {/* Breadcrumb Navigation */}
                <div className="mb-6">
                    <Link 
                        href={`/category/${news?.category_id}`} 
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
                    >
                        <FaArrowLeft className="w-3 h-3" />
                        <span>Back to Category</span>
                    </Link>
                </div>

                {/* Main Grid Layout - Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* Main Content Area - 9 cols on desktop, full on mobile/tablet */}
                    <div className="col-span-1 lg:col-span-9 order-1 lg:order-1">
                        <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            
                            {/* Author & Actions Bar */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 md:p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
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
                                        <h5 className="font-semibold text-gray-800 text-base md:text-lg">
                                            {news.author?.name || "Anonymous Author"}
                                        </h5>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                            <span>📅 {news.author?.published_date || "Recent"}</span>
                                            {news.total_view && (
                                                <>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        <FaEye className="w-3 h-3" /> {news.total_view.toLocaleString()} views
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
                                        <FiShare2 className="text-xl" />
                                    </button>
                                    <button className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all duration-200">
                                        <FaRegBookmark className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            {/* News Content Body */}
                            <div className="p-5 md:p-8">
                                
                                {/* Title */}
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {news.title}
                                </h1>

                                {/* Rating Badge */}
                                {news.rating?.number && (
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full">
                                            <FaStar className="w-4 h-4" />
                                            <span className="font-semibold text-gray-800">{news.rating.number}</span>
                                            <span className="text-xs text-gray-500">/ 5</span>
                                        </div>
                                        {news.rating?.badge && (
                                            <span className="text-xs text-gray-500">{news.rating.badge}</span>
                                        )}
                                    </div>
                                )}

                                {/* Featured Image */}
                                {news.image_url && (
                                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden mb-6 bg-gray-100">
                                        <Image
                                            src={news.image_url}
                                            alt={news.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* Article Content */}
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                                        {news.details}
                                    </p>
                                </div>

                                {/* Category Button */}
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <Link href={`/category/${news.category_id}`}>
                                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                                            More News in This Category
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Right Sidebar - 3 cols on desktop, full width on mobile/tablet */}
                    <div className="col-span-1 lg:col-span-3 order-2 lg:order-2">
                        <RightSite />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;
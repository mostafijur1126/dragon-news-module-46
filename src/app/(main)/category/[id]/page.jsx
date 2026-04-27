import Leftside from '@/components/homePage/newsCetagoris/Leftside';
import NewsCard from '@/components/homePage/newsCetagoris/NewsCard';
import RightSite from '@/components/homePage/newsCetagoris/RightSite';
import { getCategories, newsInCategory } from '@/lib/dbData';
import React from 'react';

const newsCetagoris = async ({ params }) => {
    const categories = await getCategories();
    const { id } = await params;
    const cetagoriNews = await newsInCategory(id);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
                {/* Responsive Grid Layout */}
                {/* 
                    Mobile: single column (12 cols)
                    Tablet: 2 columns (Left: 3, Main: 6, Right: 3) - but Right moves to bottom on smaller tablets
                    Desktop: 3 columns (Left: 3, Main: 6, Right: 3)
                */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* Left Sidebar - Categories */}
                    {/* Mobile: full width, Tablet: full width, Desktop: 3 columns */}
                    <div className="col-span-1 lg:col-span-3 order-1 lg:order-1">
                        <Leftside categories={categories} isActive={id} />
                    </div>

                    {/* Main Content - News Cards */}
                    {/* Mobile: full width, Tablet: full width, Desktop: 6 columns */}
                    <div className="col-span-1 lg:col-span-6 order-2 lg:order-2">
                        <NewsCard cetagoriNews={cetagoriNews} />
                    </div>

                    {/* Right Sidebar - Login & Social */}
                    {/* Mobile: full width, Tablet: full width, Desktop: 3 columns */}
                    {/* On tablet, this appears below main content for better UX */}
                    <div className="col-span-1 lg:col-span-3 order-3 lg:order-3">
                        <RightSite />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default newsCetagoris;
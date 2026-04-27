import Leftside from '@/components/homePage/newsCetagoris/Leftside';
import NewsCard from '@/components/homePage/newsCetagoris/NewsCard';
import RightSite from '@/components/homePage/newsCetagoris/RightSite';
import { getCategories, newsInCategory } from '@/lib/data';
import React from 'react';



const newsCetagoris = async ({ params }) => {
    const categories = await getCategories();
    const { id } = await params;
    const cetagoriNews = await newsInCategory(id);
    // console.log(cetagoriNews);
    return (
        <div  className="grid grid-cols-12 gap-4 container mx-auto my-10">
            <Leftside categories={categories} isActive={id}></Leftside>
            <NewsCard cetagoriNews={cetagoriNews}></NewsCard>
            <RightSite></RightSite>
        </div>
    );
};

export default newsCetagoris;
import Leftside from '@/components/homePage/newsCetagoris/Leftside';
import RightSite from '@/components/homePage/newsCetagoris/RightSite';
import { getCategories, newsInCategory } from '@/lib/Data';
import React from 'react';



const newsCetagoris = async ({ params }) => {
    const categories = await getCategories();
    const { id } = await params;
    const cetagoriNews = await newsInCategory(id);
    console.log(cetagoriNews);
    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
            <Leftside categories={categories} isActive={id}></Leftside>
            <div className="col-span-6">
                <h2>News by categorie</h2>
                <div> {cetagoriNews.length > 0 ? (
                    
                        cetagoriNews.map(n => {
                           return <div key={n._id} className='border p-5'>
                                <h1 className='text-xl'>{n.title}</h1>
                            </div>
                        })
                ) : (<div>Not found news</div>) }
                </div>
            </div>
            <RightSite></RightSite>
        </div>
    );
};

export default newsCetagoris;
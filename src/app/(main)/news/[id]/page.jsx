import RightSite from '@/components/homePage/newsCetagoris/RightSite';
import { newsDetailsIncategory } from '@/lib/data';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = async({params}) => {
    const {id} = await params;
    const news = await newsDetailsIncategory(id);
    return {
        title:news.title,
        description: news.description,
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await newsDetailsIncategory(id);
    console.log(news);
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-12'>
            <div className='col-span-9'>
                <h2>Dragon News</h2>
                <div>
                    <div className='my-10'>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex items-center justify-between bg-gray-100 p-5 rounded-md'>
                                    <div className='flex items-center gap-3'>
                                        <Image alt={news.author?.name}
                                            src={news.author?.img}
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                        ></Image>
                                        <div>
                                            <h5>{news.author?.name}</h5>
                                            <p>{news.author?.published_date}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <CiShare2 className='text-2xl' />
                                        <CiBookmark className='text-2xl' />
                                    </div>
                                </div>
                                <h2 className="card-title">{news.title}</h2>
                                <figure>
                                    <Image
                                        src={news.image_url}
                                        alt={news.title}
                                        width={300}
                                        height={300}
                                        className='w-full'
                                    >
                                    </Image>
                                </figure>
                                <p className=''>{news.details}</p>
                                <div>
                                    <Link href={`/category/${news.category_id}`}><button className='btn bg-red-500 text-white'>All news in this category</button></Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <RightSite></RightSite>
            </div>

        </div>
    );
};

export default NewsDetailsPage;
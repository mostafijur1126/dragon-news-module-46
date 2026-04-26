import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ cetagoriNews }) => {
    // console.log(cetagoriNews);
    return (
        <div className="col-span-6">
            <h2>Dragon News Home</h2>
            <div> {cetagoriNews.length > 0 ? (

                cetagoriNews.map(n => {
                    return <div key={n._id} className='my-10'>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex items-center justify-between bg-gray-100 p-5 rounded-md'>
                                    <div className='flex items-center gap-3'>
                                        <Image alt={n.author?.name}
                                            src={n.author?.img}
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                        ></Image>
                                        <div>
                                            <h5>{n.author?.name}</h5>
                                            <p>{n.author?.published_date}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <CiShare2 className='text-2xl' />
                                        <CiBookmark className='text-2xl' />
                                    </div>
                                </div>
                                <h2 className="card-title">{n.title}</h2>
                                <figure>
                                    <Image
                                        src={n.image_url}
                                        alt={n.title}
                                        width={300}
                                        height={300}
                                        className='w-full'
                                    >
                                    </Image>
                                </figure>
                                <p className='line-clamp-3'>{n.details}</p>
                                <div>
                                    <Link href={`/news/${n._id}`}><button className='btn'>Read More</button></Link>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='flex items-center gap-1 text-2xl'><FaStar />{n.rating.number}</span>
                                    <span className='flex items-center gap-1 text-2xl'><FaEye />{n.total_view}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            ) : (<div>Not found news</div>)}
            </div>
        </div>
    );
};

export default NewsCard;
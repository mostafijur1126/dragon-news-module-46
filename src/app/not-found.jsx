import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div className='h-screen flex items-center gap-4 justify-center flex-col'>
            <h1 className='text-5xl font-bold'>This page Not Found</h1>
            <Link href={"/"}>
            <button className='btn bg-primary'>Back to Home</button>
            </Link>
        </div>
    );
};

export default notFoundPage;
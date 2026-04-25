import React from 'react';

const loadingPage = () => {
    return (
        <div className='h-[40vh] flex items-center justify-center'>
            <h1 >Cetagori news Loading </h1>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default loadingPage;
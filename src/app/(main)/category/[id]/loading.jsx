import React from 'react';

const LoadingPage = () => {
    return (
        <div className="min-h-[60vh] px-4 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Skeleton Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* Left Sidebar Skeleton */}
                    <div className="col-span-1 lg:col-span-3 space-y-4">
                        <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-32"></div>
                        <div className="space-y-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Skeleton */}
                    <div className="col-span-1 lg:col-span-6 space-y-6">
                        <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-48"></div>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                                        <div className="h-3 bg-gray-100 rounded animate-pulse w-24"></div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Sidebar Skeleton */}
                    <div className="col-span-1 lg:col-span-3 space-y-6">
                        <div className="h-40 bg-gray-100 rounded-xl animate-pulse"></div>
                        <div className="h-48 bg-gray-100 rounded-xl animate-pulse"></div>
                        <div className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
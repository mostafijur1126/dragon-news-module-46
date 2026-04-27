import Link from 'next/link';
import React from 'react';
import { FiHome, FiSearch } from 'react-icons/fi';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
            <div className="text-center max-w-lg mx-auto">
                {/* Animated 404 Illustration */}
                <div className="relative mb-8">
                    <div className="text-8xl md:text-9xl font-black text-gray-200 select-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            Oops!
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        Page Not Found
                    </h1>
                    <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full"></div>
                    <p className="text-gray-500 text-base md:text-lg">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Search Suggestion */}
                <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-400 mb-2 justify-center">
                        <FiSearch className="w-4 h-4" />
                        <span className="text-sm">Try checking the URL or</span>
                    </div>
                    <Link href="/" className="inline-flex items-center justify-center gap-2">
                        <button className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg">
                            <FiHome className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Back to Homepage
                        </button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="text-sm text-gray-400">
                    <span>Need help? </span>
                    <Link href="/contact" className="text-red-500 hover:text-red-600 hover:underline transition-colors">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
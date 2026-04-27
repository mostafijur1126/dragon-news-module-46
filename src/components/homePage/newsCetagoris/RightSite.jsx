'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLogIn } from 'react-icons/fi';
import swimImg from '@/assets/swimming.png';
import clsImg from '@/assets/class.png';
import play from '@/assets/playground.png';
import bg from '@/assets/bg.png';

const RightSite = () => {
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    };

    return (
        <aside className="col-span-1 lg:col-span-3 space-y-8">
            {/* Login Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <h2 className="font-bold text-lg md:text-xl text-gray-800 flex items-center gap-2">
                        <FiLogIn className="text-red-500" />
                        Login With
                    </h2>
                </div>
                <div className="p-5 space-y-3">
                    <button 
                        onClick={handleGoogleSignIn} 
                        className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group"
                    >
                        <FaGoogle className="text-red-500 group-hover:scale-110 transition-transform" />
                        <span>Continue with Google</span>
                    </button>
                    <button 
                        onClick={handleGithubSignIn} 
                        className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium hover:bg-gray-900 transition-all duration-200 group"
                    >
                        <FaGithub className="group-hover:scale-110 transition-transform" />
                        <span>Continue with GitHub</span>
                    </button>
                </div>
            </div>

            {/* Find Us On Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <h2 className="font-bold text-lg md:text-xl text-gray-800">Find Us On</h2>
                </div>
                <div className="p-2 space-y-2">
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <FaFacebook className="text-sm" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600">Facebook</span>
                    </a>
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-sky-50 hover:border-sky-200 transition-all duration-200 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <FaTwitter className="text-sm" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-sky-500">Twitter</span>
                    </a>
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-pink-50 hover:border-pink-200 transition-all duration-200 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <FaInstagram className="text-sm" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-pink-500">Instagram</span>
                    </a>
                </div>
            </div>

            {/* Q-Zone Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <h2 className="font-bold text-lg md:text-xl text-gray-800">Q-Zone</h2>
                </div>
                <div className="p-4 space-y-4">
                    {/* Promo Card 1 */}
                    <div className="relative group overflow-hidden rounded-lg">
                        <Image
                            src={swimImg}
                            alt="Swimming promotion"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                            <span className="text-white font-semibold">Special Offer</span>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg">
                        <Image
                            src={clsImg}
                            alt="Class promotion"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                            <span className="text-white font-semibold">New Classes</span>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg">
                        <Image
                            src={play}
                            alt="Playground promotion"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                            <span className="text-white font-semibold">Play Area</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advertisement Banner */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                    src={bg}
                    alt="Advertisement banner"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col items-center justify-center text-center p-6">
                    <span className="text-white text-2xl font-bold mb-2">Special Edition</span>
                    <span className="text-white/90 text-sm">Subscribe Now</span>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default RightSite;
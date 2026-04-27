'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX, FiUser, FiLogOut, FiLogIn } from 'react-icons/fi';
import userAvatar from "@/assets/user.png";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const NavbarSection = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    <div className="flex-1 flex items-center">
                    
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-1">
                        <NavLink href={"/"} className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">Home</NavLink>
                        <NavLink href={"/about"} className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">About</NavLink>
                        <NavLink href={"/career"} className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">Career</NavLink>
                    </div>

                    {/* Right Section - Auth */}
                    <div className="flex-1 flex items-center justify-end">
                        {isPending ? (
                            <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
                            </div>
                        ) : user ? (
                            <div className="flex items-center gap-3 md:gap-4">
                                {/* User Info - Desktop */}
                                <div className="hidden md:flex items-center gap-2 text-right">
                                    <p className="text-sm font-medium text-gray-700">
                                        Hi, <span className="text-gray-900">{user.name?.split(' ')[0]}</span>
                                    </p>
                                </div>
                                
                                {/* User Avatar */}
                                <div className="relative group">
                                    <Image
                                        src={user?.image || userAvatar}
                                        alt={`${user?.name || 'User'}'s avatar`}
                                        width={40}
                                        height={40}
                                        className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-red-200 transition-all"
                                    />
                                </div>

                                {/* Logout Button - Icon on mobile, full on desktop */}
                                <button 
                                    onClick={handleLogout} 
                                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow"
                                >
                                    <FiLogOut className="w-4 h-4 md:hidden" />
                                    <span className="hidden md:inline">Logout</span>
                                </button>
                            </div>
                        ) : (
                            <Link href="/auth/login">
                                <button className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                                    <FiLogIn className="w-4 h-4" />
                                    <span>Login</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-2xl">
                    <div className="px-4 py-3 space-y-1">
                        <NavLink 
                            href={"/"} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors"
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            href={"/about"} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors"
                        >
                            About
                        </NavLink>
                        <NavLink 
                            href={"/career"} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors"
                        >
                            Career
                        </NavLink>
                        
                        {/* Mobile user info if logged in */}
                        {user && !isPending && (
                            <div className="pt-3 mt-2 border-t border-gray-100">
                                <div className="flex items-center gap-3 px-3 py-2">
                                    <FiUser className="w-4 h-4 text-gray-500" />
                                    <p className="text-sm text-gray-600">
                                        Signed in as <span className="font-medium text-gray-900">{user.name}</span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarSection;
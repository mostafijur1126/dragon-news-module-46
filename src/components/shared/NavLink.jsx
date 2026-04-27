"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// interface NavLinkProps {
//     href: string;
//     children: React.ReactNode;
//     className?: string;
//     onClick?: () => void;
// }

const NavLink = ({ href, children, className = "", onClick }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    
    return (
        <Link 
            href={href} 
            onClick={onClick}
            className={`
                relative px-3 py-2 text-sm font-medium transition-all duration-200
                ${isActive 
                    ? "text-red-600" 
                    : "text-gray-700 hover:text-red-500"
                }
                ${className}
            `}
        >
            {children}
            
            {/* Active Indicator - Bottom Border with Animation */}
            {isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
            )}
            
            {/* Hover Indicator - Gentle underline effect */}
            {!isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
            )}
        </Link>
    );
};

export default NavLink;
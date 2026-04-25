"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link href={href} className={`${isActive ? "border-b border-red-600" : ""}`}>
            {children}
        </Link>
    );
};

export default NavLink;
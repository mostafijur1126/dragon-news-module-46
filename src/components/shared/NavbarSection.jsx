import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvarer from "@/assets/user.png"
import NavLink from './NavLink';

const NavbarSection = () => {
    return (
        <div className='max-w-7xl mx-auto flex items-center justify-between py-8'>
            <div></div>
            <div className='flex gap-3'>
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/about"}>About</NavLink>
                <NavLink href={"/career"}>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <Image src={userAvarer} alt='user avater' width={40} height={40}></Image>
                <Link href="/auth/login"><button className='btn bg-gray-800 text-white'>Login</button></Link>
            </div>
        </div>
    );
};

export default NavbarSection;
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvarer from "@/assets/user.png"
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const NavbarSection = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(isPending);
    return (
        <div className='max-w-7xl mx-auto flex items-center justify-between py-8'>
            <div></div>
            <div className='flex gap-3'>
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/about"}>About</NavLink>
                <NavLink href={"/career"}>Career</NavLink>
            </div>
            {isPending ? <span className="loading loading-dots loading-xs"></span> : user ? (
                <div className='flex items-center gap-3'>
                    <p>Hi! {user.name}</p>
                    <Image
                        src={user?.image || userAvarer}
                        alt="user avatar"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <button onClick={async () => await authClient.signOut()} className='btn bg-gray-800 text-white'>Logout</button>
                </div>
            ) : (
                <Link href="/auth/login"><button className='btn bg-gray-800 text-white'>Login</button></Link>
            )}
        </div>
    );
};

export default NavbarSection;
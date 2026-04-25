import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
import { format } from "date-fns";

const HeaderSection = () => {
    return (
        <div className='text-center space-y-2 py-5'>
            <Image src={logo} alt='logo' width={300} height={200} className='mx-auto'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, LLLL MM , yyyy")}</p>
        </div>
    );
};

export default HeaderSection;

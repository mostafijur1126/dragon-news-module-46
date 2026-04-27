'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimImg from '@/assets/swimming.png'
import clsImg from '@/assets/class.png'
import play from '@/assets/playground.png'
import bg from '@/assets/bg.png'




const RightSite = () => {
  const handerGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }
  const handerGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    })
  }
  return (
    <div className=" col-span-3">
      <h1 className="font-bold text-xl">Login With</h1>
      <div className="flex flex-col space-y-3 mt-2.5">
        <button onClick={handerGoogleSignIn} className="btn text-blue-500 border border-blue-500"><FaGoogle />Login with Google</button>
        <button onClick={handerGithubSignIn} className="btn border-black"><FaGithub />Login with Github</button>
      </div>
      <div className='bg-gray-50 p-5'>
        <h2>Find Us On</h2>
        <div className='border p-3 rounded-md'>
          <span className='flex items-center gap-2'><FaFacebook /> Facebook</span>
        </div>
        <div className='border p-3 rounded-md'>
          <span className='flex items-center gap-2'><FaTwitter /> Twitter</span>
        </div>
        <div className='border p-3 rounded-md'>
          <span className='flex items-center gap-2'><FaInstagram /> Instagram</span>
        </div>
      </div>
      <div>
        <h2>Q-Zone</h2>
        <div>
          <Image
          src={swimImg}
          alt='s'
          width={100}
          height={100}
          className='w-auto h-auto'
          ></Image>
        </div>
        <div>
          <Image
          src={clsImg}
          alt='s'
          width={100}
          height={100}
          className='w-auto h-auto'
          ></Image>
        </div>
        <div>
          <Image
          src={play}
          alt='s'
          width={100}
          height={100}
          className='w-auto h-auto'
          ></Image>
        </div>
      </div>
      <div>
        <Image
          src={bg}
          alt='s'
          width={100}
          height={100}
          className='w-auto h-auto'
          ></Image>
      </div>
    </div>
  );
};

export default RightSite;
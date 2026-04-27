'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSite = () => {
  const handerGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data,"google")
  }
  const handerGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github"
    })
    // console.log(data,);
  }
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(session,"user");
  return (
    <div className=" col-span-3">
      <h1 className="font-bold text-xl">Login With</h1>
      <div className="flex flex-col space-y-3 mt-2.5">
        <button onClick={handerGoogleSignIn} className="btn text-blue-500 border border-blue-500"><FaGoogle />Login with Google</button>
        <button onClick={handerGithubSignIn} className="btn border-black"><FaGithub />Login with Github</button>
      </div>
    </div>
  );
};

export default RightSite;
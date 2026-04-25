import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSite = () => {
    return (
        <div className=" col-span-3">
        <h1 className="font-bold text-xl">Login With</h1>
        <div className="flex flex-col space-y-3 mt-2.5">
          <button className="btn text-blue-500 border border-blue-500"><FaGoogle />Login with Google</button>
          <button className="btn border-black"><FaGithub />Login with Github</button>
        </div>
      </div>
    );
};

export default RightSite;
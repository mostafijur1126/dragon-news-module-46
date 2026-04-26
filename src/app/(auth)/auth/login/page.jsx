'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const formHendel = async (data) => {
        const { email, password} = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });
        if (res) {
            alert("singIn successfull");
        }
        if (error) {
            alert(error.message)
        }
    }
    return (
        <div className='container mx-auto flex items-center justify-center h-[50vh] bg-gray-50'>
            <div className='bg-white border-base-300 rounded-box w-xs border p-8'>
                <h2 className='text-center text-2xl font-semibold'>Login your account</h2>
                <form onSubmit={handleSubmit(formHendel)} className="fieldset ">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input {...register("email")} type="email" className="input validator" placeholder="Email" required />
                        <p className="validator-hint hidden">Required</p>
                    </fieldset>

                    <label className="fieldset relative">
                        <span className="label">Password</span>
                        <input {...register("password")} type={`${showPassword ? "text" : "password"}`} className="input validator" placeholder="Password" required />
                        <span className='absolute top-11 right-5' onClick={()=>setShowPassword(!showPassword)}>{ showPassword ? <FaEye />:<FaEyeSlash />}</span>
                        <span className="validator-hint hidden">Required</span>
                    </label>

                    <button className="btn btn-neutral mt-4" type="submit">Login</button>
                    <p>Dont have an account ? <Link href="/auth/register"><span className='text-red-500 font-bold'>Register</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
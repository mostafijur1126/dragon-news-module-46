'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {register,handleSubmit} = useForm();

    const formHendel = (data) => {
        console.log(data);
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

                    <label className="fieldset">
                        <span className="label">Password</span>
                        <input {...register("password")} type="password" className="input validator" placeholder="Password" required />
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
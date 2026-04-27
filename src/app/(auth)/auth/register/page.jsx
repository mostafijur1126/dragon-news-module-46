'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaCamera, FaGoogle, FaGithub } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [serverError, setServerError] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const password = watch('password');

    const formHandle = async (data) => {
        setServerError('');
        const { name, email, password, photo } = data;
        
        try {
            const { data: res, error } = await authClient.signUp.email({
                name: name,
                email: email,
                password: password,
                image: photo,
                callbackURL: "/",
            });
            
            if (res) {
                alert("Account created successfully! Redirecting to login...");
            }
            if (error) {
                setServerError(error.message || "Registration failed. Please try again.");
            }
        } catch (err) {
            setServerError("Something went wrong. Please try again.");
        }
    }

    const handlePhotoUrlChange = (e) => {
        const url = e.target.value;
        setPreviewImage(url);
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                {/* Logo/Brand Area */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl shadow-lg mb-4">
                        <FiUserPlus className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Create Account</h2>
                    <p className="text-gray-500 mt-2 text-sm">Join Dragon News today</p>
                </div>

                {/* Register Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-6 sm:p-8">
                        {/* Server Error Alert */}
                        {serverError && (
                            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-600 text-sm text-center">{serverError}</p>
                            </div>
                        )}

                        {/* Register Form */}
                        <form onSubmit={handleSubmit(formHandle)} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        {...register("name", { 
                                            required: "Full name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Name must be at least 2 characters"
                                            }
                                        })}
                                        type="text"
                                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                        placeholder="John Doe"
                                    />
                                </div>
                                {errors.name && (
                                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Photo URL Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Photo URL
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaCamera className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        {...register("photo", { 
                                            required: "Photo URL is required",
                                            pattern: {
                                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i,
                                                message: "Please enter a valid image URL"
                                            }
                                        })}
                                        type="text"
                                        onChange={handlePhotoUrlChange}
                                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                </div>
                                {errors.photo && (
                                    <p className="mt-1 text-xs text-red-500">{errors.photo.message}</p>
                                )}
                                
                                {/* Image Preview */}
                                {previewImage && !errors.photo && (
                                    <div className="mt-2 flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                                            <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-xs text-gray-500">Preview</span>
                                    </div>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        {...register("email", { 
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        type="email"
                                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        {...register("password", { 
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            },
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)/,
                                                message: "Password must contain at least one letter and one number"
                                            }
                                        })}
                                        type={showPassword ? "text" : "password"}
                                        className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                                )}
                                <p className="mt-1 text-xs text-gray-400">
                                    Must be at least 6 characters with letters and numbers
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Creating account...
                                    </>
                                ) : (
                                    <>
                                        <FiUserPlus className="w-4 h-4" />
                                        Create Account
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        {/* Social Sign Up Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group"
                            >
                                <FaGoogle className="text-red-500 group-hover:scale-110 transition-transform" />
                                <span>Google</span>
                            </button>
                            <button
                                onClick={handleGithubSignIn}
                                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium hover:bg-gray-900 transition-all duration-200 group"
                            >
                                <FaGithub className="group-hover:scale-110 transition-transform" />
                                <span>GitHub</span>
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="text-center text-sm text-gray-600 mt-6">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="text-red-600 font-semibold hover:text-red-700 hover:underline transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
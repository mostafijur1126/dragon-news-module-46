import Image from 'next/image';
import React from 'react';
import { format } from "date-fns";
import { FiCalendar, FiClock, FiEye } from 'react-icons/fi';
import logo from "@/assets/logo.png";

const HeaderSection = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEEE, MMMM dd, yyyy");
    const formattedTime = format(currentDate, "h:mm a");

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-4 md:py-6">
                        <div className="flex justify-center mb-3 md:mb-4">
                            <div className="relative w-40 sm:w-48 md:w-56 lg:w-64">
                                <Image
                                    src={logo}
                                    alt="News Organization Logo"
                                    width={300}
                                    height={200}
                                    loading="eager"
                                    priority
                                    className="mx-auto h-auto w-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
                                Journalism Without Fear or Favour
                            </p>
                        </div>

                        <div className="mt-3 md:mt-4 pt-3 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-gray-400 font-mono">
                                <div className="flex items-center gap-1.5">
                                    <FiCalendar className="w-3.5 h-3.5" />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
                                <div className="flex items-center gap-1.5">
                                    <FiClock className="w-3.5 h-3.5" />
                                    <span>{formattedTime} (Local Time)</span>
                                </div>
                                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
                                <div className="flex items-center gap-1.5">
                                    <FiEye className="w-3.5 h-3.5" />
                                    <span>Est. 1984</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </header>
    );
};

export default HeaderSection;
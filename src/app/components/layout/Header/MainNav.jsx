// src/components/layout/Header/MainNav.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { RiUserSmileLine, RiDashboardFill, RiLogoutCircleRLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import logoImage from "@/assets/images/logo.png";

export default function MainNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-16 h-16">
             <Image src={logoImage} alt="Hospital Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#512D6D] font-black text-xl leading-none tracking-tighter uppercase">Sonaimuri</span>
            <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">Mother & Child Care</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-[13px] text-gray-600">
          <Link href="/" className="hover:text-[#512D6D] transition-colors">HOME</Link>
          <Link href="/doctors" className="hover:text-[#512D6D] transition-colors">DOCTORS</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#512D6D]">
            SERVICES <IoIosArrowDown className="text-[10px]" />
          </div>
          <Link href="/about" className="hover:text-[#512D6D] transition-colors">ABOUT</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/appointment" className="hidden sm:flex bg-[#512d6d] text-white px-5 py-2.5 rounded-md text-[12px] font-bold items-center gap-2 hover:bg-[#35055a] transition-all shadow-md shadow-rose-100">
            APPOINTMENT <HiOutlineArrowRight />
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full p-1 pr-3 hover:shadow-sm transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-[#D3BFDF] flex items-center justify-center text-[#512D6D]">
                <RiUserSmileLine className="text-lg" />
              </div>
              <span className="text-[12px] font-bold text-gray-700 hidden md:block">Shawon.</span>
              <IoIosArrowDown className={`text-gray-400 text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-100 rounded-xl shadow-xl p-2 z-50">
                <Link href="/admin" className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-[#F3E8FF] hover:text-[#512D6D] transition-all text-sm font-semibold">
                  <RiDashboardFill className="text-lg text-[#512D6D]" /> Dashboard
                </Link>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-[#512d6d] hover:bg-rose-50 transition-all text-sm font-semibold mt-1 border-t border-gray-50 pt-2">
                  <RiLogoutCircleRLine className="text-lg" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
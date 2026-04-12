"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineArrowRight, HiMenu, HiX } from 'react-icons/hi';
import logoImage from "@/assets/images/logo.png";

export default function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="bg-white shadow-sm py-3 px-5 sticky top-0 z-100">
      <div className="max-width-wrapper flex justify-between items-center">
        
        {/* --- LOGO SECTION --- */}
        <Link href="/" className="flex items-center gap-1">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
             <Image src={logoImage} alt="Hospital Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className="text-[#512D6D] font-black text-lg md:text-xl leading-none tracking-tighter uppercase">Sonaimuri</span>
            <span className="text-[8px] md:text-[9px] text-gray-500 font-bold tracking-widest uppercase">Maa O Shishu Hospital (Pvt.)</span>
          </div>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-[13px] text-gray-600">
          <Link href="/" className="hover:text-[#512D6D]">HOME</Link>
          <Link href="/doctor" className="hover:text-[#512D6D]">DOCTORS</Link>
          <Link href="/departments" className="hover:text-[#512D6D] transition-colors">DEPARTMENTS</Link>
          <Link href="/about" className="hover:text-[#512D6D]">ABOUT</Link>
          <Link href="/contact" className="hover:text-[#512D6D]">CONTACT</Link>
          <Link href="/diagnostic" className="hover:text-[#512D6D]">DIAGNOSTIC</Link>
        </div>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="tel:+8801705319271" className="hidden sm:flex bg-[#512d6d] text-white px-5 py-2.5 rounded-md text-[12px] font-bold items-center gap-2 hover:bg-[#35055a] shadow-md shadow-purple-100 transition-all">
            BOOK APPOINTMENT <HiOutlineArrowRight />
          </Link>

          {/* User Profile */}
          {/* <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full p-1 pr-3">
              <div className="w-8 h-8 rounded-full bg-[#D3BFDF] flex items-center justify-center text-[#512D6D]"><RiUserSmileLine className="text-lg" /></div>
              <span className="text-[12px] font-bold text-gray-700 hidden md:block">Shawon.</span>
              <IoIosArrowDown className={`text-gray-400 text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-100 rounded-xl shadow-xl p-2 z-50">
                <Link href="/admin" className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-[#F3E8FF] hover:text-[#512D6D] text-sm font-semibold">
                  <RiDashboardFill className="text-lg" /> Dashboard
                </Link>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-[#512d6d] mt-1 pt-2 hover:bg-rose-50 text-sm font-semibold">
                  <RiLogoutCircleRLine className="text-lg" /> Logout
                </button>
              </div>
            )}
          </div> */}

          {/* Hamburger (Mobile Only) */}
          <button className="lg:hidden text-2xl text-[#512D6D] p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <HiMenu />
          </button>
        </div>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity z-101 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={closeMenus}>
        <div 
          className={`absolute right-0 top-0 h-full w-full bg-white p-5 transition-transform duration-300 shadow-2xl ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Logo Header */}
          <div className="flex justify-between items-center mb-10 border-b border-[#D3BFDF] pb-4">
            <div className="flex items-center gap-2">
               <Image src={logoImage} alt="Logo" width={64} height={64} />
            </div>
            <HiX className="text-2xl text-gray-400" onClick={closeMenus} />
          </div>
          
          <div className="flex flex-col gap-5 font-bold text-gray-600 text-sm">
            <Link href="/" onClick={closeMenus}>HOME</Link>
            <Link href="/doctor" onClick={closeMenus}>DOCTORS</Link>
            <Link href="/departments" onClick={closeMenus} className="hover:text-[#512D6D] transition-colors">DEPARTMENTS</Link>
            <Link href="/about" onClick={closeMenus}>ABOUT US</Link>
            <Link href="/contact" onClick={closeMenus}>CONTACT</Link>
            <Link href="/diagnostic" onClick={closeMenus}>DIAGNOSTIC</Link>
            <hr className="my-4 border-[#D3BFDF]" />
            <Link href="tel:+8801705319271" className="bg-[#512d6d] text-white p-4 rounded-lg text-center shadow-lg shadow-purple-100" onClick={closeMenus}>
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
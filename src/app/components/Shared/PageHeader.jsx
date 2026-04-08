"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';

import defaultBgImage from "@/assets/images/Medical_professionals.jpeg"; 

export default function PageHeader({ 
  title, 
  breadcrumb, 
  bgImage = defaultBgImage 
}) {
  return (
    <div className="relative w-full h-75 md:h-100 flex items-center justify-center overflow-hidden">
      
      <Image 
        src={bgImage} 
        alt={`${title} - Sonaimuri Maa O Shishu Hospital`}
        fill
        className="object-cover object-center" 
        priority
      />

      {/* Brand Color Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#512D6D]/95 via-[#512D6D]/85 to-[#916BBF]/85"></div>

      {/* Text Content & Breadcrumbs */}
      <div className="relative z-10 text-center text-white px-5 w-full max-w-7xl mx-auto mb-10">
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight drop-shadow-lg">
          {title}
        </h1>

        {/* Premium "Glass" Breadcrumb Navigation */}
        <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#D3BFDF] bg-white/10 w-fit mx-auto px-6 py-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
            <FaHome className="text-lg pb-0.5" /> Home
          </Link>
          
          <FaChevronRight className="text-[10px] md:text-xs text-[#916BBF]" />
          
          <span className="text-white drop-shadow-sm">
            {breadcrumb}
          </span>
        </div>
      </div>

      {/* 2. FIXED: Added translate-y-[2px] to kill the thin line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
        <svg 
          className="relative block w-full h-[60px] md:h-[90px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,120 C300,120 400,0 1200,80 L1200,120 L0,120 Z" 
            className="fill-[#FFFFFF]" 
          ></path>
        </svg>
      </div>

    </div>
  );
}
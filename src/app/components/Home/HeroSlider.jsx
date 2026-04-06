"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import { FaUserMd } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BgImage1 from "@/assets/images/hero-bg-1.png";
import BgImage2 from "@/assets/images/hero-bg-2.png";

const slides = [
  {
    id: 1,
    image: BgImage1,
    tagline: "Specialized Maternity Excellence",
    title: "Safe Motherhood \n Starts Here",
    description: "Experience world-class prenatal, delivery, and postnatal care. Our expert obstetrics team ensures a joyful journey to motherhood.",
    buttonLink: "/services/maternity",
  },
  {
    id: 2,
    image: BgImage2,
    tagline: "Pediatric & Neonatal Care",
    title: "Protecting Little \n Smiles",
    description: "From vaccination to advanced NICU care, our pediatric specialists are dedicated to your child's health and happiness.",
    buttonLink: "/services/pediatrics",
  }
];

export default function HeroSlider() {
  return (
    <section className="relative h-125 md:h-150 lg:h-[calc(100vh-140px)] w-full overflow-hidden bg-[#2d1244]">
      <Swiper
  effect={"fade"}
  speed={1000}
  loop={true}
  parallax={true}
  /* Ensure pagination is configured like this */
  pagination={{ 
    clickable: true, 
    el: ".custom-pagination",
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  }}
  navigation={{
    nextEl: ".next-arr",
    prevEl: ".prev-arr",
  }}
  modules={[EffectFade, Pagination, Navigation]}
  className="h-full group"
>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* 1. Background Image with DEEPER Overlays */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt="Hospital Banner"
                fill
                priority
                className="object-cover scale-105 animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-[#1a0a29]/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-linear-to-r from-[#1a0a29] via-[#1a0a29]/40 to-transparent opacity-90" />
            </div>

            {/* 2. Content Area */}
            <div className="max-width-wrapper relative z-10 h-full flex items-center justify-center lg:justify-start">
              <div className="text-center lg:text-left lg:border-l-2 border-[#D3BFDF]/30 ml-0 lg:ml-2 pl-0 lg:pl-12 max-w-[95%] md:max-w-full">
                {/* Tagline */}
                <div className="inline-flex items-center gap-3 md:gap-4 mb-4 md:mb-6 opacity-0 animate-fade-in-down">
                  <span className="hidden md:block h-0.5 w-8 bg-[#D3BFDF]"></span>
                  <h4 className="text-[#D3BFDF] font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] drop-shadow-md">
                    {slide.tagline}
                  </h4>
                </div>

                {/* Title (Standardized Left Align) */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-black mb-8 uppercase whitespace-pre-line drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] opacity-0 animate-title-grow">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-white/80 text-sm md:text-lg mb-10 max-w-xl leading-relaxed font-medium drop-shadow-md opacity-0 animate-fade-in-up">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 md:gap-4 opacity-0 animate-fade-in-up-delay">
                  <Link
                    href={slide.buttonLink}
                    className="w-full sm:w-auto bg-[#512d6d] text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-black text-xs md:text-sm transition-all hover:bg-[#35055a] shadow-2xl flex items-center justify-center gap-2"
                  >
                    EXPLORE SERVICES <HiOutlineArrowRight />
                  </Link>

                  <Link
                    href="/doctors"
                    className="w-full sm:w-auto backdrop-blur-md border-2 border-white/40 text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-black text-xs md:text-sm hover:bg-white hover:text-[#512D6D] transition-all flex items-center justify-center gap-2"
                  >
                    <FaUserMd className="text-lg" /> FIND DOCTOR
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* 3. Navigation Arrows - Hidden on Mobile */}
        <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-between px-4 md:px-10">
          <button className="prev-arr pointer-events-auto hidden md:flex w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/20 items-center justify-center text-white text-xl md:text-2xl transition-all hover:bg-white hover:text-[#512D6D] hover:scale-110 group-hover:translate-x-2">
            <HiOutlineArrowLeft />
          </button>
          <button className="next-arr pointer-events-auto hidden md:flex w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/20 items-center justify-center text-white text-xl md:text-2xl transition-all hover:bg-white hover:text-[#512D6D] hover:scale-110 group-hover:-translate-x-2">
            <HiOutlineArrowRight />
          </button>
        </div>

        {/* 4. Progress-Bar Style Pagination */}
        <div className="custom-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4"></div>
      </Swiper>
    </section>
  );
}



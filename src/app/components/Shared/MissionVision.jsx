"use client";
import React from 'react';
import Image from 'next/image';
import { FaBullseye, FaBinoculars, FaCheckCircle } from 'react-icons/fa';
import missionImage from "@/assets/images/mission-image.jpeg";

export default function MissionVision() {
  return (
    <section className="py-14 lg:py-24 relative overflow-hidden px-5">
      
      <div className="max-width-wrapper relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            Our Purpose
          </span>
          <h2 className="text-[#512D6D] text-3xl md:text-5xl font-black mb-6 leading-tight">
            Dedicated to the Future of Healthcare
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative group">
            <div className="relative w-full aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-10">
              <Image 
                src={missionImage} 
                alt="Compassionate Healthcare at Sonaimuri Hospital"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#512D6D]/60 to-transparent"></div>
            </div>
            
            <div className="absolute top-8 -right-8 w-full h-full border-4 border-[#D3BFDF] rounded-[2.5rem] -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 z-20 animate-bounce-slow">
              <div className="w-12 h-12 bg-[#F3E8FF] text-[#916BBF] rounded-full flex items-center justify-center text-2xl">
                <FaCheckCircle />
              </div>
              <div>
                <p className="text-[#512D6D] font-black text-xl leading-none">100%</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Trusted Care</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8 mt-10 lg:mt-0">
            
            {/* Mission Card */}
            <div className="bg-[#512D6D] rounded-3xl p-8 md:p-10 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 text-white/5 text-[150px] group-hover:rotate-12 transition-transform duration-500">
                <FaBullseye />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#916BBF] text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                  <FaBullseye />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Our Mission</h3>
                <p className="text-[#D3BFDF] leading-relaxed text-sm md:text-base text-justify">
                  To deliver compassionate, comprehensive, and patient-centered healthcare services. We strive to heal, comfort, and improve the health of the community we serve by setting the highest standard of medical excellence, specifically focusing on maternal and pediatric care.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white border-2 border-[#F3E8FF] rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-[#D3BFDF] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 text-[#512D6D]/5 text-[150px] group-hover:-rotate-12 transition-transform duration-500">
                <FaBinoculars />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#F3E8FF] text-[#512D6D] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-white">
                  <FaBinoculars />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#512D6D] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                  To be the most trusted healthcare partner in Noakhali, recognized for our unwavering commitment to maternal and child health, continuous medical innovation, and exceptional patient experiences that inspire hope and build healthier generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
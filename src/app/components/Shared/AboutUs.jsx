"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineBadgeCheck, HiOutlineArrowCircleRight } from 'react-icons/hi';
import { FaMicroscope, FaChild, FaFemale, FaClock } from 'react-icons/fa';
import MainDoctorImg from "@/assets/images/hospital-team.png";
import LabImg from "@/assets/images/modern-lab.png";

const clinicalFeatures = [
  { 
    id: 1, 
    title: "Maternal Excellence", 
    desc: "Comprehensive prenatal to postnatal care.",
    icon: <FaFemale />, 
  },
  { 
    id: 2, 
    title: "Neonatal ICU", 
    desc: "Advanced life support for newborns.",
    icon: <FaChild />, 
  },
  { 
    id: 3, 
    title: "Modern Diagnostics", 
    desc: "High-precision lab & imaging reports.",
    icon: <FaMicroscope />, 
  },
  { 
    id: 4, 
    title: "Emergency 24/7", 
    desc: "Ready for any medical crisis, always.",
    icon: <FaClock />, 
  },
];

export default function AboutUs() {
  return (
    <section className="py-24 bg-[#FAFAFE] relative px-5">
      <div className="max-width-wrapper">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: The "Visionary" Image Layout */}
          <div className="flex-1 relative w-full group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-12 border-white shadow-2xl">
              <Image 
                src={MainDoctorImg} 
                alt="Our Medical Team" 
                className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Lab Image */}
            <div className="absolute -bottom-8 -right-8 w-1/2 h-64 rounded-4xl overflow-hidden border-8 border-white shadow-xl z-20 hidden md:block">
              <Image 
                src={LabImg} 
                alt="Our Laboratory" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Legacy Badge */}
            <div className="absolute -top-6 -left-6 bg-linear-to-br from-[#512D6D] to-[#916BBF] text-white p-6 rounded-2xl shadow-xl z-30 transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
              <div className="text-3xl font-black italic tracking-tighter leading-none">Since 2025</div>
              <p className="text-[10px] uppercase font-bold tracking-widest mt-1 opacity-80">Serving Humanity</p>
            </div>
          </div>

          {/* RIGHT: The "Mission" Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#916BBF] font-bold text-xs uppercase tracking-[0.3em]">
                <HiOutlineBadgeCheck className="text-xl" /> 
                Our Legacy of Trust
              </div>
              <h2 className="text-[#512D6D] text-2xl md:text-4xl font-black leading-tight uppercase">
                Redefining Healthcare <br /> 
                <span className="text-[#916BBF]">For Mothers & Children</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                At Sonaimuri Maa O Shishu Hospital (Pvt.), our journey is defined by the smiles of healthy mothers and thriving children. We bridge the gap between advanced medical technology and heart-touching compassion, ensuring that high-quality maternity and pediatric care is never out of reach.
              </p>
            </div>

            {/* Unique Vertical Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {clinicalFeatures.map((item) => (
                <div key={item.id} className="p-5 rounded-2xl bg-white border-b-4 border-transparent hover:border-[#916BBF] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-[#512D6D] text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-[#512D6D] font-black text-sm mb-1 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-tight font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Branded CTA */}
            <div className="pt-4">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-4 bg-[#512D6D] text-white pl-10 pr-2 py-2 rounded-full font-bold text-sm transition-all hover:bg-[#35055a] shadow-lg"
              >
                DISCOVER OUR STORY
                <div className="bg-white text-[#512D6D] p-3 rounded-full group-hover:translate-x-1 transition-transform">
                  <HiOutlineArrowCircleRight className="text-xl" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#F3E8FF] rounded-full blur-[100px] opacity-50 -z-10"></div>
    </section>
  );
}
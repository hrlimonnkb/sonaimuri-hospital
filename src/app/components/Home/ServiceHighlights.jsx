"use client";
import React from 'react';
import Link from 'next/link';
import { FaHospitalAlt, FaUserMd, FaStethoscope, FaHeadset } from 'react-icons/fa';

const highlights = [
  {
    id: 1,
    subtitle: "24/7 Emergency",
    title: "Nearest Hospital",
    icon: <FaHospitalAlt className="text-4xl" />,
    color: "from-red-400 to-red-500",
    link: "/emergency",
  },
  {
    id: 2,
    subtitle: "Expert Consultation",
    title: "Live Doctor Chat",
    icon: <FaUserMd className="text-4xl" />,
    color: "from-[#512D6D] to-[#916BBF]",
    link: "/doctors",
  },
  {
    id: 3,
    subtitle: "Advanced Care",
    title: "Specialized Dept.",
    icon: <FaStethoscope className="text-4xl" />,
    color: "from-teal-400 to-teal-500",
    link: "/departments",
  },
  {
    id: 4,
    subtitle: "Always Active",
    title: "Help & Support",
    icon: <FaHeadset className="text-4xl" />,
    color: "from-orange-400 to-orange-500",
    link: "/contact",
  }
];

export default function ServiceHighlights() {
  return (
    <section className="relative mt-0 sm:-mt-16 z-40 pb-20 pt-10 sm:pt-0 px-5">
      <div className="max-width-wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Decorative Corner Wave */}
              <div className={`absolute top-0 left-0 w-32 h-32 bg-linear-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-br-full -translate-x-10 -translate-y-10`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className={`mb-6 p-5 rounded-full bg-linear-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <span className="text-[#916BBF] font-bold text-xs uppercase tracking-widest mb-2">
                  {item.subtitle}
                </span>
                <h3 className="text-[#512D6D] font-black text-xl lg:text-2xl tracking-tight">
                  {item.title}
                </h3>
                
                {/* Subtle underline effect on hover */}
                <div className={`w-0 h-1 mt-4 rounded-full bg-linear-to-r ${item.color} group-hover:w-16 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { 
  FaFemale, 
  FaBaby, 
  FaHeartbeat, 
  FaStethoscope, 
  FaBone, 
  FaEye, 
  FaTooth, 
  FaBrain,
  FaLungs,
  FaMicroscope
} from 'react-icons/fa';

const departments = [
  { id: 1, name: "Gynecology & Obs.", icon: <FaFemale />, link: "/departments/gynecology" },
  { id: 2, name: "Neonatology (NICU)", icon: <FaBaby />, link: "/departments/neonatology" },
  { id: 3, name: "Pediatrics", icon: <FaStethoscope />, link: "/departments/pediatrics" },
  { id: 4, name: "Cardiology", icon: <FaHeartbeat />, link: "/departments/cardiology" },
  { id: 5, name: "Orthopedics", icon: <FaBone />, link: "/departments/orthopedics" },
  { id: 6, name: "Ophthalmology", icon: <FaEye />, link: "/departments/ophthalmology" },
  { id: 7, name: "Dental Care", icon: <FaTooth />, link: "/departments/dental" },
  { id: 8, name: "Child Psychiatry", icon: <FaBrain />, link: "/departments/psychiatry" },
  { id: 9, name: "Pulmonology", icon: <FaLungs />, link: "/departments/pulmonology" },
  { id: 10, name: "Pathology Lab", icon: <FaMicroscope />, link: "/departments/pathology" },
];

export default function SpecialistDepartments() {
  return (
    <section className="py-20 px-5">
      <div className="max-width-wrapper">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            Categories
          </span>
          <h2 className="text-[#512D6D] text-2xl md:text-5xl font-black">
            Browse By Specialist
          </h2>
        </div>

        {/* 12-Card Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 md:gap-3.5">
          {departments.map((dept) => (
            <Link 
              href={dept.link} 
              key={dept.id}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-[#D3BFDF] transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Container with Brand Colors */}
              <div className="w-20 h-20 rounded-full bg-[#F3E8FF] flex items-center justify-center text-4xl text-[#512D6D] mb-4 group-hover:bg-[#512D6D] group-hover:text-white transition-colors duration-300">
                {dept.icon}
              </div>

              {/* Department Name */}
              <h3 className="text-[#512D6D] font-bold text-sm md:text-base text-center mb-5 leading-tight group-hover:text-[#916BBF] transition-colors">
                {dept.name}
              </h3>

              {/* Arrow Button Indicator */}
              <div className="mt-auto w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#916BBF] group-hover:bg-[#916BBF] group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                <HiOutlineArrowRight className="text-lg" />
              </div>
            </Link>
          ))}
        </div>

        {/* 'View All' CTA Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/departments"
            className="inline-flex items-center gap-2 bg-[#512D6D] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#35055a] transition-colors shadow-lg hover:shadow-xl"
          >
            All Services <HiOutlineArrowRight className="text-lg" />
          </Link>
        </div>

      </div>
    </section>
  );
}
"use client";
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { 
  FaFemale, 
  FaBaby, 
  FaHeartbeat, 
  FaStethoscope, 
  FaBone, 
  FaProcedures,
  FaChild,
  FaAllergies,
  FaUserMd,
  FaTint
} from 'react-icons/fa';

const departments = [
  { id: 1, name: "Surgery", icon: <FaProcedures />, link: "/departments/surgery" },
  { id: 2, name: "Internal Medicine", icon: <FaStethoscope />, link: "/departments/medicine" },
  { id: 3, name: "Pediatrics", icon: <FaChild />, link: "/departments/pediatrics" },
  { id: 4, name: "Orthopedics", icon: <FaBone />, link: "/departments/orthopedics" },
  { id: 5, name: "Gynecology & Obs.", icon: <FaFemale />, link: "/departments/gynecology" },
  { id: 6, name: "Cardiology", icon: <FaHeartbeat />, link: "/departments/cardiology" },
  { id: 7, name: "Dermatology & VD", icon: <FaAllergies />, link: "/departments/dermatology" },
  { id: 8, name: "ENT", icon: <FaUserMd />, link: "/departments/ent" },
  { id: 9, name: "Diabetology", icon: <FaTint />, link: "/departments/diabetology" },
  { id: 10, name: "Neonatology (NICU)", icon: <FaBaby />, link: "/departments/neonatology" },
];

export default function SpecialistDepartments({ hideHeader = false }) {
  return (
    <section className="py-14 lg:py-20 px-5">
      <div className="max-width-wrapper">
        
        {/* Section Header - Only shows if hideHeader is false */}
        {!hideHeader && (
          <div className="text-center mb-8 md:mb-16">
            <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
              Categories
            </span>
            <h2 className="text-[#512D6D] text-2xl md:text-5xl font-black">
              Browse By Specialist
            </h2>
          </div>
        )}

        {/* 10-Card Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 md:gap-3.5">
          {departments.map((dept) => (
            <div 
              href={dept.link} 
              key={dept.id}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-[#D3BFDF] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-full bg-[#F3E8FF] flex items-center justify-center text-4xl text-[#512D6D] mb-4 group-hover:bg-[#512D6D] group-hover:text-white transition-colors duration-300">
                {dept.icon}
              </div>

              <h3 className="text-[#512D6D] font-bold text-sm md:text-base text-center mb-5 leading-tight group-hover:text-[#916BBF] transition-colors">
                {dept.name}
              </h3>

              <div className="mt-auto w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#916BBF] group-hover:bg-[#916BBF] group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45">
                <HiOutlineArrowRight className="text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
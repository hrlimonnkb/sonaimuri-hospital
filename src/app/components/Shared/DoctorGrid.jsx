"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaHospitalAlt, FaRegCalendarAlt, FaUserMd } from 'react-icons/fa';
import AppointmentModal from './AppointmentModal';
import Link from 'next/link';

export default function DoctorGrid({ doctors }) {
  const [activeDoctor, setActiveDoctor] = useState(null);
  const closeModal = () => setActiveDoctor(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className="group bg-white rounded-4xl p-6 md:p-8 border border-[#D3BFDF]/30 shadow-md hover:shadow-2xl hover:border-[#D3BFDF] transition-all duration-300 hover:-translate-y-2 flex flex-col"
          >
            {/* Profile Image & Department Badge */}
            <div className="flex flex-col items-center mb-6 relative">
              <div className="bg-[#F3E8FF] text-[#916BBF] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider z-10 border border-white shadow-sm">
                {doctor.department}
              </div>
              
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-[#F3E8FF] group-hover:border-[#916BBF] transition-colors duration-300 overflow-hidden relative mt-4 bg-gray-50 flex items-center justify-center shadow-inner">
                <FaUserMd className="text-5xl text-gray-300 absolute" />
                <Image 
                  src={doctor.image} 
                //   alt={doctor.name}
                  fill
                  className="object-cover relative z-10"
                />
              </div>
            </div>

            {/* Name & Designation */}
            <div className="text-center mb-6 grow">
              <h3 className="text-xl md:text-2xl font-black text-[#512D6D] mb-2 leading-tight">
                <Link href={`/doctor/${doctor.slug}`}>
                  {doctor.name}
                </Link>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed px-2 line-clamp-2">
                {doctor.designation}
             </p>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6"></div>

            {/* Info List */}
            <div className="space-y-3 mb-8 px-2">
              <div className="flex items-start gap-3">
                <FaHospitalAlt className="text-[#916BBF] mt-1 text-sm shrink-0" />
                <span className="text-sm text-gray-600 font-medium leading-snug">
                  {doctor.hospital}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FaRegCalendarAlt className="text-[#916BBF] mt-1 text-sm shrink-0" />
                <span className="text-sm text-gray-600 font-medium leading-snug">
                  {doctor.schedule}
                </span>
              </div>
            </div>

            {/* Appointment Button */}
            <div className="mt-auto">
              <button 
                onClick={() => setActiveDoctor(doctor)} 
                className="w-full flex items-center justify-center gap-2 bg-[#F3E8FF] text-[#512D6D] py-4 rounded-2xl font-black text-sm transition-all duration-300 hover:bg-[#512D6D] hover:text-white shadow-sm hover:shadow-md"
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        ))}
      </div>

      <AppointmentModal doctor={activeDoctor} onClose={closeModal} />
    </>
  );
}
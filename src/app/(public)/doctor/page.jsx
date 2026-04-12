"use client";
import React from 'react';
import { doctorsData } from '@/data/doctors';
import DoctorGrid from '@/app/components/Shared/DoctorGrid';
import PageHeader from '@/app/components/Shared/PageHeader';

export default function DoctorsPage() {
  return (
    <main>
      
      {/* --- REUSABLE PAGE HEADER --- */}
      <PageHeader 
        title="Our Specialist Doctors" 
        breadcrumb="Doctors" 
      />

      {/* --- DOCTORS GRID SECTION --- */}
      <div className="py-14 lg:py-20 px-5">
         <div className="max-width-wrapper relative z-20">
        <div className="text-center mb-16">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            Medical Board
          </span>
          <h2 className="text-[#512D6D] text-3xl md:text-4xl font-black mb-5">
            Meet Our Dedicated Experts
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our hospital is proud to host a panel of highly experienced and compassionate medical professionals dedicated to providing the best care for you and your family.
          </p>
        </div>
        <DoctorGrid doctors={doctorsData} />
        
      </div>
      </div>
    </main>
  );
}
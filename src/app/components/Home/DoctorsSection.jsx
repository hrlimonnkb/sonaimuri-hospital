// src/components/Home/DoctorsSection.jsx
import React from 'react';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { doctorsData } from '@/data/doctors';
import DoctorGrid from '../Shared/DoctorGrid';

export default function DoctorsSection() {
  const featuredDoctors = doctorsData.slice(0, 6);

  return (
    <section className="py-14 lg:py-20 bg-[#FAFAFE] relative px-5">
      <div className="max-width-wrapper">
        
        <div className="text-center mb-16">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            Our Experts
          </span>
          <h2 className="text-[#512D6D] text-2xl md:text-5xl font-black">
            Meet Our Specialist Doctors
          </h2>
        </div>

        <DoctorGrid doctors={featuredDoctors} />

        {/* Show More Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/doctor"
            className="inline-flex items-center gap-2 bg-[#512D6D] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#35055a] transition-colors shadow-lg hover:shadow-xl"
          >
            SHOW ALL DOCTORS <HiOutlineArrowRight className="text-xl" />
          </Link>
        </div>

      </div>
    </section>
  );
}
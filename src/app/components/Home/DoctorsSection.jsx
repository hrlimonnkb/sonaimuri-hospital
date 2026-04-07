"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaHospitalAlt, FaRegCalendarAlt, FaUserMd } from 'react-icons/fa';
import doctorRasul from "@/assets/images/rasul.png";    
import doctorSaiful from "@/assets/images/saiful.png";
import doctorKhadija from "@/assets/images/khadija.jpeg";

const doctors = [
  {
    id: 1,
    name: "Dr. Rasul Amin",
    department: "Cardiology",
    designation: "MBBS (Dhaka), BCS (Health), MD (Cardiology), FSCAI (USA). Clinical & Interventional Cardiologist. Associate Professor (Cardiology Dept.), PG Hospital, Dhaka.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Every Friday | 3:00 PM - 8:00 PM",
    image: doctorRasul,
  },
  {
    id: 2,
    name: "Dr. Toufika Ahmed",
    department: "Gynecology & Obs.",
    designation: "MBBS, BCS (Health), DGO, FCPS (Gynecology). Assistant Professor & Head of Dept. (Gynecology), Shaheed Suhrawardy Medical College & Hospital, Dhaka.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Every Friday | 3:00 PM - 8:00 PM",
    image: "/images/doctor-toufika.jpg",
  },
  {
    id: 3,
    name: "Dr. Md. Asaduzzaman",
    department: "Internal Medicine",
    designation: "MBBS (CMC), BCS (FP), FCPS (Final Part, Med), MRCP (UK). PGT in Pediatrics. Medical Officer, MCH Center, Lakshmipur.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Everyday",
    image: "/images/doctor-asaduzzaman.jpg",
  },
  
  {
    id: 4,
    name: "Dr. Md. Saiful Islam",
    department: "Gynecology",
    designation: "MBBS, BCS (Health), MD (Physical Medicine & Rehab - BSMMU), FCPS (Medicine-part), CCD (BIRDEM). Consultant, Physical Medicine & Rehabilitation Dept., Noakhali.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Every Thursday | 2:00 PM - 8:00 PM",
    image: doctorSaiful,
  },
  {
    id: 5,
    name: "Dr. Khadija Akter Shuvo",
    department: "Gynecology & Sonology",
    designation: "MBBS (Khulna Medical College), CMU (Ultrasonography), PGT (Gynae). BM&DC: A-145671. Experienced in Mother & Child diseases. Specially trained in Normal Delivery.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Everyday",
    image: doctorKhadija,
  },
  {
    id: 6,
    name: "Dr. Salma Begum",
    department: "Pediatrics",
    designation: "MBBS, DCH, MCPS (Pediatrics), Child Specialist. Dedicated to comprehensive child care.",
    hospital: "Sonaimuri Maa O Shishu Hospital",
    schedule: "Sun, Wed, Thu | 9:00 AM - 1:00 PM",
    image: "/images/doctor-placeholder.jpg",
  }
];

export default function DoctorsSection() {
  return (
    <section className="py-24 bg-[#FAFAFE] relative px-5">
      <div className="max-width-wrapper">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            Our Experts
          </span>
          <h2 className="text-[#512D6D] text-2xl md:text-5xl font-black">
            Meet Our Specialist Doctors
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="group bg-white rounded-4xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#D3BFDF]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Profile Image & Department Badge */}
              <div className="flex flex-col items-center mb-6 relative">
                {/* Department Pill */}
                <div className=" bg-[#F3E8FF] text-[#916BBF] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider z-10 border border-white shadow-sm">
                  {doctor.department}
                </div>
                
                {/* Image */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-[#F3E8FF] group-hover:border-[#916BBF] transition-colors duration-300 overflow-hidden relative mt-4 bg-gray-50 flex items-center justify-center">
                  <FaUserMd className="text-5xl text-gray-300 absolute" />
                  <Image 
                    src={doctor.image} 
                    // alt={doctor.name}
                    fill
                    className="object-cover relative z-10"
                  />
                </div>
              </div>

              {/* Name & Designation */}
              <div className="text-center mb-6 grow">
                <h3 className="text-xl md:text-2xl font-black text-[#512D6D] mb-2 leading-tight">
                  {doctor.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium line-clamp-2 px-2">
                  {doctor.designation}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-5"></div>

              {/* Info List (Hospital & Schedule) */}
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
                <Link 
                  href={`/appointment?doctor=${doctor.id}`} 
                  className="w-full flex items-center justify-center gap-2 bg-[#F3E8FF] text-[#512D6D] py-3.5 rounded-xl font-bold text-sm transition-all hover:bg-[#512D6D] hover:text-white"
                >
                  BOOK AN APPOINTMENT
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 'Show More' CTA Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/doctors"
            className="inline-flex items-center gap-2 bg-[#512D6D] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#35055a] transition-colors shadow-lg hover:shadow-xl"
          >
            SHOW MORE DOCTORS <HiOutlineArrowRight className="text-xl" />
          </Link>
        </div>

      </div>
    </section>
  );
}
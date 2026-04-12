"use client";
import React from 'react';
import Image from 'next/image';
import { FaUserMd, FaAmbulance, FaStethoscope, FaHeartbeat } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import WhyChooseImg from "@/assets/images/why-choose-doctor.png"; 

const reasons = [
  {
    id: 1,
    title: "Patient-Centered Care",
    description: "Personalized, compassionate care for every mother and child.",
    icon: <FaHeartbeat />,
  },
  {
    id: 2,
    title: "Expertise and Experience",
    description: "Highly qualified gynecologists, pediatricians, and specialized nurses.",
    icon: <FaUserMd />,
  },
  {
    id: 3,
    title: "Advanced Medical Technology",
    description: "Modern NICU, labor wards, and high-precision diagnostic labs.",
    icon: <FaStethoscope />,
  },
  {
    id: 4,
    title: "24/7 Emergency Support",
    description: "Round-the-clock emergency medical services ensuring safety at all times.",
    icon: <FaAmbulance />,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 lg:py-24 overflow-hidden px-5">
      <div className="max-width-wrapper">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT: Image & Visual Area */}
          <div className="w-full lg:w-5/12 relative">
            <div className="absolute inset-0 bg-linear-to-br from-[#512D6D] to-[#916BBF] rounded-[3rem] transform -rotate-3 scale-105 z-0"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 bg-[#e0d6eb] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl h-125 md:h-150 flex items-end justify-center">
              <Image 
                src={WhyChooseImg} 
                alt="Trusted Doctor" 
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100 animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#512D6D] text-2xl">
                <HiShieldCheck />
              </div>
              <div>
                <h4 className="text-[#512D6D] font-black text-xl leading-none">100%</h4>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Trusted Care</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="w-full lg:w-7/12">
            
            {/* Header */}
            <div className="mb-10 text-center lg:text-left">
              <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
                Why Our Patients Recommend Us
              </span>
              <h2 className="text-[#512D6D] text-2xl md:text-5xl font-black mb-6 leading-tight">
                Why Choose Our Hospital?
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We provide specialized healthcare treatments utilizing the highest level of modern technology. From routine checkups to critical emergency care, your family's health is our utmost priority.
              </p>
            </div>

            {/* Feature Cards Stack */}
            <div className="space-y-5">
              {reasons.map((reason) => (
                <div 
                  key={reason.id} 
                  className="group bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#D3BFDF] transition-all duration-300 flex items-start gap-5 cursor-default hover:-translate-y-1"
                >
                  {/* Icon Area */}
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#512D6D] text-2xl group-hover:bg-[#512D6D] group-hover:text-white transition-colors duration-300">
                    {reason.icon}
                  </div>
                  
                  {/* Text Area */}
                  <div>
                    <h3 className="text-lg font-bold text-[#512D6D] mb-2 group-hover:text-[#916BBF] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
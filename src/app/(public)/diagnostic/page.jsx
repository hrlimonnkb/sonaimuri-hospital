"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaCheckCircle, FaFileMedicalAlt } from 'react-icons/fa';
import { testGroups } from '@/data/diagnosticTestData';
import diagonosticDoctorImg from "@/assets/images/why-choose-doctor.png"; 
import Link from 'next/link';
import WhyChooseUs from '@/app/components/Shared/WhyChooseUs';

export default function DiagnosticPage() {
  const [activeTab, setActiveTab] = useState(testGroups[0].id);
  const activeGroupData = testGroups.find(group => group.id === activeTab);

  return (
    <main>
      
      {/* --- HERO SECTION --- */}
      <section className="w-full bg-linear-to-r from-[#35055a] to-[#512D6D] py-20 px-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#916BBF]/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-width-wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
              Expert Diagnostic <br />Care at Sonaimuri.
            </h1>
            <p className="text-[#D3BFDF] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              We provide precise, reliable health assessments for early detection and effective treatment. Trust our combination of state-of-the-art technology and expert professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="tel:+8801705319271" className="bg-[#916BBF] hover:bg-white hover:text-[#512D6D] text-white px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2">
                <FaPhoneAlt /> CALL US NOW
              </Link>
              <button 
                onClick={() => document.getElementById('tests-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2"
              >
                <FaFileMedicalAlt /> VIEW ALL TESTS
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-square max-w-md mx-auto mt-10 lg:mt-0">
            <div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-10 bg-linear-to-tr from-white/5 to-white/20 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]"></div>
            <Image 
              src={diagonosticDoctorImg} 
              alt="Diagnostic Expert" 
              fill 
              className="object-contain object-bottom relative z-10 scale-105 drop-shadow-2xl mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]"
              priority
            />

            <div className="absolute bottom-12 -left-4 md:-left-8 z-20 bg-white text-[#512D6D] px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50 animate-[bounce_4s_infinite]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-none mb-1">Status</span>
                <span className="text-xs font-black uppercase tracking-wider leading-none">Available 24/7</span>
              </div>
            </div>

            <div className="absolute top-10 right-0 z-0 w-24 h-24 bg-[#916BBF]/40 rounded-full blur-2xl"></div>  
          </div>
        </div>
      </section>

      {/* --- INFO & CALLBACK FORM SECTION --- */}
      <section className="py-14 lg:py-20 px-5">
        <div className="max-width-wrapper grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Callback Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-[#512D6D] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#916BBF] rounded-full mix-blend-multiply blur-2xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="relative z-10 text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">Can't find what you are looking for?</h3>
                <p className="text-[#D3BFDF] text-sm">Fill this form for a callback from us.</p>
              </div>

              <form className="relative z-10 space-y-4">
                <input 
                  type="text" 
                  placeholder="Patient's Name" 
                  className="w-full bg-white text-gray-800 px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#916BBF] transition-all placeholder:text-gray-400"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white text-gray-800 px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#916BBF] transition-all placeholder:text-gray-400"
                />
                <div className="flex items-center gap-2 text-white/80 text-xs mt-2">
                  <input type="checkbox" id="whatsapp" className="accent-[#916BBF] w-4 h-4" />
                  <label htmlFor="whatsapp">Get updated on WhatsApp & accept T&C</label>
                </div>
                <button 
                  type="button" 
                  className="w-full bg-[#916BBF] hover:bg-white hover:text-[#512D6D] text-white py-4 rounded-xl font-black uppercase tracking-wider transition-colors mt-2"
                >
                  REQUEST CALLBACK
                </button>
              </form>
            </div>
          </div>

          {/* Right: Why Choose Us */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-black text-[#512D6D] mb-4">The Right Care. Right Now.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              High-quality health services should always be readily available. At Sonaimuri Maa O Shishu Hospital, we combine immediate access with clinical excellence across all our departments.
            </p>

            <h3 className="text-xl font-bold text-[#512D6D] mb-4">Why Choose Us?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#916BBF] mt-0.5 shrink-0" />
                <p className="text-gray-600 text-sm"><strong className="text-gray-800">24/7 Emergency & Critical Care:</strong> Our team is ready around the clock.</p>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#916BBF] mt-0.5 shrink-0" />
                <p className="text-gray-600 text-sm"><strong className="text-gray-800">Expert Consultant Doctors:</strong> Specialists across multiple disciplines are here for you.</p>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#916BBF] mt-0.5 shrink-0" />
                <p className="text-gray-600 text-sm"><strong className="text-gray-800">Advanced Imaging Technology:</strong> Fast, precise, and reliable diagnostics.</p>
              </li>
            </ul>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm font-bold text-[#512D6D] mb-2">Need Emergency Help? Call Us!</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#916BBF] text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Hotline</p>
                  <a href="tel:+8801705319271" className="text-xl font-black text-[#512D6D] hover:text-[#916BBF] transition-colors">01705-319271</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TESTS FILTER & CARDS SECTION --- */}
      <section id="tests-section" className="bg-[#FAFAFE] py-14 lg:py-20 px-5">
       <div className="max-width-wrapper">
           <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#512D6D] mb-4">Diagnostic Tests & Prices</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our complete list of clinical tests, imaging services, and specialized screening packages.
          </p>
        </div>

        {/* 1. The Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {testGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all shadow-sm ${
                activeTab === group.id
                  ? "bg-[#512D6D] text-white ring-4 ring-[#F3E8FF]"
                  : "bg-white text-gray-600 hover:bg-[#F3E8FF] hover:text-[#512D6D] border border-gray-200"
              }`}
            >
              {group.groupName}
            </button>
          ))}
        </div>

        {/* 2. The Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          {activeGroupData?.categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#D3BFDF]/50 transition-all duration-300"
            >
              
              {/* Card Header */}
              <div className="bg-[#F3E8FF] px-6 py-5 flex items-center justify-between">
                <h3 className="font-black text-lg text-[#512D6D]">{category.categoryName}</h3>
                <span className="text-xs font-black bg-white text-[#916BBF] px-3 py-1 rounded-full shadow-sm">
                  {category.tests.length} Tests
                </span>
              </div>

              {/* Card Body (Test List) */}
              <div className="p-6 md:p-8">
                <ul className="space-y-4">
                  {category.tests.map((test, idx) => (
                    <li key={idx} className="flex justify-between items-end gap-4 group">
                      {/* Test Name */}
                      <span className="text-gray-700 font-medium text-sm md:text-base group-hover:text-[#512D6D] transition-colors">
                        {test.name}
                      </span>
                      
                      {/* Dotted Connecting Line */}
                      <div className="grow border-b-2 border-dotted border-gray-200 mb-1.5 group-hover:border-[#D3BFDF] transition-colors"></div>
                      
                      {/* Price */}
                      <span className="text-[#916BBF] font-black shrink-0 text-sm md:text-base">
                        {test.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
       </div>
      </section>
      <WhyChooseUs/>
    </main>
  );
}
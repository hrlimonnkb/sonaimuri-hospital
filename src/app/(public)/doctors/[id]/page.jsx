"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaUserMd, FaPhoneAlt, FaEnvelope, FaVenusMars, 
  FaMapMarkerAlt, FaRegCalendarAlt, FaChevronDown, FaChevronUp, FaCheckCircle
} from 'react-icons/fa';
import { doctorsData } from '@/data/doctors';
import PageHeader from '@/app/components/Shared/PageHeader';

export default function SingleDoctorPage() {
  const params = useParams();
  const doctorId = parseInt(params.id);
  const doctor = doctorsData.find(d => d.id === doctorId);
  const [openSection, setOpenSection] = useState('bio');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFE]">
        <h1 className="text-3xl font-black text-[#512D6D] mb-4">Doctor Not Found</h1>
        <Link href="/doctors" className="text-[#916BBF] hover:underline">Go back to all doctors</Link>
      </div>
    );
  }

  return (
    <main className="pb-24">
      <PageHeader title={doctor.name} breadcrumb="Doctor Profile" />

      <div className="max-width-wrapper px-5 mt-10 md:mt-16">
        
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-[#D3BFDF]/30 flex flex-col md:flex-row gap-8 items-center md:items-start mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3E8FF] rounded-full mix-blend-multiply blur-3xl opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

          {/* Doctor Image */}
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full border-4 border-[#F3E8FF] overflow-hidden relative bg-gray-50 flex items-center justify-center shadow-inner">
            <FaUserMd className="text-6xl text-gray-300 absolute" />
            <Image 
              src={doctor.image} 
              alt={doctor.name}
              fill
              sizes="(max-width: 768px) 128px, 192px"
              className="object-cover relative z-10"
            />
          </div>

          {/* Doctor Info */}
          <div className="grow text-center md:text-left z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <h1 className="text-2xl md:text-4xl font-black text-[#512D6D] flex items-center justify-center md:justify-start gap-2">
                {doctor.name} <FaCheckCircle className="text-[#916BBF] text-xl" title="Verified Professional" />
              </h1>
              {/* Optional Experience Badge */}
              <span className="bg-[#512D6D] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md w-fit mx-auto md:mx-0">
                10+ Years Experience
              </span>
            </div>
            
            <p className="text-[#916BBF] font-bold text-lg mb-4">{doctor.department} Specialist</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
              {doctor.designation}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#916BBF]" /> {doctor.hospital}
              </div>
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-[#916BBF]" /> {doctor.schedule}
              </div>
            </div>
          </div>
        </div>

        {/* --- TWO COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Accordion 1: Short Bio */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleSection('bio')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-[#512D6D]">Short Bio</h3>
                {openSection === 'bio' ? <FaChevronUp className="text-[#916BBF]" /> : <FaChevronDown className="text-gray-400" />}
              </button>
              {openSection === 'bio' && (
                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  {doctor.name} is a highly respected specialist in the field of {doctor.department}. With a dedication to patient care and advanced medical practices, they serve the community at {doctor.hospital}. 
                  <br /><br />
                  Qualifications: {doctor.designation}
                </div>
              )}
            </div>

            {/* Accordion 2: Treatments Offered */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleSection('treatments')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-[#512D6D]">Treatments Offered</h3>
                {openSection === 'treatments' ? <FaChevronUp className="text-[#916BBF]" /> : <FaChevronDown className="text-gray-400" />}
              </button>
              {openSection === 'treatments' && (
                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Comprehensive {doctor.department} Consultations</li>
                    <li>Advanced Diagnostic Evaluations</li>
                    <li>Personalized Treatment Planning</li>
                    <li>Follow-up and Rehabilitation Care</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Frequently Asked Questions */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleSection('faq')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-[#512D6D]">Frequently Asked Questions</h3>
                {openSection === 'faq' ? <FaChevronUp className="text-[#916BBF]" /> : <FaChevronDown className="text-gray-400" />}
              </button>
              {openSection === 'faq' && (
                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800">When does the doctor see patients?</h4>
                    <p>The doctor is available {doctor.schedule}.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Do I need to book in advance?</h4>
                    <p>Yes, it is highly recommended to call the hotline and book your serial prior to visiting.</p>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar (Span 4) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Box 1 */}
              <div className="bg-[#512D6D] text-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-lg font-black border-b border-white/20 pb-4 mb-4">Basic Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <FaPhoneAlt className="text-[#D3BFDF]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#D3BFDF] font-bold uppercase tracking-wider mb-1">Phone Number</p>
                      <a href="tel:+8801705319271" className="font-semibold hover:text-[#D3BFDF] transition-colors">01705-319271</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-[#D3BFDF]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#D3BFDF] font-bold uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:info@smosh.bd" className="font-semibold text-sm hover:text-[#D3BFDF] transition-colors">info@smosh.bd</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <FaVenusMars className="text-[#D3BFDF]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#D3BFDF] font-bold uppercase tracking-wider mb-1">Gender</p>
                      <p className="font-semibold text-sm capitalize">Not Specified</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm font-bold mb-3 text-center">Contact For Serial</p>
                  <a href="tel:+8801705319271" className="w-full flex justify-center items-center gap-2 bg-[#916BBF] hover:bg-white hover:text-[#512D6D] text-white py-3 rounded-xl font-black transition-colors">
                    <FaPhoneAlt /> Call Reception
                  </a>
                </div>
              </div>

              {/* Box 2: Visiting Fee */}
              <div className="bg-white border border-[#D3BFDF]/50 rounded-3xl p-6 shadow-lg">
                <h3 className="text-lg font-black text-[#512D6D] text-center border-b border-gray-100 pb-3 mb-4">Visiting Fee</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center">
                    <span className="font-bold text-gray-600">New Appointment:</span>
                    <span className="text-[#916BBF] font-black">Contact Hospital</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-bold text-gray-600">Follow-Up:</span>
                    <span className="text-[#916BBF] font-black">Contact Hospital</span>
                  </li>
                </ul>
              </div>

              {/* Box 3: Book Appointment CTA */}
              <div className="bg-white border border-[#D3BFDF]/50 rounded-3xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-black text-[#512D6D] mb-4">Available For Appointment</h3>
                <Link href="/appointment" className="w-full flex justify-center items-center bg-[#512D6D] hover:bg-[#35055a] text-white py-3.5 rounded-xl font-black transition-colors">
                  BOOK APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
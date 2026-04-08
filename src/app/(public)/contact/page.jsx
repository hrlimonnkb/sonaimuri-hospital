import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '@/app/components/Shared/ContactForm';
import PageHeader from '@/app/components/Shared/PageHeader';

export const metadata = {
  title: 'Contact Us | Sonaimuri Maa O Shishu Hospital',
  description: 'Get in touch with Sonaimuri Maa O Shishu Hospital. We are open 24/7 for emergency medical care in Noakhali.',
};

export default function ContactPage() {
  return (
    <main className="pb-20">
      
      <PageHeader 
        title="Contact Us" 
        breadcrumb="Contact" 
      />

      <div className="max-width-wrapper px-5 -mt-10 md:-mt-16 relative z-20">
        
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F3E8FF] text-[#916BBF] rounded-2xl flex items-center justify-center text-2xl mb-5">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-black text-[#512D6D] mb-2">Call Us</h3>
            <p className="text-gray-500 text-sm mb-3">We are available 24/7 for emergencies.</p>
            <a href="tel:+8801705319271" className="text-lg font-bold text-[#916BBF] hover:text-[#512D6D] transition-colors">
              01705-319271
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F3E8FF] text-[#916BBF] rounded-2xl flex items-center justify-center text-2xl mb-5">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-black text-[#512D6D] mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm mb-3">Drop us a line anytime for general queries.</p>
            <a href="mailto:info@smosh.bd" className="text-lg font-bold text-[#916BBF] hover:text-[#512D6D] transition-colors">
              info@smosh.bd
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F3E8FF] text-[#916BBF] rounded-2xl flex items-center justify-center text-2xl mb-5">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-black text-[#512D6D] mb-2">Location</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              100 Yards East of Sonaimuri Thana, <br />
              (Opp. Shwapno Super Shop), <br />
              Sonaimuri, Noakhali.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F3E8FF] text-[#916BBF] rounded-2xl flex items-center justify-center text-2xl mb-5">
              <FaClock />
            </div>
            <h3 className="text-xl font-black text-[#512D6D] mb-2">Opening Hours</h3>
            <p className="text-gray-500 text-sm mb-3 font-medium">
              Hospital & Emergency:
            </p>
            <span className="bg-[#E11D48]/10 text-[#E11D48] px-4 py-1.5 rounded-full text-sm font-bold">
              Open 24/7
            </span>
          </div>

        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-[#D3BFDF]/30">
          
          {/* Left: Contact Form Component */}
          <ContactForm />

          {/* Right: Google Map */}
          <div className="w-full h-100 lg:h-full min-h-100 rounded-3xl overflow-hidden shadow-inner bg-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.9730352447!2d90.93923769999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375415f3e46c9135%3A0xcfd6bc8d89e023d5!2sSonaimuri%20Upazila!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
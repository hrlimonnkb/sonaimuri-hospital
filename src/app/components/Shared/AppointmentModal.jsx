"use client";
import React from 'react';
import { FaRegCalendarAlt, FaPhoneAlt, FaTimes } from 'react-icons/fa';

export default function AppointmentModal({ doctor, onClose }) {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-0">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content Box */}
      <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 relative z-10 shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500 transition-colors"
        >
          <FaTimes />
        </button>

        {/* Modal Text & Info */}
        <div className="text-center mt-2">
          <div className="w-16 h-16 bg-[#F3E8FF] text-[#916BBF] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            <FaRegCalendarAlt />
          </div>
          <h3 className="text-2xl font-black text-[#512D6D] mb-2">Book Appointment</h3>
          
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            To book a serial with <span className="font-bold text-[#512D6D]">{doctor.name}</span>, please contact our hospital reception directly.
          </p>

          {/* Highlighted Phone Number Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6">
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Reception Hotline</span>
            <a 
              href="tel:+8801705319271" 
              className="text-2xl sm:text-3xl font-black text-[#916BBF] hover:text-[#512D6D] transition-colors flex justify-center items-center gap-3"
            >
              <FaPhoneAlt className="text-xl" /> +8801705-319271
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:+8801705319271"
              className="flex-1 bg-[#512D6D] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#35055a] transition-colors flex items-center justify-center gap-2"
            >
              <FaPhoneAlt /> CALL NOW
            </a>
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              CANCEL
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
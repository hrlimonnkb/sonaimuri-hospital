"use client";
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Pagination({ totalItems, itemsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-16">
      
      {/* Previous Button */}
      <button 
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-[#F3E8FF] hover:text-[#512D6D] hover:border-[#916BBF] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronLeft className="text-sm" />
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all text-sm
              ${currentPage === pageNumber 
                ? "bg-[#512D6D] text-white shadow-md" 
                : "border border-gray-200 text-gray-600 hover:bg-[#F3E8FF] hover:text-[#512D6D] hover:border-[#916BBF]"
              }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-[#F3E8FF] hover:text-[#512D6D] hover:border-[#916BBF] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronRight className="text-sm" />
      </button>

    </div>
  );
}
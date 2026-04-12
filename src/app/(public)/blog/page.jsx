"use client";
import React, { useState } from 'react';
import Pagination from '@/app/components/Shared/Pagination';
import { blogsData } from '@/data/blogs';
import BlogGrid from '@/app/components/Shared/BlogGrid';
import PageHeader from '@/app/components/Shared/PageHeader';

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main className="bg-[#FAFAFE] pb-24">
      
      <PageHeader 
        title="Health & Wellness Blog" 
        breadcrumb="Blogs" 
      />

      <div className="max-width-wrapper px-5 relative z-20 mt-16 md:mt-24">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            Latest News
          </span>
          <h2 className="text-[#512D6D] text-3xl md:text-4xl font-black mb-5">
            Insights & Health Tips
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Stay updated with the latest medical news, health tips, and wellness advice from our expert team of doctors.
          </p>
        </div>

        <BlogGrid blogs={currentBlogs} />

        <Pagination
          totalItems={blogsData.length} 
          itemsPerPage={blogsPerPage} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />

      </div>
    </main>
  );
}
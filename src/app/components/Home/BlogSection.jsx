"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import BlogGrid from '../Shared/BlogGrid';
import { blogsData } from '@/data/blogs';

export default function BlogSection() {
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <section className="py-24 relative px-5">
      <div className="max-width-wrapper">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#916BBF] font-bold text-xs md:text-sm uppercase tracking-[0.3em] block mb-3">
            From The Blog
          </span>
          <h2 className="text-[#512D6D] text-4xl md:text-5xl font-black mb-4">
            Health News & Articles
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Stay updated with the latest medical advice, health tips, and news from our expert specialists.
          </p>
        </div>

        <BlogGrid blogs={latestBlogs} />

        {/* 'View All' CTA Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#512D6D] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#35055a] transition-colors shadow-lg hover:shadow-xl"
          >
            READ MORE ARTICLES <HiOutlineArrowRight className="text-xl" />
          </Link>
        </div>

      </div>
    </section>
  );
}
"use client";
import React from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function BlogGrid({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <article 
          key={blog.id} 
          className="relative group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
        >
          {/* Blog Image */}
          <div className="relative w-full h-56 overflow-hidden bg-gray-100">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-black text-[#916BBF] uppercase tracking-wider shadow-sm">
              {blog.category}
            </div>
            <div className="absolute inset-0 bg-[#F3E8FF] group-hover:bg-[#D3BFDF] transition-colors duration-500 flex items-center justify-center text-[#916BBF] font-bold">Image</div>
            
            <Image 
              src={blog.image} 
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Blog Content */}
          <div className="p-6 md:p-8 flex flex-col grow">
            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-4">
              <FaRegCalendarAlt />
              <span>{blog.date}</span>
            </div>
            
            <h3 className="text-xl font-black text-[#512D6D] mb-3 leading-snug group-hover:text-[#916BBF] transition-colors line-clamp-2">
              <Link href={blog.slug} className="before:absolute before:inset-0">
                {blog.title}
              </Link>
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
              {blog.excerpt}
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-[#916BBF] font-bold text-sm uppercase tracking-wider group-hover:text-[#512D6D] transition-colors">
              Read Article <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
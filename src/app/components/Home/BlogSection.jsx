"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineCalendar, HiOutlineUser, HiOutlineArrowRight } from 'react-icons/hi';

// STATIC DATA: Replace this array with an API call in the future
const blogPosts = [
  {
    id: 1,
    title: "Essential Nutrition for Expectant Mothers: A Complete Guide",
    excerpt: "Discover the vital vitamins and minerals needed during pregnancy to ensure the healthy development of your baby and your own well-being.",
    category: "Maternity",
    date: "April 12, 2026",
    author: "Dr. Toufika Ahmed",
    image: "/images/blog-1.jpg",
    slug: "/blog/essential-nutrition-expectant-mothers"
  },
  {
    id: 2,
    title: "Understanding Newborn Sleep Patterns: What Parents Should Know",
    excerpt: "Newborns have erratic sleep schedules. Learn how to establish a healthy sleep routine for your baby and get some much-needed rest yourself.",
    category: "Pediatrics",
    date: "April 05, 2026",
    author: "Dr. A K M Golam Samdani",
    image: "/images/blog-2.jpg",
    slug: "/blog/understanding-newborn-sleep"
  },
  {
    id: 3,
    title: "The Importance of Timely Childhood Vaccinations",
    excerpt: "Vaccinations are crucial for protecting your child from severe diseases. Here is the complete immunization schedule recommended by specialists.",
    category: "Child Health",
    date: "March 28, 2026",
    author: "Admin",
    image: "/images/blog-3.jpg",
    slug: "/blog/importance-of-childhood-vaccinations"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white relative">
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#D3BFDF]/50 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container */}
              <Link href={post.slug} className="relative w-full aspect-4/3 overflow-hidden bg-gray-100 block">
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-[#512D6D] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
                
                {/* Fallback color if image is missing, otherwise Next/Image */}
                <div className="absolute inset-0 bg-[#F3E8FF] group-hover:bg-[#E9D5FF] transition-colors duration-500 z-0"></div>
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => e.currentTarget.style.display = 'none'} 
                />
              </Link>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col grow">
                
                {/* Title */}
                <Link href={post.slug} className="block mb-3">
                  <h3 className="text-xl font-black text-[#512D6D] group-hover:text-[#916BBF] transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                  {post.excerpt}
                </p>

                {/* Footer (Author & Date) */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2 text-gray-400">
                    <HiOutlineUser className="text-[#916BBF] text-lg" />
                    <span className="text-xs font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <HiOutlineCalendar className="text-[#916BBF] text-lg" />
                    <span className="text-xs font-medium">{post.date}</span>
                  </div>
                </div>
                
              </div>
            </article>
          ))}
        </div>

        {/* 'View All' CTA Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#512D6D] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#35055a] transition-colors shadow-lg hover:shadow-xl"
          >
            READ MORE ARTICLES <HiOutlineArrowRight className="text-xl" />
          </Link>
        </div>

      </div>
    </section>
  );
}
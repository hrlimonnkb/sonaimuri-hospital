"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaUserCircle, FaRegCalendarAlt, FaRegClock, 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaLink, FaChevronUp, FaChevronDown
} from 'react-icons/fa';
import { blogsData } from '@/data/blogs';

export default function SingleBlogPage() {
  const params = useParams();
  const post = blogsData.find(b => b.slug === params.slug);
  const [isTocOpen, setIsTocOpen] = useState(true);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFE]">
        <h1 className="text-3xl font-black text-[#512D6D] mb-4">Article Not Found</h1>
        <Link href="/blogs" className="text-[#916BBF] hover:underline">Return to all blogs</Link>
      </div>
    );
  }

  const popularPosts = blogsData.filter(b => b.id !== post.id).slice(0, 3);

  return (
    <main className="bg-[#FAFAFE]">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full bg-linear-to-r from-[#35055a] to-[#512D6D] py-14 lg:py-28 px-5">
        <div className="max-width-wrapper grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Image */}
          <div className="lg:col-span-5 relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Hero Text */}
          <div className="lg:col-span-7 text-white">
            <span className="inline-block bg-[#916BBF] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-md mb-6 shadow-sm">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-black mb-6 leading-tight drop-shadow-md">
              {post.title}
            </h1>
            <p className="text-[#D3BFDF] text-sm md:text-base leading-relaxed mb-8 max-w-2xl line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#D3BFDF]">
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-lg" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-lg" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock className="text-lg" />
                <span>{post.readTime || "5 Min Read"}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- MAIN CONTENT & SIDEBAR --- */}
      <section className="py-14 lg:py-20 px-5">
        <div className="max-width-wrapper grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Article Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Table of Contents */}
            {post.content && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    className="w-full bg-[#512D6D] hover:bg-[#35055a] transition-colors text-white p-4 flex justify-between items-center cursor-pointer"
                    >
                    <h3 className="font-bold text-lg">Table of Contents</h3>
                    {isTocOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {isTocOpen && (
            <ul className="p-4 space-y-3">
                {post.content.map((section) => (
                <li key={section.id} className="border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <Link 
                    href={`#${section.id}`} 
                    onClick={(e) => handleScroll(e, section.id)}
                    className="text-gray-500 hover:text-[#916BBF] text-sm font-medium transition-colors"
                    >
                    {section.heading}
                    </Link>
                </li>
                ))}
            </ul>
            )}
              </div>
            )}

            {/* Article Body */}
            <article className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              {post.content ? (
                post.content.map((section) => (
                  <div key={section.id} id={section.id} className="mb-10 last:mb-0">
                    <h2 className="text-2xl font-black text-[#512D6D] mb-4">{section.heading}</h2>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {section.body}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 leading-relaxed">Full article content coming soon...</p>
              )}
            </article>
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Widget: Most Popular */}
            <div className="bg-[#FAFAFE] border border-[#D3BFDF]/40 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-black text-[#512D6D] mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#916BBF] after:rounded-full">
                Most Popular
              </h3>
              <div className="space-y-5">
                {popularPosts.map((pop) => (
                  <Link href={`/blog/${pop.slug}`} key={pop.id} className="flex gap-4 group">
                    <div className="w-20 h-16 relative rounded-lg overflow-hidden shrink-0">
                      <Image src={pop.image} alt={pop.title} fill sizes="80px" className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                        <FaRegCalendarAlt /> <span>{pop.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#512D6D] group-hover:text-[#916BBF] transition-colors line-clamp-2">
                        {pop.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget: Browse by Category */}
            <div className="bg-[#FAFAFE] border border-[#D3BFDF]/40 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-black text-[#512D6D] mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#916BBF] after:rounded-full">
                Browse by Category
              </h3>
              <ul className="space-y-3">
                {['Maternity', 'Pediatrics', 'Cardiology', 'Orthopedics'].map((cat, i) => (
                  <li key={i}>
                    <Link href="#" className="flex justify-between items-center group">
                      <span className="text-sm font-medium text-gray-600 group-hover:text-[#916BBF] transition-colors">{cat}</span>
                      <span className="w-6 h-6 rounded-full bg-[#F3E8FF] text-[#512D6D] text-xs font-bold flex items-center justify-center group-hover:bg-[#512D6D] group-hover:text-white transition-colors">
                        0{Math.floor(Math.random() * 5) + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget: Social Share */}
            <div className="bg-[#FAFAFE] border border-[#D3BFDF]/40 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-black text-[#512D6D] mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#916BBF] after:rounded-full">
                Social Share
              </h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#512D6D] hover:text-white hover:border-[#512D6D] transition-all shadow-sm">
                  <FaFacebookF />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#512D6D] hover:text-white hover:border-[#512D6D] transition-all shadow-sm">
                  <FaTwitter />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#512D6D] hover:text-white hover:border-[#512D6D] transition-all shadow-sm">
                  <FaLinkedinIn />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#512D6D] hover:text-white hover:border-[#512D6D] transition-all shadow-sm">
                  <FaLink />
                </button>
              </div>
            </div>

            {/* Widget: Tags */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-black text-[#512D6D] mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#916BBF] after:rounded-full">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags ? post.tags.map((tag, index) => (
                  <span key={index} className="bg-[#FAFAFE] border border-gray-200 text-gray-500 text-xs font-bold px-3 py-1.5 rounded-md hover:bg-[#F3E8FF] hover:text-[#512D6D] hover:border-[#D3BFDF] transition-all cursor-pointer">
                    {tag}
                  </span>
                )) : (
                  <span className="text-sm text-gray-400">No tags available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
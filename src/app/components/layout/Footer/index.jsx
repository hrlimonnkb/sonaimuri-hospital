"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerLogo from "@/assets/images/footerLogo.png";
import { 
  FaFacebookF, 
  FaYoutube, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaAngleRight 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#512D6D] text-white pt-20 pb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#916BBF] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 pointer-events-none"></div>
      
      <div className="max-width-wrapper px-4 md:px-8 relative z-10">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            
            <Link href="/" className="items-center gap-3 mb-4 group inline-flex">
              <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white rounded-full p-1 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src={footerLogo}
                  alt="Sonaimuri Maa O Shishu Hospital Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-black text-white tracking-wide leading-none mb-1">
                  SONAIMURI
                </h2>
                <span className="text-[8px] md:text-[9px] text-white font-bold tracking-widest uppercase">
                  Maa O Shishu Hospital (Pvt.)
                </span>
              </div>
            </Link>

            <p className="text-[#D3BFDF] text-sm leading-relaxed pr-4 mt-2">
              A symbol of humanity and trust. We are committed to providing world-class maternal, neonatal, and pediatric healthcare with modern technology and compassion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {/* Facebook Link */}
              <a href="https://facebook.com/smoshbd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#916BBF] hover:-translate-y-1 transition-all duration-300">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#916BBF] hover:-translate-y-1 transition-all duration-300">
                <FaWhatsapp className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#916BBF] hover:-translate-y-1 transition-all duration-300">
                <FaYoutube className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#916BBF] rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-[#D3BFDF]">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Doctors", path: "/doctor" },
                { name: "All Departments", path: "/departments" },
                { name: "Patient Testimonials", path: "/#testimonials" },
                { name: "News & Blogs", path: "/blog" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300">
                    <FaAngleRight className="text-[#916BBF] text-xs" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Others Link
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#916BBF] rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-[#D3BFDF]">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Condition", path: "terms-and-conditions" },
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Contact Us", path: "/contact" },
                { name: "Diagnostic", path: "/diagnostic" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300">
                    <FaAngleRight className="text-[#916BBF] text-xs" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#916BBF] rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm text-[#D3BFDF]">
              
              {/* Detailed Address */}
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#916BBF] text-lg shrink-0 mt-1" />
                <span className="leading-relaxed">
                  100 Yards East of Sonaimuri Thana, <br />
                  (Opposite Shwapno Super Shop), <br />
                  Sonaimuri, Noakhali.
                </span>
              </li>
              
              {/* Phone Number */}
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#916BBF] text-base shrink-0" />
                <Link href="tel:01705319271">01705-319271</Link>
              </li>
              
              {/* Official Email */}
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#916BBF] text-base shrink-0" />
                <a href="mailto:info@smosh.bd" className="hover:text-white transition-colors">
                  info@smosh.bd
                </a>
              </li>
            </ul>

            {/* Emergency Button Link */}
            <div className="mt-6">
              <Link href="tel:01705319271" className="inline-block w-full text-center bg-[#916BBF] text-white font-bold py-3 rounded-lg hover:bg-white hover:text-[#916BBF] transition-all shadow-lg">
                24/7 EMERGENCY
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D3BFDF]">
          <p>
            &copy; {currentYear} Sonaimuri Ma O Shishu Hospital (Pvt). All Rights Reserved.
          </p>
          <p>
            Developed by <a href="https://microters.com" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#916BBF] transition-colors">Microters LLC</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
// src/components/layout/Header/TopBar.jsx
import Link from 'next/link';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-[#512D6D] text-white py-2 px-6 hidden lg:block border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-medium">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#D3BFDF] text-[10px]" /> 
            Emergency: <Link href="tel:01705319271" className="font-bold">+8801705-319271</Link>
          </span>
          <span className="flex items-center gap-2 border-l border-white/20 pl-6">
            <FaClock className="text-[#D3BFDF]" /> 24 Hours Open
          </span>
        </div>
        <div className="flex items-center gap-2 opacity-90">
          <FaMapMarkerAlt className="text-[#D3BFDF]" /> Sonaimuri, Noakhali, Bangladesh
        </div>
      </div>
    </div>
  );
}
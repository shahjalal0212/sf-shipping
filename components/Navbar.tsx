// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [logo, setLogo] = useState('');

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data?.logo_url) setLogo(data.logo_url);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <nav className="bg-white border-b border-slate-200 text-slate-900 px-6 py-4 flex justify-between items-center relative z-50 shadow-sm">
      
      {/* কোম্পানির লোগো এবং টেক্সট অংশ (পাশাপাশি সেট করা হয়েছে) */}
      <div className="hover:opacity-90 transition-opacity">
        <Link href="/" className="flex items-center gap-3">
          {logo && (
            <img 
              src={logo} 
              alt="SF SHIPPING LOGO" 
              className="h-14 w-auto max-w-[180px] object-contain transition-transform duration-200 hover:scale-105" 
            />
          )}
          {/* লোগোর ঠিক ডান পাশে প্রিমিয়াম বোল্ড টেক্সট */}
          <span className="text-xl md:text-2xl font-black tracking-tight text-[#1e3a8a] uppercase font-sans">
            SF SHIPPING SERVICE
          </span>
        </Link>
      </div>

      {/* মেনু লিংকসমূহ */}
      <div className="flex gap-8 text-sm font-semibold items-center">
        <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Home</Link>
        
        {/* ১. সার্ভিসেস ড্রপডাউন */}
        <div className="relative group">
          <button className="text-slate-700 hover:text-blue-600 transition-colors py-2 flex items-center gap-1 focus:outline-none">
            Services <span className="text-[10px] group-hover:rotate-180 transition-transform duration-200">▼</span>
          </button>
          <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 space-y-1">
            <Link href="/services/crew-manning" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">Crew Manning Services</Link>
            <Link href="/services/crew-management" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">Crew Management</Link>
            <Link href="/services/freight-forwarding" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">Freight Forwarding</Link>
            <Link href="/services/import-export" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">Import & Export Services</Link>
            <Link href="/services/ship-chandling" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">Ship Chandling</Link>
            <Link href="/services/maritime-consultancy" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">Maritime Consultancy</Link>
          </div>
        </div>
        
        <Link href="/procedure" className="text-slate-700 hover:text-blue-600 transition-colors py-2">Procedure</Link>
        
        {/* ২. গ্যালারি ড্রপডাউন */}
        <div className="relative group">
          <button className="text-slate-700 hover:text-blue-600 transition-colors py-2 flex items-center gap-1 focus:outline-none">
            Gallery <span className="text-[10px] group-hover:rotate-180 transition-transform duration-200">▼</span>
          </button>
          <div className="absolute left-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 space-y-1">
            <Link href="/gallery?category=client" className="block px-4 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 text-xs">
              Client Meeting
            </Link>
            <Link href="/gallery?category=crew" className="block px-4 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 text-xs">
              Crew Gallery
            </Link>
          </div>
        </div>
        
        <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors py-2">
          Career
        </Link>
        
        {/* ৩. অ্যাবাউট আস ড্রপডাউন */}
        <div className="relative group">
          <button className="text-slate-700 hover:text-blue-600 transition-colors py-2 flex items-center gap-1 focus:outline-none">
            About Us <span className="text-[10px] group-hover:rotate-180 transition-transform duration-200">▼</span>
          </button>
          <div className="absolute right-0 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 space-y-1">
            <Link href="/about/meet-the-team" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">
              Meet the team
            </Link>
            <Link href="/about/our-principal-company" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">
              Our Principal Company
            </Link>
            <Link href="/about/news" className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors text-xs">
              News
            </Link>
          </div>
        </div>
        
        <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors py-2">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
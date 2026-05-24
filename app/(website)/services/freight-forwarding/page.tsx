// app/(website)/services/freight-forwarding/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function FreightForwardingPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার / হেডার এরিয়া */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/freight-forwarding.jpeg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <span className="text-yellow-400 text-xs font-black tracking-widest uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
            SF SHIPPING SERVICES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Freight Forwarding Services</h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Seamless global freight forwarding and comprehensive supply chain solutions tailored to your cargo needs.
          </p>
        </div>
      </section>

      {/* ২. মূল কন্টেন্ট সেকশন (হুবহু ৪ নম্বর ইমেজের লেআউট ও টেক্সট) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* বাম পাশ: ৮ কলাম জুড়ে বিস্তারিত ডক টেক্সট */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-l-4 border-yellow-400 pl-4 tracking-tight">
                Global Freight Forwarding & Logistics Network
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                SF SHIPPING SERVICES provides robust and highly efficient freight forwarding solutions across the globe. We act as the vital link between manufacturers, cargo owners, and worldwide destinations, ensuring that goods move seamlessly across international borders via sea, air, and land routes.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                Leveraging strong partnerships with major international shipping lines, commercial air carriers, and domestic logistics networks, we are capable of securing optimal cargo space and highly competitive freight rates for our clients.
              </p>
            </div>

            {/* লজিস্টিকস ক্যাপাবিলিটি ব্লক */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="text-yellow-500">🌐</span> Multimodal Transport Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2">✅ Full Container Load (FCL) Management</li>
                <li className="flex items-center gap-2">✅ Less than Container Load (LCL) Consolidation</li>
                <li className="flex items-center gap-2">✅ Port-to-Port & Door-to-Door Delivery</li>
                <li className="flex items-center gap-2">✅ Real-time Cargo Tracking & Documentation</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Reliable & Secure Cargo Transit</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium text-justify">
                Whether you are shipping heavy industrial machinery, consumer goods, or time-sensitive materials, our dedicated logistics coordinators monitor every phase of your cargo's journey. We prioritize absolute supply chain visibility and timely delivery schedules to optimize your corporate logistics.
              </p>
            </div>
          </div>

          {/* ডান পাশ: ৪ কলাম জুড়ে কুইক ইনফো ও ইমেজ সাইডবার */}
          <div className="md:col-span-4 space-y-6 sticky top-6">
            {/* ছবির মতো বড় হাই-কোয়ালিটি ইমেজ বক্স */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-64 relative group">
              <img 
                src="/freight-forwarding.jpeg" 
                alt="Freight Forwarding Operations" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t {from-slate-900/40 to-transparent}"></div>
            </div>

            {/* কন্টাক্ট অ্যাকশন বক্স */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 text-center">
              <h4 className="text-sm font-bold tracking-wider text-yellow-400 uppercase">Book Cargo Space?</h4>
              <p className="text-xs text-slate-400 font-medium">
                Get efficient freight forwarding solutions with optimal security and global coverage.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="block w-full py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs md:text-sm rounded-xl transition-all shadow-md">
                  Inquire For Freight Forwarding
                </Link>
              </div>
            </div>

            {/* ব্যাক বাটন */}
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors pl-2">
              ← Back to All Services
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
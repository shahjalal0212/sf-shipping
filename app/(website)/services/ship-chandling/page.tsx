// app/(website)/services/ship-chandling/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ShipChandlingPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার / হেডার এরিয়া */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/ship-chandling.jpeg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <span className="text-yellow-400 text-xs font-black tracking-widest uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
            SF SHIPPING SERVICES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ship Chandling Services</h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Your trusted marine supplier, delivering premium quality provisions, deck, engine, and cabin stores at major global ports.
          </p>
        </div>
      </section>

      {/* ২. মূল কন্টেন্ট সেকশন (হুবহু ৬ নম্বর ইমেজের লেআউট ও টেক্সট) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* বাম পাশ: ৮ কলাম জুড়ে বিস্তারিত ডক টেক্সট */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-l-4 border-yellow-400 pl-4 tracking-tight">
                Comprehensive Vessel Stores & Marine Supplies
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                SF SHIPPING SERVICES is a fully licensed and highly dependable marine supplier and ship chandler operating at principal sea ports. We understand that quick turnarounds and high-quality provisions are critical for onboard crew welfare and continuous engineering operations.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                From fresh, frozen, and dry provisions to specialized technical stores, deck equipment, engine parts, and cabin essentials, we source and deliver premium products directly to your vessel with absolute efficiency and compliance.
              </p>
            </div>

            {/* অনবোর্ড সাপ্লাই ক্যাটাগরি ব্লক */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="text-yellow-500">⚓</span> Full-Range Ship Supply Categories
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2">✅ Fresh, Frozen & Dry Provisions (Halal Available)</li>
                <li className="flex items-center gap-2">✅ Deck & Engine Technical Stores (ISSA/IMPA)</li>
                <li className="flex items-center gap-2">✅ Cabin, Galley & Safety (LSA/FFA) Equipment</li>
                <li className="flex items-center gap-2">✅ Marine Chemicals, Lubricants & Tools</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">24/7 Rapid Port Delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium text-justify">
                Our supply logistics system operates around the clock to meet tight vessel schedules. We follow standard IMPA and ISSA catalog specifications to ensure accuracy in part-ordering, maintaining strict cold chains for food supplies so everything arrives fresh and secure at the port anchorage or berth.
              </p>
            </div>
          </div>

          {/* ডান পাশ: ৪ কলাম জুড়ে কুইক ইনফো ও ইমেজ সাইডবার */}
          <div className="md:col-span-4 space-y-6 sticky top-6">
            {/* ছবির মতো বড় হাই-কোয়ালিটি ইমেজ বক্স */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-64 relative group">
              <img 
                src="/ship-chandling.jpeg" 
                alt="Ship Chandling and Supplies" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t {from-slate-900/40 to-transparent}"></div>
            </div>

            {/* কন্টাক্ট অ্যাকশন BOX */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 text-center">
              <h4 className="text-sm font-bold tracking-wider text-yellow-400 uppercase">Order Vessel Supplies?</h4>
              <p className="text-xs text-slate-400 font-medium">
                Submit your RFQ or store list based on IMPA/ISSA codes for an instant competitive quotation.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="block w-full py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs md:text-sm rounded-xl transition-all shadow-md">
                  Request Chandling Quote
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
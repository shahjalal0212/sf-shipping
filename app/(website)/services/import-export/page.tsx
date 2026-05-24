// app/(website)/services/import-export/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ImportExportPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার / হেডার এরিয়া */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/import-export.jpeg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <span className="text-yellow-400 text-xs font-black tracking-widest uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
            SF SHIPPING SERVICES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Import & Export Services</h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Facilitating global trade and optimizing commercial shipping with full custom compliance and secure transport.
          </p>
        </div>
      </section>

      {/* ২. মূল কন্টেন্ট সেকশন (হুবহু ৫ নম্বর ইমেজের লেআউট ও টেক্সট) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* বাম পাশ: ৮ কলাম জুড়ে বিস্তারিত ডক টেক্সট */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-l-4 border-yellow-400 pl-4 tracking-tight">
                Global Trade Management & Import-Export Execution
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                At SF SHIPPING SERVICES, we provide end-to-end management for global import and export operations. We help businesses navigate the complexities of international trade laws, customs documentation, tariff classifications, and port logistics to keep commercial supply chains running efficiently without delays.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                Our team handles everything from booking vessel space to executing strict port clearance procedures, providing domestic and multinational corporations with a smooth, risk-free import and export experience.
              </p>
            </div>

            {/* কাস্টমস ও ট্রেড কমপ্লায়েন্স ব্লক */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="text-yellow-500">📜</span> Comprehensive Trade Solutions
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2">✅ Customs Brokerage & Port Clearance</li>
                <li className="flex items-center gap-2">✅ Import/Export Documentation & Licensing</li>
                <li className="flex items-center gap-2">✅ Tariff & Duty Optimization Advice</li>
                <li className="flex items-center gap-2">✅ Secure Cargo Consolidation & Storage</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Streamlining Cross-Border Trade</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium text-justify">
                Our seasoned customs and logistics experts are well-versed in handling complex documentation required at global sea and air ports. We ensure all shipments fully comply with local and international regulations, minimizing the risk of cargo detentions or financial penalties.
              </p>
            </div>
          </div>

          {/* ডান পাশ: ৪ কলাম জুড়ে কুইক ইনফো ও ইমেজ সাইডবার */}
          <div className="md:col-span-4 space-y-6 sticky top-6">
            {/* ছবির মতো বড় হাই-কোয়ালিটি ইমেজ বক্স */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-64 relative group">
              <img 
                src="/import-export.jpeg" 
                alt="Import & Export Management" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t {from-slate-900/40 to-transparent}"></div>
            </div>

            {/* কন্টাক্ট অ্যাকশন বক্স */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 text-center">
              <h4 className="text-sm font-bold tracking-wider text-yellow-400 uppercase">Start Trading Globally?</h4>
              <p className="text-xs text-slate-400 font-medium">
                Let us handle your customs documentation and international trade compliance smoothly.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="block w-full py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs md:text-sm rounded-xl transition-all shadow-md">
                  Inquire For Import & Export
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
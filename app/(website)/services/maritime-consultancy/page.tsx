// app/(website)/services/maritime-consultancy/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function MaritimeConsultancyPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার / হেডার এরিয়া */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/maritime-consultancy.jpeg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <span className="text-yellow-400 text-xs font-black tracking-widest uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
            SF SHIPPING SERVICES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Maritime Consultancy</h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Expert marine engineering advisory, technical vessel surveys, and full regulatory compliance solutions for international shipowners.
          </p>
        </div>
      </section>

      {/* ২. মূল কন্টেন্ট সেকশন (হুবহু ৭ নম্বর ইমেজের লেআউট ও টেক্সট) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* বাম পাশ: ৮ কলাম জুড়ে বিস্তারিত ডক টেক্সট */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-l-4 border-yellow-400 pl-4 tracking-tight">
                Professional Marine Advisory & Technical Vessel Audits
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                SF SHIPPING SERVICES offers specialized technical advisory and consultancy services for ship owners, managers, and maritime operators worldwide. Backed by a team of highly seasoned Master Mariners, Chief Engineers, and Marine Surveyors, we deliver comprehensive insights to optimize vessel performance and manage commercial risks.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium text-justify">
                Our consulting framework spans from pre-purchase condition inspections to managing complex international maritime flag-state and class compliance audits, guaranteeing that your fleet operates at peak efficiency.
              </p>
            </div>

            {/* কনসাল্টেন্সি ও সার্ভে স্কোপ ব্লক */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="text-yellow-500">📋</span> Core Consultancy & Technical Vetting
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2">✅ Pre-Purchase & Condition Surveys</li>
                <li className="flex items-center gap-2">✅ ISM / ISPS / MLC Internal Quality Audits</li>
                <li className="flex items-center gap-2">✅ Dry-Docking Specification & Project Management</li>
                <li className="flex items-center gap-2">✅ Marine Accident & Incident Investigations</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Ensuring IMO & Global Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium text-justify">
                With the maritime sector constantly adopting stricter environmental and safety standard frameworks (such as EEXI, CII, and upcoming IMO mandates), our advisory panel stays ahead of regulations. We provide realistic technical and operational roadmaps to future-proof your vessels and maintain compliance smoothly.
              </p>
            </div>
          </div>

          {/* ডান পাশ: ৪ কলাম জুড়ে কুইক ইনফো ও ইমেজ সাইডবার */}
          <div className="md:col-span-4 space-y-6 sticky top-6">
            {/* ছবির মতো বড় হাই-কোয়ালিটি ইমেজ বক্স */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-64 relative group">
              <img 
                src="/maritime-consultancy.jpeg" 
                alt="Maritime Consultancy Expert Audits" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t {from-slate-900/40 to-transparent}"></div>
            </div>

            {/* কন্টাক্ট অ্যাকশন BOX */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 text-center">
              <h4 className="text-sm font-bold tracking-wider text-yellow-400 uppercase">Consult with Experts?</h4>
              <p className="text-xs text-slate-400 font-medium">
                Connect with our technical marine superintendents for professional vessel vetting and surveys.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="block w-full py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs md:text-sm rounded-xl transition-all shadow-md">
                  Inquire For Consultancy
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
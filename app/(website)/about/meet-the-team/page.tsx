// app/(website)/about/meet-the-team/page.tsx
'use client';

import React from 'react';

export default function MeetTheTeamPage() {
  // হুবহু ৩ নম্বর স্ক্রিনশটের ৬ জন লিডারের নাম, পদবি এবং ছবির পাথ
  const teamMembers = [
    { id: 1, name: 'Abdul Mannan', role: 'Chairman', image: '/team-1.jpg' },
    { id: 2, name: 'Md. Farid Hasan', role: 'Managing Director', image: '/team-2.jpg' },
    { id: 3, name: 'Sharat Fatema Angelic', role: 'Deputy Director', image: '/team-3.jpg' },
    { id: 4, name: 'Sharmin Jahan', role: 'Director', image: '/team-4.jpg' },
    { id: 5, name: 'Arafat Rahman Akram', role: 'General Manager', image: '/team-5.jpg' },
    { id: 6, name: 'Shah Jalal', role: 'A. General Manager', image: '/team-6.jpg' },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার এরিয়া (৩ নম্বর ইমেজের মতো ডার্ক শিপ ব্যাকগ্রাউন্ড) */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/freight-forwarding.jpg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Meet The Team</h1>
          <p className="text-slate-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Home / Team
          </p>
        </div>
      </section>

      {/* ২. মূল টিম সেকশন */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            The Leaders Behind Global Logistics !
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold max-w-3xl mx-auto">
            At <span className="font-bold">SF Shipping Services</span>, our strength lies in our people. Our dedicated team of maritime professionals brings expertise, passion, and a commitment to excellence in every aspect of crewing and vessel support. Get to know the faces behind our success.
          </p>
        </div>

        {/* ৬ জনের টিম গ্রিড লেআউট (হুবহু স্ক্রিনশটের মতো ৪ কলাম ও নিচের ২ কলাম বিন্যাস) */}
        <div className="flex flex-wrap justify-center gap-8 pt-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm flex flex-col items-center text-center space-y-3 w-[220px]"
            >
              {/* টিম মেম্বার ইমেজ বক্স */}
              <div className="w-44 h-48 bg-slate-100 rounded-lg overflow-hidden shadow-inner relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // ছবি এখনো না থাকলে ব্যাকআপ হিসেবে সুন্দর মেল/ফিমেল প্রফেশনাল অবতার দেখাবে
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}&backgroundColor=00a8cc,0b132b&textColor=white`;
                  }}
                />
                
                {/* হুবহু স্ক্রিনশটের মতো ছবির নিচের গ্রিন সোশ্যাল মিডিয়া আইকন বার */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 px-3">
                  <div className="bg-[#00a8cc] text-white rounded px-1.5 py-0.5 text-[10px] cursor-pointer hover:bg-slate-900 transition-colors">f</div>
                  <div className="bg-[#00a8cc] text-white rounded px-1.5 py-0.5 text-[10px] cursor-pointer hover:bg-slate-900 transition-colors">t</div>
                  <div className="bg-[#00a8cc] text-white rounded px-1.5 py-0.5 text-[10px] cursor-pointer hover:bg-slate-900 transition-colors">in</div>
                </div>
              </div>

              {/* নাম এবং পদবি */}
              <div className="space-y-0.5">
                <h4 className="text-sm font-black text-[#00a8cc] tracking-wide">
                  {member.name}
                </h4>
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
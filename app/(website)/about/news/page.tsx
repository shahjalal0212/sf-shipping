// app/(website)/about/news/page.tsx
'use client';

import React from 'react';

export default function NewsPage() {
  // হুবহু ৫ নম্বর স্ক্রিনশটের ৩টি নিউজের টাইটেল, ডেট, ডেসক্রিপশন এবং ইমেজ পাথ
  const blogs = [
    {
      id: 1,
      tag: 'UNCATEGORIZED',
      title: '5 Ways Technology Is Transforming the Global Shipping Industry',
      author: 'sfshipping@25',
      date: 'December 28, 2021',
      description: 'Sed arcu non odio euismod lacinia. Sit amet cursus sit amet dictum sit. Nunc pulvinar sapien et ligula...',
      imageUrl: '/ship-chandling.jpg' // আপনার public ফোল্ডারের ইমেজ
    },
    {
      id: 2,
      tag: 'UNCATEGORIZED',
      title: '4 Shipping Trends That Are Reshaping International Logistics',
      author: 'sfshipping@25',
      date: 'December 28, 2021',
      description: 'Sed arcu non odio euismod lacinia. Sit amet cursus sit amet dictum sit. Nunc pulvinar sapien et ligula...',
      imageUrl: '/import-export.jpg' // আপনার public ফোল্ডারের ইমেজ
    },
    {
      id: 3,
      tag: 'UNCATEGORIZED',
      title: '3 Innovations Changing the Future of Maritime Services Today',
      author: 'sfshipping@25',
      date: 'December 28, 2021',
      description: 'Sed arcu non odio euismod lacinia. Sit amet cursus sit amet dictum sit. Nunc pulvinar sapien et ligula...',
      imageUrl: '/freight-forwarding.jpg' // আপনার public ফোল্ডারের ইমেজ
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার এরিয়া */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/freight-forwarding.jpg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">News & Updates</h1>
          <p className="text-slate-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Home / About Us / News
          </p>
        </div>
      </section>

      {/* ২. মূল নিউজ গ্রিড সেকশন (হুবহু ৫ নম্বর স্ক্রিনশটের ৩-কলাম কার্ড লেআউট) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* নিউজ ইমেজ এরিয়া */}
              <div className="w-full h-52 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // ইমেজ পাথ মিস হলে ব্যাকআপ মেরিন পোর্ট ইমেজ দেখাবে
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>

              {/* নিউজ কন্টেন্ট এরিয়া */}
              <div className="p-7 flex flex-col justify-between flex-grow space-y-4">
                
                <div className="space-y-2">
                  {/* গ্রীন ক্যাটাগরি ট্যাগ */}
                  <span className="text-[#00a8cc] text-[10px] font-black tracking-widest uppercase block">
                    {post.tag}
                  </span>
                  
                  {/* নিউজ টাইটেল */}
                  <h3 className="text-xl font-extrabold text-slate-800 leading-snug tracking-tight hover:text-[#00a8cc] cursor-pointer transition-colors">
                    {post.title}
                  </h3>
                  
                  {/* লেখক ও ডেট মেটাডাটা */}
                  <div className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* নিউজ ডেসক্রিপশন */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {post.description}
                </p>

                {/* READ MORE লিঙ্ক */}
                <div className="pt-2">
                  <span className="text-[11px] font-black tracking-wider text-slate-800 hover:text-[#00a8cc] cursor-pointer inline-flex items-center gap-1 transition-colors group">
                    READ MORE <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
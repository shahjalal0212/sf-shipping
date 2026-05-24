// app/(website)/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [settings, setSettings] = useState({
    hero_title: 'Reliable Crew Manning & Maritime Solutions',
    hero_description: 'SF Shipping Service is a premier crew manning agency based in Bangladesh, dedicated to providing highly qualified and competent seafarers to the global maritime industry.',
    
    // হুবহু ছবির টেক্সট কন্টেন্ট
    who_we_are: 'WHO WE ARE',
    about_title: 'Fast, Secure & Efficient Shipping Service',
    about_description: 'SF Shipping Service is your trusted partner for fast, reliable, and secure logistics solutions. We specialize in international and domestic shipping, ensuring your cargo reaches its destination safely and on time.',
    
    // ৪টি কাউন্টার সংখ্যা (ডাটাবেজ থেকে পরে চেইঞ্জ করা যাবে, এখন ডিফল্ট সেট করা)
    stat_vessels: '56',
    stat_crew: '4.5k',
    stat_jobs: '20',
    stat_exp: '10',
    
    about_image_url: '/about-ship.jpg' // আপনার জাহাজের ছবির পাথ
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data === 'object' && !data.error) {
          setSettings({
            hero_title: data.hero_title || settings.hero_title,
            hero_description: data.hero_description || settings.hero_description,
            who_we_are: data.who_we_are || settings.who_we_are,
            about_title: data.about_title || settings.about_title,
            about_description: data.about_description || settings.about_description,
            stat_vessels: data.stat_vessels || settings.stat_vessels,
            stat_crew: data.stat_crew || settings.stat_crew,
            stat_jobs: data.stat_jobs || settings.stat_jobs,
            stat_exp: data.stat_exp || settings.stat_exp,
            about_image_url: data.about_image_url || settings.about_image_url,
          });
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-slate-500 bg-white min-h-screen">Loading Home...</div>;
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* ১. হিরো সেকশন */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-6 overflow-hidden border-b border-slate-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-white/10 z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-20 space-y-6">
          <span className="text-white text-xs font-bold tracking-widest uppercase bg-blue-600 px-3 py-1 rounded-full shadow-md inline-block">
            Welcome to SF Shipping Service
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto capitalize drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            {settings.hero_title}
          </h1>
          
          <p className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {settings.hero_description}
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link href="/services" className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg">
              Explore Our Service
            </Link>
            <Link href="/contact" className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl text-sm transition-all border border-slate-300 shadow-lg">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* ২. হুবহু ছবির মতো ডিজাইন ও টেক্সট সেকশন */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* বাম পাশ: ইমেজ ডিসপ্লে এরিয়া (ছবির মতো গোল কোনাবিশিষ্ট) */}
          <div className="relative">
            <img 
              src={settings.about_image_url} 
              alt="SF Shipping Operations" 
              className="w-full h-[450px] object-cover rounded-[32px] shadow-lg"
              onError={(e) => {
                // ইমেজ না থাকলে ব্যাকআপ হিসেবে মেরিন পোর্টের সুন্দর ছবি দেখাবে
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          {/* ডান পাশ: হুবহু ছবির টেক্সট এবং ৪টি গ্রিড কাউন্টার */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#00a8cc] text-sm font-black tracking-wider uppercase block">
                {settings.who_we_are}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-md">
                {settings.about_title}
              </h2>
            </div>
            
            <p className="text-slate-700 text-sm leading-relaxed font-medium max-w-xl">
              {settings.about_description}
            </p>

            {/* ৪টি কাউন্টার গ্রিড লেআউট (হুবহু ছবির মতো লাইনিং ও কালার) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-6 border-t border-slate-100">
              
              {/* Vessels */}
              <div className="space-y-1">
                <span className="text-4xl font-bold text-[#00a8cc] block">{settings.stat_vessels}</span>
                <span className="text-xs font-bold text-slate-500 tracking-wide uppercase block">Vessels</span>
              </div>

              {/* Crew */}
              <div className="space-y-1 border-l border-slate-100 pl-8">
                <span className="text-4xl font-bold text-[#00a8cc] block">{settings.stat_crew}</span>
                <span className="text-xs font-bold text-slate-500 tracking-wide uppercase block">Crew</span>
              </div>

              {/* Job Opening */}
              <div className="space-y-1 pt-4 border-t border-slate-100">
                <span className="text-4xl font-bold text-[#00a8cc] block">{settings.stat_jobs}</span>
                <span className="text-xs font-bold text-slate-500 tracking-wide uppercase block">Job Opening</span>
              </div>

              {/* Experience */}
              <div className="space-y-1 pt-4 pl-8 border-t border-l border-slate-100">
                <span className="text-4xl font-bold text-[#00a8cc] block">{settings.stat_exp}</span>
                <span className="text-xs font-bold text-slate-500 tracking-wide uppercase block">Experience</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
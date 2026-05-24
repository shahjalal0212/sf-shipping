// app/(website)/layout.tsx
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // WeChat QR কোড পপআপের জন্য স্টেট
  const [showWeChatQR, setShowWeChatQR] = useState(false);

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1 bg-white">
        {children}
      </div>
      <Footer />

      {/* WhatsApp & WeChat Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3">
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8801624311689"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.02-4.5 10.02-10.02 0-5.52-4.5-10.02-10.02-10.02-5.52 0-10.02 4.5-10.02 10.02 0 1.956.566 3.815 1.548 5.462l-.762 2.785 2.872-.753z"/>
          </svg>
        </a>

        {/* WeChat Button - যা ক্লিক করলে পপআপ ওপেন করবে */}
        <button
          onClick={() => setShowWeChatQR(true)}
          className="bg-[#07C160] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
          title="Show WeChat QR Code"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.24 12.24c0-3.33-2.92-6.04-6.51-6.04-3.59 0-6.51 2.71-6.51 6.04 0 2.92 2.12 5.38 4.96 5.89l-.54 2.1 2.3-1.28c.17.02.34.04.51.04 3.59 0 6.51-2.71 6.51-6.04m-12.86 0c0-2.4 2.05-4.35 4.58-4.35 2.53 0 4.58 1.95 4.58 4.35 0 2.4-2.05 4.35-4.58 4.35-.49 0-.96-.08-1.4-.23l-2.02 1.13.48-1.87c-1.07-.63-1.64-1.78-1.64-3.38m8.36 4.35h.01c.21 0 .42-.01.62-.03l-1.09 4.22c-1.39.4-2.85.62-4.37.62-5.18 0-9.39-3.76-9.39-8.39 0-4.63 4.21-8.39 9.39-8.39 5.18 0 9.39 3.76 9.39 8.39 0 2.16-.8 4.14-2.16 5.67m-6.49-6.38c.67 0 1.21-.54 1.21-1.21s-.54-1.21-1.21-1.21-1.21.54-1.21 1.21.54 1.21 1.21 1.21m4.84 0c.67 0 1.21-.54 1.21-1.21s-.54-1.21-1.21-1.21-1.21.54-1.21 1.21.54 1.21 1.21 1.21"/>
          </svg>
        </button>

      </div>

      {/* WeChat QR Code পপআপ মডাল মোডাল ইউআই */}
      {showWeChatQR && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4 animate-fadeIn">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full text-center space-y-4 shadow-2xl relative">
            
            {/* ক্লোজ বাটন */}
            <button 
              onClick={() => setShowWeChatQR(false)}
              className="absolute top-3 right-4 text-slate-400 hover:text-slate-700 font-bold text-lg focus:outline-none"
            >
              ✕
            </button>
            
            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-900">Scan WeChat QR Code</h3>
              <p className="text-xs text-slate-500 font-semibold">ID / Phone: +8801624311689</p>
            </div>

            {/* কিউআর কোড ইমেজ বক্স */}
            <div className="w-56 h-56 mx-auto bg-slate-50 border border-slate-100 rounded-xl overflow-hidden p-2 flex items-center justify-center">
              <img 
                src="/wechat-qr.jpg" 
                alt="WeChat QR Code" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // কিউআর কোড না থাকলে ডামি কিউআর প্লেসহোল্ডার দেখাবে
                  (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChat-Id:+8801624311689';
                }}
              />
            </div>

            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Open WeChat app, scan this QR code to instantly connect with SF Shipping Services support.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
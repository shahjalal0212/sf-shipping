// app/(website)/about/page.tsx
'use5 client';

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* প্রধান হেডার ও পরিচিতি সেকশন */}
        <section id="company-profile" className="text-center space-y-4">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">About SF Shipping Services</h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto my-4"></div>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed pt-2">
            SF Shipping Services is a well-established crew manning and maritime solutions provider based in Bangladesh. 
            With years of industry experience, we bridge the gap between global shipping companies and highly qualified, 
            STCW-certified Bangladeshi seafarers and officers. Our commitment revolves around safety, reliability, and excellence.
          </p>
        </section>

        {/* Meet the Team সেকশন */}
        <section id="meet-team" className="border-t border-slate-100 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Meet Our Executive Team</h2>
            <p className="text-slate-500 text-sm mt-1">The professionals driving our maritime excellence</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center shadow-sm">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 font-bold">⚓</div>
              <h4 className="font-bold text-slate-800 text-base">Capt. Management</h4>
              <p className="text-xs text-blue-600 font-semibold mt-0.5">Managing Director</p>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">২৫ বছরেরও বেশি সময় গভীর সমুদ্রে জাহাজ পরিচালনার অভিজ্ঞতা সম্পন্ন মেরিটাইম এক্সপার্ট।</p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center shadow-sm">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 font-bold">🛠️</div>
              <h4 className="font-bold text-slate-800 text-base">Chief Engineer</h4>
              <p className="text-xs text-emerald-600 font-semibold mt-0.5">Technical Director</p>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">জাহাজের মেরিন ইঞ্জিন, টেকনিক্যাল সার্ভে এবং মেইনটেন্যান্স অপারেশন প্রধান।</p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center shadow-sm">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 font-bold">📋</div>
              <h4 className="font-bold text-slate-800 text-base">Crew Manager</h4>
              <p className="text-xs text-purple-600 font-semibold mt-0.5">Head of Manning</p>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">নাবিকদের স্ক্রিনিং, সিডিইউ, ভিসা প্রসেসিং এবং ডক-ডকুমেন্টেশনের দায়িত্বে নিয়োজিত।</p>
            </div>
          </div>
        </section>

        {/* Our Principal Company & News সেকশন */}
        <section id="principals" className="border-t border-slate-100 pt-16 grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">🤝 Our Principal Company</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              আমরা বিশ্বের বিভিন্ন নামী কার্গো, কন্টেইনার এবং অয়েল ট্যাংকার শিপিং লাইনের অফিসিয়াল ক্রু ম্যানিং পার্টনার হিসেবে কাজ করছি। 
              আমাদের স্বচ্ছতা এবং দক্ষ ক্রু প্যানেলের কারণে আন্তর্জাতিক শিপ-ম্যানেজমেন্ট কোম্পানিগুলোর কাছে আমরা একটি নির্ভরযোগ্য নাম।
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">📰 News & Notice Board</h3>
            <div className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">Latest</span>
                <p className="text-xs font-semibold text-slate-800 mt-1">নতুন ক্রু রিক্রুটমেন্ট পুল ২০২৬ এর জন্য আবেদন শুরু হয়েছে।</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded">Notice</span>
                <p className="text-xs font-semibold text-slate-800 mt-1">সব ক্রুদের সাইন-অন করার পূর্বে রিফ্রেশার কোর্স সার্টিফিকেট জমা দেওয়ার নির্দেশ।</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
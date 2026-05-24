// app/(website)/procedure/page.tsx
'use client';

import React, { useState } from 'react';

export default function ProcedurePage() {
  // ৮টি FAQ একর্ডিয়নের স্টেট ম্যানেজমেন্ট (কোনটি ওপেন থাকবে তা ট্র্যাক করার জন্য)
  const [openFaq, setOpenFaq] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // ৬টি স্ট্যান্ডার্ড প্রসেস স্টেপস কন্টেন্ট (হুবহু স্ক্রিনশটের লেআউট)
  const steps = [
    { id: '01', title: 'ACCREDITATION', desc: 'Refers to the acceptance to a foreign principal to engage Bangladeshi seafarers for specific ships through a licensed agency for marine employment.' },
    { id: '02', title: 'PRINCIPAL', desc: 'Refers to a foreign person, partnership or corporation engaging and employing Bangladeshi seafarers through a licensed manning agency.' },
    { id: '03', title: 'SHIP OWNER', desc: "Refers to the shipowner or any party (manager, agent, or charterer) who takes over the ship's operation and assumes all related duties and responsibilities." },
    { id: '04', title: 'ENROLLMENT', desc: 'Refers to the enlistment to the administration of a vessel by an accredited/registered principal to its appointed manning agent for the purpose of employing seafarers.' },
    { id: '05', title: 'ACCREDITATION', desc: 'Refers to the Director General Shipping Regulations on Seafarers recruitment.' },
    { id: '06', title: 'PRINCIPAL', desc: 'Refers to a licensed manning agency or authorized entity approved to recruit and deploy seafarers for maritime employment.' },
  ];

  // ৮টি FAQ-এর হুবহু স্ক্রিনশটের টেক্সট কন্টেন্ট
  const faqs = [
    {
      id: 1,
      question: 'What services does SF Shipping Services provide under crewing solutions?',
      answer: 'We offer complete crewing solutions including recruitment, documentation, training coordination, deployment, and ongoing crew management.'
    },
    {
      id: 2,
      question: 'What compliance standards does SF Shipping Services follow?',
      answer: 'We operate strictly under international maritime regulations such as STCW, MLC 2006, and relevant flag state laws.'
    },
    {
      id: 3,
      question: 'How does SF Shipping Services ensure the crew is qualified and experienced?',
      answer: 'Our crew members are selected through a thorough screening process that includes qualification checks, experience verification, and medical fitness assessments.'
    },
    {
      id: 4,
      question: 'What is your onboarding process for new vessels or clients?',
      answer: 'We begin with a detailed consultation to understand your needs and create a customized crewing plan that supports your operations.'
    },
    {
      id: 5,
      question: 'Can SF Shipping Services provide multinational crew based on client requirements?',
      answer: 'Yes, we source and supply highly qualified, certified, and experienced Bangladeshi seafarers (officers and ratings) as well as global talent according to ship owners requirements.'
    },
    {
      id: 6,
      question: "How can we get started with SF Shipping Services' crewing solutions?",
      answer: 'Simply contact us through our website or email. Our team will promptly arrange a consultation and guide you through the onboarding process.'
    },
    {
      id: 7,
      question: 'How are emergency crew replacements handled?',
      answer: 'We maintain a ready pool of trained crew for fast and efficient replacements in emergency situations or on short notice.'
    },
    {
      id: 8,
      question: 'How Can I Contact You for Support?',
      answer: 'Our customer and vessel support team is available 24/7. You can reach out directly via our official hotline, email, or through the contact form on this platform.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার / হেডার এরিয়া */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.mp4' ? '' : 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Procedures</h1>
          <p className="text-slate-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Home / Procedures
          </p>
        </div>
      </section>

      {/* ২. প্রসেস স্টেপস সেকশন ("Efficient Crewing, One Step at a Time") */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-3">
          <span className="text-[#00a8cc] text-xs font-black tracking-widest uppercase block">
            STANDARD PROCEDURES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#333333] tracking-tight leading-tight max-w-xl mx-auto">
            Efficient Crewing, One Step at a Time
          </h2>
          <p className="text-slate-500 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            We specialize in providing streamlined, reliable crewing solutions—ensuring every step is handled with precision and care. From selection to deployment, we focus on efficiency, safety, and client satisfaction at every stage.
          </p>
        </div>

        {/* ৬টি বৃত্তাকার স্টেপ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center space-y-4 px-2">
              {/* নম্বর সার্কেল আইকন */}
              <div className="w-14 h-14 rounded-full border-2 border-pink-500 flex items-center justify-center text-pink-500 font-bold text-lg shadow-sm bg-white hover:bg-pink-50 transition-colors">
                {step.id}
              </div>
              {/* টাইটেল */}
              <h4 className="text-sm font-black text-slate-800 tracking-wider uppercase">
                {step.title}
              </h4>
              {/* ডেসক্রিপশন */}
              <p className="text-slate-600 text-xs leading-relaxed font-medium text-center max-w-[240px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ৩. FAQ একর্ডিয়ন সেকশন (হুবহু ২ কলামের লাইট ব্লু ড্রপডাউন ব্যাকগ্রাউন্ড) */}
      <section className="bg-[#ebf4fa] py-20 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#00a8cc] text-xs font-black tracking-widest uppercase block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Our Processing: FAQ
            </h2>
            <p className="text-slate-600 text-xs md:text-sm font-medium">
              Her old collecting she considered discovered. So at parties he warrant oh staying.
              <br />Square new horses and put better end. Sincerity collected happiness.
            </p>
          </div>

          {/* ২ কলামের ড্রপডাউন গ্রিড */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start pt-4">
            
            {/* কলাম ১ (FAQ 1, 3, 5, 7) */}
            <div className="space-y-4">
              {faqs.filter((_, idx) => idx % 2 === 0).map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden transition-all">
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="text-xs md:text-sm font-bold text-slate-800 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-slate-500 text-xs font-bold transition-transform duration-300">
                      {openFaq[faq.id] ? '▲' : '▼'}
                    </span>
                  </button>
                  
                  {openFaq[faq.id] && (
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-50 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* কলাম ২ (FAQ 2, 4, 6, 8) */}
            <div className="space-y-4">
              {faqs.filter((_, idx) => idx % 2 !== 0).map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden transition-all">
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="text-xs md:text-sm font-bold text-slate-800 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-slate-500 text-xs font-bold transition-transform duration-300">
                      {openFaq[faq.id] ? '▲' : '▼'}
                    </span>
                  </button>
                  
                  {openFaq[faq.id] && (
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-50 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
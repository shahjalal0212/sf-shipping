// app/(website)/about/our-principal-company/page.tsx
'use client';

import React from 'react';

export default function OurPrincipalCompanyPage() {
  // হুবহু ৪ নম্বর স্ক্রিনশটের টেবিল ডাটা (১২টি কোম্পানির নাম, দেশ এবং জাহাজের টাইপ)
  const companies = [
    { name: 'NANJING GOLDENKING SHIPPING CO. LTD.', country: 'CHINA', vessel: 'BULK CARRIER' },
    { name: 'NASCOSM MANNING SERVICE CO. LTD.', country: 'CHINA', vessel: 'BULK, VLCC, VLOC' },
    { name: 'ZHANGJIAGANG OCEANWIT SHIPPING CO. LTD.', country: 'CHINA', vessel: 'BULK & LOG CARRIER' },
    { name: 'MARK SHIP MANAGEMENT & CONSULTANT CO. LTD.', country: 'CHINA', vessel: 'BULK & CARGO' },
    { name: 'QINGDAO GLOBAL OCEAN SHIPPING CO. LTD.', country: 'CHINA', vessel: 'BULK CARRIER' },
    { name: 'QINGDAO HUIYANG MANAGEMENT CO. LTD.', country: 'CHINA', vessel: 'BULK & CARGO' },
    { name: 'CHINASHIP SHIPS MANAGEMENT CO. LTD.', country: 'CHINA', vessel: 'BULK & TANKER, VLCC, VLOC' },
    { name: 'GREAT OCEAN SHIP MANAGEMENT CO. LTD.', country: 'CHINA', vessel: 'BULK & CARGO' },
    { name: 'INCHEON SHIP MANAGEMENT CO. LTD.', country: 'CHINA', vessel: 'CARGO & BULK CARRIER' },
    { name: 'DALIAN HEVANG SHIPPING AGENCY CO. LTD.', country: 'CHINA', vessel: 'CARGO' },
    { name: 'ZERVOS SHIPPING AGENCY', country: 'QATAR', vessel: 'GAS CARRIER' },
    { name: 'WEI HAI HAI RUN SHIPPING SERVICES CO. LTD.', country: 'CHINA', vessel: 'BULK, CARGO & REEFER' },
    { name: 'UNITED DREDGING COMPANY', country: 'BAHRAIN', vessel: 'DREDGING SHIP' },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার এরিয়া */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/freight-forwarding.jpg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our principal company</h1>
          <p className="text-slate-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Home / About Us / Principal company
          </p>
        </div>
      </section>

      {/* ২. মূল টেবিল সেকশন */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-10">
        
        {/* টপ প্যারাগ্রাফ কন্টেন্ট */}
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <p className="text-slate-900 text-xs md:text-sm leading-relaxed font-bold max-w-3xl mx-auto">
            <span className="font-black">SF Shipping Services</span> proudly partners with a trusted principal company that upholds the highest standards in global maritime operations. Together, we ensure safe, efficient, and compliant crewing solutions tailored to meet the needs of modern shipping.
          </p>
        </div>

        {/* ডাইনামিক রেসপন্সিভ টেবিল (হুবহু স্ক্রিনশটের নীল থিম ও রাউন্ডেড বর্ডার) */}
        <div className="overflow-x-auto rounded-2xl shadow-md border border-slate-100 max-w-5xl mx-auto">
          <table className="w-full text-left border-collapse">
            
            {/* টেবিল হেডার (হুবহু ৪ নম্বর ইমেজের কালার ও ফন্ট) */}
            <thead>
              <tr className="bg-[#4a86f7] text-white text-[11px] md:text-xs font-black tracking-wider uppercase">
                <th className="py-4 px-6 border-r border-white/20 w-[50%]">COMPANY NAME</th>
                <th className="py-4 px-6 border-r border-white/20 text-center w-[20%]">COUNTRY</th>
                <th className="py-4 px-6 text-center w-[30%]">TYPE OF VESSEL</th>
              </tr>
            </thead>

            {/* টেবিল বডি */}
            <tbody className="divide-y divide-slate-100 text-[11px] md:text-xs font-bold text-slate-700 bg-white">
              {companies.map((company, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3.5 px-6 font-black text-slate-800 border-r border-slate-100">
                    {company.name}
                  </td>
                  <td className="py-3.5 px-6 text-center border-r border-slate-100 text-slate-600">
                    {company.country}
                  </td>
                  <td className="py-3.5 px-6 text-center text-blue-600 font-extrabold">
                    {company.vessel}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </section>

    </div>
  );
}
// app/(website)/contact/page.tsx
'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* ১. টপ ব্যানার এরিয়া */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/freight-forwarding.jpg')" }}></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-slate-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Home / Contact
          </p>
        </div>
      </section>

      {/* ২. কন্টেন্ট সেকশন (২ কলাম লেআউট) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* বাম পাশ: কন্টাক্ট ইনফরমেশন (৫ কলাম) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-[#00a8cc] tracking-tight">Get in touch!</h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">
                Have questions or ready to start your journey with us? We'd love to hear from you. Whether you're looking for more information, want to discuss a project, or just say hello — reach out anytime.
              </p>
            </div>

            {/* CORPORATE OFFICE, MALAYSIA */}
            <div className="space-y-2">
              <h3 className="text-sm font-black text-slate-800 tracking-wider uppercase">
                CORPORATE OFFICE, MALAYSIA
              </h3>
              <div className="text-xs md:text-sm text-slate-600 font-bold space-y-1">
                <p className="flex items-center gap-2">📞 <span className="text-slate-700 font-medium">+1-(203) 975-0263 , +601160747600 , +601118881453</span></p>
                <p className="flex items-center gap-2">✉️ <span className="text-slate-700 font-medium">sfshippingbd@gmail.com , operation@sfshippingbd.com</span></p>
                <p className="flex items-center gap-2 items-start">📍 <span className="text-slate-700 font-medium leading-relaxed">Pacific Place, Jalan PJU 1a/4a, Ara Damansara 47301 Petaling Jaya , Selangor, Kuala Lumpur, Malaysia</span></p>
              </div>
            </div>

            {/* CORPORATE OFFICE-2 , BANGLADESH */}
            <div className="space-y-2">
              <h3 className="text-sm font-black text-slate-800 tracking-wider uppercase">
                CORPORATE OFFICE-2 , BANGLADESH
              </h3>
              <div className="text-xs md:text-sm text-slate-600 font-bold space-y-1">
                <p className="flex items-center gap-2">📞 <span className="text-slate-700 font-medium">+88016-12057839 , +88017-50255275</span></p>
                <p className="flex items-center gap-2">✉️ <span className="text-slate-700 font-medium">sfshippingbd@gmail.com , operation@sfshippingbd.com</span></p>
                <p className="flex items-center gap-2 items-start">📍 <span className="text-slate-700 font-medium leading-relaxed">House No:465/A, Road No:06, Ave:06, Mirpur-12(DOHS), Dhaka-1216, Bangladesh</span></p>
              </div>
            </div>

            {/* Other Contact Information */}
            <div className="space-y-2">
              <h3 className="text-sm font-black text-[#00a8cc] tracking-wider">
                Other Contact Information:
              </h3>
              <div className="text-xs md:text-sm text-slate-600 font-bold space-y-1">
                <p className="flex items-center gap-2">📞 <span className="text-slate-700 font-medium">+8801612057839 (Bangladesh)</span></p>
                <p className="flex items-center gap-2">📞 <span className="text-slate-700 font-medium">+601742847995 (Malaysia)</span></p>
              </div>
            </div>
          </div>

          {/* ডান পাশ: কন্টাক্ট ফর্ম (৭ কলাম - হুবহু স্ক্রিনশটের মতো ডিজাইন) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-5 text-xs md:text-sm font-bold text-slate-700">
              
              <div className="space-y-1.5">
                <label htmlFor="firstName" className="block text-slate-500 font-medium">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors font-medium bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lastName" className="block text-slate-500 font-medium">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors font-medium bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-slate-500 font-medium">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors font-medium bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-slate-500 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors font-medium bg-slate-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-slate-500 font-medium">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors font-medium bg-slate-50/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#00a8cc] hover:bg-[#0092b3] text-white font-black uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 cursor-pointer text-center"
              >
                SUBMIT
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
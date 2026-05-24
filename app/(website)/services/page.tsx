// app/(website)/services/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Crew Manning',
      slug: 'crew-manning',
      description: 'Expert crew manning services, connecting skilled maritime professionals with global shipping companies.',
      imageUrl: '/crew-manning.jpg'
    },
    {
      id: 2,
      title: 'Crew Management',
      slug: 'crew-management',
      description: 'Managing crew logistics and deployment for global maritime companies with precision care.',
      imageUrl: '/crew-management.jpeg'
    },
    {
      id: 3,
      title: 'Freight Forwarding',
      slug: 'freight-forwarding',
      description: 'Managing logistics for imports and exports with trusted freight forwarding expertise worldwide.',
      imageUrl: '/freight-forwarding.jpeg'
    },
    {
      id: 4,
      title: 'Import & Export',
      slug: 'import-export',
      description: 'Facilitating global trade through efficient import and export solutions for businesses of all sizes.',
      imageUrl: '/import-export.jpeg'
    },
    {
      id: 5,
      title: 'Ship Chandling',
      slug: 'ship-chandling',
      description: 'Your trusted marine supplier for all onboard essentials, available at major global ports.',
      imageUrl: '/ship-chandling.jpeg'
    },
    {
      id: 6,
      title: 'Maritime Consultancy',
      slug: 'maritime-consultancy',
      description: 'Expert advice on marine operations, safety, compliance, and global shipping strategies.',
      imageUrl: '/maritime-consultancy.jpeg'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* হেডার সেকশন */}
        <div className="text-center space-y-6 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f2937] tracking-tight">
            What Service we Provide
          </h1>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium max-w-4xl mx-auto">
            At <span className="font-bold">SF Shipping Services</span>, we specialize in comprehensive logistics solutions tailored to meet your global shipping needs. Our expert team offers a wide range of services including import and export management, freight forwarding, crew manning and management, ship chandling, and maritime consultancy.
          </p>
        </div>

        {/* মডার্ন ভিজিবল ইমেজ কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {services.map((service) => (
            <Link 
              href={`/services/${service.slug}`}
              key={service.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-[420px] group cursor-pointer"
            >
              {/* ১. ইমেজ সেকশন */}
              <div className="w-full h-52 overflow-hidden relative">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400"></div>
              </div>

              {/* ২. টেক্সট সেকশন */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-slate-900 tracking-wide group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* নিচের অ্যাকশন লিংক */}
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center text-xs font-bold text-yellow-600">
                  <span>SF SHIPPING SERVICES</span>
                  <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
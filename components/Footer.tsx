// components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-8 px-6 text-center mt-auto">
      <div className="max-w-7xl mx-auto space-y-2">
        <p className="text-sm font-medium text-slate-800">
          © {new Date().getFullYear()} SF Shipping Services. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">
          Reliable Crew Manning & Maritime Solutions | Approved Agency in Bangladesh
        </p>
      </div>
    </footer>
  );
}
// app/(admin)/admin/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // আমরা পরে এই এপিআই (API) রুটটি তৈরি করব যা সুপাবেস চেক করবে
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        alert('Login Successful! 🔓');
        router.push('/admin/dashboard'); // লগইন সফল হলে ৪ ট্যাবওয়ালা ড্যাশবোর্ডে নিয়ে যাবে
      } else {
        const data = await res.json();
        alert(data.error || 'Invalid email or password!');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6 text-slate-900">
      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xl max-w-md w-full space-y-6">
        
        {/* হেডার */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black text-blue-600 tracking-wide">SF SHIPPING</h1>
          <p className="text-sm text-slate-500 font-medium">Admin Panel Control Center</p>
        </div>

        {/* ফর্ম */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
              placeholder="admin@sfshipping.com" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors shadow-md shadow-blue-100 mt-2"
          >
            {loading ? 'Verifying...' : 'Sign In to Dashboard'}
          </button>
        </form>

      </div>
    </div>
  );
}
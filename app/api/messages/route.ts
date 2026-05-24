// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Supabase ক্লায়েন্ট ইনিশিয়ালাইজ করা
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ১. ডাটাবেজ থেকে সব মেসেজ নিয়ে আসার জন্য (GET Request)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('id', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ২. কন্টাক্ট ফর্ম থেকে নতুন মেসেজ ডাটাবেজে সেভ করার জন্য (POST Request)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // ভ্যালিডেশন চেক
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }])
      .select();

    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
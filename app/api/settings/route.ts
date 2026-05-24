import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .maybeSingle(); // .single() এর বদলে .maybeSingle() ব্যবহার করা ভালো

    // যদি ডাটা না থাকে, তবে একটি ডিফল্ট অবজেক্ট ফেরত দিন
    if (!data) {
      return NextResponse.json({ 
        hero_video_url: '', 
        logo_url: '', 
        hero_title: '', 
        hero_description: '' 
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data: existing } = await supabase.from('site_settings').select('id').maybeSingle();

    if (existing) {
      await supabase.from('site_settings').update(body).eq('id', existing.id);
    } else {
      await supabase.from('site_settings').insert([body]);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
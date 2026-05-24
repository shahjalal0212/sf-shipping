'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // এটি ব্যবহার করা এখন নিরাপদ

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  category: string;
}

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // useSearchParams সরাসরি ব্যবহার করুন
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setGalleryItems(data);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  // এখন ক্যাটাগরি পরিবর্তন হলেই এটি সাথে সাথে ফিল্টার করবে
  const filteredItems = galleryItems.filter((item: GalleryItem) => {
    if (!currentCategory) return true;
    return item.category.toLowerCase().includes(currentCategory.toLowerCase());
  });

  if (loading) {
    return <div className="text-center py-20 text-slate-500 bg-white min-h-screen">Loading Gallery...</div>;
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-black mt-4 capitalize">
            {currentCategory === 'crew' ? 'Crew Gallery' : currentCategory === 'client' ? 'Client Meetings' : 'SF Shipping Gallery'}
          </h1>
        </header>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20">এই ক্যাটাগরিতে এখনো ছবি নেই।</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item: GalleryItem) => (
              <div key={item.id} onClick={() => setSelectedImage(item.image_url)} className="cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-slate-100 rounded-2xl">
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] px-2 py-1 rounded">{item.category}</span>
                </div>
                <h3 className="font-bold text-sm mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

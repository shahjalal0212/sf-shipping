'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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

  // নিখুঁত ফিল্টারিং লজিক
  const filteredItems = galleryItems.filter((item: GalleryItem) => {
    if (!currentCategory) return true;
    const itemCat = item.category.toLowerCase();
    const searchCat = currentCategory.toLowerCase();
    return itemCat.includes(searchCat);
  });

  if (loading) {
    return <div className="text-center py-20 text-slate-500 bg-white min-h-screen">Loading Gallery...</div>;
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Our Memories
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 text-slate-900 capitalize">
            {currentCategory === 'crew' ? 'Crew Gallery' : currentCategory === 'client' ? 'Client Meetings' : 'SF Shipping Gallery'}
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </header>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-slate-500 bg-slate-50 border border-slate-200 rounded-3xl">
            এই ক্যাটাগরিতে এখনো কোনো ছবি যোগ করা হয়নি।
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item: GalleryItem) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item.image_url)}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400/50 transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 bg-white border-t border-slate-100">
                  <h3 className="font-bold text-sm text-slate-800 truncate capitalize">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-900/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 md:-right-10 text-white hover:text-red-500 text-3xl font-bold bg-slate-950/40 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

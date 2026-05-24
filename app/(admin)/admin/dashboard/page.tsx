'use client';

import { useState, useEffect } from 'react';

interface Job { id: number; title: string; location: string; description: string; }
interface Message { id: number; name: string; email: string; message: string; created_at: string; }
interface GalleryItem { id: number; title: string; image_url: string; category: string; }

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  
  const [settings, setSettings] = useState({ 
    hero_title: '', 
    hero_description: '',
    hero_video_url: '', 
    logo_url: ''
  });
  const [savingSettings, setSavingSettings] = useState(false);

  const [newJob, setNewJob] = useState({ title: '', location: '', description: '' });
  const [addingJob, setAddingJob] = useState(false);

  const [newItem, setNewItem] = useState({ title: '', category: 'Crew Gallery' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const fetchJobs = async () => { try { const res = await fetch('/api/jobs'); const data = await res.json(); if (Array.isArray(data)) setJobs(data); } catch (e) { console.error(e); } };
  const fetchGallery = async () => { try { const res = await fetch('/api/gallery'); const data = await res.json(); if (Array.isArray(data)) setGallery(data); } catch (e) { console.error(e); } };
  const fetchMessages = async () => { try { const res = await fetch('/api/messages'); const data = await res.json(); if (Array.isArray(data)) setMessages(data); } catch (e) { console.error(e); } };
  
  const fetchSettings = async () => { 
    try { 
      const res = await fetch('/api/settings'); 
      const data = await res.json(); 
      if (data && typeof data === 'object' && !data.error) setSettings(data); 
    } catch (e) { console.error(e); } 
    finally { setLoading(false); }
  };

  useEffect(() => {
    fetchSettings();
    fetchJobs();
    fetchGallery();
    fetchMessages();
  }, []);

  const handleUpdateSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      await fetch('/api/settings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(settings) });
      alert('Settings updated successfully! 🚀');
    } catch (e) { alert('Failed to save settings'); }
    finally { setSavingSettings(false); }
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddingJob(true);
    try {
      const res = await fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newJob) });
      if (res.ok) { alert('Job posted! 💼'); setNewJob({ title: '', location: '', description: '' }); fetchJobs(); }
    } catch (e) { console.error(e); }
    finally { setAddingJob(false); }
  };

  const handleDeleteJob = async (id: number) => {
    if (!confirm('Delete this job?')) return;
    try { const res = await fetch(`/api/jobs?id=${id}`, { method: 'DELETE' }); if (res.ok) fetchJobs(); } catch (e) { console.error(e); }
  };

  const handleAddGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) { alert('Please select an image first!'); return; }
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
      const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, { method: 'POST', body: formData });
      const imgbbData = await imgbbRes.json();
      if (!imgbbData.success) throw new Error('ImgBB Upload Failed');
      const uploadedUrl = imgbbData.data.url;

      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newItem.title, category: newItem.category, image_url: uploadedUrl }),
      });
      if (res.ok) {
        alert('Image uploaded successfully! 🖼️');
        setNewItem({ title: '', category: 'Crew Gallery' });
        setSelectedFile(null);
        (document.getElementById('file-input') as HTMLInputElement).value = '';
        fetchGallery();
      }
    } catch (e) { alert('Upload failed.'); console.error(e); }
    finally { setUploadingImage(false); }
  };

  const handleDeleteGallery = async (id: number) => {
    if (!confirm('Delete this image?')) return;
    try { const res = await fetch(`/api/gallery?id=${id}`, { method: 'DELETE' }); if (res.ok) fetchGallery(); } catch (e) { console.error(e); }
  };

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'jobs', name: 'Manage Jobs', icon: '💼' },
    { id: 'gallery', name: 'Manage Gallery', icon: '🖼️' },
    { id: 'messages', name: 'Messages', icon: '✉️' },
  ];

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading Dashboard...</div>;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar - সলিড ইনলাইন স্টাইলড */}
      <aside style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '24px', boxSizing: 'border-box' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '40px', color: '#2563eb', letterSpacing: '1px' }}>SF PANEL</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button 
                key={item.id} 
                onClick={() => setActiveTab(item.id)} 
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  padding: '12px 16px', 
                  borderRadius: '12px', 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  backgroundColor: isActive ? '#2563eb' : 'transparent', 
                  color: isActive ? '#ffffff' : '#475569' 
                }}
              >
                <span>{item.icon}</span> {item.name}
                {item.id === 'messages' && messages.length > 0 && (
                  <span style={{ marginLeft: 'auto', backgroundColor: '#ef4444', color: '#ffffff', fontSize: '10px', padding: '2px 6px', borderRadius: '9999px', fontWeight: 'bold' }}>{messages.length}</span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content - সলিড ইনলাইন স্টাইলড */}
      <main style={{ flex: 1, padding: '32px', boxSizing: 'border-box' }}>
        <header style={{ marginBottom: '32px', borderBottom: '1px solid #e2e8f0', paddingBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1e293b', margin: 0 }}>{menuItems.find(i => i.id === activeTab)?.name}</h1>
        </header>

        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '32px', borderRadius: '24px', minHeight: '500px', boxSizing: 'border-box' }}>
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>Website Configuration</h3>
              <form onSubmit={handleUpdateSettings} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {Object.keys(settings).map((key) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#475569', marginBottom: '6px', textTransform: 'capitalize' }}>{key.replace('_', ' ')}</label>
                    <input 
                      type="text" 
                      value={(settings as any)[key]} 
                      onChange={(e) => setSettings({...settings, [key]: e.target.value})} 
                      style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '14px', color: '#0f172a', boxSizing: 'border-box', outline: 'none' }} 
                    />
                  </div>
                ))}
                <button type="submit" disabled={savingSettings} style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', border: 'none', borderRadius: '12px', cursor: 'pointer', marginTop: '16px' }}>
                  {savingSettings ? 'Saving...' : 'Save Global Settings'}
                </button>
              </form>
            </div>
          )}

          {/* MANAGE JOBS TAB */}
          {activeTab === 'jobs' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#2563eb' }}>Post a New Job</h3>
                <form onSubmit={handleAddJob} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>Job Title</label>
                    <input type="text" value={newJob.title} onChange={(e) => setNewJob({...newJob, title: e.target.value})} style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '14px', boxSizing: 'border-box' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>Location</label>
                    <input type="text" value={newJob.location} onChange={(e) => setNewJob({...newJob, location: e.target.value})} style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '14px', boxSizing: 'border-box' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>Description</label>
                    <textarea rows={4} value={newJob.description} onChange={(e) => setNewJob({...newJob, description: e.target.value})} style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} required />
                  </div>
                  <button type="submit" disabled={addingJob} style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                    {addingJob ? 'Posting...' : 'Publish Job Circular'}
                  </button>
                </form>
              </div>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#10b981' }}>Active Job Circulars ({jobs.length})</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '400px', overflowY: 'auto' }}>
                  {jobs.map((job) => (
                    <div key={job.id} style={{ padding: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>{job.title}</h4>
                        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#2563eb', fontWeight: 500 }}>📍 {job.location}</p>
                      </div>
                      <button onClick={() => handleDeleteJob(job.id)} style={{ padding: '6px 12px', backgroundColor: '#fef2f2', color: '#ef4444', border: '1px solid #fee2e2', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MANAGE GALLERY TAB */}
          {activeTab === 'gallery' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#2563eb' }}>Upload Photo to Gallery</h3>
                <form onSubmit={handleAddGalleryItem} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>Photo Title / Caption</label>
                    <input type="text" placeholder="e.g. Crew Farewell" value={newItem.title} onChange={(e) => setNewItem({...newItem, title: e.target.value})} style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '14px', boxSizing: 'border-box' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>Category</label>
                    <select value={newItem.category} onChange={(e) => setNewItem({...newItem, category: e.target.value})} style={{ width: '100%', padding: '10px 14px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '14px', boxSizing: 'border-box' }}>
                      <option value="Crew Gallery">Crew Gallery</option>
                      <option value="Client Meeting">Client Meeting</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#475569', marginBottom: '6px' }}>Select Image File</label>
                    <input id="file-input" type="file" accept="image/*" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} style={{ width: '100%', padding: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '14px', boxSizing: 'border-box' }} required />
                  </div>
                  <button type="submit" disabled={uploadingImage} style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                    {uploadingImage ? 'Uploading...' : 'Upload & Save'}
                  </button>
                </form>
              </div>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#10b981' }}>Gallery Photos ({gallery.length})</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px', maxHeight: '400px', overflowY: 'auto' }}>
                  {gallery.map((item) => (
                    <div key={item.id} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '8px', borderRadius: '12px', position: 'relative' }}>
                      <img src={item.image_url} alt={item.title} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div style={{ marginTop: '8px' }}>
                        <h5 style={{ margin: 0, fontSize: '11px', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</h5>
                        <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>{item.category}</p>
                      </div>
                      <button onClick={() => handleDeleteGallery(item.id)} style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#ef4444', color: '#ffffff', border: 'none', borderRadius: '4px', fontSize: '8px', padding: '4px 6px', fontWeight: 'bold', cursor: 'pointer' }}>X</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MESSAGES TAB */}
          {activeTab === 'messages' && (
            <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px', color: '#2563eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📬 Customer Inquiries ({messages.length})
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '550px', overflowY: 'auto' }}>
                {messages.length === 0 ? (
                  <div style={{ color: '#64748b', fontSize: '14px', textAlign: 'center', padding: '40px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px' }}>No messages received yet.</div>
                ) : (
                  messages.map((msg) => (
                    <div key={msg.id} style={{ padding: '24px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>{msg.name}</h4>
                          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#2563eb', fontWeight: 600 }}>✉️ {msg.email}</p>
                        </div>
                        <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#10b981', backgroundColor: '#ecfdf5', padding: '4px 10px', borderRadius: '8px', border: '1px solid #d1fae5' }}>Received</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '14px', color: '#334155', lineHeight: '1.6', backgroundColor: '#ffffff', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', whiteSpace: 'pre-wrap' }}>{msg.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

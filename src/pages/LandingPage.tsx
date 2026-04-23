/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bell, HelpCircle, Globe, Share2 } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="bg-[#faf8ff] text-[#1a1b21] font-sans min-h-screen">
      {/* TopNavBar */}
      <header className="bg-white border-b border-slate-200 shadow-sm fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 w-full">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center">
            <Globe className="text-white" size={16} />
          </div>
          <span className="text-xl font-black text-blue-900 tracking-tight">GigStream</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-semibold">
            <a className="text-blue-900" href="#">Home</a>
            <a className="text-slate-500 hover:text-blue-900 transition-colors" href="#">Saved Jobs</a>
            <a className="text-slate-500 hover:text-blue-900 transition-colors" href="#">About</a>
          </nav>
          <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
            <Bell size={20} className="text-slate-500 cursor-pointer hover:text-blue-900" />
            <HelpCircle size={20} className="text-slate-500 cursor-pointer hover:text-blue-900" />
            <button 
              onClick={onStart}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-6">
                <span className="text-blue-900 text-xs font-bold uppercase tracking-wider">Now Aggregating 15+ Platforms</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
                One Search.<br />
                <span className="text-teal-600">Every Freelance Platform.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
                Stop tab-switching. GigStream consolidates opportunities from Upwork, Fiverr, Toptal, and more into a single, high-performance feed. Filter smarter, move faster, and land premium gigs before the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onStart}
                  className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all active:scale-95"
                >
                  Get Started for Free
                </button>
                <button className="border border-slate-200 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all">
                  View Live Gigs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-slate-50 py-12 border-y border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Aggregating the World's Leading Platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0">
              {['UPWORK', 'fiverr.', 'Freelancer', 'Toptal', '99designs'].map(name => (
                <span key={name} className="text-2xl font-black text-slate-900 tracking-tighter">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-6 text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Precision-Engineered for Pros</h2>
            <p className="text-lg text-slate-500">Clinical clarity. Maximum efficiency. Zero noise.</p>
          </div>
          
          <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white border border-slate-200 p-10 rounded-2xl relative overflow-hidden group hover:border-blue-200 transition-all">
              <div className="relative z-10 max-w-md">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-blue-900" data-icon="grid_view"></span>
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Unified Dashboard</h3>
                <p className="text-slate-600 leading-relaxed">
                  A single source of truth. Manage all your search queries across platforms without ever leaving GigStream. Track applications and monitor platform activity in real-time.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-2/3 opacity-5 group-hover:opacity-10 transition-opacity">
                <img 
                  alt="Dashboard Preview" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiXZg8NCklIhCE-BhFXEUfzgpd2znO6TaKMq1RczEwLEDUjNIyk-kC-egR9KreRdrpP0MyrL_MIe4uOkYsKYjabU1kN_aY-syZMFQ8FcLOwSuCt8UPnCbV082lmFr5SIa9zfClblo-DXsYJfbR2M7sq5wcQ_9v6Ajt0Kef4CkCbOGndbQG9yXE-1qRaah_3eLjf9U9tEKxM9tknZvwY8n0J9SNnXhK8JN8JMrVLrtXYg0iVRCyqFvw1WEYeRsQnbdq8xAxQUwZDIrV" 
                />
              </div>
            </div>

            <div className="md:col-span-4 bg-blue-900 text-white p-10 rounded-2xl flex flex-col justify-end">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white" data-icon="filter_alt"></span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Smart Filtering</h3>
              <p className="text-white/70 text-sm">Hyper-targeted search parameters. Filter by exact hourly rate, project duration, or specific niche skills.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-blue-900" size={24} />
              <span className="text-2xl font-black text-blue-900 tracking-tight">GigStream</span>
            </div>
            <p className="text-slate-500 max-w-sm">Professional freelance aggregator designed for high-efficiency career management. Helping you find the best work, faster.</p>
           </div>
           <div>
            <h4 className="font-bold text-blue-900 mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-blue-900">Unified Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-900">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-900">Integrations</a></li>
            </ul>
           </div>
           <div>
            <h4 className="font-bold text-blue-900 mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-blue-900">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-900">Terms of Service</a></li>
            </ul>
           </div>
        </div>
        <div className="container mx-auto max-w-7xl px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">© 2024 GigStream Inc. All rights reserved.</p>
          <div className="flex gap-6">
             <Globe className="text-slate-400 cursor-pointer hover:text-blue-900" size={18} />
             <Share2 className="text-slate-400 cursor-pointer hover:text-blue-900" size={18} />
          </div>
        </div>
      </footer>
    </div>
  );
}

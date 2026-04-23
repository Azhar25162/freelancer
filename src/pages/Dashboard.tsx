/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import RecommendedCard from '../components/RecommendedCard';
import { MOCK_JOBS, RECOMMENDED_JOBS } from '../constants';
import { ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-[#f4f3fa] min-h-screen overflow-hidden flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      
      <main className="ml-[280px] flex-1 flex flex-col h-screen relative">
        <TopNav />
        
        <div className="flex h-full pt-16">
          <FilterSidebar onReset={() => {}} />
          
          <div className="flex-1 overflow-y-auto ml-72 p-10 space-y-12">
            {/* Recommended */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-blue-900 tracking-tight">Recommended for You</h2>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-400 transition-all shadow-sm">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-400 transition-all shadow-sm">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth scrollbar-hide no-scrollbar">
                {RECOMMENDED_JOBS.map(job => (
                  <RecommendedCard key={job.id} job={job} />
                ))}
              </div>
            </section>

            {/* All Listings */}
            <section className="pb-20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-blue-900 tracking-tight">All Job Listings</h2>
                  <p className="text-sm font-medium text-slate-500">Showing 1,248 active opportunities from 4 sources</p>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl p-1.5 border border-slate-200 shadow-sm">
                  <button className="px-5 py-2 bg-slate-100 text-blue-900 text-xs font-bold rounded-lg transition-all">Newest</button>
                  <button className="px-5 py-2 text-slate-500 text-xs font-bold rounded-lg hover:bg-slate-50 transition-all">Relevant</button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {MOCK_JOBS.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button className="bg-white border border-slate-200 px-8 py-4 rounded-2xl text-sm font-bold text-blue-900 hover:bg-slate-50 transition-all shadow-sm">
                  Load More Listings
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* FAB */}
        <button className="fixed bottom-10 right-10 w-16 h-16 bg-teal-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
          <PlusCircle size={28} />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Post a Gig
          </span>
        </button>
      </main>
    </div>
  );
}

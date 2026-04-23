/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  key?: string | number;
}

const PLATFORM_LOGOS: Record<string, string> = {
  'Upwork': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkGElAh51oEZZrbRWjTj0cHNPQUxLRfm2kWQejPnQNKjqNZsCnggn5XKWkHX5KrV9dXDsweA5yB-Eyxkt34gHlDgUlzFQwKwQF3PYwud9GGoDoag7O2aPIgZCH06iTuXfqnFxKLLUaQdgQuwRL97p-Oa4YOblRClEr8y9Mh5bmPp9LseFsSXDuS9ZefzQMLB8lf1puGVtkqPkZUdRCWhetmEOLMdC6BVdDEZkWPv4jQGJyKuHutCCW_SJWNCyF82_JUhG455lwKpR',
  'Fiverr Pro': 'https://lh3.googleusercontent.com/aida-public/AB6AXuADFep-7psDSYUq56f0gXk_hICW61sIiqPhPl7Jr_XvbZVccyZ_5DJpoytE9fxBI_-KT_voMI-HzRcSQUwF1JuBHDxV7PByfxTxuoIjwR7J-balg9EooW-A2DAVihcbC5NUOx4M5rTsG6wYiTQNpKhzs_hUUMEcF0YmbcEbgUUnqTBYJ1Tydon8--BPQGgL6Sccmune0uq1F0pYkXHikcGSV6hUSr3RDliPHChoXmGcN8kZojHKFmm_jqH1oUhRQJ8u9ZbAiOJsphSq',
  'Freelancer': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlrRZenmRntyABsG6T7BbD6K4M7Bl7vi28P_4jWOikEG42mBgxOvb3LD4dB-7aRGNZl_amMsdVhiT7Di7ITbc8ki4r3z7D4CFmLzC2GCmqe6eGgs7RFxg8JY_nzXMfolSe-3_E0FwavBSw10kMtziqMaf_bg0IlUjPj6rE4XuJRHx0kJWWjDWf9r2KjGGsQzZuQ8GJJJRHpeN0M4K2xkl8n3QxksD33BuwrosNj0TEoHvC83Qxr0FNvP-hQ8vbKPZwuAU-Ww4J3vqO',
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <img 
              alt={job.platform} 
              className="w-5 h-5 opacity-70" 
              src={PLATFORM_LOGOS[job.platform] || PLATFORM_LOGOS['Upwork']} 
            />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{job.platform}</span>
            <span className="text-slate-300 text-xs">•</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Posted {job.postedAt}</span>
          </div>
          <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors mb-3">
            {job.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            {job.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.map(skill => (
              <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold border border-slate-100 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="mb-4">
            <p className="text-xl font-bold text-teal-600">{job.budget}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{job.budgetType}</p>
          </div>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 flex items-center gap-2">
            Apply on Platform
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

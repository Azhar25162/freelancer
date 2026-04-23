/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Bell, HelpCircle } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="fixed top-0 right-0 h-16 z-40 bg-white border-b border-slate-200 shadow-sm flex items-center justify-between px-6 left-[280px]">
      <div className="flex-1 max-w-2xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-900 transition-all outline-none"
            placeholder="Search jobs by keyword, platform, or skill..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors relative">
          < Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <HelpCircle size={20} />
        </button>
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-900">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 font-medium">Sr. UI Designer</p>
          </div>
          <img
            alt="User profile"
            className="w-10 h-10 rounded-full border border-slate-200"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL5o0awCxc6Oz_jO5BornJXQMEPcaHJp5PR0WuXoTz7EA3utZh4ULkUITcEwrwTdKLkOEqoDq0RMRwijQlH6Q5Etujh2uR4Eun6onltdWO0U3CMPMi77uCLJNiK492OcO-xmQH-4pGzqgJvgDPBoYdL3nRFrAdIiitdBQ7RYWws_4Fj61jIvsWq-Le-Q1kynWq6BnoCtM5sQs-qWAmLXf-eckn9Gt8YgTfBJ9f3ZW5Q_e9eecj50Oze23WuDfBIgZ9tmgFmH7cS5AH"
          />
        </div>
      </div>
    </header>
  );
}

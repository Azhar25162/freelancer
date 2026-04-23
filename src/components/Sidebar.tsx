/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Grid3X3, Bookmark, User, Settings, LifeBuoy, LogOut, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Grid3X3 },
    { id: 'saved', label: 'Saved Jobs', icon: Bookmark },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-slate-200 bg-slate-50 flex flex-col py-6 z-50">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white">
          <Rocket size={20} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-blue-900">GigStream</h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Professional Aggregator</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm font-medium transition-all ${
              activeTab === item.id
                ? 'bg-white text-blue-900 border-r-4 border-blue-900 shadow-sm'
                : 'text-slate-600 hover:bg-slate-200 hover:text-blue-900'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-4 mt-auto border-t border-slate-200 pt-6 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-200 rounded-lg text-sm font-medium transition-all">
          <LifeBuoy size={18} />
          Support
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

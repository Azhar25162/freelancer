/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bolt, Star, Zap } from 'lucide-react';
import { Job } from '../types';

interface RecommendedCardProps {
  job: Job;
  key?: string | number;
}

const PLATFORM_LOGOS: Record<string, string> = {
  'Upwork': 'https://lh3.googleusercontent.com/aida-public/AB6AXuASTqrsYhdNYcqjWeFG2O7cAoLqgiu_9gNwOjLIJNeOvuOF3yi9SUB9LEsSEijIIFvjNyLVSNUdwvp1EvZ8i3YJuTeRi-CHK2zYIzUfjJxJqKO7Lq1Ybqp33C9feKa4My4cg-mRhs4XAi-YHjBEXO9ea8YWCgcKr2X1jKB2PyEcPPu0OSWYDKP3q4viAPQeM5pNOqX3_GuD-Aw0gNqbtN_e0Ou-3-8_kO1SOz0dd6QxfX18aqkDyBIcGHl52-ae_LL3PYOb3cnMags5',
  'Fiverr Pro': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzHA9aEWBevjO4b0C-Oz2_DX9j0O5nmT_3qjMsxNmbDpV18eFtnXUYHYhEnHcaluH727tNh4anhTpSntiFhvvkhxeCwxgWEfWizClsMD8dTs7bZ4wbx41Bx0FzURA5b0jK1_hfczFJxRUNbwX3DB_fFHHmVhw3-o-id0ULL_aD9Euh2BB2nTUgZ_ih2gEkbPM8v0dc-0A_rrR3CSBclBR6OUOcGgysUztWcLDmYsGj1qxEyOmB05KsXmHQfqGG_Us3IG-PilBNkSDm',
  'Freelancer.com': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBax6zUHt2u4-onhW1oAtcT8tVJSp7UyGWdcdJN-wz-5mcCNZgfq3GUs9QdSxwDaeoBFwNgH2O2UqbZG0bYfBD3JagNU2ArDTJzjjSWOeJGrxlHwhnAbMx-B34CRaad2riDdo17K3VRMP0QFYw7NYp_o2-Tol8SYjQoTn9HkvRotmRsnDuEq7r2K4wA2M3AMvsZZQ6fLpEACuIrafVRENrNl7OOYxR0oTifvidXRqM1uWbagUEGXpXZcNyEt9WxkudtFpveAjPpQHBy',
};

export default function RecommendedCard({ job }: RecommendedCardProps) {
  const isMatch = job.matchPercentage !== undefined;

  return (
    <div className={`min-w-[380px] snap-start p-6 rounded-xl relative overflow-hidden group cursor-pointer transition-all duration-300 ${
      isMatch 
        ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-lg' 
        : 'bg-white border border-slate-200 text-slate-900 hover:shadow-lg hover:border-teal-500'
    }`}>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <span className={`px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest ${
            isMatch ? 'bg-white/20' : 'bg-teal-100 text-teal-800'
          }`}>
            {isMatch ? `${job.matchPercentage}% Match` : 'New Opportunity'}
          </span>
          {isMatch ? <Zap size={16} className="text-white/50 fill-white/50" /> : <Star size={16} className="text-slate-300" />}
        </div>
        
        <h3 className={`text-xl font-bold mb-2 leading-tight ${isMatch ? 'text-white' : 'text-blue-900'}`}>
          {job.title}
        </h3>
        
        <div className={`flex items-center gap-4 text-sm mb-6 ${isMatch ? 'text-white/80' : 'text-slate-500'}`}>
          <div className="flex items-center gap-1">
             <span className="material-symbols-outlined text-[10px]" data-icon="payments"></span>
             {job.budget}
          </div>
          <div className="flex items-center gap-1">
             <span className="material-symbols-outlined text-[10px]" data-icon="schedule"></span>
             {job.postedAt}
          </div>
        </div>

        <div className={`flex items-center gap-3 pt-4 border-t ${isMatch ? 'border-white/10' : 'border-slate-100'}`}>
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center p-1.5 shadow-sm">
            <img 
              alt={job.platform} 
              className="w-full h-full object-contain" 
              src={PLATFORM_LOGOS[job.platform] || PLATFORM_LOGOS['Upwork']} 
            />
          </div>
          <span className={`text-[11px] font-bold ${isMatch ? 'text-white' : 'text-slate-600'}`}>via {job.platform}</span>
        </div>
      </div>
      
      {isMatch && (
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
      )}
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Terminal, TrendingUp, DollarSign, Plus, X, GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';
import { ExperienceLevel } from '../types';

interface ProfileSetupProps {
  onComplete: () => void;
}

export default function ProfileSetup({ onComplete }: ProfileSetupProps) {
  const [skills, setSkills] = useState(['React', 'Video Editing', 'Python']);
  const [experience, setExperience] = useState<ExperienceLevel>('Intermediate');

  return (
    <div className="bg-[#f4f3fa] min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full space-y-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
        <header className="text-center space-y-6">
          <img 
            alt="Logo" 
            className="mx-auto h-12 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC_q3of58lQhD5gZuR7YkpoHVnYt3jqreGP2ab46Gwga2ZyuYczyV-vIXQ-Jnerj1X9pjre-l1iNyhsODcBM9nHVZ2FAfIkPWqrzCLV-UAPR7JFqbrK8DtHShFiHLxrAJdBgF95w42TnJBuVWKuzsi_cDy6HjSN7e9CrnpBYrCkJWSkTB376K46pT8idYWosUehr8Y3FtmOJPYbqm2wkQfQ-BhYBvPqopnWirlV0_uIEl0y2g_texMpk4SpaFBMK2gW3jdmbAtAsKn" 
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Setup Your Profile</h1>
            <p className="text-slate-500 font-medium">Configure your preferences to refine our recommendation engine.</p>
          </div>
        </header>

        <form onSubmit={(e) => { e.preventDefault(); onComplete(); }} className="space-y-12">
          {/* Skills */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Terminal className="text-blue-900" size={24} />
              <h2 className="text-xl font-bold text-blue-900">Core Skills</h2>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <input
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all font-medium text-sm"
                  placeholder="Add a skill (e.g. React, Python)"
                  type="text"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors" type="button">
                  <Plus size={16} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-bold border border-teal-100">
                    {skill}
                    <button onClick={() => setSkills(s => s.filter(i => i !== skill))} type="button" className="hover:text-red-500 transition-colors">
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-blue-900" size={24} />
              <h2 className="text-xl font-bold text-blue-900">Experience Level</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'Beginner', icon: GraduationCap },
                { id: 'Intermediate', icon: Briefcase },
                { id: 'Expert', icon: Award }
              ].map(level => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setExperience(level.id as ExperienceLevel)}
                  className={`flex flex-col items-center justify-center p-6 border rounded-2xl transition-all ${
                    experience === level.id 
                      ? 'bg-blue-50 border-blue-900 text-blue-900 ring-2 ring-blue-900/10' 
                      : 'bg-white border-slate-200 text-slate-500 hover:border-blue-200'
                  }`}
                >
                  <level.icon size={24} className="mb-2" />
                  <span className="text-sm font-bold uppercase tracking-widest">{level.id}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Rate */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <DollarSign className="text-blue-900" size={24} />
                <h2 className="text-xl font-bold text-blue-900">Hourly Rate</h2>
              </div>
              <span className="text-sm font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">$45 - $120 / hr</span>
            </div>
            <div className="px-2">
              <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900" type="range" />
              <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400">
                <span>$0</span>
                <span>$250+</span>
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full h-16 flex items-center justify-center py-4 px-10 bg-blue-900 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              Save & Show Recommendations
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="mt-6 text-center text-xs font-medium text-slate-400">
              By continuing, you agree to our <a className="text-blue-900 font-bold hover:underline" href="#">Terms of Service</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

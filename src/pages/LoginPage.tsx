/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail as MailIcon, Lock as LockIcon, Eye, LayoutGrid } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="bg-[#faf8ff] text-[#1a1b21] h-screen overflow-hidden flex">
      {/* Visual Pane */}
      <section className="hidden lg:flex flex-col justify-between w-1/2 p-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Abstract background"
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6I4HWfvDMvnLxiWjWpG344HkBfb_EUZYLVSNRjU5VjHvTjI8deFPvmpKDBjgWc9cxzengyJ7Z0h96H4T0tQRrh5F7KdzSOQKDYivGvK0Kdfv_v9GaDOLmUNNacaFgucNscraD8MGPRiEE7Wi3kogiCorXoZqgppPRX1sRnSLSEeT0mZYYRZNbOgoFAsG4g3tS4lCktq3ytGq7i2r-_G0wN5rg3gnEh3tI5UAu5O09ZqPkToOekcbr_cRrZkD3EXclYvMB8ItCYXG"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 opacity-90"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
              <LayoutGrid className="text-white" size={24} />
            </div>
            <span className="text-3xl font-black text-white tracking-tighter">GigStream</span>
          </div>
        </div>

        <div className="relative z-10 max-w-lg mb-20">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-[1.1]">Navigate the future of freelance expertise.</h1>
          <p className="text-xl text-blue-100 opacity-90">
            Connect with premium opportunities and scale your professional agency through our clinical, data-driven aggregator.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="flex -space-x-3">
             {[1, 2, 3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-slate-200 overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
               </div>
             ))}
          </div>
          <p className="text-sm font-semibold text-blue-100">Trusted by 10k+ top-tier agencies</p>
        </div>
      </section>

      {/* Form Pane */}
      <section className="flex-1 flex flex-col justify-center items-center bg-white p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Welcome back</h2>
            <p className="text-slate-500 font-medium">Access your professional dashboard and active gigs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 bg-white hover:bg-slate-50 transition-all rounded-xl font-bold text-slate-700">
              <img 
                alt="Google" 
                className="w-5 h-5" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWSNP5r3-OjoHdKW3dnOVKL_jwn9ff6BVJxvJlTJAwDcuC2h4gsMrJNJSv6_PTvHbJEhif0coY4A_1L5V8wbAOYGGbxHN3SgJfm4zoFJKxOekmu-pGraH8ECyAVBUJ_2xxoPP7EZAgOIxBvY-6sTHrEL0eodE9XkKd3N-9Y68j40_2hRfWvzPJlhpTHjnJyIoMF_aAXh71PpDcZSE8fhX-gCfpCuqAnXcJOmu_48L4eZz0KBXDi6rB4WyWJlzbQN72GipDq2D8Kc6u" 
              />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 bg-white hover:bg-slate-50 transition-all rounded-xl font-bold text-slate-700">
              <span className="text-[#0077b5] font-black italic">in</span>
              LinkedIn
            </button>
          </div>

          <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="flex-shrink mx-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">or login with email</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase" htmlFor="email">Work Email</label>
              <div className="relative">
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all rounded-xl text-sm"
                  id="email"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-700 uppercase" htmlFor="password">Password</label>
                <a className="text-xs font-bold text-blue-900 hover:underline" href="#">Forgot?</a>
              </div>
              <div className="relative">
                <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-100 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all rounded-xl text-sm"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-900" type="button">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input className="w-4 h-4 rounded border-slate-200 text-blue-900 focus:ring-blue-900" id="remember" type="checkbox" />
              <label className="text-sm font-medium text-slate-500" htmlFor="remember">Remember me for 30 days</label>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 active:scale-[0.98] transition-all shadow-lg"
            >
              Sign In to GigStream
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-slate-500">
              Don't have an account? <a className="font-bold text-blue-900 hover:underline" href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

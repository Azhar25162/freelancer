/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface FilterSidebarProps {
  onReset: () => void;
}

export default function FilterSidebar({ onReset }: FilterSidebarProps) {
  return (
    <aside className="w-72 bg-white border-r border-slate-200 p-6 overflow-y-auto shrink-0 mt-16 h-[calc(100vh-64px)] fixed left-[280px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-bold text-blue-900 uppercase tracking-tight">Filters</h2>
        <button 
          onClick={onReset}
          className="text-xs text-teal-600 font-semibold hover:underline"
        >
          Reset
        </button>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-wider">Platforms</h3>
          <div className="space-y-3">
            {['Upwork', 'Fiverr', 'Freelancer.com', 'Toptal'].map(platform => (
              <label key={platform} className="flex items-center gap-3 cursor-pointer group">
                <input
                  defaultChecked={platform === 'Upwork' || platform === 'Fiverr'}
                  className="rounded border-slate-300 text-blue-900 focus:ring-blue-900"
                  type="checkbox"
                />
                <span className="text-sm text-slate-700 group-hover:text-blue-900">{platform}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-wider">Budget ($)</h3>
          <div className="px-2">
            <input
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
              max="10000"
              min="0"
              step="500"
              type="range"
            />
            <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-500">
              <span>$0</span>
              <span>$10k+</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-wider">Job Type</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="text-blue-900 focus:ring-blue-900" name="jobtype" type="radio" />
              <span className="text-sm text-slate-700">Fixed Price</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input defaultChecked className="text-blue-900 focus:ring-blue-900" name="jobtype" type="radio" />
              <span className="text-sm text-slate-700">Hourly Rate</span>
            </label>
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-wider">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['UI Design', 'React', 'Figma', 'Node.js', 'Python'].map(skill => (
              <span
                key={skill}
                className={`px-3 py-1 rounded-full text-xs cursor-pointer transition-colors ${
                  skill === 'React' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-blue-900 hover:text-white'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}

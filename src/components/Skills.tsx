'use client';

import React from 'react';
import { Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-navy-900/50 border-y border-white/5 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-electric-500 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Technologies & <span className="text-electric-500">Skills</span>
          </h2>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((group, idx) => (
            <div key={idx} className="card-glass p-6 space-y-4">
              <h3 className="text-sm font-bold font-mono text-electric-500 uppercase tracking-wider pb-3 border-b border-white/10 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-electric-500" />
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 text-xs font-medium hover:border-electric-500 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

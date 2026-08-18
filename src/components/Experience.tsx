'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-electric-500 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
            <Briefcase size={14} />
            <span>Work Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Work <span className="text-electric-500">Experience</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              className={`card-glass p-6 sm:p-8 relative ${
                exp.isCurrent ? 'border-l-4 border-l-electric-500' : 'border border-white/10'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold font-heading text-white">{exp.role}</h3>
                    {exp.isCurrent && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-electric-500 font-semibold text-base mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-electric-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-electric-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base mb-4 font-medium">
                {exp.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-sm text-gray-400">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-electric-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

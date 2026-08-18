'use client';

import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-navy-900/50 border-y border-white/5 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-electric-500 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
            <Award size={14} />
            <span>Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Professional <span className="text-electric-500">Certifications</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="card-glass p-6 border border-white/10 flex items-start gap-4 hover:border-electric-500/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-electric-600/10 border border-electric-500/20 text-electric-500 shrink-0">
                <Award size={24} />
              </div>

              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                  {cert.title}
                </h3>
                <div className="text-electric-500 font-semibold text-xs sm:text-sm">
                  {cert.issuer}
                </div>
                <div className="text-xs text-gray-400 font-mono pt-1">
                  Issued: {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { User, Code2, Database, MapPin, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-navy-900/50 border-y border-white/5 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-electric-500 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
            <User size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            About <span className="text-electric-500">Mihir Bhatt</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Factual Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            {PORTFOLIO_DATA.aboutText.map((paragraph, idx) => (
              <div
                key={idx}
                className="card-glass p-6 border-l-4 border-l-electric-500 text-gray-300"
              >
                <p>{paragraph}</p>
              </div>
            ))}
          </div>

          {/* Factual Highlights Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.aboutHighlights.map((item, idx) => (
              <div
                key={idx}
                className="card-glass p-5 space-y-2 border border-white/10"
              >
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-lg font-bold font-heading text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

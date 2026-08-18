'use client';

import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Terminal, MapPin, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Ambient background glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-electric-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Status & Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-electric-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="uppercase tracking-wider font-semibold">SOFTWARE DEVELOPER</span>
            </div>

            {/* Main Greeting & Positioning */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-electric-500">{PORTFOLIO_DATA.personal.name}</span>.
              </h1>
              
              <div className="text-xl sm:text-2xl font-semibold text-electric-500 font-heading">
                {PORTFOLIO_DATA.personal.primaryRole}
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.personal.mainPositioning}
            </p>

            {/* Secondary Positioning Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 bg-navy-900/80 border border-white/10 p-3 rounded-xl max-w-lg">
              <span className="text-gray-400 font-medium">Previously:</span>
              <span className="text-gray-200 font-medium">{PORTFOLIO_DATA.personal.secondaryPositioning}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-semibold text-sm shadow-lg shadow-electric-600/25 transition-all hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric-500 text-gray-200 hover:text-white font-semibold text-sm transition-all"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 text-sm text-gray-400">
              <span className="text-xs uppercase tracking-wider font-mono text-gray-400 font-semibold">Profiles:</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-300 hover:text-electric-500 transition-colors font-medium"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <span className="text-gray-700">•</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-300 hover:text-electric-500 transition-colors font-medium"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Code Window Visual (mihir.ts) */}
          <div className="lg:col-span-5">
            <div className="card-glass p-6 font-mono text-sm shadow-2xl relative border border-white/10">
              
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Terminal size={13} />
                  <span>mihir.ts</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
                <div>
                  <span className="text-blue-400">const</span>{' '}
                  <span className="text-emerald-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">name:</span>{' '}
                  <span className="text-amber-300">"Mihir Bhatt"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">role:</span>{' '}
                  <span className="text-amber-300">"Software Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">company:</span>{' '}
                  <span className="text-amber-300">"Vidhyarthi Mitra"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">location:</span>{' '}
                  <span className="text-amber-300">"Mumbai, India"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">stack:</span> [
                </div>
                <div className="pl-8 text-cyan-300">
                  "Python",
                  <br />
                  "SQL",
                  <br />
                  "TypeScript",
                  <br />
                  "Next.js",
                  <br />
                  "PostgreSQL"
                </div>
                <div className="pl-4">]</div>
                <div>&#125;;</div>
              </div>

              {/* Bottom Status Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Currently building • Software Development
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { FolderGit2, Github, ExternalLink, ShieldCheck, FileText, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '@/data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-electric-500 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
            <FolderGit2 size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Projects <span className="text-electric-500">Showcase</span>
          </h2>
        </div>

        {/* Projects List Container */}
        <div className="max-w-5xl mx-auto space-y-10">
          {projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className={`card-glass p-6 sm:p-8 md:p-10 border relative overflow-hidden transition-all ${
                project.isFeatured
                  ? 'border-electric-500/30 shadow-xl shadow-electric-500/5'
                  : 'border-white/10'
              }`}
            >
              {/* Top Badges & Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-electric-500/20 text-electric-400 border border-electric-500/30">
                      {project.type}
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Header Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-semibold text-sm shadow-lg shadow-electric-600/20 transition-all hover:-translate-y-0.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/10 transition-all"
                    >
                      <Github size={16} />
                      <span>View Code on GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="mt-6">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-navy-800 border border-white/10 text-electric-500 text-xs font-mono font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Features Grid */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-bold font-heading text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck size={18} className="text-electric-500" />
                  <span>Key Features & Functionality:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-navy-900/60 border border-white/5 text-xs sm:text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Bar Links */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                <div className="flex flex-wrap items-center gap-4">
                  {project.liveDemoUrl && (
                    <span>
                      Live App:{' '}
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric-500 font-semibold hover:underline"
                      >
                        {project.liveDemoUrl}
                      </a>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-500 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Open Application</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

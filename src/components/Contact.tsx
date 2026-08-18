'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'idle' });

    // 1. Client-Side Input Validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Please write a message of at least 10 characters.' });
      return;
    }

    // 2. Read Client-Side Web3Forms Access Key
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;

    if (!apiKey || !apiKey.trim()) {
      setStatus({
        type: 'error',
        message: 'Web3Forms access key is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local or click "Email Me Directly" below.'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 3. Direct Browser-to-Web3Forms API POST Request (Official Web3Forms Client Integration)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey.trim(),
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio Contact — ${formData.name.trim()}`
        })
      });

      const data = await response.json();

      if (response.ok && (data.success || data.status === 200)) {
        setStatus({
          type: 'success',
          message: 'Thanks! Your message has been sent successfully.'
        });
        // Clear form inputs on success ONLY
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Show actual Web3Forms error message returned by the API
        setStatus({
          type: 'error',
          message: data.message || 'Submission failed. Please try again or email me directly.'
        });
      }
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: 'Network error while submitting. Please check your connection or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const directMailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent('Portfolio Contact — Mihir Bhatt')}`;

  return (
    <section id="contact" className="py-20 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-electric-500 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Let's Build <span className="text-electric-500">Something Meaningful</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            I'm open to exploring opportunities in software development, backend development, Python, SQL and database-focused roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Direct Contact Details Card */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="card-glass p-6 border border-white/10 space-y-6">
              <h3 className="text-lg font-bold font-heading text-white pb-3 border-b border-white/10">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                
                <a
                  href={directMailtoUrl}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-electric-600/10 text-electric-500 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Email</div>
                    <div className="font-semibold text-white group-hover:text-electric-500 transition-colors">
                      {PORTFOLIO_DATA.personal.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-electric-600/10 text-electric-500 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Phone</div>
                    <div className="font-semibold text-white group-hover:text-electric-500 transition-colors">
                      {PORTFOLIO_DATA.personal.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-electric-600/10 text-electric-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Location</div>
                    <div className="font-semibold text-white">
                      {PORTFOLIO_DATA.personal.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={directMailtoUrl}
                  className="w-full text-center py-2.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-semibold text-sm shadow-md shadow-electric-600/20 transition-colors"
                >
                  Email Me Directly
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-electric-500 text-xs font-semibold transition-colors"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-electric-500 text-xs font-semibold transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="card-glass p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold font-heading text-white mb-6">
                Send a Direct Message
              </h3>

              {status.type === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-electric-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-electric-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your inquiry or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-electric-500 transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-electric-600 hover:bg-electric-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-lg shadow-electric-600/20 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

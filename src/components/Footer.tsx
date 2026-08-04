import React from 'react';
import { cn } from '../lib/utils';

interface FooterProps {
  visitorCount: number | null;
  getOrdinalSuffix: (n: number) => string;
}

export const Footer: React.FC<FooterProps> = ({ visitorCount, getOrdinalSuffix }) => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-[#030303] text-sm">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 text-gray-400 font-mono text-xs">
            <p className="mb-8">Copyright © 2021 - 2026 Rakesh Telang</p>
            {visitorCount && (
              <p className="tracking-wide">
                You're the <span className="text-white font-bold text-sm">{visitorCount.toLocaleString()}</span><sup className="text-[10px]">{getOrdinalSuffix(visitorCount)}</sup> visitor
              </p>
            )}
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Important Links</h4>
            <ul className="space-y-2 text-gray-400 font-mono text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Social</h4>
            <ul className="space-y-2 text-gray-400 font-mono text-xs">
              <li><a href="https://github.com/rakesh2971" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://x.com/rakesh_telang07" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">Twitter / X</a></li>
              <li><a href="https://www.linkedin.com/in/rakesh-telang-9155bb322" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Other</h4>
            <ul className="space-y-2 text-gray-400 font-mono text-xs">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

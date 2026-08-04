import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Briefcase, Terminal, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (action: () => void) => {
    action();
    setOpen(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-[15vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg glass-card rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Command
              className="w-full bg-transparent flex flex-col h-full max-h-[60vh] sm:max-h-[80vh]"
              label="Command Menu"
              shouldFilter={true}
            >
              <div className="flex items-center border-b border-white/10 px-4">
                <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent py-4 outline-none text-white placeholder:text-gray-500 font-mono text-sm"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-gray-400">
                  ESC
                </kbd>
              </div>

              <Command.List className="overflow-y-auto p-2 scrollbar-hide flex-1">
                <Command.Empty className="py-6 text-center text-sm text-gray-500 font-mono">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-xs font-mono text-gray-500 px-2 py-3 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2">
                  <Command.Item
                    onSelect={() => handleSelect(() => scrollTo('about'))}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-md cursor-pointer aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <User className="w-4 h-4" /> About Me
                  </Command.Item>
                  <Command.Item
                    onSelect={() => handleSelect(() => scrollTo('experience'))}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-md cursor-pointer aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Briefcase className="w-4 h-4" /> Experience
                  </Command.Item>
                  <Command.Item
                    onSelect={() => handleSelect(() => scrollTo('projects'))}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-md cursor-pointer aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Terminal className="w-4 h-4" /> Projects
                  </Command.Item>
                  <Command.Item
                    onSelect={() => handleSelect(() => scrollTo('background'))}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-md cursor-pointer aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <GraduationCap className="w-4 h-4" /> Background
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Links" className="text-xs font-mono text-gray-500 px-2 py-3 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2">
                  <Command.Item
                    onSelect={() => handleSelect(() => window.open(portfolioData.personal.github, '_blank'))}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-md cursor-pointer aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </Command.Item>
                  <Command.Item
                    onSelect={() => handleSelect(() => window.open(portfolioData.personal.linkedin, '_blank'))}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-md cursor-pointer aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </Command.Item>
                  <Command.Item
                    onSelect={() => handleSelect(() => window.location.href = `mailto:${portfolioData.personal.email}`)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-md cursor-pointer aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Mail className="w-4 h-4" /> Contact
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

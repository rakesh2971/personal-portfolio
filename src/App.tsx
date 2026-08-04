import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Github, Linkedin, Briefcase, GraduationCap, ChevronRight, Terminal, User, Trophy, Search, Layers, Award, FileText, ArrowUp, Download, X } from 'lucide-react';
import { portfolioData } from './data';
import { cn } from './lib/utils';
import { CommandPalette } from './components/CommandPalette';
import { GithubActivity } from './components/GithubActivity';
import { ProjectGithubStats } from './components/ProjectGithubStats';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// --- Reusable Components ---

const ProjectCard = ({ project }: { project: typeof portfolioData.projects[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="flex flex-col group cursor-pointer transition-all duration-300 overflow-hidden" 
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Project</h3>
          </div>
          <h4 className="text-2xl font-bold text-white mb-1 font-display group-hover:text-indigo-400 transition-colors">{project.title}</h4>
          <p className="text-sm text-gray-500">{project.subtitle}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 group-hover:bg-white/10 shrink-0"
        >
          <ChevronRight size={20} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pt-6">
              <p className="text-gray-400 font-light mb-6 leading-relaxed">{project.description}</p>
              <ul className="space-y-2 mb-8">
                {project.results.map((res, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-400 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 mt-2"></div>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
              <div>
                <div className="pt-4 border-t border-white/5 mb-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => <Badge key={t}>{t}</Badge>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

const ExperienceCard = ({ job }: { job: typeof portfolioData.experience[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="group relative cursor-pointer transition-all duration-300 overflow-hidden"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 w-full pr-4">
          <div>
            <h3 className="text-xl font-bold text-white font-display group-hover:text-indigo-400 transition-colors">{job.role}</h3>
            <p className="text-gray-400 font-medium">{job.company}</p>
          </div>
          <div className="text-sm font-mono text-gray-500">
            {job.duration} • {job.location}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 group-hover:bg-white/10 shrink-0 mt-1 md:mt-0"
        >
          <ChevronRight size={20} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pt-6 border-t border-white/5 mt-4">
              <ul className="space-y-3 mb-6">
                {job.achievements.map((ach, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 font-light">
                    <ChevronRight size={16} className="text-gray-600 shrink-0 mt-1" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row md:justify-between md:items-center gap-4" onClick={(e) => e.stopPropagation()}>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map(t => <Badge key={t}>{t}</Badge>)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                  {job.certificateUrl && (
                    <a 
                      href={job.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors text-sm font-medium border border-indigo-500/20 shrink-0"
                    >
                      <Award size={16} />
                      <span>View Certificate</span>
                    </a>
                  )}
                  {job.offerLetterUrl && (
                    <a 
                      href={job.offerLetterUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors text-sm font-medium border border-emerald-500/20 shrink-0"
                    >
                      <FileText size={16} />
                      <span>View Offer Letter</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

const Section: React.FC<{ id: string, title: string, icon: any, children: React.ReactNode, className?: string }> = ({ id, title, icon: Icon, children, className }) => (
  <section id={id} className={cn("py-20 md:py-32 border-t border-white/5 relative z-10", className)}>
    <div className="max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-3 mb-12"
      >
        <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-gray-400">
          <Icon size={20} />
        </div>
        <h2 className="text-3xl font-bold tracking-tighter text-white font-display">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
    {children}
  </span>
);

const Card: React.FC<{ children: React.ReactNode, className?: string, onClick?: () => void }> = ({ children, className, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className={cn("glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group", className)}
    onClick={onClick}
  >
    {/* Subtle inner gradient glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

// --- Main App ---

const getOrdinalSuffix = (i: number) => {
  const j = i % 10,
        k = i % 100;
  if (j === 1 && k !== 11) {
      return "st";
  }
  if (j === 2 && k !== 12) {
      return "nd";
  }
  if (j === 3 && k !== 13) {
      return "rd";
  }
  return "th";
}

export default function App() {
  const { personal, skills, experience, projects, education, leadership } = portfolioData;

  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isPhotoMaximized, setIsPhotoMaximized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 90vh (approximate height of hero section)
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const isNewSession = !sessionStorage.getItem('session_active');
        const url = isNewSession 
          ? 'https://api.counterapi.dev/v1/rakesh_telang_portfolio_live/visitor_count/up'
          : 'https://api.counterapi.dev/v1/rakesh_telang_portfolio_live/visitor_count/';
          
        const response = await fetch(url);
        const data = await response.json();
        
        if (isNewSession) {
          sessionStorage.setItem('session_active', 'true');
        }
        
        setVisitorCount(data.count || 1);
      } catch (error) {
        setVisitorCount(1); // Fallback
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-[#f0f0f0] font-sans selection:bg-white/20 selection:text-white relative overflow-x-hidden">
      
      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm font-bold text-white tracking-tight">{personal.name.split(' ')[0]}_DEV</span>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
              <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
              <a href="#projects" className="hover:text-white transition-colors cursor-pointer">Projects</a>
              <a href="#experience" className="hover:text-white transition-colors cursor-pointer">Experience</a>
            </div>
            <button 
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Search size={14} />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 bg-white/10 rounded text-[10px]">⌘K</kbd>
            </button>
          </div>
        </div>
      </nav>

      <CommandPalette />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col justify-center min-h-[90vh] overflow-hidden">
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: '70% calc(50% + 80px)' }}
          />
          {/* Bottom fade — blends video into the section below */}
          <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #030303)' }}
          />
          <div className="max-w-5xl mx-auto relative z-10 w-full">

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >

              <h1 className="text-5xl md:text-[80px] font-bold tracking-tighter gradient-text leading-[0.95] mb-6 font-display pb-[11px]">
                Building The<br/>Minds Behind<br/>Your Apps.
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed mb-10 pt-0 pb-0"
            >
              AI/ML Engineer, Class of 2026 — specializing in LLMs, RAG & multi-agent systems built with Python.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="px-8 py-4 bg-white text-black font-bold text-sm rounded-lg hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Contact Me
              </a>
              <a
                href="/rakesh_python_dev.pdf"
                download="Rakesh_Telang_Resume.pdf"
                className="px-8 py-4 glass-card text-white font-bold text-sm rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-indigo-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Download size={18} /> Resume
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="px-8 py-4 glass-card text-white font-bold text-sm rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-green-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 glass-card text-white font-bold text-sm rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-blue-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About" icon={User}>
          {/* Top: Photo + Bio */}
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Left: Profile Photo */}
            <div className="flex flex-col items-center md:items-start gap-5">
              <div className="relative">
                <div 
                  className="w-36 h-36 rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-pointer hover:scale-105 hover:border-white/20 transition-all duration-300"
                  onClick={() => setIsPhotoMaximized(true)}
                >
                  <img
                    src="https://avatars.githubusercontent.com/rakesh2971"
                    alt="Rakesh Telang"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online dot */}
                <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#030303] block" />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <p className="font-bold text-white text-lg">{personal.name}</p>
                <p className="text-indigo-400 text-sm font-medium">{personal.role}</p>
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500"><MapPin size={13}/> {personal.location}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500"><Mail size={13}/> {personal.email}</div>
                </div>
              </div>
            </div>

            {/* Right: About Text */}
            <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-gray-400 font-light flex flex-col justify-center">
              <p>{personal.about}</p>
              <p className="text-gray-500 text-sm">
                When I'm not coding, I'm representing my college on the volleyball court at the state level — I believe the same discipline and team play that wins games builds great software.
              </p>
            </div>
          </div>

          {/* Bottom: Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "3",      label: "Internships",   sub: "IBM · Microsoft · Lihatech" },
              { value: "10+",    label: "AI Projects",   sub: "Multi-Agent · CV Systems"   },
              { value: "7.7",    label: "CGPA",          sub: "B.Tech AI-ML, 2026"         },
              { value: "20+",    label: "Team Led",      sub: "Techno Bharati 2024"        },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5 flex flex-col gap-1 hover:border-white/10 transition-colors"
              >
                <span className="text-3xl font-bold text-white font-display">{stat.value}</span>
                <span className="text-sm font-semibold text-indigo-400">{stat.label}</span>
                <span className="text-xs text-gray-600 leading-tight">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tech Stack Section */}
        <Section id="tech-stack" title="Tech Stack" icon={Layers}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.techStack.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">{category.category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                        <img 
                          src={item.icon} 
                          alt={item.name} 
                          className={cn(
                            "w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300",
                            (item.name === 'GitHub' || item.name === 'Flask') && "invert opacity-90"
                          )} 
                        />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 text-center tracking-wide">{item.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>        {/* Projects Section */}
        <Section id="projects" title="Featured Work" icon={Terminal}>
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="mt-20">
            <GithubActivity />
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="flex flex-col gap-6">
            {experience.map((job, index) => (
              <ExperienceCard key={index} job={job} />
            ))}
          </div>
        </Section>

        {/* Education & Leadership */}
        <Section id="background" title="Background" icon={GraduationCap}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={20} className="text-indigo-400" />
                <h3 className="text-xl font-bold text-white font-display">Education</h3>
              </div>
              {education.map((edu, i) => (
                <div key={i}>
                  <h4 className="font-bold text-white">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm mb-2 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 font-mono text-xs mb-4 uppercase tracking-widest">{edu.duration} • {edu.location}</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{edu.details}</p>
                </div>
              ))}
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-6">
                <Trophy size={20} className="text-indigo-400" />
                <h3 className="text-xl font-bold text-white font-display">Leadership & Extracurriculars</h3>
              </div>
              <ul className="space-y-4">
                {leadership.map((item, i) => {
                  const [title, desc] = item.split(': ');
                  return (
                    <li key={i} className="text-sm text-gray-400 font-light">
                      <span className="font-bold text-white block mb-1">{title}</span>
                      {desc}
                    </li>
                  )
                })}
              </ul>
            </Card>
          </div>
        </Section>
      </main>

      <ContactSection />
      
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg backdrop-blur-md transition-colors",
          showBackToTop ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
      
      
      <Footer visitorCount={visitorCount} getOrdinalSuffix={getOrdinalSuffix} />

      {/* Maximized Photo Modal */}
      <AnimatePresence>
        {isPhotoMaximized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setIsPhotoMaximized(false)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setIsPhotoMaximized(false); }}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl max-h-[80vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://avatars.githubusercontent.com/rakesh2971"
                alt="Rakesh Telang"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

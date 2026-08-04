import React, { useState } from 'react';
import { Mail, Send, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitContactMessage } from '../lib/firebase';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    const result = await submitContactMessage(name, email, message);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-gray-400">
            <Mail size={20} />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-white font-display">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-gray-400 font-light mb-8 max-w-3xl leading-relaxed text-lg">
              I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
            </p>

            <div className="mb-12">
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-6">Or connect with me on</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=work.rakesh2971@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium transition-all group">
                  <Mail size={16} /> Email
                </a>
                <a href="https://x.com/rakesh_telang07" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium transition-all group" target="_blank" rel="noreferrer">
                  <Twitter size={16} /> Twitter / X
                </a>
                <a href="https://www.linkedin.com/in/rakesh-telang-9155bb322" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium transition-all group" target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 block">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email</label>
                <input type="email" id="email" name="email" required placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 block">Message</label>
                <textarea id="message" name="message" required rows={4} placeholder="Hello there, I would like to ask you about..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none"></textarea>
              </div>
              
              {error && <p className="text-red-400 text-sm">{error}</p>}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-6 py-3 font-bold transition-colors"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import AhmadPhoto from "../assets/Ahmad_Ayoub.png";

const Hero = () => {
  // Your Google Calendar Appointment Link
  const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0945uPAGw8-HXEmiYdXx_6gEbmuJmPuBYStWQgxeM8cZilmQmjZ-h_3K7ovKVl80Xm8TqHzAkc?fbclid=PAT01DUAP7xnlleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaftLBMo2o8pvwanUNbu5KmU8cWc7OD1nMHoEJG4ue1-I6WxuDZ9jX9VqKxaTw_aem_3FbMV2qxiECvkj4MEIaxHw";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#F1F1F1] dark:bg-[#111112] transition-colors duration-500 overflow-hidden selection:bg-[#B1D5CD] selection:text-[#142229]">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ backgroundImage: `radial-gradient(#B1D5CD 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#B1D5CD]/10 blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <motion.div 
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#142229] dark:text-[#B1D5CD] text-xs font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B1D5CD] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B1D5CD]"></span>
              </span>
              Certified Career Counselor
            </motion.div>

            <div className="space-y-4">
              <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold text-[#142229] dark:text-[#F1F1F1] leading-[0.9] tracking-tighter">
                Ahmad <br />
                <span className="text-[#B1D5CD]">Ayoub</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 dark:text-[#F1F1F1]/50 max-w-xl font-light leading-relaxed">
                Transforming professional identities through 
                <span className="text-[#142229] dark:text-[#F1F1F1] font-semibold"> ATS-optimized architecture</span> & LinkedIn SEO to secure interviews in 60–90 days.
              </motion.p>
            </div>

            {/* Value Props */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 py-2">
              {[
                "700+ Optimized Resumes",
                "1500+ Professionals Assisted",
                "Certified Career Strategist",
                "International Job Market Expert"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#142229]/70 dark:text-[#F1F1F1]/70">
                  <CheckCircle className="w-4 h-4 text-[#B1D5CD]" />
                  <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild
                className="bg-[#142229] dark:bg-[#B1D5CD] text-white dark:text-[#142229] hover:bg-[#B1D5CD] hover:text-[#142229] dark:hover:bg-white px-8 py-7 text-lg font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-black/5 group"
              >
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-[#B1D5CD]" />
                <span className="text-[#142229]/60 dark:text-[#F1F1F1]/40 text-sm font-medium">Beirut | Hybrid | Remote</span>
              </div>
            </motion.div>

            {/* Contact Micro-Links */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-8 border-t border-black/5 dark:border-white/5 w-fit">
              {[
                { icon: Mail, label: "Direct Email", href: "mailto:ahmadthematrix@gmail.com" },
                { icon: Linkedin, label: "Professional Profile", href: "https://linkedin.com" }
              ].map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#142229]/40 dark:text-[#F1F1F1]/30 hover:text-[#B1D5CD] dark:hover:text-[#B1D5CD] transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group">
                  <link.icon className="w-4 h-4" /> 
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Professional Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#142229] p-3 aspect-[4/5] shadow-2xl group"
            >
              <img 
                src={AhmadPhoto} 
                alt="Ahmad Ayoub" 
                className="w-full h-full object-cover rounded-[1.5rem] transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142229]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Floating Achievement Card */}
            <motion.div 
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-0 -left-8 z-30 p-6 rounded-[2rem] bg-white dark:bg-[#142229] backdrop-blur-xl border border-black/5 dark:border-[#B1D5CD]/20 shadow-2xl max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#B1D5CD] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#B1D5CD]">Impact Stat</span>
              </div>
              <div className="text-[#142229] dark:text-white text-4xl font-black">95%</div>
              <div className="text-gray-500 dark:text-[#F1F1F1]/40 text-xs mt-1 leading-tight font-medium italic">
                Interview success rate for ATS-restructured applications.
              </div>
            </motion.div>

            <div className="absolute -top-12 -right-12 w-64 h-64 border border-[#B1D5CD]/10 rounded-full animate-spin-slow pointer-events-none" />
          </div>

        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
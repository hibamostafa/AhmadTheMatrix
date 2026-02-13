import { useRef } from "react";
import { Briefcase, Calendar, Globe, Search, Zap, Award, Users } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    title: "International Career Strategist",
    company: "AhmadTheMatrix",
    period: "Aug 2023 – Present",
    icon: <Globe className="w-5 h-5" />,
    description: "Empowering 1,500+ professionals globally to navigate competitive job markets through strategic positioning and high-impact personal branding.",
    keyImpact: "Restructured the job search approach for candidates across diverse industries, significantly increasing interview conversion rates.",
    tags: ["Career Strategy", "Global Standards", "Personal Branding"]
  },
  {
    title: "ATS Optimization Specialist",
    company: "AhmadTheMatrix",
    period: "700+ CVs Delivered",
    icon: <Search className="w-5 h-5" />,
    description: "Crafting ATS-certified resumes that bridge the gap between 'Invisible' candidates and top-tier recruiters using keyword optimization and storytelling.",
    keyImpact: "Successfully bypassed automated filtering systems for 700+ clients, ensuring human eyes see every application.",
    tags: ["ATS Compliance", "CV Writing", "Keyword SEO"]
  },
  {
    title: "LinkedIn & Digital Architect",
    company: "AhmadTheMatrix",
    period: "250+ Profiles Optimized",
    icon: <Zap className="w-5 h-5" />,
    description: "Revamping professional digital footprints to enhance recruiter engagement and organic profile visibility.",
    keyImpact: "Generated a measurable increase in profile impressions and inbound recruiter inquiries for mid-to-senior level executives.",
    tags: ["LinkedIn SEO", "Social Selling", "Visibility"]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-[#F1F1F1] dark:bg-[#111112] transition-colors duration-500 relative overflow-hidden" 
      id="experience"
    >
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#B1D5CD 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-12 h-[1px] bg-[#B1D5CD]" />
              <span className="text-[#B1D5CD] uppercase tracking-[0.4em] text-xs font-black">Success Roadmap</span>
            </motion.div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-[#142229] dark:text-[#F1F1F1] leading-[0.9]"
              >
                Ahmad <br /> 
                <span className="text-[#B1D5CD]">TheMatrix.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-500 dark:text-[#F1F1F1]/40 text-xl font-light max-w-sm border-l border-[#B1D5CD]/20 pl-6"
              >
                Transforming professional identities into measurable career results.
              </motion.p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5" />
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#B1D5CD] via-[#B1D5CD] to-transparent z-10"
            />

            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom Stats/Callout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-32 flex justify-center"
          >
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B1D5CD] to-[#142229] rounded-full blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative px-8 py-4 bg-white dark:bg-[#142229] rounded-full flex items-center gap-6 border border-[#B1D5CD]/20">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#142229] bg-[#B1D5CD] flex items-center justify-center text-[10px] font-bold">
                        <Users className="w-4 h-4 text-white" />
                     </div>
                   ))}
                </div>
                <span className="text-gray-600 dark:text-[#F1F1F1]/70 font-medium">
                  Trusted by <span className="text-[#B1D5CD] font-bold">1500+ Ambitious Professionals</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
      
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-20">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-10 h-10 rounded-xl bg-white dark:bg-[#142229] border-2 border-[#B1D5CD] flex items-center justify-center shadow-xl"
        >
          <div className="w-2 h-2 rounded-full bg-[#B1D5CD] animate-ping" />
        </motion.div>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#B1D5CD] font-bold tracking-tighter opacity-40">
          CORE-0{index + 1}
        </span>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, type: "spring" }}
        className={`w-full md:w-[46%] pl-14 md:pl-0 ${isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12"}`}
      >
        <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#142229] border border-[#B1D5CD]/20 flex items-center justify-center text-[#B1D5CD] shadow-sm">
            {exp.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#B1D5CD] font-mono text-[10px] font-bold uppercase tracking-widest">
              <Award className="w-3 h-3" /> {exp.period}
            </div>
            <h3 className="text-2xl font-bold text-[#142229] dark:text-[#F1F1F1]">{exp.title}</h3>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-[#B1D5CD]/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
          
          <div className="relative p-8 rounded-[2rem] bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.05] backdrop-blur-sm group-hover:border-[#B1D5CD]/30 transition-all duration-500">
            <p className="text-[#142229]/60 dark:text-[#F1F1F1]/50 font-medium text-sm mb-2 uppercase tracking-tighter">{exp.company}</p>
            <p className="text-gray-500 dark:text-[#F1F1F1]/60 leading-relaxed mb-6 font-light">
              {exp.description}
            </p>

            <div className="p-5 rounded-2xl bg-[#B1D5CD]/5 dark:bg-[#B1D5CD]/10 border-l-4 border-[#B1D5CD]">
              <div className={`flex items-start gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                <div className="mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B1D5CD]" />
                </div>
                <p className="text-xs text-gray-600 dark:text-[#F1F1F1]/80 leading-relaxed italic">
                  <span className="not-italic font-bold text-[#B1D5CD] uppercase text-[10px] mr-2 block mb-1">Strategic Outcome:</span>
                  {exp.keyImpact}
                </p>
              </div>
            </div>

            <div className={`flex flex-wrap gap-2 mt-6 ${isEven ? "md:justify-end" : ""}`}>
              {exp.tags?.map((tag, t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-bold text-gray-400 dark:text-white/20 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
import { GraduationCap, Award, Cpu, Target, Zap, Layout } from "lucide-react";
import { motion, Variants } from "framer-motion";

const CredentialsAndSkills = () => {
  const education = {
    degree: "B.S. Management Information Systems",
    institution: "Lebanese University",
    period: "2020 – 2023",
  };

  const certifications = [
    {
      title: "Certified Career Counselor",
      issuer: "American Institute For Applied Education",
      year: "2025",
    },
    {
      title: "Certified Professional of Career Services",
      issuer: "SMART Skills Group",
      year: "2025",
    },
  ];

  const skillCategories = [
    {
      title: "Recruitment & HR",
      icon: <Target className="w-5 h-5 text-[#B1D5CD]" />,
      skills: [
        { name: "Resume & CV Writing", level: 98 },
        { name: "Interview Prep", level: 92 },
        { name: "Tech Recruitment", level: 85 },
      ],
    },
    {
      title: "Strategy & Growth",
      icon: <Zap className="w-5 h-5 text-[#B1D5CD]" />,
      skills: [
        { name: "Job Search Strategy", level: 95 },
        { name: "Lead Generation", level: 88 },
        { name: "B2B Development", level: 82 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Cpu className="w-5 h-5 text-[#B1D5CD]" />,
      skills: [
        { name: "LinkedIn Optimization", level: 96 },
        { name: "Project Management", level: 80 },
        { name: "CRM & PandaDoc", level: 85 },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    // UPDATED ID HERE TO MATCH NAVBAR "education"
    <section id="education" className="py-24 bg-[#F1F1F1] dark:bg-[#171719] transition-colors duration-500 relative overflow-hidden">
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B1D5CD]/20 to-transparent opacity-50 dark:opacity-100" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Education & Certs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8 }}
                  className="h-[1px] bg-[#B1D5CD]" 
                />
                <span className="text-[#B1D5CD] uppercase tracking-[0.3em] text-xs font-black">Credentials</span>
              </div>
              <h2 className="text-4xl font-bold text-[#142229] dark:text-[#F1F1F1] mb-8 tracking-tight">
                Mastery & <span className="text-[#B1D5CD]">Authority.</span>
              </h2>
            </div>

            {/* Education Item */}
            <div className="relative pl-8 border-l border-gray-200 dark:border-white/5">
                <motion.div variants={itemVariants} className="group relative">
                    <div className="absolute -left-[40px] top-0 w-4 h-4 rounded-full bg-[#F1F1F1] dark:bg-[#171719] border-2 border-[#B1D5CD] z-10" />
                    <div className="flex items-center gap-3 text-[#B1D5CD] text-[10px] font-bold uppercase tracking-widest mb-2">
                        <GraduationCap className="w-4 h-4" /> {education.period}
                    </div>
                    <h3 className="text-xl font-bold text-[#142229] dark:text-[#F1F1F1] mb-1">{education.degree}</h3>
                    <p className="text-gray-500 dark:text-[#F1F1F1]/50 font-medium">{education.institution}</p>
                </motion.div>
            </div>

            {/* Certifications */}
            <div className="space-y-6 pt-4">
                <motion.h4 variants={itemVariants} className="text-gray-400 dark:text-[#F1F1F1]/30 uppercase text-[10px] font-black tracking-[0.2em] mb-4">
                    Global Board Certifications
                </motion.h4>
                {certifications.map((cert, i) => (
                    <motion.div 
                        key={i} 
                        variants={itemVariants}
                        className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-[#142229]/40 border border-gray-200 dark:border-[#F1F1F1]/5 hover:border-[#B1D5CD]/20 shadow-sm transition-all group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#B1D5CD]/10 flex items-center justify-center text-[#B1D5CD] shrink-0 group-hover:bg-[#B1D5CD] group-hover:text-[#142229] transition-all">
                            <Award className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-[#B1D5CD] text-[10px] font-bold mb-1">{cert.year}</div>
                            <h5 className="text-[#142229] dark:text-[#F1F1F1] font-bold text-sm leading-tight mb-1">{cert.title}</h5>
                            <p className="text-gray-500 dark:text-[#F1F1F1]/40 text-xs">{cert.issuer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Skills Progress Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#142229]/20 border border-gray-100 dark:border-[#F1F1F1]/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl">
                
                {/* Decorative background logo */}
                <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                  <Layout className="w-64 h-64 text-[#B1D5CD]" />
                </div>

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#142229] dark:text-[#F1F1F1] mb-2">The Skill Matrix</h3>
                    <p className="text-gray-500 dark:text-[#F1F1F1]/40 text-sm mb-12 max-w-sm">
                        Strategic technical competencies mapped by expertise level.
                    </p>

                    <div className="space-y-12">
                        {skillCategories.map((cat, i) => (
                            <div key={i} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#B1D5CD]/10 flex items-center justify-center">
                                        {cat.icon}
                                    </div>
                                    <span className="text-[#142229] dark:text-[#F1F1F1] font-bold text-sm uppercase tracking-widest">{cat.title}</span>
                                </div>
                                
                                <div className="grid gap-6">
                                    {cat.skills.map((skill, si) => (
                                        <div key={si} className="space-y-2">
                                            <div className="flex justify-between items-end">
                                              <span className="text-sm font-medium text-gray-700 dark:text-[#F1F1F1]/80">{skill.name}</span>
                                              <span className="text-[10px] font-bold text-[#B1D5CD] font-mono">{skill.level}%</span>
                                            </div>
                                            
                                            <div className="h-[6px] w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                              <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                  duration: 1.5, 
                                                  delay: 0.2 + (si * 0.1),
                                                  ease: "easeOut" 
                                                }}
                                                className="h-full bg-gradient-to-r from-[#B1D5CD]/40 via-[#B1D5CD] to-[#B1D5CD] rounded-full relative"
                                              >
                                                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-sm" />
                                              </motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center gap-4 px-6 opacity-30">
                <div className="text-[10px] text-gray-500 dark:text-[#F1F1F1] font-mono uppercase tracking-tighter">System Diagnostic: Optimized</div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-300 dark:from-[#F1F1F1]/20 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CredentialsAndSkills;
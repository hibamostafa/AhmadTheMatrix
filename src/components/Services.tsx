import { 
  FileText, 
  Linkedin, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  ArrowUpRight, 
  Target, 
  Sparkles, 
  GraduationCap, 
  BookOpen 
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      number: "01",
      icon: <FileText className="w-8 h-8" />,
      title: "CV Writing",
      tagline: "ATS-Friendly Architecture",
      description: "A tailored, ATS-friendly CV that shows your value and gets you more interview calls.",
      features: ["ATS Keyword SEO", "Achievement-based logic", "Modern visual layout"]
    },
    {
      number: "02",
      icon: <Mail className="w-8 h-8" />,
      title: "Cover Letter",
      tagline: "Focused Narrative",
      description: "A focused letter that explains your strengths and connects your experience to the role.",
      features: ["Company-specific hooks", "Value alignment", "Concise persuasion"]
    },
    {
      number: "03",
      icon: <BookOpen className="w-8 h-8" />,
      title: "Motivational Letter",
      tagline: "Storytelling & Ambition",
      description: "A letter that tells your story, shows your ambition, and wins you the opportunity.",
      features: ["Personal brand story", "Vision alignment", "Academic & Pro style"]
    },
    {
      number: "04",
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn Profile Optimization",
      tagline: "Digital Visibility",
      description: "Enhanced LinkedIn makeover that boosts your visibility and helps the right people find you.",
      features: ["Search SEO Title", "Strategic Summary", "Engagement settings"]
    },
    {
      number: "05",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "LinkedIn Training Session",
      tagline: "Networking Mastery",
      description: "Showing you how to use LinkedIn to grow faster, build connections, and attract real opportunities.",
      features: ["Algorithm secrets", "Connection strategy", "Content planning"]
    },
    {
      number: "06",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "HR Interview Preparation",
      tagline: "Confidence Engineering",
      description: "Showing you how to prepare smartly, answer better, and impress the interviewers.",
      features: ["Mock sessions", "STAR method mastery", "Body language tips"]
    }
  ];

  // 1. Animation for the Header Section
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // 2. Animation for the Grid Container (Handles the Stagger)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This triggers children one by one
      }
    }
  };

  // 3. Animation for individual cards
  // Note: Keys MUST match the parent (hidden/visible) for stagger to work
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-[#F1F1F1] dark:bg-[#111112] transition-colors duration-500 relative overflow-hidden" id="services">
      
      {/* Decorative background element */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-[#B1D5CD]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
             variants={itemVariants}
            className="max-w-3xl mb-20"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-[#B1D5CD]" />
              <span className="text-[#B1D5CD] uppercase tracking-[0.3em] text-xs font-black">Expert Solutions</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#142229] dark:text-[#F1F1F1] mb-6 tracking-tight">
              Elevate Your <br />
              <span className="text-[#B1D5CD]">Professional Edge.</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-[#F1F1F1]/40 leading-relaxed font-light">
              Transforming your career trajectory with precision-engineered 
              documents and strategic personal branding.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10 }} // Built-in hover shorthand to avoid variant conflicts
                className="group relative p-8 rounded-[2rem] bg-white dark:bg-[#142229]/40 border border-gray-200 dark:border-white/5 hover:border-[#B1D5CD]/40 transition-all duration-500"
              >
                {/* Visual Numbering */}
                <span className="absolute top-6 right-8 text-4xl font-black text-[#142229]/5 dark:text-white/5 group-hover:text-[#B1D5CD]/20 transition-colors">
                  {service.number}
                </span>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#B1D5CD]/10 flex items-center justify-center text-[#B1D5CD] group-hover:bg-[#B1D5CD] group-hover:text-[#142229] transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-6 h-6 text-[#B1D5CD]" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-[#B1D5CD] text-[10px] font-black uppercase tracking-widest">{service.tagline}</span>
                    <h3 className="text-2xl font-bold text-[#142229] dark:text-[#F1F1F1] mt-1">{service.title}</h3>
                  </div>

                  <p className="text-gray-500 dark:text-[#F1F1F1]/50 leading-relaxed mb-8 font-light min-h-[80px]">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/5">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B1D5CD]" />
                        <span className="text-xs text-gray-600 dark:text-[#F1F1F1]/60 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Trust Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 py-10 border-t border-gray-200 dark:border-white/5 flex flex-wrap justify-center gap-10 md:gap-20"
          >
            {[
              { icon: <Target className="w-5 h-5" />, text: "ATS-Certified" },
              { icon: <Sparkles className="w-5 h-5" />, text: "Global Standards" },
              { icon: <Linkedin className="w-5 h-5" />, text: "Expert Verified" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/20">
                <span className="text-[#B1D5CD]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
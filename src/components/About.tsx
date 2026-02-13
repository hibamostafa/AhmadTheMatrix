import { Award, FileText, Linkedin, Users, Quote } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Clients Supported", value: "1,500+", icon: <Users className="w-5 h-5" /> },
    { label: "CVs Crafted", value: "700+", icon: <FileText className="w-5 h-5" /> },
    { label: "LinkedIn Profiles", value: "250+", icon: <Linkedin className="w-5 h-5" /> },
    { label: "Success Strategy", value: "100%", icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <section className="py-24 bg-[#F1F1F1] dark:bg-[#111112] transition-colors duration-500 relative overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B1D5CD]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#142229]/5 dark:bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-[#B1D5CD]" />
              <span className="text-[#B1D5CD] uppercase tracking-[0.3em] text-xs font-black">The Story Behind the Matrix</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#142229] dark:text-[#F1F1F1] tracking-tighter">
              Turning Struggle into <span className="text-[#B1D5CD]">Strategic Purpose.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: The Narrative Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-[#F1F1F1]/70 font-light leading-relaxed">
                <p>
                  Growing up in Lebanon with high ambitions, my path was anything but linear. I was always searching for where I truly fit, seeking stability and direction in a landscape of uncertainty. My journey began in the Physics halls of Lebanese University, followed by a move to Cyprus for Civil Engineering, until the combined weight of Lebanon’s economic crisis and a global pandemic forced me back home.
                </p>
                
                <p>
                  What followed were two "lost" years defined by self-doubt and shifting majors. I felt behind, questioning if I would ever find a path that felt right. The turning point came with a move to <span className="text-[#142229] dark:text-[#F1F1F1] font-semibold underline decoration-[#B1D5CD]/40">Management Information Systems (MIS)</span>. This wasn't just a degree; it was the beginning of my reconstruction. Through intensive training and joining SE Factory, I discovered something unexpected.
                </p>

                <p>
                  While building my own career, I found myself constantly drawn to helping others with theirs. I spent hours refining friends' CVs and LinkedIn profiles, realizing that I enjoyed the strategy of <span className="text-[#B1D5CD] font-semibold">career architecture</span> more than anything else. I realized my true purpose wasn't just to work in tech, but to help job seekers navigate the complex systems that stand between them and their dreams.
                </p>

                <p>
                  In 2024, I left the security of a traditional job to launch <span className="text-[#142229] dark:text-[#F1F1F1] font-semibold">AhmadTheMatrix</span> full-time. Even as war once again challenged our resilience, my mission remained clear: to transform professional identities and help people secure the opportunities they deserve. This is only the beginning of a commitment to deeper impact and career transformation.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-black/5 dark:border-white/5">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-2xl font-bold text-[#142229] dark:text-[#F1F1F1]">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#B1D5CD] font-black">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Feature/Quote */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="sticky top-32">
                <div className="relative p-10 rounded-[3rem] bg-white dark:bg-[#171719] border border-black/5 dark:border-white/5 shadow-2xl">
                  <Quote className="w-12 h-12 text-[#B1D5CD] mb-6 opacity-50" />
                  <p className="text-2xl md:text-3xl font-medium text-[#142229] dark:text-[#F1F1F1] leading-tight italic">
                    "Every professional has a hidden matrix of potential. My job is to make it visible to the world."
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#B1D5CD] flex items-center justify-center font-bold text-[#142229]">
                      AA
                    </div>
                    <div>
                      <div className="font-bold text-[#142229] dark:text-[#F1F1F1]">Ahmad Ayoub</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest font-bold text-[10px]">AHMADTHEMATRIX Creator</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B1D5CD]/10 rounded-full blur-2xl pointer-events-none" />
                </div>

                <div className="mt-8 px-10 text-center">
                  <p className="text-sm text-gray-400 font-medium italic">
                    Currently helping professionals worldwide from Beirut, Lebanon.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Calendar, 
  CheckCircle, ArrowRight, ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0945uPAGw8-HXEmiYdXx_6gEbmuJmPuBYStWQgxeM8cZilmQmjZ-h_3K7ovKVl80Xm8TqHzAkc?fbclid=PAT01DUAP7xnlleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaftLBMo2o8pvwanUNbu5KmU8cWc7OD1nMHoEJG4ue1-I6WxuDZ9jX9VqKxaTw_aem_3FbMV2qxiECvkj4MEIaxHw";

  return (
    <section className="py-24 bg-[#F1F1F1] dark:bg-[#171719] transition-colors duration-500 relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <motion.div 
        animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B1D5CD] blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} className="h-[1px] bg-[#B1D5CD]" />
              <span className="text-[#B1D5CD] uppercase tracking-[0.3em] text-xs font-bold">Get In Touch</span>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} className="h-[1px] bg-[#B1D5CD]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#142229] dark:text-[#F1F1F1] mb-6 transition-colors">
                Ready to <span className="text-[#B1D5CD]">Level Up?</span>
            </h2>
            <p className="text-gray-500 dark:text-[#F1F1F1]/60 max-w-2xl mx-auto text-lg">
                Stop waiting for the right opportunity and start building it. Book a session directly or reach out via my contact channels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* SIDEBAR INFO */}
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-5 space-y-6"
            >
              {[
                { icon: <Mail />, label: "Direct Email", value: "grow@ahmadthematrix.com", href: "mailto:grow@ahmadthematrix.com" },
                { icon: <Phone />, label: "WhatsApp/Call", value: "+961 81 638 908", href: "tel:+961 81 638 908" },
                { icon: <MapPin />, label: "Location", value: "Beirut, Lebanon", href: "#" }
              ].map((item, i) => (
                <motion.a 
                    variants={fadeInUp}
                    whileHover={{ x: 8 }}
                    key={i} 
                    href={item.href} 
                    className="group flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-[#142229]/40 border border-gray-100 dark:border-[#F1F1F1]/5 hover:border-[#B1D5CD]/20 shadow-sm dark:shadow-none transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#B1D5CD]/10 flex items-center justify-center text-[#B1D5CD] group-hover:bg-[#B1D5CD] group-hover:text-[#142229] transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-[#F1F1F1]/30 font-bold">{item.label}</p>
                    <p className="text-[#142229] dark:text-[#F1F1F1] font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-[#B1D5CD]/10 border border-[#B1D5CD]/20">
                <h4 className="text-[#B1D5CD] font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Professional Approach
                </h4>
                <p className="text-gray-600 dark:text-[#F1F1F1]/50 text-sm leading-relaxed">
                    Strategy sessions are structured to identify your unique value proposition and remove career roadblocks immediately.
                </p>
              </motion.div>
            </motion.div>

            {/* CALL TO ACTION AREA */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
            >
              <Card className="h-full border-gray-100 dark:border-[#F1F1F1]/5 bg-white dark:bg-[#142229]/30 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col justify-center items-center text-center overflow-hidden">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#B1D5CD]/20 rounded-full flex items-center justify-center mb-8">
                    <Calendar className="w-10 h-10 text-[#B1D5CD]" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#142229] dark:text-[#F1F1F1] mb-4">
                    Secure Your Slot
                  </h3>
                  <p className="text-gray-500 dark:text-[#F1F1F1]/50 mb-10 text-lg leading-relaxed">
                    Select a time that works best for you via my Google Calendar. 
                    I'll review your details and confirm the session.
                  </p>

                  <motion.div 
                    className="w-full"
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                        asChild
                        className="w-full md:w-auto md:px-12 bg-[#B1D5CD] text-[#142229] hover:bg-[#142229] hover:text-white dark:hover:bg-[#F1F1F1] h-16 text-xl font-bold rounded-2xl shadow-xl shadow-[#B1D5CD]/20 group transition-all"
                    >
                        <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                            Schedule Strategy Session
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                  </motion.div>

                  <div className="mt-8 flex items-center gap-2 text-sm text-gray-400 dark:text-[#F1F1F1]/30">
                    <ExternalLink className="w-4 h-4" />
                    <span>Opens in Google Calendar</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
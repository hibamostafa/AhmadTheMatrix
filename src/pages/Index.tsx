import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

import BookAppointment from "@/components/BookAppointment";
const Index = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
     
      <BookAppointment />
      {/* Footer */}
      <footer className="bg-[#142229] border-t border-[#F1F1F1]/5 pt-5 pb-7 relative overflow-hidden">
        <div className="pt-8 border-t border-[#F1F1F1]/5 flex flex-col items-center justify-center text-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F1F1F1]/20">
  <p>© {currentYear} AHMADTHEMATRIX. ALL RIGHTS RESERVED.</p>
  <div className="flex gap-6">
    <span className="hover:text-[#B1D5CD] cursor-pointer transition-colors">Privacy Policy</span>
    <span className="hover:text-[#B1D5CD] cursor-pointer transition-colors">Terms of Service</span>
  </div>
</div>
      </footer>
    </div>
  );
};

export default Index;

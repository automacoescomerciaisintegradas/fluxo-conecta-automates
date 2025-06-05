
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Gradiente Hero para Services com efeito mesh - agora verde */}
      <div className="h-20 bg-gradient-to-b from-emerald-600 via-green-500 to-green-50"></div>
      
      <Services />
      
      {/* Gradiente Services para Benefits */}
      <div className="h-20 bg-gradient-to-b from-emerald-50 via-slate-100 to-gray-100"></div>
      
      <Benefits />
      
      {/* Gradiente Benefits para Contact */}
      <div className="h-20 bg-gradient-to-b from-slate-200 via-white to-green-50"></div>
      
      <Contact />
      
      {/* Gradiente Contact para Footer */}
      <div className="h-20 bg-gradient-to-b from-green-50 via-slate-200 to-gray-900"></div>
      
      <Footer />
    </div>
  );
};

export default Index;

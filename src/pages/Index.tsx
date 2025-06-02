
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
      
      {/* Gradiente Hero para Services (light-blue para white) */}
      <div className="h-16 bg-gradient-to-b from-white to-white"></div>
      
      <Services />
      
      {/* Gradiente Services para Benefits (white para automation-gray) */}
      <div className="h-16 bg-gradient-to-b from-white to-automation-gray"></div>
      
      <Benefits />
      
      {/* Gradiente Benefits para Contact (automation-gray para white) */}
      <div className="h-16 bg-gradient-to-b from-automation-gray to-white"></div>
      
      <Contact />
      
      {/* Gradiente Contact para Footer (white para gray-900) */}
      <div className="h-16 bg-gradient-to-b from-white via-gray-200 to-gray-900"></div>
      
      <Footer />
    </div>
  );
};

export default Index;

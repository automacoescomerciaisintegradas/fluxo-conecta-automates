
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-automation-purple/20 to-automation-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-automation-blue/20 to-automation-indigo/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-automation-orange/10 to-automation-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container-section mx-auto pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          <div className="lg:w-1/2 animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Automatize</span> 
              <br />
              <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">seus processos</span>
              <br />
              <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">comerciais</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Conecte seus contatos, crie fluxos de trabalho inteligentes e automatize postagens nas redes sociais com nossas soluções personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Conheça nossas soluções
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-md px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Entre em contato
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-automation-purple to-automation-pink rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <div className="relative bg-glass-bg backdrop-blur-xl rounded-3xl border border-glass-border p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-xl border border-white/20"></div>
                  <div className="h-20 bg-gradient-to-br from-automation-blue/20 to-automation-indigo/5 rounded-xl border border-automation-blue/20"></div>
                  <div className="h-20 bg-gradient-to-br from-automation-purple/20 to-automation-pink/5 rounded-xl border border-automation-purple/20"></div>
                  <div className="h-20 bg-gradient-to-br from-automation-green/20 to-automation-orange/5 rounded-xl border border-automation-green/20"></div>
                </div>
                <div className="mt-6 text-center">
                  <div className="h-4 bg-white/20 rounded-full mb-2"></div>
                  <div className="h-4 bg-white/15 rounded-full w-3/4 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

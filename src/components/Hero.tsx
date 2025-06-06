
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import FloatingParticles from "./FloatingParticles";
import RoboticHand from "./RoboticHand";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Dynamic background based on theme */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-dark-mesh' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <FloatingParticles />
      </div>

      {/* Robotic Hand Background - positioned on the right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <RoboticHand />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-neon-green/10 to-neon-yellow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container-section mx-auto pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          <div className="lg:w-1/2 animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className={`glow-text ${theme === 'dark' ? 'text-neon-green' : 'text-gray-900'} animate-pulse-neon`}>
                Automatize
              </span> 
              <br />
              <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-neon-blue to-neon-purple' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                seus processos
              </span>
              <br />
              <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-neon-pink to-neon-orange' : 'from-pink-600 to-orange-600'} bg-clip-text text-transparent animate-cyber-glitch`}>
                comerciais
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Conecte seus contatos, crie fluxos de trabalho inteligentes e automatize postagens nas redes sociais com nossas soluções personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button className={`
                relative overflow-hidden group px-8 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-105 transform-gpu
                ${theme === 'dark' 
                  ? 'bg-gradient-to-r from-neon-green to-neon-blue text-black hover:from-neon-blue hover:to-neon-purple shadow-neon' 
                  : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-blue-500 hover:to-purple-500'
                }
              `}>
                <span className="relative z-10">Conheça nossas soluções</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                className={`
                  relative overflow-hidden group px-8 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-105 border-2 backdrop-blur-md
                  ${theme === 'dark' 
                    ? 'border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:border-neon-green hover:shadow-neon' 
                    : 'border-green-500/50 text-green-600 hover:bg-green-50 hover:border-green-500'
                  }
                `}
              >
                <span className="relative z-10">Entre em contato</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-lg group">
              {/* Rotating border gradient */}
              <div className="absolute -inset-4 bg-neon-gradient rounded-3xl blur-2xl opacity-30 animate-rotate-gradient group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* 3D holographic effect */}
              <div className={`
                relative card-3d rounded-3xl border shadow-2xl p-8 transition-all duration-500 group-hover:shadow-cyber
                ${theme === 'dark' 
                  ? 'bg-dark-surface/50 border-neon-green/30 backdrop-blur-xl' 
                  : 'bg-white/70 border-gray-200 backdrop-blur-lg'
                }
              `}>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`
                    h-20 rounded-xl border transition-all duration-300 group-hover:scale-105
                    ${theme === 'dark' 
                      ? 'bg-gradient-to-br from-neon-green/20 to-neon-blue/5 border-neon-green/20 hover:shadow-neon' 
                      : 'bg-gradient-to-br from-green-100 to-blue-50 border-green-200'
                    }
                  `}></div>
                  <div className={`
                    h-20 rounded-xl border transition-all duration-300 group-hover:scale-105
                    ${theme === 'dark' 
                      ? 'bg-gradient-to-br from-neon-blue/20 to-neon-purple/5 border-neon-blue/20 hover:shadow-neon' 
                      : 'bg-gradient-to-br from-blue-100 to-purple-50 border-blue-200'
                    }
                  `} style={{ animationDelay: '0.1s' }}></div>
                  <div className={`
                    h-20 rounded-xl border transition-all duration-300 group-hover:scale-105
                    ${theme === 'dark' 
                      ? 'bg-gradient-to-br from-neon-purple/20 to-neon-pink/5 border-neon-purple/20 hover:shadow-neon' 
                      : 'bg-gradient-to-br from-purple-100 to-pink-50 border-purple-200'
                    }
                  `} style={{ animationDelay: '0.2s' }}></div>
                  <div className={`
                    h-20 rounded-xl border transition-all duration-300 group-hover:scale-105
                    ${theme === 'dark' 
                      ? 'bg-gradient-to-br from-neon-pink/20 to-neon-orange/5 border-neon-pink/20 hover:shadow-neon' 
                      : 'bg-gradient-to-br from-pink-100 to-orange-50 border-pink-200'
                    }
                  `} style={{ animationDelay: '0.3s' }}></div>
                </div>
                <div className="mt-6 text-center">
                  <div className={`
                    h-4 rounded-full mb-2 animate-pulse
                    ${theme === 'dark' ? 'bg-neon-green/30' : 'bg-gray-200'}
                  `}></div>
                  <div className={`
                    h-4 rounded-full w-3/4 mx-auto animate-pulse
                    ${theme === 'dark' ? 'bg-neon-blue/20' : 'bg-gray-150'}
                  `} style={{ animationDelay: '0.5s' }}></div>
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

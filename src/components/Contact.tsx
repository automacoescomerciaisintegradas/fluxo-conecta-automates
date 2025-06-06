
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import FloatingParticles from "./FloatingParticles";
import { useTheme } from "@/hooks/useTheme";

const Contact = () => {
  const { theme } = useTheme();
  
  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black dark:from-black dark:via-gray-900 dark:to-purple-900">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* SVG Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke={theme === 'dark' ? '#22c55e' : '#3b82f6'} strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grid)"/>
          <circle cx="20" cy="20" r="2" fill="url(#neonGradient)" className="animate-pulse"/>
          <circle cx="80" cy="40" r="1.5" fill="url(#neonGradient)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <circle cx="60" cy="80" r="1" fill="url(#neonGradient)" className="animate-pulse" style={{animationDelay: '1s'}}/>
        </svg>
      </div>

      {/* Curved Section Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill={theme === 'dark' ? '#0f172a' : '#1e293b'} className="opacity-20"/>
        </svg>
      </div>

      <div className="container-section mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Entre em <span className="glow-text">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Estamos prontos para ajudar a automatizar seus processos comerciais. Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 card-3d hover:transform hover:scale-105 transition-all duration-300">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 card-3d">
                <h3 className="text-3xl font-bold mb-8 text-white">
                  Informações de 
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Contato</span>
                </h3>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-center group hover:transform hover:translateX-2 transition-all duration-300">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/50 transition-all duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Telefone</p>
                      <p className="text-xl font-medium text-white">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center group hover:transform hover:translateX-2 transition-all duration-300">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">E-mail</p>
                      <p className="text-xl font-medium text-white">contato@automacoescomerciais.com.br</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center group hover:transform hover:translateX-2 transition-all duration-300">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mr-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">Endereço</p>
                      <p className="text-xl font-medium text-white">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="mt-10 pt-8 border-t border-gray-700/50">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-purple-600 rounded-lg blur opacity-20"></div>
                    <div className="relative bg-gray-800/50 rounded-lg p-6 border border-gray-700/30">
                      <h4 className="font-semibold mb-4 text-green-400 text-lg">Horário de atendimento:</h4>
                      <p className="text-gray-300 text-lg">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill={theme === 'dark' ? '#111827' : '#1f2937'} className="opacity-20"/>
        </svg>
      </div>
    </section>
  );
};

export default Contact;

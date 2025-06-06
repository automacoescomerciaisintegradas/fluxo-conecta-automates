
import { CheckIcon, Zap, Sparkles } from "lucide-react";
import N8NUpload from "./N8NUpload";
import { cn } from "@/lib/utils";

const Benefits = () => {
  const benefits = [
    {
      title: "Economize tempo e recursos",
      description: "Nossas soluções de automação reduzem o tempo gasto em tarefas repetitivas, permitindo que você e sua equipe foquem no que realmente importa.",
      icon: "⏰",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      title: "Aumente a produtividade", 
      description: "Automatize processos manuais e acelere o fluxo de trabalho, aumentando a eficiência operacional da sua empresa.",
      icon: "📈",
      gradient: "from-emerald-400 to-green-500"
    },
    {
      title: "Melhore a experiência do cliente",
      description: "Com agentes de contato automatizados, ofereça respostas rápidas e consistentes, melhorando a satisfação dos clientes.",
      icon: "🎯",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Elimine erros humanos",
      description: "Reduza erros comuns em processos manuais e garanta consistência em todas as operações do seu negócio.",
      icon: "✅",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Escale seu negócio",
      description: "Nossas soluções crescem junto com sua empresa, adaptando-se às suas necessidades em constante evolução.",
      icon: "🚀",
      gradient: "from-red-400 to-rose-500"
    },
    {
      title: "Integração completa",
      description: "Conectamos seus sistemas existentes, criando um ecossistema digital integrado e eficiente.",
      icon: "🔗",
      gradient: "from-indigo-400 to-purple-500"
    },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        
        {/* Animated mesh overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.15)_0%,transparent_50%)] animate-pulse"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_25%,rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_75%,rgba(168,85,247,0.15)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.15)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-1 h-1 rounded-full animate-float opacity-40",
                i % 4 === 0 ? "bg-neon-green" :
                i % 4 === 1 ? "bg-neon-blue" :
                i % 4 === 2 ? "bg-neon-purple" : "bg-neon-pink"
              )}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container-section mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-neon-green animate-pulse" />
            <h2 className="text-5xl sm:text-6xl font-bold">
              <span className="bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                Por que escolher nossas
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent animate-gradient-x">
                Automações
              </span>
              <span className="bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                ?
              </span>
            </h2>
            <Zap className="w-8 h-8 text-neon-blue animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Descubra como nossas soluções de automação podem transformar seu negócio e impulsionar seus resultados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={cn(
                "group relative overflow-hidden",
                "bg-gradient-to-br from-gray-800/40 to-gray-900/40",
                "backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8",
                "hover:border-gray-600/50 transition-all duration-500",
                "hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={cn(
                  "absolute inset-0 rounded-3xl bg-gradient-to-r opacity-20 blur-sm",
                  benefit.gradient
                )}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  {/* Icon with enhanced effects */}
                  <div className="relative mr-6">
                    <div className={cn(
                      "text-5xl group-hover:scale-110 transition-transform duration-300",
                      "filter drop-shadow-lg"
                    )}>
                      {benefit.icon}
                    </div>
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Check icon with neon effect */}
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    "bg-gradient-to-r", benefit.gradient,
                    "shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  )}>
                    <CheckIcon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-white transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>

              {/* Floating particles within card */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-1 h-1 bg-neon-green rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-neon-blue rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* N8N Upload Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold">
                <span className="bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">
                  Teste nossos
                </span>
                <br />
                <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Fluxos de N8N
                </span>
              </h3>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Experimente nossa integração com N8N para upload e gerenciamento de arquivos com tecnologia de automação avançada
            </p>
          </div>
          
          {/* Enhanced container for N8N Upload */}
          <div className={cn(
            "relative overflow-hidden rounded-3xl",
            "bg-gradient-to-br from-gray-800/30 to-gray-900/30",
            "backdrop-blur-xl border border-gray-700/30",
            "shadow-[0_20px_40px_rgba(0,0,0,0.3)]",
            "p-8"
          )}>
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-blue/5 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
            
            <div className="relative z-10">
              <N8NUpload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

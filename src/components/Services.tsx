
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import FloatingParticles from "./FloatingParticles";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Agentes de Contato",
      description: "Criamos agentes inteligentes que automatizam suas comunicações com clientes, fornecedores e parceiros, aumentando a eficiência e reduzindo o tempo gasto em tarefas repetitivas.",
      icon: Bot,
      gradient: "from-neon-green via-emerald-500 to-green-400",
      glowColor: "rgba(34, 197, 94, 0.5)",
      features: ["IA Conversacional", "Respostas 24/7", "Integração Multi-canal"],
      price: "A partir de R$ 299/mês"
    },
    {
      id: 2,
      title: "Fluxos de N8N",
      description: "Desenvolvemos fluxos de trabalho personalizados utilizando N8N para integrar seus sistemas e automatizar processos, conectando aplicativos e serviços para criar operações eficientes e escalonáveis.",
      icon: Zap,
      gradient: "from-neon-blue via-blue-500 to-indigo-400",
      glowColor: "rgba(59, 130, 246, 0.5)",
      features: ["Automação Personalizada", "Integração de APIs", "Workflows Inteligentes"],
      price: "A partir de R$ 499/mês"
    },
    {
      id: 3,
      title: "Automação de Redes Sociais",
      description: "Automatize suas postagens nas redes sociais com nossa solução completa que agenda, publica e monitora conteúdo em múltiplas plataformas, mantendo sua presença digital ativa e consistente.",
      icon: Share2,
      gradient: "from-neon-purple via-purple-500 to-pink-400",
      glowColor: "rgba(168, 85, 247, 0.5)",
      features: ["Agendamento Inteligente", "Multi-plataformas", "Analytics Avançado"],
      price: "A partir de R$ 199/mês"
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      <FloatingParticles />
      
      {/* Curved SVG Transition */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="rgb(16 185 129)" className="opacity-20"></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-section mx-auto pt-20 pb-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-neon-green to-neon-blue text-white border-none px-6 py-2 text-sm font-medium animate-pulse-neon">
            🚀 Soluções Futuristas
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Nossos 
            <span className="block bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent animate-gradient-shift">
              Serviços
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Oferecemos soluções completas de automação para impulsionar seu negócio, 
            economizar tempo e aumentar a produtividade com tecnologia de ponta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <div 
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card Glow Effect */}
                <div 
                  className={cn(
                    "absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl",
                    `bg-gradient-to-r ${service.gradient}`
                  )}
                  style={{ 
                    boxShadow: isHovered ? `0 0 50px ${service.glowColor}` : 'none' 
                  }}
                ></div>

                <Card className={cn(
                  "relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/30",
                  "backdrop-blur-xl border-gray-700/30 rounded-3xl overflow-hidden",
                  "transition-all duration-500 group-hover:scale-105",
                  "animate-fade-in"
                )}>
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <CardHeader className="relative z-10 text-center space-y-4 p-8">
                    {/* Icon with 3D Effect */}
                    <div className={cn(
                      "mx-auto w-20 h-20 rounded-2xl flex items-center justify-center",
                      "bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg",
                      "border border-gray-600/30 shadow-2xl",
                      "transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                      isHovered && "shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    )}>
                      <IconComponent className={cn(
                        "w-10 h-10 transition-all duration-300",
                        isHovered ? "text-white scale-110" : "text-gray-300"
                      )} />
                    </div>

                    <CardTitle className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 p-8 pt-0 space-y-6">
                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            `bg-gradient-to-r ${service.gradient}`,
                            "shadow-lg"
                          )}></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="border-t border-gray-700/30 pt-6">
                      <p className="text-lg font-semibold text-white mb-4">{service.price}</p>
                      
                      <Button className={cn(
                        "w-full h-12 bg-gradient-to-r transition-all duration-300",
                        `${service.gradient}`,
                        "hover:shadow-lg hover:scale-105",
                        "text-white font-semibold group/btn"
                      )}>
                        <span>Saiba Mais</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={cn(
                      "absolute inset-0 rounded-3xl",
                      `bg-gradient-to-r ${service.gradient}`,
                      "p-[1px]"
                    )}>
                      <div className="w-full h-full rounded-3xl bg-gray-900/90 backdrop-blur-xl"></div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Button className={cn(
            "h-16 px-12 text-lg font-bold",
            "bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple",
            "hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]",
            "transition-all duration-300 hover:scale-105",
            "text-white border-none"
          )}>
            <Zap className="w-6 h-6 mr-3" />
            Automatize Seu Negócio Agora
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>

      {/* Bottom Curved Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="rgb(16 185 129)" className="opacity-20"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;

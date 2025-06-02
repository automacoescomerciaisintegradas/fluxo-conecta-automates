
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Agentes de Contato",
      description: "Criamos agentes inteligentes que automatizam suas comunicações com clientes, fornecedores e parceiros, aumentando a eficiência e reduzindo o tempo gasto em tarefas repetitivas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      gradient: "from-automation-blue to-automation-indigo"
    },
    {
      title: "Fluxos de N8N",
      description: "Desenvolvemos fluxos de trabalho personalizados utilizando N8N para integrar seus sistemas e automatizar processos, conectando aplicativos e serviços para criar operações eficientes e escalonáveis.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-automation-purple to-automation-pink"
    },
    {
      title: "Automação de Redes Sociais",
      description: "Automatize suas postagens nas redes sociais com nossa solução completa que agenda, publica e monitora conteúdo em múltiplas plataformas, mantendo sua presença digital ativa e consistente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      gradient: "from-automation-green to-automation-orange"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-automation-blue/10 to-automation-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-automation-pink/10 to-automation-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-section mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Nossos <span className="bg-gradient-to-r from-automation-blue to-automation-purple bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos soluções completas de automação para impulsionar seu negócio, economizar tempo e aumentar a produtividade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group animate-fade-in hover:scale-105 transition-all duration-500" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`relative p-8 rounded-3xl border border-white/20 backdrop-blur-lg bg-gradient-to-br ${service.gradient} shadow-xl hover:shadow-2xl transition-all duration-500`}>
                <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

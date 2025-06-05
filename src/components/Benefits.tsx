
import { CheckIcon } from "lucide-react";
import N8NUpload from "./N8NUpload";

const Benefits = () => {
  const benefits = [
    {
      title: "Economize tempo e recursos",
      description: "Nossas soluções de automação reduzem o tempo gasto em tarefas repetitivas, permitindo que você e sua equipe foquem no que realmente importa.",
      icon: "⏰"
    },
    {
      title: "Aumente a produtividade",
      description: "Automatize processos manuais e acelere o fluxo de trabalho, aumentando a eficiência operacional da sua empresa.",
      icon: "📈"
    },
    {
      title: "Melhore a experiência do cliente",
      description: "Com agentes de contato automatizados, ofereça respostas rápidas e consistentes, melhorando a satisfação dos clientes.",
      icon: "🎯"
    },
    {
      title: "Elimine erros humanos",
      description: "Reduza erros comuns em processos manuais e garanta consistência em todas as operações do seu negócio.",
      icon: "✅"
    },
    {
      title: "Escale seu negócio",
      description: "Nossas soluções crescem junto com sua empresa, adaptando-se às suas necessidades em constante evolução.",
      icon: "🚀"
    },
    {
      title: "Integração completa",
      description: "Conectamos seus sistemas existentes, criando um ecossistema digital integrado e eficiente.",
      icon: "🔗"
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-emerald-600/20 to-automation-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-automation-green/15 to-green-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 container-section mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 bg-clip-text text-transparent">
            Por que escolher nossas <span className="bg-gradient-to-r from-automation-green to-emerald-600 bg-clip-text text-transparent">Automações</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubra como nossas soluções de automação podem transformar seu negócio e impulsionar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-automation-green to-emerald-600 flex items-center justify-center mb-4">
                    <CheckIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent">
              Teste nossos <span className="bg-gradient-to-r from-automation-green to-emerald-600 bg-clip-text text-transparent">Fluxos de N8N</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experimente nossa integração com N8N para upload e gerenciamento de arquivos
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-2">
            <N8NUpload />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

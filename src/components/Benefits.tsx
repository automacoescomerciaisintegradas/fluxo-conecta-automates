
import { CheckIcon } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Economize tempo e recursos",
      description: "Nossas soluções de automação reduzem o tempo gasto em tarefas repetitivas, permitindo que você e sua equipe foquem no que realmente importa."
    },
    {
      title: "Aumente a produtividade",
      description: "Automatize processos manuais e acelere o fluxo de trabalho, aumentando a eficiência operacional da sua empresa."
    },
    {
      title: "Melhore a experiência do cliente",
      description: "Com agentes de contato automatizados, ofereça respostas rápidas e consistentes, melhorando a satisfação dos clientes."
    },
    {
      title: "Elimine erros humanos",
      description: "Reduza erros comuns em processos manuais e garanta consistência em todas as operações do seu negócio."
    },
    {
      title: "Escale seu negócio",
      description: "Nossas soluções crescem junto com sua empresa, adaptando-se às suas necessidades em constante evolução."
    },
    {
      title: "Integração completa",
      description: "Conectamos seus sistemas existentes, criando um ecossistema digital integrado e eficiente."
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-automation-gray">
      <div className="container-section mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Por que escolher nossas <span className="text-automation-blue">Automações</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como nossas soluções de automação podem transformar seu negócio e impulsionar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-automation-blue animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className="h-8 w-8 rounded-full bg-automation-light-blue flex items-center justify-center mr-3">
                  <CheckIcon className="h-5 w-5 text-automation-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

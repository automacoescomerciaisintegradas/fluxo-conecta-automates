
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-automation-light-blue to-white py-20 lg:py-32">
      <div className="container-section mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-automation-blue">Automatize</span> seus processos comerciais
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Conecte seus contatos, crie fluxos de trabalho inteligentes e automatize postagens nas redes sociais com nossas soluções personalizadas.
            </p>
            <div className="space-x-4">
              <Button className="bg-automation-blue hover:bg-automation-dark-blue text-white px-8 py-6 text-lg">
                Conheça nossas soluções
              </Button>
              <Button variant="outline" className="border-automation-blue text-automation-blue hover:bg-automation-light-blue px-8 py-6 text-lg">
                Entre em contato
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-automation-blue rounded-lg blur-sm opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Automação de processos"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

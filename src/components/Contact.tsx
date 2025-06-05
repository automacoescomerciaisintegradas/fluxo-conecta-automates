import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-section mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Entre em <span className="text-automation-green">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar a automatizar seus processos comerciais. Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <ContactForm />
          </div>

          <div className="flex flex-col justify-center animate-fade-in">
            <div className="bg-automation-light-green p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-automation-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telefone</p>
                    <p className="text-lg font-medium">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-automation-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">E-mail</p>
                    <p className="text-lg font-medium">contato@automacoescomerciais.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-automation-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Endereço</p>
                    <p className="text-lg font-medium">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-green-200">
                <h4 className="font-semibold mb-4">Horário de atendimento:</h4>
                <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

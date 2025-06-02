import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container-section mx-auto py-12 px-4 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-automation-blue hover:underline mb-4"
            >
              <ArrowLeft size={16} className="mr-1" /> Voltar para a página inicial
            </Link>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Termos de Uso</h1>
            <p className="text-gray-600 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site e os serviços da Automações Comerciais Integradas, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descrição dos Serviços</h2>
              <p>
                A Automações Comerciais Integradas oferece soluções de automação para empresas, incluindo, mas não se limitando a:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Desenvolvimento de agentes de contato automatizados;</li>
                <li>Criação e implementação de fluxos de trabalho com N8N;</li>
                <li>Automação de processos em redes sociais;</li>
                <li>Consultoria em automação comercial.</li>
              </ul>
              <p>
                Reservamos o direito de modificar, suspender ou descontinuar qualquer aspecto do serviço a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Uso do Site e Serviços</h2>
              <p>Ao utilizar nosso site e serviços, você concorda em:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fornecer informações precisas, atualizadas e completas quando solicitado;</li>
                <li>Utilizar os serviços apenas para fins legais e de acordo com estes termos;</li>
                <li>Não utilizar o site de maneira que possa danificar, sobrecarregar ou comprometer nossos sistemas;</li>
                <li>Não tentar acessar áreas restritas do site ou de nossos sistemas;</li>
                <li>Não compartilhar credenciais de acesso ou permitir que terceiros utilizem sua conta;</li>
                <li>Não utilizar nossos serviços para atividades fraudulentas ou enganosas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo presente no site da Automações Comerciais Integradas, incluindo texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da Automações Comerciais Integradas ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.
              </p>
              <p>
                O uso não autorizado de qualquer material do site pode violar leis de direitos autorais, marcas registradas, privacidade e publicidade, e regulamentos e estatutos de comunicações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitação de Responsabilidade</h2>
              <p>
                Os serviços da Automações Comerciais Integradas são fornecidos "como estão" e "conforme disponíveis". Não garantimos que os serviços serão ininterruptos, oportunos, seguros ou livres de erros.
              </p>
              <p>
                Em nenhum caso a Automações Comerciais Integradas será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do uso ou da incapacidade de usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Privacidade</h2>
              <p>
                O uso de nosso site está sujeito à nossa <Link to="/politica-de-privacidade" className="text-automation-blue hover:underline">Política de Privacidade</Link>, que descreve como coletamos, utilizamos e protegemos suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Rescisão</h2>
              <p>
                Reservamos o direito de encerrar ou suspender o acesso a nossos serviços, sem aviso prévio, por qualquer motivo, incluindo, sem limitação, violação destes Termos de Uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Alterações nos Termos</h2>
              <p>
                Podemos revisar e atualizar estes Termos de Uso periodicamente, a nosso critério. Todas as alterações entram em vigor imediatamente quando publicadas no site. Seu uso continuado do site após a publicação de Termos de Uso revisados significa que você aceita e concorda com as alterações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente destes termos será resolvida exclusivamente nos tribunais da comarca de São Paulo, SP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contato</h2>
              <p>
                Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="mt-2">
                <p><strong>E-mail:</strong> contato@automacoescomerciais.com.br</p>
                <p><strong>Telefone:</strong> (11) 99999-9999</p>
                <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse;

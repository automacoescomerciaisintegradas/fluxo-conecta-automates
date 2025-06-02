import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Política de Privacidade</h1>
            <p className="text-gray-600 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introdução</h2>
              <p>
                A Automações Comerciais Integradas está comprometida em proteger a privacidade e os dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018, e demais normas aplicáveis.
              </p>
              <p>
                Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos, compartilhamos e protegemos os seus dados pessoais quando você acessa nosso site, utiliza nossos serviços ou interage conosco de qualquer forma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Definições</h2>
              <p>Para melhor compreensão desta política, considere as seguintes definições conforme a LGPD:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dados Pessoais:</strong> Informação relacionada a pessoa natural identificada ou identificável.</li>
                <li><strong>Tratamento:</strong> Toda operação realizada com dados pessoais, como coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</li>
                <li><strong>Titular:</strong> Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.</li>
                <li><strong>Controlador:</strong> Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Dados que Coletamos</h2>
              <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dados de Identificação:</strong> Nome, e-mail, telefone, endereço.</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de dispositivo, sistema operacional, tipo de navegador, páginas visitadas, tempo de permanência.</li>
                <li><strong>Dados de Comunicação:</strong> Registros de comunicações que você realizar conosco.</li>
                <li><strong>Dados de Uso do Serviço:</strong> Informações sobre como você utiliza nossos serviços.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Finalidades do Tratamento</h2>
              <p>Tratamos seus dados pessoais para as seguintes finalidades:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fornecer e melhorar nossos serviços de automação comercial;</li>
                <li>Responder suas solicitações e prestar suporte adequado;</li>
                <li>Enviar comunicações relacionadas aos nossos serviços;</li>
                <li>Cumprir obrigações legais e regulatórias;</li>
                <li>Proteger nossos direitos e prevenir fraudes;</li>
                <li>Realizar análises para melhorar a experiência do usuário.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Base Legal para o Tratamento</h2>
              <p>O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Consentimento:</strong> Quando você autoriza expressamente o tratamento de seus dados.</li>
                <li><strong>Execução de Contrato:</strong> Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual você seja parte.</li>
                <li><strong>Cumprimento de Obrigação Legal:</strong> Quando necessário para cumprir uma obrigação legal ou regulatória.</li>
                <li><strong>Legítimo Interesse:</strong> Quando o tratamento for necessário para atender aos interesses legítimos da Automações Comerciais, respeitando seus direitos e liberdades fundamentais.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Compartilhamento de Dados</h2>
              <p>Podemos compartilhar seus dados pessoais com:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prestadores de serviços que nos auxiliam na operação do site e na prestação dos serviços;</li>
                <li>Parceiros comerciais, quando necessário para a prestação dos serviços;</li>
                <li>Autoridades governamentais, quando exigido por lei ou ordem judicial.</li>
              </ul>
              <p>Garantimos que todos os terceiros com quem compartilhamos dados tratam as informações com o mesmo nível de proteção que adotamos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Direitos dos Titulares</h2>
              <p>Em conformidade com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
                <li>Portabilidade dos dados;</li>
                <li>Eliminação dos dados tratados com o consentimento;</li>
                <li>Informação sobre entidades com as quais seus dados foram compartilhados;</li>
                <li>Revogação do consentimento.</li>
              </ul>
              <p>Para exercer seus direitos, entre em contato conosco através dos canais indicados ao final desta política.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração acidental. Estas medidas incluem criptografia, firewalls, controles de acesso, entre outras.
              </p>
              <p>
                Embora adotemos as melhores práticas de segurança disponíveis, nenhum método de transmissão ou armazenamento eletrônico é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Retenção de Dados</h2>
              <p>
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo. Você pode gerenciar as configurações de cookies através do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Alterações na Política de Privacidade</h2>
              <p>
                Esta política pode ser atualizada periodicamente. Notificaremos sobre quaisquer alterações materiais através de aviso em nosso site ou por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contato</h2>
              <p>
                Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:
              </p>
              <div className="mt-2">
                <p><strong>E-mail:</strong> privacidade@automacoescomerciais.com.br</p>
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

export default PrivacyPolicy;

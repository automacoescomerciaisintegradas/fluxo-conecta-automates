
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-section mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-automation-green to-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-automation-green">Automações</span> Comerciais
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Soluções de automação personalizadas para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:scale-110 transform"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Agentes de Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fluxos de N8N</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Automações de Redes Sociais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultorias</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><Link to="/academy" className="text-gray-400 hover:text-white transition-colors">Academy</Link></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><Link to="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <address className="text-gray-400 not-italic">
              <p>São Paulo, SP - Brasil</p>
              <p className="mt-2">contato@automacoescomerciais.com.br</p>
              <p className="mt-2">(11) 99999-9999</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Automações Comerciais Integradas. Todos os direitos reservados.</p>
          <p className="mt-2 flex justify-center space-x-4">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

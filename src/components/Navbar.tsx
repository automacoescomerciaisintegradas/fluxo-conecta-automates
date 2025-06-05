
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`
      sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300
      ${theme === 'dark' 
        ? 'bg-dark-surface/80 border-neon-green/20 shadow-lg shadow-neon-green/10' 
        : 'bg-white/80 border-gray-200 shadow-sm'
      }
    `}>
      <div className="container-section mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <span className={`
                text-2xl font-bold transition-all duration-300 group-hover:scale-105
                ${theme === 'dark' ? 'text-neon-green glow-text' : 'text-automation-green'}
              `}>
                Automações
              </span>
              <span className={`
                text-2xl font-bold ml-1 transition-all duration-300
                ${theme === 'dark' ? 'text-white' : 'text-gray-800'}
              `}>
                Comerciais Integradas
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className={`
              transition-all duration-300 hover:scale-105 relative group
              ${theme === 'dark' ? 'text-gray-300 hover:text-neon-green' : 'text-gray-700 hover:text-automation-green'}
            `}>
              Home
              <span className={`
                absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full
                ${theme === 'dark' ? 'bg-neon-green' : 'bg-automation-green'}
              `}></span>
            </a>
            <a href="#services" className={`
              transition-all duration-300 hover:scale-105 relative group
              ${theme === 'dark' ? 'text-gray-300 hover:text-neon-blue' : 'text-gray-700 hover:text-automation-green'}
            `}>
              Serviços
              <span className={`
                absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full
                ${theme === 'dark' ? 'bg-neon-blue' : 'bg-automation-green'}
              `}></span>
            </a>
            <a href="#benefits" className={`
              transition-all duration-300 hover:scale-105 relative group
              ${theme === 'dark' ? 'text-gray-300 hover:text-neon-purple' : 'text-gray-700 hover:text-automation-green'}
            `}>
              Benefícios
              <span className={`
                absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full
                ${theme === 'dark' ? 'bg-neon-purple' : 'bg-automation-green'}
              `}></span>
            </a>
            <a href="#contact" className={`
              transition-all duration-300 hover:scale-105 relative group
              ${theme === 'dark' ? 'text-gray-300 hover:text-neon-pink' : 'text-gray-700 hover:text-automation-green'}
            `}>
              Contato
              <span className={`
                absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full
                ${theme === 'dark' ? 'bg-neon-pink' : 'bg-automation-green'}
              `}></span>
            </a>
            
            <ThemeToggle />
            <AuthButton />
            
            <Button className={`
              relative overflow-hidden group transition-all duration-300 hover:scale-105
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-neon-green to-neon-blue text-black hover:from-neon-blue hover:to-neon-purple shadow-neon' 
                : 'bg-automation-green hover:bg-automation-dark-green text-white'
              }
            `}>
              <span className="relative z-10">Fale Conosco</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className={`
                focus:outline-none transition-all duration-300 hover:scale-110 p-2 rounded-lg
                ${theme === 'dark' ? 'text-gray-300 hover:text-neon-green hover:bg-neon-green/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}
              `}
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`
            md:hidden mt-4 pt-4 border-t rounded-lg backdrop-blur-lg transition-all duration-300
            ${theme === 'dark' ? 'border-neon-green/20 bg-dark-surface/50' : 'border-gray-200 bg-white/50'}
          `}>
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-automation-green transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-automation-green transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#benefits" 
                className="text-gray-700 hover:text-automation-green transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-automation-green transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <AuthButton />
              <Button className="bg-automation-green hover:bg-automation-dark-green text-white w-full">
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

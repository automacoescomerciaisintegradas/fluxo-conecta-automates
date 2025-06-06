
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos seu contato. Retornaremos em breve!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative group">
        <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2 uppercase tracking-wider">
          Nome completo
        </label>
        <div className="relative">
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 backdrop-blur-sm"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="email" className="block text-sm font-medium text-blue-400 mb-2 uppercase tracking-wider">
          E-mail
        </label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="phone" className="block text-sm font-medium text-purple-400 mb-2 uppercase tracking-wider">
          Telefone
        </label>
        <div className="relative">
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      <div className="relative group">
        <label htmlFor="message" className="block text-sm font-medium text-pink-400 mb-2 uppercase tracking-wider">
          Mensagem
        </label>
        <div className="relative">
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Como podemos ajudar?"
            required
            className="w-full p-4 min-h-[120px] bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      <div className="relative group pt-4">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
        <Button 
          type="submit" 
          className="relative w-full bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 hover:from-green-400 hover:via-blue-500 hover:to-purple-600 text-white p-6 rounded-lg font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 border-0"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Enviando...</span>
            </div>
          ) : (
            "Enviar mensagem"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

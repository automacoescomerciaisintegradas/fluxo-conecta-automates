
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const Academy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="container-section py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 glow-text">
            Academy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolva suas habilidades com nossos cursos especializados e certificações profissionais
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-effect border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-300">Cursos Disponíveis</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold text-white mb-2">5,000+</h3>
              <p className="text-gray-300">Estudantes Ativos</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-300">Taxa de Conclusão</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white mb-2">1,200+</h3>
              <p className="text-gray-300">Certificados Emitidos</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Links */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white mb-8">Área Administrativa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass-effect border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">Convidar Usuários</CardTitle>
                <CardDescription className="text-gray-300">
                  Envie convites para novos usuários da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500"
                  onClick={() => window.location.href = '/admin/convidar-usuarios'}
                >
                  Acessar
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">Gerenciar Acessos</CardTitle>
                <CardDescription className="text-gray-300">
                  Controle permissões e acessos dos usuários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500"
                  onClick={() => window.location.href = '/admin/gerenciar-acessos'}
                >
                  Acessar
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">Gerenciar Cursos</CardTitle>
                <CardDescription className="text-gray-300">
                  Administre cursos, módulos e aulas da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500"
                  onClick={() => window.location.href = '/admin/gerenciar-cursos'}
                >
                  Acessar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;

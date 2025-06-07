
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Shield, Settings, ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface UserAccess {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  lastAccess: string;
  status: string;
}

const GerenciarAcessos = () => {
  const [showEmails, setShowEmails] = useState(false);

  // Mock data for demonstration
  const [usersAccess, setUsersAccess] = useState<UserAccess[]>([
    {
      id: "1",
      name: "Ana Paula",
      email: "ana.paula@academy.com",
      role: "Administrador",
      permissions: ["Criar", "Editar", "Deletar", "Visualizar"],
      lastAccess: "2024-01-20 14:30",
      status: "Ativo"
    },
    {
      id: "2",
      name: "Carlos Mendes",
      email: "carlos.mendes@academy.com",
      role: "Editor",
      permissions: ["Criar", "Editar", "Visualizar"],
      lastAccess: "2024-01-19 09:15",
      status: "Ativo"
    },
    {
      id: "3",
      name: "Beatriz Lima",
      email: "beatriz.lima@academy.com",
      role: "Visualizador",
      permissions: ["Visualizar"],
      lastAccess: "2024-01-18 16:45",
      status: "Inativo"
    }
  ]);

  const maskEmail = (email: string) => {
    if (showEmails) return email;
    const [username, domain] = email.split('@');
    const maskedUsername = username.charAt(0) + '*'.repeat(username.length - 2) + username.charAt(username.length - 1);
    return `${maskedUsername}@${domain}`;
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Administrador':
        return 'bg-red-500/20 text-red-400';
      case 'Editor':
        return 'bg-blue-500/20 text-blue-400';
      case 'Visualizador':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.history.back()}
              className="glass-effect border-gray-600 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-4xl font-bold text-white glow-text">Gerenciar Acessos</h1>
          </div>
          
          <Button
            onClick={() => setShowEmails(!showEmails)}
            variant="outline"
            className="glass-effect border-gray-600 text-white hover:bg-white/10"
          >
            {showEmails ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {showEmails ? "Ocultar Emails" : "Mostrar Emails"}
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-0">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-red-400" />
              <h3 className="text-lg font-bold text-white">1</h3>
              <p className="text-gray-300 text-sm">Administradores</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0">
            <CardContent className="p-6 text-center">
              <Edit className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <h3 className="text-lg font-bold text-white">1</h3>
              <p className="text-gray-300 text-sm">Editores</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0">
            <CardContent className="p-6 text-center">
              <Eye className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <h3 className="text-lg font-bold text-white">1</h3>
              <p className="text-gray-300 text-sm">Visualizadores</p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0">
            <CardContent className="p-6 text-center">
              <Settings className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <h3 className="text-lg font-bold text-white">3</h3>
              <p className="text-gray-300 text-sm">Total Usuários</p>
            </CardContent>
          </Card>
        </div>

        {/* Users Access Table */}
        <Card className="glass-effect border-0">
          <CardHeader>
            <CardTitle className="text-white">Controle de Acessos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Nome</TableHead>
                  <TableHead className="text-gray-300">Email</TableHead>
                  <TableHead className="text-gray-300">Função</TableHead>
                  <TableHead className="text-gray-300">Permissões</TableHead>
                  <TableHead className="text-gray-300">Último Acesso</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersAccess.map((user) => (
                  <TableRow key={user.id} className="border-gray-700">
                    <TableCell className="text-white">{user.name}</TableCell>
                    <TableCell className="text-white font-mono">{maskEmail(user.email)}</TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {user.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-white text-sm">{user.lastAccess}</TableCell>
                    <TableCell>
                      <Badge className={
                        user.status === 'Ativo' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white/10">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white/10">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GerenciarAcessos;

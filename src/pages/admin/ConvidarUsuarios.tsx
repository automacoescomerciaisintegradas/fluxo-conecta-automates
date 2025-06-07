
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, UserPlus, ArrowLeft } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  invitedAt: string;
}

const ConvidarUsuarios = () => {
  const [showEmails, setShowEmails] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState("");

  // Mock data for demonstration
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@email.com",
      status: "Ativo",
      invitedAt: "2024-01-15"
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria.santos@email.com",
      status: "Pendente",
      invitedAt: "2024-01-14"
    },
    {
      id: "3",
      name: "Pedro Costa",
      email: "pedro.costa@email.com",
      status: "Ativo",
      invitedAt: "2024-01-13"
    }
  ]);

  const handleInviteUser = () => {
    if (newUserEmail) {
      const newUser: User = {
        id: String(users.length + 1),
        name: "Novo Usuário",
        email: newUserEmail,
        status: "Pendente",
        invitedAt: new Date().toISOString().split('T')[0]
      };
      setUsers([...users, newUser]);
      setNewUserEmail("");
    }
  };

  const maskEmail = (email: string) => {
    if (showEmails) return email;
    const [username, domain] = email.split('@');
    const maskedUsername = username.charAt(0) + '*'.repeat(username.length - 2) + username.charAt(username.length - 1);
    return `${maskedUsername}@${domain}`;
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
            <h1 className="text-4xl font-bold text-white glow-text">Convidar Usuários</h1>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Invite Form */}
          <Card className="glass-effect border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <UserPlus className="w-5 h-5 mr-2" />
                Convidar Novo Usuário
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email do usuário</label>
                <Input
                  type="email"
                  placeholder="usuario@email.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white"
                />
              </div>
              <Button 
                onClick={handleInviteUser}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500"
                disabled={!newUserEmail}
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Convite
              </Button>
            </CardContent>
          </Card>

          {/* Users Table */}
          <Card className="lg:col-span-2 glass-effect border-0">
            <CardHeader>
              <CardTitle className="text-white">Usuários Convidados</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Nome</TableHead>
                    <TableHead className="text-gray-300">Email</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Data do Convite</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id} className="border-gray-700">
                      <TableCell className="text-white">{user.name}</TableCell>
                      <TableCell className="text-white font-mono">{maskEmail(user.email)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'Ativo' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-white">{user.invitedAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConvidarUsuarios;

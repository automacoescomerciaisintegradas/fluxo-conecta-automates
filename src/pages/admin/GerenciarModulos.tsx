
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, Plus, Eye, ArrowLeft } from "lucide-react";
import ModuleForm from "@/components/admin/ModuleForm";

const GerenciarModulos = () => {
  const { courseId } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingModule, setEditingModule] = useState(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: course } = useQuery({
    queryKey: ["course", courseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: modules, isLoading } = useQuery({
    queryKey: ["modules", courseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("modules")
        .select("*")
        .eq("course_id", courseId)
        .order("order_index", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (moduleId: string) => {
      const { error } = await supabase
        .from("modules")
        .delete()
        .eq("id", moduleId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules", courseId] });
      toast({
        title: "Sucesso",
        description: "Módulo excluído com sucesso!",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao excluir módulo: " + error.message,
        variant: "destructive",
      });
    },
  });

  const handleEdit = (module: any) => {
    setEditingModule(module);
    setIsFormOpen(true);
  };

  const handleDelete = (moduleId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este módulo?")) {
      deleteMutation.mutate(moduleId);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingModule(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6">
      <div className="container mx-auto">
        <Card className="glass-effect border-0">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
                <div>
                  <CardTitle className="text-white text-2xl">
                    Módulos - {course?.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Gerencie os módulos deste curso
                  </CardDescription>
                </div>
              </div>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Módulo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center text-white">Carregando...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-300">Ordem</TableHead>
                    <TableHead className="text-gray-300">Título</TableHead>
                    <TableHead className="text-gray-300">Descrição</TableHead>
                    <TableHead className="text-gray-300">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {modules?.map((module) => (
                    <TableRow key={module.id}>
                      <TableCell className="text-white font-medium">{module.order_index}</TableCell>
                      <TableCell className="text-white font-medium">{module.title}</TableCell>
                      <TableCell className="text-gray-300">
                        {module.description?.substring(0, 100)}...
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.location.href = `/admin/gerenciar-cursos/${courseId}/${module.id}`}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(module)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(module.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>

      {isFormOpen && (
        <ModuleForm
          module={editingModule}
          courseId={courseId!}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
};

export default GerenciarModulos;

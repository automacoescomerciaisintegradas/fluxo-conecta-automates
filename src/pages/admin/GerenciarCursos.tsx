
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, Plus, Eye } from "lucide-react";
import CourseForm from "@/components/admin/CourseForm";

const GerenciarCursos = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (courseId: string) => {
      const { error } = await supabase
        .from("courses")
        .delete()
        .eq("id", courseId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast({
        title: "Sucesso",
        description: "Curso excluído com sucesso!",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao excluir curso: " + error.message,
        variant: "destructive",
      });
    },
  });

  const handleEdit = (course: any) => {
    setEditingCourse(course);
    setIsFormOpen(true);
  };

  const handleDelete = (courseId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este curso?")) {
      deleteMutation.mutate(courseId);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingCourse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6">
      <div className="container mx-auto">
        <Card className="glass-effect border-0">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-white text-2xl">Gerenciar Cursos</CardTitle>
                <CardDescription className="text-gray-300">
                  Administre todos os cursos da plataforma
                </CardDescription>
              </div>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Curso
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
                    <TableHead className="text-gray-300">Título</TableHead>
                    <TableHead className="text-gray-300">Nível</TableHead>
                    <TableHead className="text-gray-300">Duração</TableHead>
                    <TableHead className="text-gray-300">Preço</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses?.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="text-white font-medium">{course.title}</TableCell>
                      <TableCell className="text-gray-300">
                        <Badge variant="outline">{course.level || "N/A"}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {course.duration_hours ? `${course.duration_hours}h` : "N/A"}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {course.price ? `R$ ${course.price}` : "Gratuito"}
                      </TableCell>
                      <TableCell>
                        <Badge variant={course.is_published ? "default" : "secondary"}>
                          {course.is_published ? "Publicado" : "Rascunho"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.location.href = `/admin/gerenciar-cursos/${course.id}`}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(course)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(course.id)}
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
        <CourseForm
          course={editingCourse}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
};

export default GerenciarCursos;

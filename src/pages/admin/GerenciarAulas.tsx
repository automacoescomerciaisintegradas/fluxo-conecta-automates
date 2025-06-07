
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, Plus, ArrowLeft } from "lucide-react";
import LessonForm from "@/components/admin/LessonForm";

const GerenciarAulas = () => {
  const { courseId, moduleId } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
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

  const { data: module } = useQuery({
    queryKey: ["module", moduleId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("modules")
        .select("*")
        .eq("id", moduleId)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: lessons, isLoading } = useQuery({
    queryKey: ["lessons", moduleId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("module_id", moduleId)
        .order("order_index", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (lessonId: string) => {
      const { error } = await supabase
        .from("lessons")
        .delete()
        .eq("id", lessonId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessons", moduleId] });
      toast({
        title: "Sucesso",
        description: "Aula excluída com sucesso!",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao excluir aula: " + error.message,
        variant: "destructive",
      });
    },
  });

  const handleEdit = (lesson: any) => {
    setEditingLesson(lesson);
    setIsFormOpen(true);
  };

  const handleDelete = (lessonId: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta aula?")) {
      deleteMutation.mutate(lessonId);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingLesson(null);
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
                    Aulas - {module?.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Curso: {course?.title}
                  </CardDescription>
                </div>
              </div>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nova Aula
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
                    <TableHead className="text-gray-300">Duração</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lessons?.map((lesson) => (
                    <TableRow key={lesson.id}>
                      <TableCell className="text-white font-medium">{lesson.order_index}</TableCell>
                      <TableCell className="text-white font-medium">{lesson.title}</TableCell>
                      <TableCell className="text-gray-300">
                        {lesson.duration_minutes ? `${lesson.duration_minutes} min` : "N/A"}
                      </TableCell>
                      <TableCell>
                        <Badge variant={lesson.is_published ? "default" : "secondary"}>
                          {lesson.is_published ? "Publicado" : "Rascunho"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(lesson)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(lesson.id)}
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
        <LessonForm
          lesson={editingLesson}
          moduleId={moduleId!}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
};

export default GerenciarAulas;

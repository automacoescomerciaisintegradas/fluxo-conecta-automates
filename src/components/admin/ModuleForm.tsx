
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface ModuleFormProps {
  module?: any;
  courseId: string;
  onClose: () => void;
}

const ModuleForm = ({ module, courseId, onClose }: ModuleFormProps) => {
  const [formData, setFormData] = useState({
    title: module?.title || "",
    description: module?.description || "",
    order_index: module?.order_index || 1,
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      if (module) {
        const { error } = await supabase
          .from("modules")
          .update(data)
          .eq("id", module.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("modules")
          .insert({ ...data, course_id: courseId });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules", courseId] });
      toast({
        title: "Sucesso",
        description: module ? "Módulo atualizado com sucesso!" : "Módulo criado com sucesso!",
      });
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao salvar módulo: " + error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl glass-effect border-0">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white">
              {module ? "Editar Módulo" : "Novo Módulo"}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title" className="text-gray-300">Título</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-white/10 border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-gray-300">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/10 border-gray-600 text-white"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="order_index" className="text-gray-300">Ordem</Label>
              <Input
                id="order_index"
                value={formData.order_index}
                onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
                className="bg-white/10 border-gray-600 text-white"
                type="number"
                min="1"
                required
              />
            </div>

            <div className="flex space-x-2 pt-4">
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Salvando..." : "Salvar"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleForm;

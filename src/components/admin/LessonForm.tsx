
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface LessonFormProps {
  lesson?: any;
  moduleId: string;
  onClose: () => void;
}

const LessonForm = ({ lesson, moduleId, onClose }: LessonFormProps) => {
  const [formData, setFormData] = useState({
    title: lesson?.title || "",
    description: lesson?.description || "",
    content: lesson?.content || "",
    video_url: lesson?.video_url || "",
    duration_minutes: lesson?.duration_minutes || "",
    order_index: lesson?.order_index || 1,
    is_published: lesson?.is_published || false,
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      if (lesson) {
        const { error } = await supabase
          .from("lessons")
          .update(data)
          .eq("id", lesson.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("lessons")
          .insert({ ...data, module_id: moduleId });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessons", moduleId] });
      toast({
        title: "Sucesso",
        description: lesson ? "Aula atualizada com sucesso!" : "Aula criada com sucesso!",
      });
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Erro ao salvar aula: " + error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      duration_minutes: formData.duration_minutes ? parseInt(formData.duration_minutes) : null,
    };
    mutation.mutate(submitData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl glass-effect border-0 max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white">
              {lesson ? "Editar Aula" : "Nova Aula"}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="video_url" className="text-gray-300">URL do Vídeo</Label>
                <Input
                  id="video_url"
                  value={formData.video_url}
                  onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                  className="bg-white/10 border-gray-600 text-white"
                  type="url"
                />
              </div>

              <div>
                <Label htmlFor="duration_minutes" className="text-gray-300">Duração (minutos)</Label>
                <Input
                  id="duration_minutes"
                  value={formData.duration_minutes}
                  onChange={(e) => setFormData({ ...formData, duration_minutes: e.target.value })}
                  className="bg-white/10 border-gray-600 text-white"
                  type="number"
                  min="1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="content" className="text-gray-300">Conteúdo</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="bg-white/10 border-gray-600 text-white"
                rows={6}
                placeholder="Conteúdo da aula (texto, markdown, etc.)"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_published"
                checked={formData.is_published}
                onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
              />
              <Label htmlFor="is_published" className="text-gray-300">Publicado</Label>
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

export default LessonForm;

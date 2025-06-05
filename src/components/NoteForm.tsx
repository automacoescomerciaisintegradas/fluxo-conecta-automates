
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Save, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface NoteFormProps {
  note?: Note;
  onSave: (title: string, content: string) => void;
  onCancel: () => void;
}

const NoteForm = ({ note, onSave, onCancel }: NoteFormProps) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSave(title, content);
    }
  };

  return (
    <Card className={`
      ${theme === 'dark' 
        ? 'bg-dark-surface/80 border-neon-green/30 shadow-lg shadow-neon-green/10' 
        : 'bg-white border-gray-200 shadow-lg'
      }
    `}>
      <CardHeader>
        <CardTitle className={`
          ${theme === 'dark' ? 'text-neon-green' : 'text-automation-green'}
        `}>
          {note ? 'Editar Nota' : 'Nova Nota'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className={`
              ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
            `}>
              Título
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título da nota..."
              className={`
                ${theme === 'dark' 
                  ? 'bg-dark-surface/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-neon-green' 
                  : 'bg-white border-gray-300 focus:border-automation-green'
                }
              `}
              required
            />
          </div>
          <div>
            <Label htmlFor="content" className={`
              ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
            `}>
              Conteúdo
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Digite o conteúdo da nota..."
              rows={6}
              className={`
                ${theme === 'dark' 
                  ? 'bg-dark-surface/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-neon-green' 
                  : 'bg-white border-gray-300 focus:border-automation-green'
                }
              `}
            />
          </div>
          <div className="flex space-x-2">
            <Button
              type="submit"
              className={`
                flex-1
                ${theme === 'dark' 
                  ? 'bg-gradient-to-r from-neon-green to-neon-blue text-black hover:from-neon-blue hover:to-neon-purple' 
                  : 'bg-automation-green hover:bg-automation-dark-green text-white'
                }
              `}
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className={`
                ${theme === 'dark' 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <X className="h-4 w-4 mr-2" />
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default NoteForm;

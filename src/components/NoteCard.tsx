
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Edit, Calendar } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  const { theme } = useTheme();

  return (
    <Card className={`
      group transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer
      ${theme === 'dark' 
        ? 'bg-dark-surface/50 border-neon-green/20 hover:border-neon-green/40 hover:shadow-neon-green/20' 
        : 'bg-white border-gray-200 hover:border-automation-green/40 hover:shadow-automation-green/20'
      }
    `}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className={`
            text-lg font-semibold line-clamp-2
            ${theme === 'dark' ? 'text-white' : 'text-gray-800'}
          `}>
            {note.title}
          </CardTitle>
          <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(note);
              }}
              className={`
                h-8 w-8 p-0
                ${theme === 'dark' 
                  ? 'hover:bg-neon-blue/20 hover:text-neon-blue' 
                  : 'hover:bg-blue-50 hover:text-blue-600'
                }
              `}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(note.id);
              }}
              className={`
                h-8 w-8 p-0
                ${theme === 'dark' 
                  ? 'hover:bg-red-500/20 hover:text-red-400' 
                  : 'hover:bg-red-50 hover:text-red-600'
                }
              `}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className={`
          flex items-center text-xs
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
        `}>
          <Calendar className="h-3 w-3 mr-1" />
          {new Date(note.created_at).toLocaleDateString('pt-BR')}
        </div>
      </CardHeader>
      <CardContent>
        <p className={`
          text-sm line-clamp-3
          ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
        `}>
          {note.content || 'Sem conteúdo...'}
        </p>
      </CardContent>
    </Card>
  );
};

export default NoteCard;

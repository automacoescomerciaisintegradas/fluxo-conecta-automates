
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, FileText, LogOut, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import ThemeToggle from '@/components/ThemeToggle';
import NoteCard from '@/components/NoteCard';
import NoteForm from '@/components/NoteForm';
import FloatingParticles from '@/components/FloatingParticles';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface Profile {
  name: string;
  avatar_url: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { theme } = useTheme();
  const { toast } = useToast();
  const [notes, setNotes] = useState<Note[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchNotes();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('profiles')
      .select('name, avatar_url')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setProfile(data);
    }
  };

  const fetchNotes = async () => {
    if (!user) return;

    setLoading(true);
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar as notas.',
        variant: 'destructive',
      });
    } else {
      setNotes(data || []);
    }
    setLoading(false);
  };

  const saveNote = async (title: string, content: string) => {
    if (!user) return;

    if (editingNote) {
      // Update existing note
      const { error } = await supabase
        .from('notes')
        .update({ title, content, updated_at: new Date().toISOString() })
        .eq('id', editingNote.id);

      if (error) {
        toast({
          title: 'Erro',
          description: 'Não foi possível atualizar a nota.',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Sucesso',
          description: 'Nota atualizada com sucesso!',
        });
        fetchNotes();
      }
    } else {
      // Create new note
      const { error } = await supabase
        .from('notes')
        .insert({ title, content, user_id: user.id });

      if (error) {
        toast({
          title: 'Erro',
          description: 'Não foi possível criar a nota.',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Sucesso',
          description: 'Nota criada com sucesso!',
        });
        fetchNotes();
      }
    }

    setShowForm(false);
    setEditingNote(null);
  };

  const deleteNote = async (id: string) => {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível excluir a nota.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Sucesso',
        description: 'Nota excluída com sucesso!',
      });
      fetchNotes();
    }
  };

  const editNote = (note: Note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  if (!user) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-dark-gradient' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Acesso negado
          </h1>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Você precisa fazer login para acessar o dashboard.
          </p>
          <Button onClick={() => window.location.href = '/'}>
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-dark-gradient' : 'bg-gray-50'
    }`}>
      {theme === 'dark' && <FloatingParticles />}
      
      {/* Header */}
      <header className={`
        sticky top-0 z-50 backdrop-blur-xl border-b
        ${theme === 'dark' 
          ? 'bg-dark-surface/80 border-neon-green/20 shadow-lg shadow-neon-green/10' 
          : 'bg-white/80 border-gray-200 shadow-sm'
        }
      `}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <FileText className={`h-8 w-8 ${
                theme === 'dark' ? 'text-neon-green' : 'text-automation-green'
              }`} />
              <h1 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Minhas Notas
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {profile && (
                <div className="flex items-center space-x-2">
                  {profile.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt={profile.name}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User className={`h-8 w-8 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`} />
                  )}
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>
                    {profile.name}
                  </span>
                </div>
              )}
              
              <ThemeToggle />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className={`
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-red-400 hover:bg-red-400/10' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }
                `}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {showForm ? (
          <div className="max-w-2xl mx-auto">
            <NoteForm
              note={editingNote}
              onSave={saveNote}
              onCancel={() => {
                setShowForm(false);
                setEditingNote(null);
              }}
            />
          </div>
        ) : (
          <>
            {/* Actions */}
            <div className="flex justify-between items-center mb-8">
              <h2 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                {notes.length} {notes.length === 1 ? 'nota' : 'notas'}
              </h2>
              
              <Button
                onClick={() => setShowForm(true)}
                className={`
                  ${theme === 'dark' 
                    ? 'bg-gradient-to-r from-neon-green to-neon-blue text-black hover:from-neon-blue hover:to-neon-purple shadow-neon' 
                    : 'bg-automation-green hover:bg-automation-dark-green text-white'
                  }
                `}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Nota
              </Button>
            </div>

            {/* Notes Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className={`text-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Carregando notas...
                </div>
              </div>
            ) : notes.length === 0 ? (
              <div className="text-center py-12">
                <FileText className={`h-16 w-16 mx-auto mb-4 ${
                  theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                }`} />
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  Nenhuma nota encontrada
                </h3>
                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Comece criando sua primeira nota!
                </p>
                <Button
                  onClick={() => setShowForm(true)}
                  className={`
                    ${theme === 'dark' 
                      ? 'bg-gradient-to-r from-neon-green to-neon-blue text-black hover:from-neon-blue hover:to-neon-purple' 
                      : 'bg-automation-green hover:bg-automation-dark-green text-white'
                    }
                  `}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Criar primeira nota
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map((note) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    onEdit={editNote}
                    onDelete={deleteNote}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

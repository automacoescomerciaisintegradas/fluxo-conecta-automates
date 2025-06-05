
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { LogIn, LogOut, User } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const AuthButton = () => {
  const { user, signInWithGoogle, signInWithGithub, signOut } = useAuth();
  const { theme } = useTheme();

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.location.href = '/dashboard'}
          className={`
            ${theme === 'dark' 
              ? 'text-neon-green hover:text-neon-blue hover:bg-neon-green/10' 
              : 'text-automation-green hover:text-automation-dark-green hover:bg-automation-green/10'
            }
          `}
        >
          <User className="h-4 w-4 mr-2" />
          Dashboard
        </Button>
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
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={signInWithGoogle}
        className={`
          ${theme === 'dark' 
            ? 'text-gray-300 hover:text-neon-green hover:bg-neon-green/10' 
            : 'text-gray-700 hover:text-automation-green hover:bg-automation-green/10'
          }
        `}
      >
        <LogIn className="h-4 w-4 mr-2" />
        Google
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={signInWithGithub}
        className={`
          ${theme === 'dark' 
            ? 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10' 
            : 'text-gray-700 hover:text-automation-green hover:bg-automation-green/10'
          }
        `}
      >
        <LogIn className="h-4 w-4 mr-2" />
        GitHub
      </Button>
    </div>
  );
};

export default AuthButton;

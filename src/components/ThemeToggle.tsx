
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden group bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 backdrop-blur-md border border-white/20 dark:border-gray-600/30 rounded-full p-3 transition-all duration-300"
    >
      <div className="relative z-10">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-gray-800 dark:text-white transition-all duration-300 group-hover:rotate-12" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
        )}
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full scale-150" />
    </Button>
  );
};

export default ThemeToggle;

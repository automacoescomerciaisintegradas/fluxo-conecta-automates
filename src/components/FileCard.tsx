
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash2, FileText, FileSpreadsheet, File } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileCardProps {
  file: {
    id: string;
    name: string;
    size: number;
    type: string;
    uploadedAt: Date;
  };
  onDelete: (id: string, name: string) => void;
}

const FileCard = ({ file, onDelete }: FileCardProps) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return { icon: FileText, color: 'text-red-400' };
    if (type.includes('sheet') || type.includes('excel')) return { icon: FileSpreadsheet, color: 'text-green-400' };
    if (type.includes('document') || type.includes('word')) return { icon: FileText, color: 'text-blue-400' };
    return { icon: File, color: 'text-gray-400' };
  };

  const { icon: FileIcon, color } = getFileIcon(file.type);

  return (
    <div className={cn(
      "group relative overflow-hidden",
      "bg-gradient-to-br from-gray-800/50 to-gray-900/30",
      "backdrop-blur-xl border border-gray-700/30 rounded-2xl",
      "hover:border-gray-600/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]",
      "transition-all duration-500 hover:scale-[1.02]",
      "animate-fade-in"
    )}>
      {/* Glassmorphism effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* 3D elevation effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Dynamic file icon */}
            <div className={cn(
              "flex-shrink-0 w-12 h-12 rounded-xl",
              "bg-gray-700/50 border border-gray-600/30",
              "flex items-center justify-center",
              "group-hover:scale-110 transition-transform duration-300"
            )}>
              <FileIcon className={cn("w-6 h-6", color)} />
            </div>

            <div className="flex-1 min-w-0 space-y-2">
              {/* File name */}
              <h4 className={cn(
                "font-semibold text-gray-100 truncate",
                "group-hover:text-white transition-colors duration-300"
              )}>
                {file.name}
              </h4>
              
              {/* File details */}
              <div className="flex flex-col gap-1 text-sm text-gray-400">
                <span>{formatFileSize(file.size)}</span>
                <span className="text-xs">
                  Enviado em {file.uploadedAt.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>
          </div>

          {/* Delete button */}
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(file.id, file.name)}
            className={cn(
              "flex-shrink-0 w-10 h-10 p-0",
              "bg-red-500/10 border border-red-500/20",
              "hover:bg-red-500/20 hover:border-red-500/40",
              "hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]",
              "transition-all duration-300",
              "opacity-0 group-hover:opacity-100",
              "translate-x-2 group-hover:translate-x-0"
            )}
          >
            <Trash2 className="w-4 h-4 text-red-400" />
          </Button>
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-purple/20 blur-sm"></div>
      </div>
    </div>
  );
};

export default FileCard;


import React, { useState, useCallback } from 'react';
import { Upload, FileText, FileSpreadsheet, File } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DragDropZoneProps {
  onFilesSelected: (files: File[]) => void;
  uploading: boolean;
  className?: string;
}

const DragDropZone = ({ onFilesSelected, uploading, className }: DragDropZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFilesSelected(files);
    }
  }, [onFilesSelected]);

  const supportedFormats = [
    { icon: FileText, label: 'PDF', color: 'text-red-400' },
    { icon: FileText, label: 'DOCX', color: 'text-blue-400' },
    { icon: FileSpreadsheet, label: 'XLS', color: 'text-green-400' },
    { icon: FileSpreadsheet, label: 'XLSX', color: 'text-emerald-400' },
  ];

  return (
    <div
      className={cn(
        "relative group transition-all duration-500",
        "border-2 border-dashed rounded-3xl p-12",
        "bg-gradient-to-br from-slate-900/50 to-gray-900/30",
        "backdrop-blur-xl border-gray-600/30",
        isDragOver
          ? "border-neon-green shadow-[0_0_30px_rgba(34,197,94,0.5)] bg-neon-green/5"
          : "hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
        uploading && "pointer-events-none opacity-75",
        className
      )}
      onDrag={handleDrag}
      onDragStart={handleDrag}
      onDragEnd={handleDrag}
      onDragOver={handleDrag}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDrop={handleDrop}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-4 left-4 w-2 h-2 bg-neon-green rounded-full animate-float opacity-60"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-neon-blue rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-neon-purple rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-12 right-6 w-1 h-1 bg-neon-pink rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Robotic hand icon with particles */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r from-neon-green/20 to-neon-blue/20",
            "animate-pulse"
          )}></div>
          <Upload className={cn(
            "w-12 h-12 z-10 transition-all duration-300",
            isDragOver 
              ? "text-neon-green scale-110" 
              : "text-gray-300 group-hover:text-neon-blue group-hover:scale-105"
          )} />
          
          {/* Animated particles around icon */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-neon-green rounded-full animate-ping opacity-60"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neon-blue rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Main text */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Arraste arquivos ou clique para fazer upload
          </h3>
          <p className="text-gray-400 text-lg">
            Suporte para PDF, DOCX e planilhas
          </p>
        </div>

        {/* Supported formats */}
        <div className="flex justify-center gap-6">
          {supportedFormats.map((format, index) => (
            <div
              key={format.label}
              className={cn(
                "group/format flex flex-col items-center gap-2 p-3 rounded-xl",
                "bg-gray-800/30 border border-gray-700/30",
                "hover:bg-gray-700/40 hover:border-gray-600/40",
                "transition-all duration-300 cursor-pointer",
                "hover:scale-105 hover:shadow-lg"
              )}
            >
              <format.icon className={cn(
                "w-6 h-6 transition-colors duration-300",
                format.color,
                "group-hover/format:scale-110"
              )} />
              <span className="text-xs text-gray-400 group-hover/format:text-gray-300">
                {format.label}
              </span>
            </div>
          ))}
        </div>

        {/* Upload status */}
        {uploading && (
          <div className="flex items-center justify-center gap-3 text-neon-green">
            <div className="w-4 h-4 border-2 border-neon-green/30 border-t-neon-green rounded-full animate-spin"></div>
            <span className="text-sm font-medium">Processando arquivo...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDropZone;

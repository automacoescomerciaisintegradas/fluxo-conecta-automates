
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import DragDropZone from './DragDropZone';
import FileCard from './FileCard';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

const N8NUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const allowedTypes = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  const handleFileSelect = (files: File[]) => {
    files.forEach(file => {
      if (!allowedTypes.includes(file.type)) {
        toast({
          variant: "destructive",
          title: (
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Formato não suportado
            </div>
          ),
          description: `O arquivo ${file.name} não é um formato válido. Use PDF, DOCX ou planilhas (XLS, XLSX).`,
          className: "bg-red-900/50 border-red-500/50 backdrop-blur-xl"
        });
        return;
      }
      uploadFile(file);
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    
    handleFileSelect(Array.from(files));
    
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const uploadFile = async (file: File) => {
    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Simular progresso do upload com efeito mais fluido
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 150);

      const response = await fetch('https://n8n.iau2.com.br/webhook/subir-arquivos', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (response.ok) {
        const newFile: UploadedFile = {
          id: Date.now().toString(),
          name: file.name,
          size: file.size,
          type: file.type,
          uploadedAt: new Date()
        };

        setUploadedFiles(prev => [...prev, newFile]);

        toast({
          title: (
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Upload concluído com sucesso!
            </div>
          ),
          description: `O arquivo ${file.name} foi enviado com sucesso.`,
          className: "bg-green-900/50 border-green-500/50 backdrop-blur-xl text-green-100"
        });
      } else {
        throw new Error('Falha no upload');
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Erro no upload
          </div>
        ),
        description: `Não foi possível enviar o arquivo ${file.name}. Tente novamente.`,
        className: "bg-red-900/50 border-red-500/50 backdrop-blur-xl"
      });
    } finally {
      setUploading(false);
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  const deleteFile = async (fileId: string, fileName: string) => {
    try {
      const response = await fetch('https://n8n.iau2.com.br/webhook/deletar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileId, fileName }),
      });

      if (response.ok) {
        setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
        toast({
          title: (
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Arquivo excluído
            </div>
          ),
          description: `O arquivo ${fileName} foi removido com sucesso.`,
          className: "bg-blue-900/50 border-blue-500/50 backdrop-blur-xl text-blue-100"
        });
      } else {
        throw new Error('Falha na exclusão');
      }
    } catch (error) {
      console.error('Erro ao excluir arquivo:', error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Erro ao excluir
          </div>
        ),
        description: `Não foi possível excluir o arquivo ${fileName}. Tente novamente.`,
        className: "bg-red-900/50 border-red-500/50 backdrop-blur-xl"
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center">
            <Upload className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Sistema de Upload N8N
          </h3>
        </div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Faça upload de arquivos PDF, DOCX e planilhas com nossa tecnologia de automação avançada
        </p>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.xls,.xlsx"
        onChange={handleInputChange}
        className="hidden"
      />

      {/* Drag & Drop Zone */}
      <DragDropZone 
        onFilesSelected={handleFileSelect}
        uploading={uploading}
      />

      {/* Upload Button */}
      <div className="flex justify-center">
        <Button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className={cn(
            "px-8 py-4 text-lg font-semibold rounded-2xl",
            "bg-gradient-to-r from-neon-green to-neon-blue",
            "hover:from-neon-green/80 hover:to-neon-blue/80",
            "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
            "hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]",
            "transition-all duration-300 hover:scale-105",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          )}
        >
          <Upload className="h-5 w-5 mr-3" />
          {uploading ? 'Enviando...' : 'Selecionar Arquivos'}
        </Button>
      </div>

      {/* Progress Bar */}
      {uploading && (
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300 font-medium">Enviando arquivo...</span>
            <span className="text-neon-green font-bold">{Math.round(uploadProgress)}%</span>
          </div>
          <div className="relative">
            <Progress 
              value={uploadProgress} 
              className={cn(
                "h-3 bg-gray-800/50 border border-gray-700/30 rounded-full overflow-hidden",
                "shadow-inner"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-100">
              Arquivos Enviados ({uploadedFiles.length})
            </h4>
          </div>
          
          <div className="grid gap-4">
            {uploadedFiles.map((file, index) => (
              <div
                key={file.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FileCard file={file} onDelete={deleteFile} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {uploadedFiles.length === 0 && !uploading && (
        <Alert className="bg-gray-800/30 border-gray-700/30 backdrop-blur-xl">
          <AlertCircle className="h-4 w-4 text-gray-400" />
          <AlertDescription className="text-gray-400">
            Nenhum arquivo foi enviado ainda. Use a área de upload acima para começar.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default N8NUpload;


import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import DragDropZone from './DragDropZone';
import FileCard from './FileCard';
import FloatingParticles from './FloatingParticles';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

const N8NUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFilesSelected = useCallback(async (selectedFiles: File[]) => {
    setUploading(true);
    setUploadProgress(0);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        
        // Simulate upload progress
        for (let progress = 0; progress <= 100; progress += 10) {
          setUploadProgress(progress);
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        const uploadedFile: UploadedFile = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          uploadedAt: new Date(),
        };

        setFiles(prev => [...prev, uploadedFile]);
        
        toast({
          title: "Upload concluído",
          description: `${file.name} foi enviado com sucesso!`,
        });
      }
    } catch (error) {
      toast({
        title: "Erro no upload",
        description: "Ocorreu um erro ao enviar o arquivo.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  }, []);

  const handleFileDelete = useCallback((fileId: string, fileName: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
    toast({
      title: "Arquivo removido",
      description: `${fileName} foi removido da lista.`,
    });
  }, []);

  const handleProcessFiles = useCallback(() => {
    if (files.length === 0) {
      toast({
        title: "Nenhum arquivo",
        description: "Adicione arquivos antes de processar.",
        variant: "destructive",
      });
      return;
    }

    // Simulate processing
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Processamento concluído",
        description: `${files.length} arquivo(s) processado(s) com sucesso!`,
      });
    }, 3000);
  }, [files.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative z-10 container-section mx-auto pt-32 pb-20">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-neon-green to-neon-blue text-white border-none px-6 py-2 text-sm font-medium">
            🤖 Automação Inteligente
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Upload de Arquivos
            <span className="block bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent">
              N8N Integration
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Faça upload dos seus arquivos e deixe nossa IA processar automaticamente usando fluxos N8N personalizados.
          </p>
        </div>

        {/* Main Upload Area */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-xl border-gray-700/30 shadow-2xl">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl text-white">Área de Upload</CardTitle>
              <CardDescription className="text-gray-400">
                Arraste seus arquivos ou clique para selecionar
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <DragDropZone onFilesSelected={handleFilesSelected} uploading={uploading} />
              
              {uploading && (
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Enviando arquivo...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress 
                    value={uploadProgress} 
                    className="h-2 bg-gray-700/50"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Files List */}
          {files.length > 0 && (
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-xl border-gray-700/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  📁 Arquivos Enviados ({files.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {files.map((file) => (
                    <FileCard
                      key={file.id}
                      file={file}
                      onDelete={handleFileDelete}
                    />
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700/30">
                  <Button
                    onClick={handleProcessFiles}
                    disabled={uploading}
                    className={cn(
                      "w-full h-14 text-lg font-semibold",
                      "bg-gradient-to-r from-neon-green to-neon-blue",
                      "hover:from-neon-green/80 hover:to-neon-blue/80",
                      "hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]",
                      "transition-all duration-300",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  >
                    {uploading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processando...
                      </div>
                    ) : (
                      "⚡ Processar com N8N"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default N8NUpload;

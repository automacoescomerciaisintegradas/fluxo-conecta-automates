
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Upload, Trash2 } from 'lucide-react';

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

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      if (!allowedTypes.includes(file.type)) {
        toast({
          variant: "destructive",
          title: "Formato não suportado",
          description: `O arquivo ${file.name} não é um formato válido. Use PDF, DOCX ou planilhas (XLS, XLSX).`
        });
        return;
      }

      uploadFile(file);
    });

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

      // Simular progresso do upload
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

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
          title: "Upload concluído com sucesso!",
          description: `O arquivo ${file.name} foi enviado com sucesso.`,
          className: "bg-green-50 border-green-200 text-green-800"
        });
      } else {
        throw new Error('Falha no upload');
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      toast({
        variant: "destructive",
        title: "Erro no upload",
        description: `Não foi possível enviar o arquivo ${file.name}. Tente novamente.`
      });
    } finally {
      setUploading(false);
      setUploadProgress(0);
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
          title: "Arquivo excluído",
          description: `O arquivo ${fileName} foi removido com sucesso.`,
          className: "bg-blue-50 border-blue-200 text-blue-800"
        });
      } else {
        throw new Error('Falha na exclusão');
      }
    } catch (error) {
      console.error('Erro ao excluir arquivo:', error);
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: `Não foi possível excluir o arquivo ${fileName}. Tente novamente.`
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Upload de Arquivos N8N
        </h3>
        <p className="text-gray-600 text-sm">
          Faça upload de arquivos PDF, DOCX e planilhas (XLS, XLSX)
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.xls,.xlsx"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="mb-6">
        <Button
          onClick={triggerFileInput}
          disabled={uploading}
          className="bg-automation-blue hover:bg-automation-dark-blue text-white"
        >
          <Upload className="h-4 w-4 mr-2" />
          {uploading ? 'Enviando...' : 'Selecionar Arquivos'}
        </Button>
      </div>

      {uploading && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Enviando arquivo...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-800">Arquivos Enviados:</h4>
          {uploadedFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
            >
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)} • Enviado em {file.uploadedAt.toLocaleString('pt-BR')}
                </p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteFile(file.id, file.name)}
                className="ml-3"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {uploadedFiles.length === 0 && !uploading && (
        <Alert>
          <AlertDescription>
            Nenhum arquivo foi enviado ainda. Clique em "Selecionar Arquivos" para começar.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default N8NUpload;

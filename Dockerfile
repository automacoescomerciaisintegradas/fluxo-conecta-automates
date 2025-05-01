
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci

# Copia os arquivos do projeto
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Stage 2: Imagem de produção
FROM nginx:alpine

# Copia os arquivos compilados da aplicação para o servidor nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia a configuração personalizada do nginx (se necessário)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]

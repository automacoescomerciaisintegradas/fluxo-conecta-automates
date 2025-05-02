
# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./
# Verificar se o package-lock.json existe antes de copiar
COPY package-lock.json* ./
# Use npm ci se o package-lock.json existir, caso contrário use npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create nginx.conf if it doesn't exist in the repo
# Nota: Esta etapa não é necessária pois já temos o arquivo nginx.conf

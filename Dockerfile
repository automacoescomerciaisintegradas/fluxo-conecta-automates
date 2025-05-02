
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

# Stage 2: Setup server
FROM node:20-alpine

# Install serve to run the application
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/dist /app

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 CMD wget -q --spider http://localhost:80 || exit 1

# Command to run the application
CMD ["serve", "-s", ".", "-l", "80"]

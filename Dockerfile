# Multi-stage build: Frontend + Nginx
FROM node:18-alpine AS build-step

WORKDIR /frontend/

# Copiar arquivos de dependências
COPY ./package.json ./
COPY ./package-lock.json ./

# Instalar dependências
RUN npm ci --only=production=false --silent

# Copiar código fonte
COPY . ./

# Argumentos de build para variáveis de ambiente
ARG VITE_API_URL
ARG VITE_BEARER_TOKEN

# Definir variáveis de ambiente
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BEARER_TOKEN=$VITE_BEARER_TOKEN

# Configurar Node.js para baixo uso de memória
ENV NODE_OPTIONS="--max-old-space-size=256"

# Build da aplicação
RUN npm run build:low-mem

# Estágio final: Nginx
FROM nginx:alpine

# Copiar arquivos buildados do frontend
COPY --from=build-step /frontend/dist /usr/share/nginx/html

# Copiar configuração do nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expor portas
EXPOSE 80 443

# Comando padrão do nginx
CMD ["nginx", "-g", "daemon off;"]

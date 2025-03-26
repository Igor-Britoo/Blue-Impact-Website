# Etapa 1: Build da aplicação React com Vite
FROM node:18 AS build

WORKDIR /app

# Copiar os arquivos de projeto e instalar dependências
COPY package.json package-lock.json ./
RUN npm install

# Copiar os arquivos da aplicação
COPY . .

# Definir argumentos de build
ARG VITE_API_URL
ARG VITE_BEARER_TOKEN

# Construir a aplicação para produção
RUN npm run build

# Etapa 2: Configuração do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos estáticos do build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar o arquivo de configuração customizado do Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 para que o Nginx possa servir o conteúdo
EXPOSE 80

# Iniciar o Nginx no modo de primeiro plano
CMD ["nginx", "-g", "daemon off;"]
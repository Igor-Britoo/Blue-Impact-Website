# Etapa 1: Construção do projeto
FROM node:18 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

# Execute o build do projeto
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM nginx:alpine

# Copie os arquivos estáticos do build para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copie a configuração do bloco do servidor para o diretório conf.d
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Crie o diretório de cache com a propriedade e permissões apropriadas
RUN mkdir -p /var/cache/nginx && \
chown -R nginx:nginx /var/cache/nginx && \
chmod -R 755 /var/cache/nginx

# Exponha as portas 80 e 443
EXPOSE 80
EXPOSE 443

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
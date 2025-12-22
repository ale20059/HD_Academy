# Etapa 1: Construcción (opcional si ya tienes dist/)
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# Etapa 2: Servir
FROM nginx:alpine

# Copia los archivos construidos
COPY dist /usr/share/nginx/html

# Configuración Nginx para SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
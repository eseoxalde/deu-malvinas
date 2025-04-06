# Usa una imagen base con Node.js
FROM node:20-alpine

# Crea y se posiciona en el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias
RUN npm install

# Construye el proyecto para producción
RUN npm run build

# Expone el puerto donde corre Next.js
EXPOSE 3000

# Comando para correr la app en producción
CMD ["npm", "start"]

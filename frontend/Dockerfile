# STAGE 1: Build the React/Vite app
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# This creates the /dist folder with your optimized code
RUN npm run build

# STAGE 2: Serve the files with a lightweight Nginx container
#FROM nginx:stable-alpine
# Copy the built files from the 'build-stage' to Nginx's public folder
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

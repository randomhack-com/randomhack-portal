# Stage 1: Build the React application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or bun.lockb if using Bun)
# Using package-lock.json based on file list
COPY package.json package-lock.json ./

# Install dependencies using npm ci for clean installs
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
# The build script is 'vite build' from package.json
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.27-alpine AS final

# Copy the build output from the build stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
# We will create this file next: nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
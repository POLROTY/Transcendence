# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Add the angular CLI
RUN npm install -g @angular/cli@latest

# Add the package.json file
COPY package.json package.json

# Install all the dependencies
RUN npm install

# Add the angular source code
COPY src /app/src

# Add the configuration files
COPY angular.json .
COPY tsconfig.json .
COPY src/tsconfig.app.json src/

# Generate the build of the application
RUN ng build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.17.1-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/frontend /usr/share/nginx/html/

# Copy the nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
CMD ["nginx", "-g", "daemon off;"]

# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

# Build the app
RUN yarn build

# Install serve to serve static files
RUN yarn global add serve

# Serve the app
CMD ["serve", "-s", "dist", "-l", "3000"]

# Use an official Node.js image as a base
FROM node:18-alpine as BUILD_IMAGE

# Set the working directory
WORKDIR /app

# Copy package.json first and install dependencies
COPY package.json . 
RUN rm -rf node_modules/.vite
RUN npm install
# Copy the rest of your application code
COPY . .

# Expose the correct port
EXPOSE 3300 

# Start the app
CMD ["npm", "run", "preview"]

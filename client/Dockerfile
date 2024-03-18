# Build the client
FROM node:20.11.1
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

# Expose the port for the server
EXPOSE 3000

# Start the server
CMD ["npm", "run", "dev"]
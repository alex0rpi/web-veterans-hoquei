# Build the server
FROM node:20.11.1
RUN npm install -g nodemon
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

# Expose the port for the server
EXPOSE 4000

# Start the server
CMD ["npm", "run", "dev"]
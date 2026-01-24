# 1. Using an official and lightweight as the name suggests Node.js runtime as a parent image
FROM node:18-slim

# 2. Installing Compilers
# install g++ and python3
RUN apt-get update && apt-get install -y \
    g++ \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# 3. Setting the working directory inside the container
WORKDIR /app

# 4. Copy package.json and install dependencies
# We do this BEFORE copying the rest of the code to cache layers (faster builds)
COPY package*.json ./
RUN npm install

# 5. Copy the rest of your app source code
COPY . .

# 6. Create the temp folder so that the server doesn't crash trying to find it
RUN mkdir -p temp

# 7. Expose the port the app runs on
EXPOSE 5050

# 8. Define the command to run your app (container)
CMD ["node", "server.js"]
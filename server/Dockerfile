# Use the official Ubuntu base image
FROM ubuntu:latest

# Install necessary dependencies (including Node.js and npm)
RUN apt-get update -y && \
    apt-get install -y wget gnupg curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update -y && \
    apt-get install -y google-chrome-stable

# Set the working directory to /server
WORKDIR /server

# Copy your app
COPY . .

# Install Node.js 
RUN npm install

# Start the app
CMD ["npm", "start"]

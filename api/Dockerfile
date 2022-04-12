FROM node:17-alpine
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY index.js .
# Expose port
EXPOSE 4000
ENV PORT=4000
# Start the app
CMD [ "npm", "start" ]
FROM node:17-alpine AS builder
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . /app
# Expose port
RUN npm run build

FROM caddy:2.4.6-alpine
RUN mkdir -p /var/www/html
COPY --from=builder /app/build /var/www/html
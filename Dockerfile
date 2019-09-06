FROM node:10-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g gatsby-cli
RUN npm install
COPY . .
RUN gatsby build

FROM nginx:1.13-alpine AS production
WORKDIR /usr/share/nginx/html
COPY --from=build /app/public ./

EXPOSE 80
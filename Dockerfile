FROM node:10.15.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g gatsby-cli
RUN npm install
COPY . .
RUN gatsby build

FROM nginx:1.13.0-alpine
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/public ./

EXPOSE 80
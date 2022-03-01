FROM node:alpine

WORKDIR /user/src/app

COPY package*.json ./
RUN npm install

COPY . .
# EXPOSE 80

CMD [ "node","server.js" ]
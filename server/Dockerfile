FROM node:slim

WORKDIR /usr/src

COPY ./package.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD [ "server.js" ]
FROM node:16.18-alpine

RUN mkdir ./app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/



CMD ["npm", "start"]

EXPOSE 3000
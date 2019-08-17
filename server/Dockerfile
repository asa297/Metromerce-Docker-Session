FROM node:10-alpine as builder

WORKDIR '/usr/app'

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
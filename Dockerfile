FROM node:18-alpine3.14

RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]

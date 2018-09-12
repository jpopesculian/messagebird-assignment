FROM node:latest

RUN npm install -g forever

RUN mkdir /src
WORKDIR /src

COPY ./package.json ./package.json

RUN npm install

COPY ./postcss.config.js ./postcss.config.js
COPY ./webpack.config.js ./webpack.config.js
COPY ./public ./public
COPY ./client ./client

RUN npm run build

COPY ./index.js ./index.js
COPY ./server ./server

ENV MONGO_DB="messagebird"

EXPOSE 3000
CMD ["node", "index.js"]

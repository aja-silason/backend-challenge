FROM node:20.11.0-alpine3.19

WORKDIR /app

RUN mkdir -p /app

COPY package.json /app

RUN npm cache clean \
    rm -rf node_modules \
    npm install --frozen-lockfile

COPY . /app

EXPOSE 3003

ENTRYPOINT ["npm", "run", "estacionamento:dev"]
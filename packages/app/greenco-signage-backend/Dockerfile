FROM node:16-alpine

RUN apk update && apk add openssl && apk add bash

WORKDIR /app

COPY . . 

RUN yarn

RUN yarn build

CMD ["node", "./dist/index.js"]

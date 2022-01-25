FROM node:16-alpine

RUN apk update && apk add openssl

WORKDIR /app

COPY . . 

RUN yarn

RUN yarn build

RUN npm i -g forever

CMD ["forever", "start", "./dist/index.js"]

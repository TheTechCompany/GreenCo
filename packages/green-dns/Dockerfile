FROM node:16-alpine

RUN apk update && apk add openssl

WORKDIR /app

COPY . . 

RUN yarn

RUN yarn build

CMD ["./dist/cli.js", "--port", "53"]

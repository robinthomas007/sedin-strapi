FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY . ./

RUN apk update --no-cache \
    && apk add --no-cache git make clang build-base python3 aws-cli

RUN npm install \
    && npm install -g mysql2 \
    && npm install mysql2 --save \
    && npm run build

ENTRYPOINT ["/bin/sh", "/app/startup.sh"]
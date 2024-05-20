FROM railsfactory/node-base:20.11.0v1

WORKDIR /app

COPY . ./

RUN apt-get update

RUN npm install \
    && npm install mysql2 \
    && npm run build

ENTRYPOINT ["/bin/sh", "/app/startup.sh"]
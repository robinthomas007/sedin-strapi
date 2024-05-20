FROM ${BASE_IMAGE}/node-20.11.0:v1

WORKDIR /app

COPY . ./

RUN apt-get update

RUN npm install \
    && npm install mysql2 \
    && npm run build

ENTRYPOINT ["/bin/sh", "/app/startup.sh"]
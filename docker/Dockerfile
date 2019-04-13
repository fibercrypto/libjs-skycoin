FROM node

WORKDIR /skyapi-typescript

COPY lib/skyapi/axios/ ./lib/skyapi/axios/

COPY lib/skyapi/node/ ./lib/skyapi/node/

RUN (cd ./lib/skyapi/axios/ && npm install && npm run build )

RUN (cd ./lib/skyapi/node/ && npm install && npm run build )

RUN apt-get update -y && apt-get install vim -y && apt-get install nano -y

CMD ["bash"]

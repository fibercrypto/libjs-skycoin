FROM node

WORKDIR /skyapi-typescript

COPY ../dev/lib/skyapi/typescript-axios/package*.json ./skyapi-axios/

COPY ../dev/lib/skyapi/typescript-node/package*.json ./skyapi-node/

RUN (cd ./skyapi-axios/ && npm install)

RUN (cd ./skyapi-node/ && npm install)

COPY ../dev/lib/skyapi/typescript-axios/* ./skyapi-axios/

COPY ../dev/lib/skyapi/typescript-node/* ./skyapi-node/

RUN (cd ./skyapi-axios/ && npm run build)

RUN (cd ./skyapi-node/ && npm run build)

CMD ["bash"]

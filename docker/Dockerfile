FROM node

WORKDIR /skyapi-typescript

COPY dev/lib/skyapi/typescript-axios/package.json ./dev/lib/skyapi/typescript-axios/

COPY dev/lib/skyapi/typescript-node/package.json ./dev/lib/skyapi/typescript-node/

RUN (cd ./dev/lib/skyapi/typescript-axios/ && npm install )

RUN (cd ./dev/lib/skyapi/typescript-node/ && npm install )

COPY dev/lib/skyapi/typescript-axios/ ./dev/lib/skyapi/typescript-axios/

COPY dev/lib/skyapi/typescript-node/ ./dev/lib/skyapi/typescript-node/

RUN (cd ./dev/lib/skyapi/typescript-axios/ && npm run build )

RUN (cd ./dev/lib/skyapi/typescript-node/ && npm run build )

RUN apt-get update -y && apt-get install vim -y && apt-get install nano -y

CMD ["bash"]

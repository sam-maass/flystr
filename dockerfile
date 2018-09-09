FROM node:alpine
WORKDIR /tmp
COPY package.json /tmp/
COPY package-lock.json /tmp/
COPY /src /tmp/src
COPY /server /tmp/server
COPY /public /tmp/public
RUN apk add --no-cache --virtual .gyp python make g++ && npm install
CMD npm run start-server



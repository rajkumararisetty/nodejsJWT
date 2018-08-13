FROM node:10.4.1-alpine

RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app
ADD . ./server
RUN cd server && \
    npm install
WORKDIR /usr/src/app/server

CMD [ "npm", "start" ]

EXPOSE 50001

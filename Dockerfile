# module install
FROM node:16-alpine as install-stage
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install


# build
FROM node:16-alpine as build-stage

COPY --from=install-stage /app/node_modules/ /app/node_modules

WORKDIR /app

COPY . .

RUN npm run build


# server
FROM node:16-alpine

COPY --from=build-stage /app/build/ /app/build

RUN npm install -g serve

EXPOSE 3000

# start app
CMD [ "serve", "-s", "/app/build", "-l", "3000" ]
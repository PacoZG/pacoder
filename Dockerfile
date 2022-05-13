FROM node:16

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN npm ci && CI=true npm test && npm run build

CMD [ "npm", "start" ]

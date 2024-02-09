FROM node:20.0.0
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY --chown=node:node . .
EXPOSE 3333
CMD [ "node", "src/index.js" ]
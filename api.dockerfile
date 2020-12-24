FROM node:14
WORKDIR /home/node/app

COPY package* ./
COPY packages/api/ ./

RUN npm install -g @nestjs/cli
RUN npm install
RUN npm run build

CMD ["npm","run","start:prod"]
FROM node:14 AS builder
WORKDIR /home/node/build

COPY packages/ui/ ./

RUN npm install -g @angular/cli
RUN npm install; npm run build

FROM nginx:latest
WORKDIR /home/nginx/app

COPY --from=builder /home/node/build/dist .

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
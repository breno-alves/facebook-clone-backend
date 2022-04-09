# BUILDER STATE

FROM node:16 as builder

WORKDIR /usr/app

COPY . .

RUN npm i

RUN npm run clean

RUN npm run build

RUN npm run copy-files

RUN rm -rf node_modules

RUN rm -rf /usr/src

# FINAL STATE

FROM node:16-alpine3.12

COPY --from=builder /usr/app /usr/app

WORKDIR /usr/app

RUN apk update

RUN npm i --only=production

CMD ["npm", "run", "start"]

EXPOSE 3000

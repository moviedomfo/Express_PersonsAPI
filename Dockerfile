# BUILD STEP
FROM node:20.10.0-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
# RUN npm ci --production

COPY . .

RUN npm run builddocker

# CREATE IMAGE STEP
FROM node:20.10.0-alpine
LABEL maintainer="@moviedo"

WORKDIR /app

# copia los archivos compilados y node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json .
COPY --from=build /app/node_modules ./node_modules

ADD ./.env.production ./.env

ENV NODE_ENV production

# EXPOSE ${PORT}
CMD  node dist/index.js






FROM node:16-alpine as builder
WORKDIR /code/
ADD app/package-lock.json .
ADD app/package.json .
RUN npm ci
ADD app/ .
RUN npm run build

FROM devforth/spa-to-http:latest
COPY --from=builder /code/dist/ . 
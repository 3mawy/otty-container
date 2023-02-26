FROM node:16 as build-stage
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app/ .
RUN npm run build

FROM nginx as production-stage
EXPOSE 3000
RUN mkdir /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /app
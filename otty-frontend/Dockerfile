FROM node
WORKDIR /app
COPY ./app/package.json .
RUN npm i
COPY ./app .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3001
CMD ["npm", "run", "dev"]
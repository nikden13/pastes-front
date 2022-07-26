FROM node:12.22.9

WORKDIR /app

COPY ./ .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]
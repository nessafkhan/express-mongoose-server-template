FROM node:slim

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start"]

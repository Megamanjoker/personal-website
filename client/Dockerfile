# Dockerfile for React client

# Build react client
FROM node:latest

# Working directory be app
WORKDIR /usr/src/app

COPY ./ ./

###  Installing dependencies

RUN npm install
RUN npm run build

EXPOSE 80

CMD ["npm","start"]

# Write a Dockerfile
FROM node:lts-stretch
RUN apt-get -y update
RUN apt-get install -y git
RUN git clone https://github.com/iTowns/itowns.git  --branch  v2.39.0
WORKDIR /itowns
RUN npm install
RUN npm run prepare
EXPOSE 8080
CMD [ "npm", "start", "--", "--host=0.0.0.0" ]
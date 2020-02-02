FROM node:11-alpine
ENV TZ=Asia/Shanghai

WORKDIR /usr/src/app

COPY .npmrc package.json yarn.lock /usr/src/app/

RUN yarn install
COPY . /usr/src/app/
RUN  yarn build
CMD ["yarn", "start"]

FROM node:12.18

RUN apt-get update && apt-get install -y vim

ENV APP_ROOT /app_name
WORKDIR $APP_ROOT

COPY package.json ./sample
ADD ./package.json $APP_ROOT/package.json
RUN yarn install
ADD . $APP_ROOT

CMD ["yarn", "start"]


FROM node:8.15.0-jessie

RUN apt-get update && apt-get upgrade -y

RUN apt-get install mongodb-clients -y
RUN npm install -g gulp
COPY scripts/wait.sh /app/wait.sh

ENTRYPOINT ["/app/wait.sh"]

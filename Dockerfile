FROM node:8.15.0-stretch

# Update OS
RUN apt-get update && apt-get upgrade -y

# Install MongoDB CLI
RUN apt-get install mongodb-clients -y

# Update NPM and yarn to latest versions
RUN npm i npm@latest yarn@latest -g

# Install Heroku CLI
RUN npm install -g heroku

# Install Gulp Build Tool
RUN npm install -g gulp

COPY scripts/wait.sh /app/wait.sh

ENTRYPOINT ["/app/wait.sh"]

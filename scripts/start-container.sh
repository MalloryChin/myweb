#!/bin/bash
touch ../data/root/.gitconfig
touch ../data/root/.git-credentials
touch ../data/root/.netrc

docker-compose build
docker-compose up

docker stop web2
docker stop mongodb

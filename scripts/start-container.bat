type NUL > ..\data\root\.gitconfig
type NUL > ..\data\root\.git-credentials
type NUL > ..\data\root\.netrc

docker-compose build
docker-compose up

docker stop web2
docker stop mongodb

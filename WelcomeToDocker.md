# Welcome to Docker

This is a repo for new users getting started with Docker.

You can try it out using the following command.
```
docker run -d -p 8088:80 --name codename-cv .
```
And open `http://localhost:8088` in your browser.

# Building

Maintainers should see [MAINTAINERS.md](MAINTAINERS.md).

Build and run:
```
docker build -t codename-cv .
docker run -d -p 8088:3000 --name codename-cv codename-cv
```
Open `http://localhost:8088` in your browser.

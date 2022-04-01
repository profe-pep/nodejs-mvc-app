# nodejs-mvc-app
Node.js app with routing (web and api) and MVC pattern inspired by Laravel.

## packages
* [dotenv](https://www.npmjs.com/package/dotenv): Read .env file
* [express](https://www.npmjs.com/package/express): Web framework
* [express-session](https://www.npmjs.com/package/express-session): Session middleware for Express
* [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling
* [nodemon](https://www.npmjs.com/package/nodemon):  Monitor changes and automatically restart server
* [pino-http](https://www.npmjs.com/package/pino-http): HTTP logger
* [pino-pretty](https://www.npmjs.com/package/pino-pretty): Prettify logs

## especific web packages

* [nunjucks](https://www.npmjs.com/package/nunjucks): HTML template engine
* [serve-favicon](https://www.npmjs.com/package/serve-favicon): Show favicon at browser

## especific api packages

* None

# docker deployment

Build image

```
docker build --build-arg user=<your_machine_username> . -t <your_dockerhub_username>/nodejs-mvc-app
docker images
```

Run container

```
docker run --name nodejs-mvc-app -p <your_machine_port>:8080 -d <your_dockerhub_username>/nodejs-mvc-app
docker ps
```

Test container

```
curl -i localhost:<your_machine_port>
```

Container terminal

```
docker ps
docker exec -it <container_id> bash
```

Stop container

```
docker ps
docker kill <container_id>
```

Delete image

```
docker images
docker image rm [-f] <image_id>
```
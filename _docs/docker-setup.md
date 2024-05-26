### setup docker container

```bash
docker network create calculation-microservices-network

docker image build --tag raghugannaram/multiplication-service:1.0.0 ./

docker container run \
> --detach \
> --name multiplication-service \
> --publish 9003:9003 \
> --network calculation-microservices-network \
> --env LOG_LEVEL=debug \
> --mount type=bind,source="$(pwd)/Docker/logs",target=/app/logs \
> raghugannaram/multiplication-service:1.0.0

```


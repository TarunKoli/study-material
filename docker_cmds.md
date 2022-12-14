# Docker Cli Commands

- ### Docker command to view all the images

```js
docker images
OR
docker images -a
```

<hr />

- ### Docker command to view all the containers

```js
docker ps -a
```

<hr />

- ### Docker command to view running containers

```js
docker ps
```

<hr />

- ### Docker command to view all the volumes

```js
docker volume ls
```

<hr />

- ### Docker command to delete a single image

```js
docker rmi [img_id]
```

<hr />

- ### Docker command to remove all the images

```js
docker rmi $(docker images -a -q)
```

<hr />

- ### Docker command to remove all the untagged images

```js
docker image prune
```

<hr />

- ### Docker command to remove a container

```js
docker rm [container_id]
```

<hr />

- ### Docker command to remove all the containers

```js
docker rm $(docker ps -a -q)
```

<hr />

- ### Docker command to remove all the volumes

```js
docker volume prune
```

<hr />

- ### Docker command to remove everything [images, containers, volumes]

```js
docker system prune
```

<hr />

- ### Docker command to create a container

```js
docker create [img_id, img_name]
```

<hr />

- ### Docker command to start a container

```js
docker start [container_id]
```

<hr />

- ### Docker Command to create as well as start a container simultaneously (along with the logs)

```js
docker run [img_id,img_name]
```

<hr />

- ### Docker command to get the logs from a running container

```js
docker logs [container_id]
```

<hr />

- ### Docker command to stop a running container

```js
docker stop [container_id, container_name] (Preffered)

docker kill [container_id, container_name]
```

<hr />

- ### Docker command to execute a command inside a running container

```js
docker exec -it [container_id] [command]
```

<hr />

- ### Docker command to open a shell(cmd) inside a running container

```js
docker exec -it [container_id] sh
```

<hr />

- ### Docker command to pull an image from dockerhub

```js
docker pull [image_name]
```

<hr />

- ### Docker command to build and tag a custom image

```js
docker build -t docker_id/name:latest .
```

> [.] means the context folder in which the docker file is present, i.e path

<hr />

- ### Docker port mapping , moving traffic outside of container to inside of container

```js
docker run -p 5000:3000 [img_id]
```

> [5000] port outside of container<br /> >[3000] posrt inside of container<br />
> All the traffic recieved at port 5000 will be redirected to port 3000 inside the container

<hr />

- ### Naming a docker container during creation

```js
docker run --name [container_name] [img_id]
```

<hr />

- ### Passing enviornment variables

```js
docker run -e var1=value var2=value [img_id]
```

<hr />

- ### Setting volumes (foreg: Bind mount)

```js
docker run -v ${pwd}:/app [img_id] (Powershell)
docker run -v %cd%:/app [img_id] (command-line)
docker run -v $(pwd):/app [img_id] (ubuntu-Linux)
```

<hr />

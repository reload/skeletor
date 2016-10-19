# Docker

This directory should contain all relevant files for the Docker environment.

## Structure
If you need to mount files/directories inside a container, then each container should be represented with as a directory.

_This is an example of the structure for a docker project with a three containers (web, db, fpm) that all require a very important `.txt` file._

```
|-- docker
|   |-- web
|       |-- web-file.txt
|   |-- db
|       |-- db-file.txt
|   |-- fpm
|       |-- fpm-file.txt
|-- docker-compose.yml
```

### Shared containers
If you have a shared container, that only contains volumes, so other contains can share this with `volumes_from`, then you should place all of the files/directories in a directory with the same name as the shared container.

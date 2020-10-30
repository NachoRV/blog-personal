
## ¿Qué es un DockerFile?

Un Dockerfile es un archivo de texto plano que contiene una serie de instrucciones necesarias para crear una imagen que, posteriormente, se convertirá en una sola aplicación utilizada para un determinado propósito.

Docker puede construir imágenes automáticamente leyendo las instrucciones de un Dockerfile.

Ejemplo de Dockerfile:

```sh
# Descarga la imagen de Ubuntu 18.04
FROM ubuntu:18.04
# Actualiza la imagen base de Ubuntu 18.04
RUN apt-get update
# Instalar Git
RUN apt-get -qqy install git
```

### Imágenes a medida con Dockerfile

Docker puede construir imágenes automáticamente, leyendo las instrucciones indicadas en un fichero Dockerfile. 
Los pasos principales para crear una imagen a partir de un fichero Dockerfile son:
  - Crear un nuevo directorio que contenga el fichero y otros ficheros que fuesen necesarios para crear la imagen.
  - Crear el contenido.
  - Construir la imagen mediante el comando docker build.

La sintaxis del comando es:
```sh
docker build [opciones] RUTA | URL | -
```
Las opciones más comunes son:

-   -t, nombre [:etiqueta]. Crea una imagen con el nombre y la etiqueta especificada a partir de las instrucciones indicadas en el fichero. Es recomendable asignar siempre un nombre a las imágenes que creamos.
-   –no-cache. Establecida por defecto, Docker guarda en memoria caché las acciones realizadas recientemente. Si se diese el caso de que ejecutamos un docker build varias veces, Docker comprobará si el fichero contiene las mismas instrucciones y, en caso afirmativo, no generará una nueva imagen. Para generar una nueva imagen omitiendo la memoria caché utilizaremos siempre esta opción.
-   –pull. También por defecto. Docker solo descargará la imagen especificada en la expresión FROM si no existe en el repositorio local. Para forzar que descargue la nueva versión de la imagen utilizaremos esta opción.
-   –quiet. Por defecto, se muestra todo el proceso de creación, los comandos ejecutados y su salida. Utilizando esta opción solo mostrará el identificador de la imagen creada

### Para ver la imagenes 
```sh
docker images
```

Para crear el contenedor:

```sh
docker run -dti --name containerlaboratorio2a 5a00a1083e8d
```

Siendo 5a00a1083e8d el IMAGE ID de nuestra imagen. Con la opción --name asignamos un nombre a nuestro contenedor.

Ejecutamos docker ps para verificar que el contenedor está levantado

```sh
docker ps
```
Por último, vamos a verificar que el contenedor está arrancado y tiene git instalado. Para ello ejecutamos la siguiente instrucción, que nos abrirá un bash sobre nuestro contenedor:

```sh
docker exec -i -t containerlaboratorio2a /bin/bash
```

## Instrucciones Dockerfile

Aunque en esta URL disponemos de detalle sobre las distintas instrucciones y mejores prácticas para escribir Dockerfiles aquí mostramos un resumen con las más importantes.


### Instrucciones Dockerfile
Aunque en esta [URL](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) disponemos de detalle sobre las distintas instrucciones y mejores prácticas para escribir Dockerfiles aquí mostramos un resumen con las más importantes.

FROM: Indica la imagen base sobre la que se construirá la aplicación dentro del contenedor. Todos los Dockerfiles comienzan con un FROM.
```sh
FROM  <imagen>
FROM  <imagen>:<tag>
```

RUN: Nos permite ejecutar comandos en el contenedor.
```sh
RUN  <comando>
```
CMD: Se encarga de pasar valores por defecto a un contenedor. Entre estos valores se pueden pasar ejecutables.
```sh
CMD [“ejecutable”, “parametro1”, “parametro2”, …]

CMD [“parametro1”, “parametro2”, ….]
```
La segunda opción se utiliza para pasar parámetros al comando EntryPoint.

A diferencia del comando RUN,   que se utiliza para crear la imagen de un contenedor, CMD se ejecuta una vez que el contenedor se ha inicializado.

ENTRYPOINT: Se utiliza cuando se quiere ejecutar un ejecutable en el contenedor en su arranque.
```sh
ENTRYPOINT "comando" "parametro1" "parametro2"
```
ENV: Establece variables de entorno dentro del contenedor.
```sh
ENV  <clave> <valor>
```
ADD: Esta instrucción se encarga de copiar los ficheros y directorios desde una ubicación especificada y los agrega al sistema de ficheros del contenedor.

```sh
ADD <fuente> <destino>
```

MAINTAINER: Nos permite configurar datos del autor del Dockerfile, principalmente su nombre y su dirección de correo electrónico.
```sh
MAINTANER <nombre> <"correo">
```
LABEL: Nos permite añadir metadatos a nuestra imagen.
```sh
LABEL <clave> <valor>
```


COPY: La instrucción copia ficheros y directorios de un path origen y los añade a un path destino dentro del contenedor.
```sh
COPY <origen> <destino>
```

EXPOSE: Indica los puertos en los que va a escuchar el contenedor. Con ello, los puertos no serán accesibles desde el host, para esto será necesario utilizar la exposición de puertos mediante la opción -p de docker run.
```sh
EXPOSE <puerto>
```
VOLUME: Esta instrucción crea un volumen como punto de montaje dentro del contenedor y es visible desde el host anfitrión.
```sh
VOLUME <path>
```
WORKDIR: Establece el directorio por defecto para la ejecución de las instrucciones RUN, CMD, ENTRYPOINT, COPY y ADD siguientes en el Dockerfile.
```sh
WORKDIR <path>
```
USER: Por defecto, todas las acciones son realizadas por el usuario root. Aquí podemos indicar un usuario diferente.
```sh
USER <usuario>
```
### Docker run
En esta [URL](https://docs.docker.com/engine/reference/commandline/run/) podemos encontrar detalle de todas las opciones disponibles para la ejecución de un docker run.


```sh
docker run [OPCIONES] IMAGEN [COMANDO] [ARGUMENTOS...]
```

```sh
docker run -d -p 8080:8080 --name "spring_boot_app" -e "SPRING_PROFILES_ACTIVE=local" -t spring_boot_app
```

1. **run**: permite lanzar una imagen de docker. En este caso,  maven:3.3-jdk-8 https://hub.docker.com/_/maven, que nos permite ejecutar maven para contruir y levantar nuestro microservicio.
2. **-d**: permite lanzar el contenedor en background.
3. **-p**: el formato es host_port:container_port. En este caso, el puerto 8080 de la máquina lo redirijimos al puerto 8080 del contenedor (por el que está escuchando el microservicio).
4. **--name**: permite dar un nombre identificativo al contenedor. 
5. **-e**: nos permite pasar variables de entorno. En este caso, para que el microservicio se ejecute con el perfil *local*. El perfil *db* es que nos permite usar la base de datos que se verá en el [lab-04](../../lab-04/README.md).
6. **-p**: el formato es host_port:container_port. En este caso, el puerto 8080 de la máquina lo redirijimos al puerto 8080 del contenedor (por el que está escuchando el microservicio).
7. **-p**: el formato es host_port:container_port. En este caso, el puerto 8080 de la máquina lo redirijimos al puerto 8080 del contenedor (por el que está escuchando el microservicio).
8. **-t**: para indicar qué imagen queremos ejecutar

para lanzar una shell
```sh
docker exec -it postgres-openathon sh
```

Para más información, mirar https://docs.docker.com/engine/reference/commandline/run/.
# Volumenes
## ¿Cómo funciona?
Podemos crear y administrar volúmenes fuera del ámbito de un contenedor. El comando `docker volume` proporciona los subcomandos:
- `create`: crea un nuevo volumen
- `inspect`: muestra información detallada sobre uno o más volumenes
- `ls`: lista los volúmenes en el Docker host
- `rm`: elimina un volumen

Pongamos en práctica estos comandos y desde la una nueva instancia de la máquina virtual que hemos usado en laboratorios anteriores vamos a ejecutar los comandos anteriores.

**Crear un volumen**
```sh
# volumen create: comando creación de volumen
# mi-volumen: nombre del volumen
docker volume create mi-volumen
```
> La consola mostrará el nombre del volumen creado
```sh
mi-volumen
```

**Listar volúmenes**
```sh
# volume ls: comando listar volúmenes
docker volume ls
```
> Podemos comprobar el volumen mi-volumen listado
```sh
DRIVER              VOLUME NAME
local               mi-volumen
```

**Inspeccionar un volumen**
```sh
# volume inspect: comando mostar información detallada de un volumen
# mi-volumen: nombre de volumen
docker volume inspect mi-volumen
```

> Veremos las propiedades del volumen y el punto de montaje dónde está almacenado en el host `/var/lib/docker/volumes/mi-volumen/_data`

```sh 
[
    {
        "CreatedAt": "2019-11-23T18:03:18Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/mi-volumen/_data",
        "Name": "mi-volumen",
        "Options": {},
        "Scope": "local"
    }
]
```

**Eliminar un volumen**
```sh
# volume rm: comando borrar volumen
# mi-volumen: nombre de volumen
docker volume rm mi-volumen
```
> La consola mostrará el nombre del volumen borrado
```sh
mi-volumen
```

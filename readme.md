# Project Commerce express

API Gateway to take all messages from any publisher and send to corespondents kafka topic

## Table of Contents

- [Intro](#intro)
- [Push message to kafka topic](#Push-message-to-kafka-topic)
- [Database](#mongodb-hosted)
- [Run locally](#run-locally)
- [Dockerize](#dockerize)
- [Generating data model](#models-generation)

## Intro

This API provide person demo

## Run locally

[1] Firs clone the repo locally
[2] run -> yarn install
[3] run dev command

    ```
        yarn dev
    ```

[4] Additionally if you have dockerhub installed. We leave you a dockerfil ready!!
pleasse ref to [Dockerize](#dockerize)

# Microservices

## Dockerize

You can use docker to deploy the api server. In this releasse we leave a dockerfile and a docker compose ready to use

- generate image

```
    docker image build -t moviedomfo/express_comerce .
```

- run container

```
    docker run -d -p 3026:3016 --name express_comerce moviedomfo/express_comerce
```

## Run the application using Docker Compose

```
    docker-compose up -d
```

- which volume:
  First you need to create the maping in thge docker compose files for each container that you need
  volumes:

  - /e/volumens/express/orders:/app/files

  run container maping to comerce_files created volume

- Navigate to this url to check the if correctly docker container is running
  <http://localhost:3008>

# swagger & tsoa

Para documentar los controllers debemos usar tsoa
"build-tsoa": "tsoa spec-and-routes" genera las Rutas en base a los controllers documentados con los docoradores tsoa
"predev": "npm run swagger", genera el json para que swagger levante la pagina con la documentacion

Hay que ver que tenemos configurado en ./tsoa.json para ver el destino de la transpilacion de las rutas

<!-- # RegisterRoutes

To generate Routes class run
`yarn build-tsoa` -->

## Important packages used in this app

sequelize, tedious,

## models generation

We have hused sequalize-auto to generate all models from dexisting database

1. first of all you must install :

```
  yarn add sequelize-auto
```

2. To generate database run the following cmd

   - For typescript js

     ```
       yarn sequelize-auto -h 201.234.32.170 -d [name] -u sport -x [pw] -p 7780  --dialect mssql -c ./src/seq_db/config -o ./src/seq_db/models
     ```

   - For typescript

      -v, --views              Include database views in generated models  [boolean]
      --useDefine              Use `sequelize.define` instead of `init` for es6|esm|ts


     ```
     yarn sequelize-auto -h 201.234.32.170 -d [name] -u sport -x [pw] -p 7780  --dialect mssql  -o ./src/infra/db/seq-models -l ts -views
     ```

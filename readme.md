<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
<p align="center">Projeto desenvolvido para a vaga de BackEnd na STETMENT MC</p>
<p align="center">

## Technologias durante o desenvolvimento do projeto

    TypeScript
    NestJS
    MySql
    TypeORM

## Instale o Pacote

Para poder usar o projecto precisa ter o Docker instalado em sua máquina, para no minimo rodar o banco de dados. Caso tenha, siga os seguintes passo:

```bash
$ npm install
# ou se tiver problemas com versões use
$ npm install --force
 
# ou usar o:
$ yarn install
  
```
  
## Rodar o app
```bash
$ npm run estacionamento:dev
  
# ou usar o:
$ yarn estacionamento:dev
```
  
## Caso tenha o Docker para montar a imagem use:
```bash
$ docker run --name challenge-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=SUA_PASS -d mysql
$ docker exec -it challenge-db mysql -u root -p
```

## Para acesso à URL
http://localhost:3003/ para developer

## Para acesso à URL Swagger
http://localhost:8080/api/docs
  
## Swagger
swagger.json << Arquivo encontra-se na Raiz
  
```

## Contacto
WhatsApp: +244 044006009
ananiasjaimegusto@gmail.com

## Sobre

Autor - Anania Augusto
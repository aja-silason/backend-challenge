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
  

### Requisitos do teste "Funcionalidades" 🛠️

- **Estabelecimento:** CRUD;
  Criar um cadastro da empresa com os campos:
  - Nome;
  - Endereço;
  - Telefone;
  - Quantidade de vagas para motos;
  - Quantidade de vagas para carros.

  **Todos** os campos são de preenchimento obrigatório.

- **Veículos:** CRUD;
  Criar um cadastro de veículos com os campos:
  - Marca;
  - Modelo;
  - Cor;
  - Placa;
  - Tipo.

  **Todos** os campos são de preenchimento obrigatório.

- **Controle de entrada e saída de veículos.**

---

### Sobre os Requisitos 💻

- A aplicação foi desenvolvida usando **NestJs**;
- Banco de dados relacional ou não relacional (MySQL);
- Persistência de dados no banco deverá ser feita utilizando:
  - **ORMs como TypeORM**;
- O retorno da API no formato **REST**;
- As requisições são feitas com os verbos **GET, POST, PUT, PATCH e DELETE**, conforme a melhor prática;
- Arquitetura de software baseada em **Clean Architecture**;
---

### Pontos Extras ⭐

- Práticas de modelagem de projeto;
- Configuração da API com o **Swagger**;
- Disponibilizar ponto na aplicação para extração de relatórios da aplicação com as seguintes informações:
  - Sumário da quantidade de entrada e saída;
  - Sumário da quantidade de entrada e saída de veículos por hora;
- Publicação da aplicação em algum servidor;
- Utilização de **Docker** para containerização da aplicação no caso do banco de dados.

## Contacto
WhatsApp: +244 944996909
ananiasjaimegusto@gmail.com

## Sobre

Autor - Anania Augusto
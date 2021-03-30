# Happy

<img align="center" src=".github/capa_happy.png">

<br>
<br>

<p>
  <img src="https://img.shields.io/badge/made%20by-Wanderson%20Oliveira-04D361?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/wanderson1873/happy?color=04D361&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/wanderson1873/happy?color=04D361&style=flat-square">
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-04D361?style=flat-square">
  </a>
  <a href="https://github.com/wanderson1873/happy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wanderson1873/happy?color=04D361&style=flat-square">
  </a>
</p>

<img align="right" src="web/src/images/landing.svg?raw=true" width="35%" alt="Happy">

## Tópicos 

[Sobre o Happy](#sobre-o-happy)

[Tecnologias](#tecnologias)

[Instalação e uso](#instalação-e-uso)

[Licença](#licença)

<br>

## Sobre o Happy

Happy é uma aplicação Web com o objetivo de conectar Pessoas a Orfanatos infantis. Essa aplicação oferece aos Orfanatos a possibilidade de cadastrar seus respectivos dados, tais como: nome, endereço, descrição, horário de funcionamento e imagens do local. As pessoas tem a possibilidade de visualizar no map os endereços e detalhes dos orfanatos.

O Happy foi desenvolvida durante a #NLW3 (Next Level Week 3º Edição) da [Rocketseat](https://rocketseat.com.br/).

<br>

<p align="center">
  <img src=".github/device.png" alt="Página inicial">
</p>

## Tecnologias

- **Web**
  - [ReactJS](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Leaflet](https://leafletjs.com/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [Open Street Map](https://www.openstreetmap.org/) ou [Mapbox](https://www.mapbox.com/)

- **Backend**
  - [Node.JS](https://nodejs.org/en/)
  - [SQLite3](https://www.sqlite.org/index.html)
  - [Express](https://expressjs.com/) 
  - [Typeorm](https://typeorm.io/)
  - [Yup](https://github.com/jquense/yup)

<br>

## Instalação e Uso
Cada parte do projeto tem suas dependências e é necessário instala-las individualmente antes da execução, para isso certifique-se de que tenha [NPM](https://www.npmjs.com/) ou [YARN](https://yarnpkg.com/) instalado em seu ambiente, além, é claro, o repositório clonado em seu ambiente.


Clone o repositório com:

```bash
> git clone https://github.com/wanderon1873/happy.git
```

As demonstrações utilizam **YARN** por padronização, mas, caso use **NPM**, basta substituir onde estiver escrito `yarn` por `npm`.

### Instalando dependências do projeto web:

```bash
> cd happy/web
> yarn install
```

Para executar o projeto **web** completo é necessário ter um **token** de autenticação da API do Mapbox. Acesse sua conta no [site](https://www.mapbox.com/) e crie um token para ser utilizado no projeto. Com o token em mãos, crie um arquivo `.env` e coloque seu token como valor da chave `REACT_APP_MAP_TOKEN`.

Exemplo:

```text
REACT_APP_MAP_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Agora starte o projeto em seu ambiente com:

```bash
> yarn start
```

Acesse: [`http://127.0.0.1:3000/`](http://127.0.0.1:3000/) para visualizar.

<br>

### Instalando dependências do projeto backend:

```bash
> cd happy/backend
> yarn install
```

Para executar o projeto **backend** é necessário criar o banco de dados com todas as tabelas utilizadas, para isso, use no diretório correspondente:

```bash
> yarn typeorm migration:run
> yarn dev
```

Acesse: [`http://127.0.0.1:3333/`](http://127.0.0.1:3333/) para visualizar.


<br>

## Licença
<a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-04D361?style=flat-square">
</a>

<br>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Wanderson Oliveira](https://github.com/wanderson1873)

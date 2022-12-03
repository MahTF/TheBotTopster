<p align="center">
  <img
  alt="Imagem com fundo preto onde há uma interação de conversa entre dois usuários, o primeiro usuário possue os símbolos de 'Emissor', 'Inscrito no canal' (onde é uma pessoa com a mão no rosto colorido e com uma estrela amarela em cima) e um 'Glitchcon 2020' (onde é um dinossauro azul num fundo rosa), tendo seu nick, MahTF, escrito na cor ciano, falando Top e a outra interação é o bot com as insígnias de 'Moderador' (onde é uma espada branca no fundo verde) e 'Inscrito no canal' (onde é uma pessoa em preto e branco fazendo um sinal de coração com a mão), o nome do bot em laranja, TheBotTopster, dizendo: 'Sabe o que seria top agora? Uma coquinha gelada.'"
  src="ExempleImage.png"
  width="300"
  />
</p>
<h1 align="center">
  TheBotTopster
</h1>

<!-- Badges -->
<p align="center">
  <!-- if your  -->
  <a href="https://github.com/mahtf/TheBotTopster/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-1EAE72.svg" />
  </a>

  <!-- License -->
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-1EAE72.svg" />
  </a>

  <!-- codefactor -->
  <a href="https://www.codefactor.io/repository/github/mahtf/TheBotTopster" alt="CodeFactor">
    <img src="https://www.codefactor.io/repository/github/mahtf/TheBotTopster/badge" />
  </a>

  <br/>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mahtf/TheBotTopster?color=blue">

  <!-- GitHub repo size -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/mahtf/TheBotTopster">

  <!-- Social -->  
  <a href="https://github.com/mahtf/TheBotTopster/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/mahtf/TheBotTopster?style=social">
  </a>

  <!-- more badges here -> https://gist.github.com/tterb/982ae14a9307b80117dbf49f624ce0e8 -->
</p>

<!-- summary -->
<p align="center">
  <a href="#clipboard-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-o-que-contém">O que contém?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

> o bot mais top da twitch

## :clipboard: Descrição
Este projeto foi desenvolvido para ser um chat bot na [Twitch](https://twitch.tv) com a finalidade de aprender sobre como funcionam os chatbots.

O tema do bot é uma brincadeira com os amigos do desenvolvedor. 

## :rocket: Iniciando

1. Clone o repositório 

  - Usando Git
```shell
  git clone https://github.com/mahtf/TheBotTopster.git
```
  - Usando Github CLI
```shell
  gh repo clone mahtf/TheBotTopster
```
  > :bulb: ou como preferir

2. Instalação

  - Usando Yarn
  ```shell
  yarn
  ```

3. Execução

  - No ambiente de desenvolvimento
  ```shell
  yarn dev
  ```
  - Em produção
  ```shell
  yarn build
  yarn start
  ```
  > Este projeto está hospedado pelo [Heroku](heroku.com), neste caso, o comando de build não é necessário.


## 🧐 O que contém?

### :building_construction: Tecnologias
- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org)

### :lipstick: Ferramentas de Linter
- [EsLint](<https://eslint.org>)

### :package: Pacotes
- [dotenv](https://www.npmjs.com/package/dotenv)
- [tmi.js](https://www.npmjs.com/package/tmi.js)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

### Uma olhada rápida no que está dentro de `./src`.

    ./src
     ├── commands
     ├── config
     ├── utils

1.  **`commands`**: nesta pasta está os comandos que o bot irá executar.

2.  **`config`**: nesta pasta está as configurações iniciais do bot, como sua autenticação e em quais canais deve aparecer.

3.  **`utils`**: aqui está as respostas que o bot dá ao ser acionado.
  > O arquivo [pokedex.json](/src/utils/pokedex.json) foi cedido por [Don_Bael](https://twitch.tv/don_bael)

## :memo: Licença

Este projeto está sob a licença do MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Build with 💙 By [Marcelo T. Ferreira](https://github.com/MahTF/)

Based on the [readme template](https://gist.github.com/henry-ns/a00234378353d9ca43e1bfe043202192) by [Henrique Miranda](http://thehenry.dev/)
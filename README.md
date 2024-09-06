# Projeto Doação Presente

<img src="https://res.cloudinary.com/dnuhmdhlu/image/upload/v1725639057/xc05prn8r9wi8y31rmvz.png" width="350"/>

## Sobre o Projeto:
Doação Presente é um sistema que idealizei e desenvolvi para facilitar e incentivar a doação de sangue de forma mais organizada e recorrente. O projeto permite o cadastro de doadores e o registro de suas doações, enviando lembretes quando estiverem aptos a doar novamente. Além disso, promove o engajamento, incentivando os doadores a convidarem amigos para participar. O objetivo é garantir que os bancos de sangue estejam sempre abastecidos e que as doações sejam realizadas de forma contínua, ajudando a salvar vidas.

## Índice:
* [Instalação e configuração](#instalação-e-configuração)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Estrutura do projeto](#estrutura-do-projeto)

## Tecnologias utilizadas:
* TypeScript
* NestJS
* Postgres
* TypeORM
* Swagger
* Render

## Estrutura do projeto:
A estrutura do projeto está organizada da seguinte maneira:
```
doacao-presente
├── src
│   ├── donations
│   │   ├── entities
│   │   │   └── donation.entity.ts
│   │   ├── donations.controller.ts
│   │   ├── donations.module.ts
│   │   ├── donations.service.ts
│   ├── donors
│   │   ├── dto
│   │   │   └── create-donor.dto.ts
│   │   ├── entities
│   │   │   └── donor.entity.ts
│   │   ├── donors.controller.ts
│   │   ├── donors.module.ts
│   │   ├── donors.service.ts
│   ├── interfaces
│   │   ├── donations.interface.ts
│   │   ├── donor.interface.ts
│   ├── mail
│   │   ├── dto
│   │   │   └── create-mail.dto.ts
│   │   ├── utils
│   │   │   └── gerente.schema.ts
│   │   ├── mail.controller.ts
│   │   ├── mail.module.ts
│   │   ├── mail.service.ts
│   ├── repository
│   │   ├── donation.repository.ts
│   │   ├── donor.repository.ts
│   │   ├── repository.module.ts
│   ├── app.module.ts
│   ├── main.ts
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
```



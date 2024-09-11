# Projeto Doação Presente

<img src="https://res.cloudinary.com/dnuhmdhlu/image/upload/v1725639057/xc05prn8r9wi8y31rmvz.png" width="350"/>

## Sobre o Projeto:
Doação Presente é um sistema que idealizei e desenvolvi para facilitar e incentivar a doação de sangue de forma mais organizada e recorrente. O projeto permite o cadastro de doadores e o registro de suas doações, enviando lembretes quando estiverem aptos a doar novamente. Além disso, promove o engajamento, incentivando os doadores a convidarem amigos para participar. O objetivo é garantir que os bancos de sangue estejam sempre abastecidos e que as doações sejam realizadas de forma contínua, ajudando a salvar vidas.

## Índice:
* [Instalação e configuração](#instalação-e-configuração)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Estrutura do projeto](#estrutura-do-projeto)
* [Funcionalidades e endpoints](#funcionalidades-e-endpoints)

## Instalação e configuração:
### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- NodeJS 
- Npm
- PostgreSQL

### Agora é só seguir os seguintes passos:
1. Faça o fork desse repositório para o seu perfil do Github.
2. Clone o seu repositório em sua máquina:
```bash
git clone git@github.com:seu-perfil/doacao-presente.git
```
3. Acesse a pasta do projeto:
```bash
cd doacao-presente
```
4. Instale as dependências:
```bash
npm install
```
5. Renomeie o arquivo `.env.example` para `.env`, ou crie um novo arquivo `.env` na raiz do projeto. Em seguida, configure as variáveis de ambiente necessárias conforme especificado no arquivo exemplo.

```javascript
EMAIL_USER=seu-email@example.com
EMAIL_PASS=sua-senha-do-email

DB_USER=seu-usuario-do-banco
DB_HOST=endereco-do-servidor-do-banco
DB_NAME=nome-do-banco
DB_PASSWORD=sua-senha-do-banco
DB_PORT=porta-do-banco
```

⚠️ **importante:** Este projeto utiliza a biblioteca `Nodemailer` para o envio de e-mails reais. Portanto, ao configurar as variáveis de ambiente, você deve fornecer um endereço de Gmail válido na variável `EMAIL_USER`. Esse e-mail será usado para enviar mensagens reais do sistema. Já o valor da variável `EMAIL_PASS` não deve ser sua senha real do Gmail. Em vez disso, utilize uma "senha de aplicativo" gerada pelo Google, garantindo que o envio de e-mails ocorra de forma segura, sem expor sua senha pessoal. A "senha de aplicativo" permite que seu sistema autentique e envie e-mails reais através do Nodemailer. [Neste link](https://snov.io/knowledgebase/br/como-criar-e-usar-a-senha-do-aplicativo-gmail/#:~:text=Para%20criar%20uma%20senha%20de,(ativada)%20antes%20de%20continuar.) está um passo a passo de como configurar uma senha de aplicativo.


## Tecnologias utilizadas:
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeORM](https://img.shields.io/badge/typeorm-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

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
│   ├── utils
│   │   ├── description-api.message.ts
│   │   ├── mail.message.ts
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
### Descrição dos principais diretórios e arquivos:
* `donations`: Gerencia as funcionalidades relacionadas às doações, contendo entidades, controlador, serviço e módulo.
* `donors`: Responsável pelos doadores, incluindo DTOs, entidades, controlador, serviço e módulo.
* `interfaces`: Define interfaces para tipagem forte dos dados relacionados a doações e doadores.
* `mail`: Contém funcionalidades de envio de e-mails, com DTO, controlador, serviço e módulo.
* `repository`: Contém os repositórios que lidam diretamente com o banco de dados para doações e doadores.
* `utils`: Funções e mensagens de utilidade geral, usadas em diferentes partes do projeto.
* `app.module.ts`: Módulo principal da aplicação que importa todos os outros módulos e configura o TypeORM para gerenciar a conexão com o banco de dados PostgreSQL.
* `main.ts`: Ponto de entrada da aplicação.

## Funcionalidades e endpoints:
Essa aplicação tem as seguintes funcionaidades:
* Cadastrar doadores
* Registrar as doações de sangue
* Enviar email referente ao lembrete da proxima doação

### Doadores (donors)
- `GET /donors`: Retorna todos os doadores.
- `GET /donors/:id`: Retorna um doador pelo ID.
- `POST /donors`: Cadastra um novo doador.
- `PUT /donors/update/:id`: Atualiza um doador pelo ID.
- `DELETE /donors/:id`: Deleta um doador pelo ID.

### Doações (donations)
- `GET /donations`: Retorna todos as doações.
- `GET /donations/:id`: Retorna uma doação pelo ID.
- `GET /donations/donor/:id`: Retorna todas as doações de um doador pelo ID.
- `POST /donations/:donorId`: Registra uma nova doação.
- `DELETE /donations/:id`: Remove uma doação pelo ID.

### Email (mail)
- `POST /mail/send-email`: Envia um e-mail ao doador para lembrá-lo da sua próxima doação.



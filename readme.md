# Progressão Acadêmica

## Tecnologias

---

- NodeJs
- Typescript
- Postgres
- Knex
- Docker

## How To

---

Para executar o projeto é necessário que tenha instalado em sua máquina o Docker e o NodeJS.

- Crie um arquivo novo `.env` contendo:

```
ENVIRONMENT=local
DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=example
DB_PORT=5432
DB_LOGGING=true
PORT=8000
JWT_SECRET=boloDeMulango
SMTP_TRANSPORT_URL=
```

- Após clonar o projeto em sua máquina, é necessário primeiramente realizar a instalação das dependências:
 ```
 npm i // ou npm ci
 ```

- Realizaremos a subida do banco:
 ```
 npm run postgres:start
 npm run database:create
 ```

- Após isso já é possível rodarmos o projeto através do:

```
npm run dev
```

## Sobre

---

[...] WIP
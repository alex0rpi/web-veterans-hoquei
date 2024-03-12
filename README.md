# Fullstask blog website with user auth

This is my ongoing project for the Rink Hockey veterans association.

- The frontend is being made in React-Vite with Router, Context and Tailwind.

- As for the backend initially it was bootstrapped with Fastify-CLI, which I am learning. However I found the authentication to be a bit cumbersome and while I'm investigating how to implement a robust authentication system, I decided in the meantime to switch to the KOA framework.<br>
  [Fastify CLI to start a project](https://www.npmjs.com/package/fastify-cli). <br>
  [Fastify documentation here](https://www.fastify.io/docs/latest/).<br>
  [KOA Documentation here](https://koajs.com/#)

The backend covers a CRUD API for chapters as well as an almost fully fledged user auth and login system, including email confirmation.

## Env variables setup

Please use the .env-template as a guide to create your .env file and fulfill the required infos.

## Backend start up:

- Install dependencies

```Bash
cd server
npm i
```

- Initiate the database:

```bash
cd back/
docker compose up -d
```

- Seed the database with data, if any. In any case run this command:

```bash
npx prisma migrate reset --force
```

- Then run the server

```Bash
npm run dev
```

- When necessary, e.g. modifying the schema.prisma file, make database migration.

```Bash
npx prisma migrate dev --name migrationName
```

- To stop the server just ctrl+C
- Then stop the container running the postgre database server

```Bash
docker compose down
```

## Frontend start up:

- Install dependencies

```Bash
cd client
npm i
```

- Start client server

```Bash
npm run dev
```

- Initiate tailwind watch in case you want to mess with it

```Bash
npm run tailwind:watch
```

## Dockerize frontend react

1. Write a dockerfile to specify how the Docker Image should be built.
2. Create a .dockerignore file to tell docker to ignore the node modules folder when building the image.
3. Edit our docker compose file to add on this react project service.

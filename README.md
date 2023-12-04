# Fullstask blog website with user auth

This is my ongoing project for the Rink Hockey veterans association.

- The frontend is being made in React-Vite with Router, Context and Tailwind.

- The backend is bootstrapped with Fastify-CLI. I am still learning it, so server development is going slower than I would like but anyway, I think its worth it.<br>
  [Fastify CLI to start a project](https://www.npmjs.com/package/fastify-cli). <br>
  [Fastify documentation here](https://www.fastify.io/docs/latest/).

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

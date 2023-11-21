# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

This project was bootstrapped with Fastify-CLI.

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).

## For backend:

- Make database migration if necessary

```Bash
npx prisma migrate dev --name migrationName
```

- Initiate the database:

```bash
cd back/
docker compose up
```

- Then run the server

```Bash
npm run dev
```

- To stop the server just ctrl+C
- Then stop the container running the postgre database server

```Bash
docker compose down
```

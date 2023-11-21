# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

This project was bootstrapped with Fastify-CLI.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).

For backend:

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

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

For developers:

- To initiate the database:

```bash
    docker run -d \
        --name postgres \
        -e POSTGRES_USER=$DB_USER \
         -e POSTGRES_PASSWORD=$DB_PASS \
        -e POSTGRES_DB=$DB_NAME \
        -v "/$(pwd)/config/init.sql:/docker-entrypoint-initdb.d/init.sql" \
        -p $DB_PORT:5432 \
        postgres:latest
```

- Then run the server

```Bash
npm run dev
```

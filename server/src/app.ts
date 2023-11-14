import 'dotenv/config';
import fastify from 'fastify';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import { userRoutes } from './routes/users/userRoutes';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Pass --options via CLI arguments in command to enable these options.
// export const options = {};
const app = fastify();

app.get('/health-check', async function () {
  return { status: 'ok' };
});

async function main() {
  app.register(userRoutes, { prefix: '/api/users' });

  const PORT = 8000;
  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server ready at port ${PORT}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();

// export default async function (fastify, opts) {
// Place here your custom code!
// for (const schema of Object.values(userSchemas)) {
// fastify.addSchema(schema); // this will make the schemas available throughout the app.
// }

/*   fastify.register(Swagger, {
    openapi: {
      info: {
        title: 'Veterans Hoquei API',
        description: 'The API behind the website of the Veterans Hoquei.',
        version: '1.0',
      },
    },
    refResolver: {
      // so our $refs are properly named, instead of def-0, def-1
      buildLocalReference: (json, baseUri, fragment, i) => {
        return json.$id || `def-i{i}`;
      },
    },
  }); */

/*   fastify.register(SwaggerUI, {
    routePrefix: '/api-docs',
  }); */

// ########################################################
// Do not touch the following lines

// This loads all plugins defined in plugins
// those should be support plugins that are reused
// through your application
/*   fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  }); */

// This loads all plugins defined in routes
// define your routes in one of these
/*   fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  }); */
// }

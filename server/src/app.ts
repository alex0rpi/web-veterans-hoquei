import 'dotenv/config';
import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fjwt from '@fastify/jwt';
import fcookie, { FastifyCookieOptions } from '@fastify/cookie';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import { userRoutes } from './routes/users/userRoutes';
import { userSchemas } from './schemas/userRoutesSchema';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Pass --options via CLI arguments in command to enable these options.
// export const options = {};
export const app = Fastify();

app.register(fjwt, {
  secret: process.env.JWT_SECRET as string,
});

app.decorate('authenticate', async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    await req.jwtVerify();
  } catch (error) {
    return reply.send(error);
  }
});

app.register(fcookie, {
  secret: process.env.COOKIE_SECRET as string,
  hook: 'onRequest',
  parseOptions: {},
}) as FastifyCookieOptions;

app.get('/health-check', async function () {
  return { status: 'ok' };
});

async function main() {
  // Register endpoint schemas before the routes.

  for (const schema of userSchemas) {
    app.addSchema(schema);
  }

  // Register routes.
  app.register(userRoutes, { prefix: '/users' });

  const PORT = 4000;
  try {
    await app.listen({ port: PORT, host: 'localhost' });
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

import { FastifyInstance } from 'fastify';
import { registerUser } from '../../controllers/users';
import { $ref } from '../../schemas/userSchema';

/* const registerUserOpts = {
  schema: {
    description: 'Register a new user',
    body: $ref('createUserSchema'),
    response: {
      204: {
        description: 'Successful user registration',
      },
      400: {
        description: 'Invalid user registration',
      },
      500: {
        description: 'Server error',
      },
    },
  },
  //   handler: registerUser,
}; */
/* const loginUserOpts = {
  schema: {
    description: 'Login a user',
    body: $ref('loginUserSchema'),
    response: {
      204: {
        description: 'Successful user login',
      },
      400: {
        description: 'Invalid user credentials',
      },
      500: {
        description: 'Server error',
      },
    },
  },
  //   handler: loginUser,
}; */

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/register', registerUser);

  // app.post('/', loginUserOpts, loginUser);

  //   fastify.get('/', getUsersOpts, getUsers)
}

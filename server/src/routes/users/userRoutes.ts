import { FastifyInstance } from 'fastify';
import { registerUser, loginUser } from '../../controllers/users';
import { $ref } from '../../schemas/userRoutesSchema';

const registerUserOpts = {
  schema: {
    description: 'Register a new user',
    body: $ref('userRegisterSchema'),
    response: {
      204: {
        type: 'object',
        properties: {},
        description: 'Successful user registration',
      },
      400: {
        type: 'object',
        properties: {},
        description: 'Invalid user registration',
      },
      500: {
        type: 'object',
        properties: {},
        description: 'Server error',
      },
    },
  },
  //   handler: registerUser,
};

const loginUserOpts = {
  schema: {
    description: 'Login a user',
    body: $ref('userLoginSchema'),
    response: {
      200: $ref('userLoginResponse'),
      400: {
        type: 'object',
        properties: {},
        description: 'Invalid user credentials',
      },
      500: {
        type: 'object',
        properties: {},
        description: 'Server error',
      },
    },
  },
};

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/register', registerUserOpts, registerUser);
  fastify.post('/login', loginUserOpts, loginUser);
}

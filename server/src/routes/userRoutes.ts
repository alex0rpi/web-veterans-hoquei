import { FastifyInstance } from 'fastify';
import { register, login, logout } from '../controllers/users';
import { $ref } from '../schemas/schemas';

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
      200: $ref('userLoginResponse'), // here we stipulate the response object returned by the controller to follow userLoginResponse schema
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

const logoutUserOpts = {
  schema: {
    description: 'Logout a user',
    response: {
      204: {
        type: 'object',
        properties: {},
        description: 'Successful user logout',
      },
    },
  },
};

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/register', registerUserOpts, register);
  fastify.post('/login', loginUserOpts, login);
  fastify.get('/logout', logoutUserOpts, logout);
}

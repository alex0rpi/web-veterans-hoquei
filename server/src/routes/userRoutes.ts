import Router from '@koa/router';
import { z } from 'zod';
import { getMe, login, logout, register } from '../controllers';
// import { validate, authenticate } from '../middleware';
// import { userLoginSchema, userRegisterSchema } from '../schemas';
import { pathRoot } from './routes';

const userRouter = new Router();

userRouter.prefix(pathRoot.v1.users);

// userRouter.post('/register', validate(z.object({ body: userRegisterSchema })), register);
userRouter.post('/register', register);

// userRouter.post('/login', validate(z.object({ body: userLoginSchema })), login);
userRouter.post('/login', login);

userRouter.get('/logout', logout);

userRouter.get('/me', getMe);

export { userRouter };

import Router from '@koa/router';
import { z } from 'zod';
import { getMe, login, logout, modifyUser, register } from '../controllers';
import { authenticate, validate } from '../middleware';
import { userLoginSchema, userRegisterSchema } from '../schemas';
import { pathRoot } from './allRoutes';

const userRouter = new Router();

userRouter.prefix(pathRoot.v1.users);

userRouter.post('/register', validate(z.object({ body: userRegisterSchema })), register);

userRouter.post('/login', validate(z.object({ body: userLoginSchema })), login);

userRouter.get('/logout', logout);

userRouter.get('/me', authenticate, getMe);

userRouter.patch('/me', authenticate, modifyUser);

export { userRouter };

import Router from '@koa/router';
import { z } from 'zod';
import {
  getMe,
  getUserData,
  login,
  logout,
  modifyUser,
  register,
  requestPasswordReset,
  udpatePassword,
  verify,
} from '../controllers';
import { authenticate, getUserFromToken, validate } from '../middleware';
import {
  requestPasswordResetSchema,
  userLoginSchema,
  userPatchSchema,
  userRegisterSchema,
  userUpdatePasswordSchema,
  userVerifySchema,
} from '../schemas';
import { pathRoot } from './allRoutes';

const userRouter = new Router();

userRouter.prefix(pathRoot.v1.users);

userRouter.post(
  '/register',
  validate(z.object({ body: userRegisterSchema })),
  register
);

userRouter.post(
  '/verify-email',
  validate(z.object({ body: userVerifySchema })),
  verify
);

userRouter.post(
  '/forgot-password',
  validate(z.object({ body: requestPasswordResetSchema })),
  requestPasswordReset
);

userRouter.post(
  '/update-password',
  validate(z.object({ body: userUpdatePasswordSchema })),
  udpatePassword
);

userRouter.post('/login', validate(z.object({ body: userLoginSchema })), login);

userRouter.get('/logout', logout);

userRouter.get('/me', getUserFromToken, getMe);

userRouter.get('/me/data', authenticate, getUserData);

userRouter.patch(
  '/me',
  authenticate,
  validate(z.object({ body: userPatchSchema })),
  modifyUser
);

export { userRouter };

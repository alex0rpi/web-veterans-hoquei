import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
import { TLoginUser } from '../../schemas/userRoutesSchema';
import { checkPassword } from '../../helpers/passwordHash';
import jwt, { Secret } from 'jsonwebtoken';

export const loginUser = async (
  req: FastifyRequest<{ Body: TLoginUser }>,
  reply: FastifyReply
) => {
  const userData = req.body;
  const expirationInMilliseconds = 86400000;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (!existingUser) return reply.code(400).send('Invalid user credentials.');

    if (existingUser.status === 'INACTIVE')
      return reply.code(400).send('User not activated.');

    const match = await checkPassword(userData.password, existingUser.password);

    if (!match) return reply.code(400).send('Invalid user credentials.');

    /*     const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET as Secret, {
      expiresIn: expirationInMilliseconds.toString(),
    }); */

    /*     reply.setCookie('token', token, {
      // path: '/',
      httpOnly: true, // meaning that the cookie cannot be accessed by client-side JavaScript code.
      maxAge: expirationInMilliseconds,
      sameSite: 'lax', // this means that the cookie will only be sent in requests to the same domain.
      // secure: process.env.NODE_ENV === 'production',
    }); */

    return reply.code(200).send(existingUser);
  } catch (error) {
    console.log('error: ', error);
    return reply.code(500).send(error);
  }
};

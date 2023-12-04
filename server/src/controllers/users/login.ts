import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
import { TLoginUser } from '../../schemas/userRoutesSchema';
import { checkPassword } from '../../helpers/passwordHash';
import { app } from '../../app';

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

    // Generate JWT token and set it as a cookie on the client browser.

    const { id, name } = existingUser;
    const accessToken = app.jwt.sign(
      { id, name },
      { expiresIn: expirationInMilliseconds }
    );
    reply.setCookie('token', accessToken, {
      path: '/',
      secure: false, // set this to false if you're not using https
      httpOnly: true,
      sameSite: 'lax', // or 'strict' or 'none'. // lax means that the cookie will be sent with requests from the same site and also from subdomains
      maxAge: expirationInMilliseconds,
    });
    return reply.code(200).send({ id, name });
  } catch (error) {
    console.log('error: ', error);
    return reply.code(500).send(error);
  }
};

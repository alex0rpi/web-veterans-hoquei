import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
import { TRegisterUser } from '../../schemas/userRoutesSchema';
import { hashPassword } from '../../helpers/passwordHash';

export const registerUser = async (
  req: FastifyRequest<{ Body: TRegisterUser }>,
  reply: FastifyReply
) => {
  const newUserData = req.body;
  try {
    const hashedPassword = await hashPassword(newUserData.password);

    await prisma.user.create({
      data: {
        name: newUserData.name,
        email: newUserData.email,
        password: hashedPassword,
      },
    });
    return reply.code(204).send();
  } catch (error) {
    console.log('error: ', error);
    return reply.code(500).send(error);
  }
};

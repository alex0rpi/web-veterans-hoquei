import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
import { TRegisterUser } from '../../schemas/userRegisterSchema';
import { hashPassword } from '../../helpers/passwordHash';

export const registerUser = async (
  req: FastifyRequest<{ Body: TRegisterUser }>,
  reply: FastifyReply
) => {
  const newUserData = req.body;
  try {
    const hashedPassword = await hashPassword(newUserData.password);

    const user = await prisma.user.create({
      data: {
        email: newUserData.email,
        name: newUserData.name,
        password: hashedPassword,
      },
    });
    return reply.code(201).send(user);
  } catch (error) {
    console.log('error: ', error);
    return reply.code(500).send(error);
  }
};

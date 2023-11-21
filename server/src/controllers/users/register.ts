import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
import { TCreateUser } from '../../schemas/userRegisterSchema';
import bcrypt from 'bcrypt';

export const registerUser = async (
  req: FastifyRequest<{ Body: TCreateUser }>,
  reply: FastifyReply
) => {
  const newUserData = req.body;
  try {
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);

    await prisma.user.create({
      data: {
        email: newUserData.email,
        name: newUserData.name,
        password: hashedPassword,
      },
    });
    return reply.code(200).send();
  } catch (error) {
    console.log('error: ', error);
    return reply.code(500).send(error);
  }
};

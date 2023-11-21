import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
import { TCreateUser } from '../../schemas/userRegisterSchema';
import { hashPassword } from '../../helpers/passwordHash';

export const registerUser = async (
  req: FastifyRequest<{ Body: TCreateUser }>,
  reply: FastifyReply
) => {
  try {
    const newUserData = req.body;
    if (newUserData.password !== newUserData.confirmPassword) {
      return reply.code(400).send('Passwords do not match.');
    }
    const hashedPassword = await hashPassword(newUserData.password);

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

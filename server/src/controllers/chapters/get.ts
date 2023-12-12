import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
// import { TRegisterUser } from '../../schemas/userRoutesSchema';

export const getChapters = async (req: FastifyRequest, reply: FastifyReply) => {
  const newChapterData = req.body;
  try {
    const chapters = await prisma.chapter.findMany({
      select: {
        id: true,
        season: true,
        titlePro: true,
        contentPro: true,
        titleBases: true,
        contentBases: true,
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
    return reply.code(200).send(chapters);
  } catch (error) {
    console.log('error: ', error);
    return reply.code(500).send(error);
  }
};

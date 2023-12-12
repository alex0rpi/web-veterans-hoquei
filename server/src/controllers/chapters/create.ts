import { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../config/prisma';
import { TCreateChapter } from '../../schemas/chapterRoutesSchema';

export const createChapter = async (
  req: FastifyRequest<{ Body: TCreateChapter }>,
  reply: FastifyReply
) => {
  const newChapterData = req.body;
  try {
    await prisma.chapter.create({
      data: {
        season: newChapterData.season,
        titlePro: newChapterData.titlePro,
        contentPro: newChapterData.contentPro,
        titleBases: newChapterData.titleBases,
        contentBases: newChapterData.contentBases,
        userId: req.user.id,
      },
    });
    return reply.code(204).send();
  } catch (error) {
    console.log('error: ', error);
    return reply.code(500).send(error);
  }
};

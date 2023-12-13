import { FastifyInstance } from 'fastify';
import { createChapter, getChapters, getSingleChapter } from '../controllers/chapters';
import { $ref } from '../schemas/schemas';

const createChapterOpts = {
  // preHandler: ,
  schema: {
    description: 'Create a new chapter that extends the book.',
    body: $ref('chapterCreateSchema'),
    response: {
      204: {
        type: 'object',
        properties: {},
        description: 'Successful chapter creation',
      },
      400: {
        type: 'object',
        properties: {},
        description: 'Invalid chapter data',
      },
      500: {
        type: 'object',
        properties: {},
        description: 'Server error',
      },
    },
  },
  handler: createChapter,
};

export async function chapterRoutes(fastify: FastifyInstance) {
  fastify.post('/', createChapterOpts);
  fastify.get('/', getChapters);
  fastify.get('/:id', getSingleChapter);
}

import { FastifyReply, FastifyRequest } from 'fastify';

export const registerUser = async (req: FastifyRequest, res: FastifyReply) => {
  return { response: 'registerUser' };
};

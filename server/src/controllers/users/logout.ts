import { FastifyReply, FastifyRequest } from 'fastify';

export const logout = async (req: FastifyRequest, reply: FastifyReply) => {
  // clear out the cookie
  reply.clearCookie('token', { path: '/' });
  return reply.code(204).send();
};

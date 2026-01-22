import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { AuthService } from '../services/AuthService';

export async function checkAuth(
  request: FastifyRequest<{ Querystring: { urlPassword: string } }>,
  reply: FastifyReply
) {
  const isValid = AuthService.checkQueryPassword(request.query);
  
  if (!isValid) {
    return reply.code(401).send({ error: 'Invalid password', request: request.query });
  }
  
  return { authenticated: true };
}

export async function authRoutes(fastify: FastifyInstance) {
  fastify.get('/auth/check', checkAuth);
}
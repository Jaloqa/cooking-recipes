import { z } from 'zod';
import Fastify, {  FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';


const server = Fastify({logger: true});

server.get('/auth-check', async (request: FastifyRequest    , reply: FastifyReply) => {
const queryParams = request.query;

});
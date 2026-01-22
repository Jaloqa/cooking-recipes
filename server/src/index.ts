import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { authRoutes } from './routes/AuthRoutes';

dotenv.config();

const fastify = Fastify({
  logger: true
});

// Register CORS
fastify.register(cors, {
  origin: true
});

// Register routes
fastify.register(authRoutes);


// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: '0.0.0.0' });
    console.log('Server running on http://localhost:4000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
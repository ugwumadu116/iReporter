import http from 'http';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('listening on ', port);
});

import { authMiddleware } from '@org/auth/utility';
import { dataSource } from '@org/post/utility';
import express from 'express';
import 'reflect-metadata';
import postController from './controller';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();
app.use(express.json());

dataSource
  .initialize()
  .then(() => {
    console.log('database connection is successful');
  })
  .catch((error) => {
    console.error('database connection is failed', error);
  });
app.use('/', authMiddleware, postController);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

import { authMiddleware } from '@org/auth/utility';
import { dataSource } from '@org/post/utility';
import express from 'express';
import 'reflect-metadata';
import postController from './controller';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
dataSource
  .initialize()
  .then(() => {
    console.log('dataSource is initilized');
  })
  .catch((error) => console.log(`error in database connection: ${error}`));

app.use(express.json());
app.use('/', authMiddleware, postController);
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

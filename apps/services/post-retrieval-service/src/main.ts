import express from 'express';
import 'reflect-metadata';
import postController from './controller';
import { dataSource } from './db';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
dataSource
  .initialize()
  .then(() => {
    console.log("dataSource is initilized")
  })
  .catch((error) => console.log(`error in database connection: ${error}`));

  app.use(express.json());
  app.use('/', postController);
  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });

import { DataSourceOptions } from 'typeorm';
import { Post } from '../Entities';
export const dbConfig: DataSourceOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: 'test',
  password: 'test',
  database: 'testDB',
  synchronize: true,
  entities: [Post],
};

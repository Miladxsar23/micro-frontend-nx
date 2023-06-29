import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from '../entity';
const dbConfig: DataSourceOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'admin',
  authSource: 'admin',
  entities: [Post],
  synchronize: true,
};

export const dataSource = new DataSource({ ...dbConfig });

import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from '../entity';
const host = process.env.MONGO_HOST || 'localhost'
const dbConfig: DataSourceOptions = {
  type: 'mongodb',
  host,
  port: 27017,
  database: 'admin',
  authSource: 'admin',
  entities: [Post],
  synchronize: true,
};

export const dataSource = new DataSource({ ...dbConfig });

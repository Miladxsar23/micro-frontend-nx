import { dbConfig } from '@org/post/utility';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  ...dbConfig,
});



import { dbConfig } from '@org/shared/utility';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  ...dbConfig,
});



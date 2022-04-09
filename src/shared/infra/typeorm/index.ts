import 'dotenv/config';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/modules/**/entities/*.ts'],
  synchronize: true,
  logging: true,
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
});

export default AppDataSource;

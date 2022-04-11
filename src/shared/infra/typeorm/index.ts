import 'dotenv/config';
import { DataSource } from 'typeorm';
import path from 'path';

const entities = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'modules',
  '**',
  'infra',
  'typeorm',
  'entities',
  '*.ts',
);

const migrations = path.join(__dirname, 'migrations', '*.ts');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [entities],
  synchronize: false,
  logging: true,
  migrations: [migrations],
  migrationsRun: true,
});

export default AppDataSource;

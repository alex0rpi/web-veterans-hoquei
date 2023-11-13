import 'dotenv/config';
import z from 'zod';

const appConfigSchema = z.object({
  port: z.string(),
  jwtKey: z.string(),
  jwtExpiration: z.string(),
});

const dbConfigSchema = z.object({
  host: z.string(),
  port: z.string(),
  database: z.string(),
  user: z.string(),
  pass: z.string(),
  link: z.string(),
});

const appConfig = {
  port: process.env.PORT ?? 5000,
  jwtKey: process.env.JWT_KEY ?? 'secret',
  jwtExpiration: process.env.JWT_EXPIRATION ?? '14d',
};

appConfigSchema.parse(appConfig);

const dbConfig = {
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ?? 5432,
  database: process.env.DB_NAME ?? 'web-veterans-hoquei',
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  link: process.env.DB_LINK,
};

dbConfigSchema.parse(dbConfig);

const bcryptConfig = {
  saltRounds: 10,
};

export { appConfig, dbConfig, bcryptConfig };

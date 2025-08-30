import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string),
    user: 'postgres',
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
    ssl: false,
  }
});

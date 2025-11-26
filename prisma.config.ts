import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  // The only valid property for datasource in Prisma 5.22
  datasource: {
    url: process.env.DATABASE_URL!,  // your Postgres/Neon URL
    // shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL, // optional
  },

  // Optional: migrations folder
  migrations: {
    path: "./prisma/migrations",
  },
});

import "reflect-metadata";

import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { NotFoundExceptionFilter } from "./filters/not-found.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN ?? "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  });
  app.useGlobalFilters(new NotFoundExceptionFilter());
  const port = Number(process.env.PORT) || 4000;
  const host = process.env.HOST || "0.0.0.0";
  await app.listen(port, host);
  console.log(`@gallery/server listening on http://localhost:${port}`);
}

bootstrap();

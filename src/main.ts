import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    cors({
      origin: '*',
      methods: 'GET,POST',
      credentials: true,
    }),
  );

  await app.listen(process.env.PORT ?? 4000);
  Logger.log(`App running at ${process.env.PORT ?? 4000}`);
}
bootstrap();

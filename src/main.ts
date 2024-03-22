import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app.module';
import { urlencoded, json } from 'express';
import { useContainer } from 'class-validator';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.use(json({ limit: '50mb' }));

  app.use(urlencoded({ limit: '50mb', extended: true }));

  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );

  app.use(morgan('dev'));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT || 5000;

  await app.listen(port);

  return port;
}

bootstrap().then((port) =>
  console.log(`App successfully started on port ${port} !`),
);

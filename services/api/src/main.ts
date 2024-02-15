import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:5555',
  });

  const config = new DocumentBuilder()
    .setTitle('Demo example')
    .setDescription('The demo API description')
    .addServer('http://localhost:5555')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.SWAGGER, app, document);

  await app.listen(process.env.BACK_PORT);
}

bootstrap();

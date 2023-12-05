import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Pre-Configuration Swagger
    const config = new DocumentBuilder()
    .setTitle('Nom de votre API')
    .setDescription('Description de votre API')
    .setVersion('1.0')
    .addTag('Exemple')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
    // ---

    await app.listen(process.env.BACK_PORT);
}
bootstrap();

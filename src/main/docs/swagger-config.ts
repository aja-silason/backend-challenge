import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swaggerConfig = (app: NestExpressApplication): void => {

    const config = new DocumentBuilder()
        .setTitle("Desafio Estacionamento")
        .setDescription("Desafio da Stetment MC")
        .setVersion('0.0.1')
        .addTag("Estacionamento")
        .build()

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api/docs', app, document);
}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { swaggerConfig } from './main/docs/swagger-config';

async function bootstrap() {
  const logger = new Logger('Main')
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  swaggerConfig(app)
  
  app.useGlobalPipes(new ValidationPipe({transform: true}));

  const config = app.get<ConfigService>(ConfigService);
  const port: any = config.get<number>('PORT');

  await app.listen(port, async () => {
    logger.log(`Servidor está rodando em: http://localhost:${port}`)
  });
}
bootstrap();

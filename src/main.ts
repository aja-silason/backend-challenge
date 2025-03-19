import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main')
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const port: any = config.get<number>('PORT');

  await app.listen(port, async () => {
    logger.log(`Servidor está rodando em: http://localhost:${port}`)
  });
}
bootstrap();

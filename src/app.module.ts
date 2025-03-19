import { Module } from '@nestjs/common';
import { AppController } from './infra/http/app.controller';
import { AppService } from './caso-de-uso/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigureModule } from './infra/configure/configure.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [
    ConfigureModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

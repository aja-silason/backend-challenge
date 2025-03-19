import { Module } from '@nestjs/common';
import { AppController } from './infra/http/app.controller';
import { AppService } from './caso-de-uso/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'estacionamento',
      entities: [],
      synchronize: true
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

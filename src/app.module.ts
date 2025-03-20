import { Module } from '@nestjs/common';
import { AppController } from './infra/http/app/app.controller';
import { AppService } from './app/caso-de-uso/app.service';
import { ConfigureModule } from './infra/configure/configure.module';
import { DatabaseModule } from './infra/database/database.module';
import { EstabelecimentoModule } from './infra/module/estabelecimento/estabelecimento.module';
import { VeiculoModule } from './infra/module/veiculo/veiculo.module';

@Module({
  imports: [
    ConfigureModule,
    DatabaseModule,
    EstabelecimentoModule,
    VeiculoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

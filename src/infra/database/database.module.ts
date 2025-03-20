import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstabelecimentoORM } from '../../dominio/space/model/estabelecimento.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SpaceModule } from '../module/estabelecimento/estabelecimento.module';
import { VeiculoModule } from '../module/veiculo/veiculo.module';
import { EntradaSaidaModule } from '../module/relatorio/entrada-saida.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({ 
                type: 'mysql',
                host: configService.get('DATABASE_HOST', 'localhost'),
                port: Number(configService.get('DATABASE_PORT', 3306)),
                username: configService.get('DATABASE_USER', 'root'),
                password: configService.get('DATABASE_PASSWORD', '123'),
                database: configService.get('DATABASE_DB', 'estacionamento'),
                entities: [EstabelecimentoORM],
                synchronize: true,
            })
        }),
        SpaceModule,
        VeiculoModule,
        EntradaSaidaModule,
    ]
})
export class DatabaseModule {}

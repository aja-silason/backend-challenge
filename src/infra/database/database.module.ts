import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstabelecimentoORM } from '../../dominio/estabelecimento/model/estabelecimento.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EstabelecimentoModule } from '../module/estabelecimento/estabelecimento.module';
import { VeiculoORM } from 'src/dominio/veiculo/model/veiculo.model';
import { VeiculoModule } from '../module/veiculo/veiculo.module';

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
                entities: [EstabelecimentoORM, VeiculoORM],
                synchronize: true,
            })
        }),
        EstabelecimentoModule,
        VeiculoModule,
    ]
})
export class DatabaseModule {}

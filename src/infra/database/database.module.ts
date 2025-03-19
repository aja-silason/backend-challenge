import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstabelecimentoORM } from '../../dominio/estabelecimento/model/estabelecimento.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EstabelecimentoModule } from '../module/estabelecimento/estabelecimento.module';

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
        EstabelecimentoModule
    ]
})
export class DatabaseModule {}

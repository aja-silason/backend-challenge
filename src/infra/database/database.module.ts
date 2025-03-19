import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estabelecimento } from 'src/dominio/estabelecimento/estabelecimento.entidade';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '123',
            database: 'estacionamento',
            entities: [Estabelecimento],
            dropSchema: true,
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Estabelecimento])
    ]
})
export class DatabaseModule {}

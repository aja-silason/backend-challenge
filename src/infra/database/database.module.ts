import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estabelecimento } from 'src/dominio/estabelecimento/estabelecimento.entidade';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT) || 3306,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DB,
            entities: [Estabelecimento],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Estabelecimento])
    ]
})
export class DatabaseModule {}

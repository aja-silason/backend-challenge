import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstabelecimentoORM } from '../repositorio/estabelecimento/estabelecimento-orm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DB,
            entities: [EstabelecimentoORM],
            dropSchema: true,
            synchronize: true,
        }),
        TypeOrmModule.forFeature([EstabelecimentoORM])
    ]
})
export class DatabaseModule {}

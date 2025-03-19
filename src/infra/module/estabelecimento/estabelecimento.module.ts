import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CriarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/criar-estabelecimento.usecase";
import { Estabelecimento } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { EstabelecimentoGateway } from "src/dominio/estabelecimento/gateway/estabelecimento.interface";
import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { DatabaseModule } from "src/infra/database/database.module";
import { CriarEstabelecimentoController } from "src/infra/http/estabelecimento/estabelecimento.controller";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Module({
    imports: [
        TypeOrmModule.forFeature([Estabelecimento])
    ],
    controllers: [CriarEstabelecimentoController],
    
    providers: [EstabelecimentoRepositorio, CriarEstabelecimento],
        
})

export class EstabelecimentoModule {}
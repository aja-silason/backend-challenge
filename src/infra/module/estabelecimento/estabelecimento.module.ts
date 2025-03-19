import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CriarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/criar-estabelecimento.usecase";
import { ListarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/listar-estabelecimento.usecase";
import { Estabelecimento } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { CriarEstabelecimentoController } from "src/infra/http/estabelecimento/criar-estabelecimento.controller";
import { ListarEstabelecimentoController } from "src/infra/http/estabelecimento/listar-estabelecimento.controller";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Module({
    imports: [
        TypeOrmModule.forFeature([EstabelecimentoORM])
    ],
    controllers: [CriarEstabelecimentoController, ListarEstabelecimentoController],
    
    providers: [EstabelecimentoRepositorio, CriarEstabelecimento, ListarEstabelecimento],

})
export class EstabelecimentoModule {}
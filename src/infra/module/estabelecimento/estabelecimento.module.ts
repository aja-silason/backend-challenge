import { Module } from "@nestjs/common";
import { CriarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/criar-estabelecimento.usecase";
import { EstabelecimentoController } from "src/infra/http/estabelecimento/estabelecimento.controller";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Module({
    providers: [EstabelecimentoRepositorio, CriarEstabelecimento],
    controllers: [EstabelecimentoController]
})
export class EstabelecimentoModule{}
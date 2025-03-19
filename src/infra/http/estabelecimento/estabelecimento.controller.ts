//export class EstabelecimentoController {}

import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/criar-estabelecimento.usecase";
import { Estabelecimento } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";

@Controller('estabelecimento')
export class CriarEstabelecimentoController {
  constructor(private readonly appService: CriarEstabelecimento) {}

  @Post()
  create(@Body() estabelecimento: Estabelecimento){
    return this.appService.execute({estabelecimento});
  }
}

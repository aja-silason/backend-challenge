import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CriarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/criar-estabelecimento.usecase";
import { Estabelecimento, EstabelecimentoProps } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class CriarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() body: EstabelecimentoProps){

    const estabelecimento = Estabelecimento?.create(body);

    await this.appService.create(estabelecimento);

  }
  
}

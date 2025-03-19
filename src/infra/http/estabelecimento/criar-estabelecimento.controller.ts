import { Body, Controller, Post } from "@nestjs/common";
import { EstabelecimentoProps } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class CriarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Post()
  async create(@Body() body: EstabelecimentoProps){

    return this.appService.create(body);

  }
  
}

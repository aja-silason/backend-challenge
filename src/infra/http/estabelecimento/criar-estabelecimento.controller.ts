import { Body, Controller, Post } from "@nestjs/common";
import { CriarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/criar-estabelecimento.usecase";
import { EstabelecimentoProps } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";

@Controller('estabelecimento')
export class CriarEstabelecimentoController {
  constructor(private readonly appService: CriarEstabelecimento) {}

  @Post()
  //async create(@Body() {nome, telefone, qtd_vagas_carros, qtd_vagas_motos}: EstabelecimentoProps){
  async create(@Body() body: EstabelecimentoProps){

    return this.appService.execute(body);

  }
  
}

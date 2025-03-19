import { Body, Controller, Post } from "@nestjs/common";
import { CriarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/criar-estabelecimento.usecase";

@Controller('estabelecimento')
export class CriarEstabelecimentoController {
  constructor(private readonly appService: CriarEstabelecimento) {}

  @Post()
  create(@Body() body:{nome: string, telefone: string, qtd_vagas_carro: string, qtd_vagas_moto: string}){

    console.log(body);

    return this.appService.execute(body);

  }
  
}

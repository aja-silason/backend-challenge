import { Controller, Get } from "@nestjs/common";
import { ListarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/listar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class ListarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Get()
   async find(){
    return await this.appService.find();
  }
}

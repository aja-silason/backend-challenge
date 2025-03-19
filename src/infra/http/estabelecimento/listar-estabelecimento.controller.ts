//export class EstabelecimentoController {}

import { Controller, Get } from "@nestjs/common";
import { ListarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/listar-estabelecimento.usecase";

@Controller('estabelecimento')
export class ListarEstabelecimentoController {
  constructor(private readonly appService: ListarEstabelecimento) {}

  @Get()
   async find(){
      return await this.appService.execute();
  }
}

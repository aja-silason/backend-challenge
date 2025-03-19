import { Controller, Get, Param } from "@nestjs/common";
import { ListarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/listar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class ListarUmEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Get(':id')
   async findOne(@Param() id: number){
    return await this.appService.findOneByOrFail(id);
  }
}

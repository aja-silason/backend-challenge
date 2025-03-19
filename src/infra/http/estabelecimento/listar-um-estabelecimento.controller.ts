import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class ListarUmEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Get(':id')
   async findOne(@Param('id', new ParseUUIDPipe()) id: number){
    return await this.appService.findOneByOrFail(id);
  }
}

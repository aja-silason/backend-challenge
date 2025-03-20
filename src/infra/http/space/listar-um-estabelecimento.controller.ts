import { Controller, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/space.repository";

@Controller('estabelecimento')
@ApiTags('Estacionamento')
export class ListarUmEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Get(':id')
  @ApiParam({name: 'id', type: 'number'})
   async findOne(@Param() id: number){

    /*
    return await this.appService.findOneByOrFail(id);

    */
  }
}

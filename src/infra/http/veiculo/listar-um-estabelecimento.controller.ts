import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo')
@ApiTags('Veiculo')
export class ListarUmVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio) {}

  @Get(':id')
  @ApiParam({name: 'id', type: 'number'})
   async findOne(@Param() id: number){
    return await this.appService.findOneByOrFail(id);
  }
}

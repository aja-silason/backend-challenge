import { Body, Controller, HttpCode, HttpStatus, Param, Put } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ActualizarEstabelecimentoDTO } from "src/dominio/estabelecimento/model/dto/actualizar-estabelecimentoDTO";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
@ApiTags('Estacionamento')
export class ActualizarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({name: 'id', type: 'number'})
  async create(@Param() id: number, @Body() body: ActualizarEstabelecimentoDTO){

    await this.appService.update(id, body);

  }
  
}

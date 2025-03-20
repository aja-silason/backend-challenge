import { Body, Controller, HttpCode, HttpStatus, Param, Put } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ActualizarEstabelecimentoDTO } from "src/dominio/space/model/dto/update-space.DTO";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/space.repository";

@Controller('estabelecimento')
@ApiTags('Estacionamento')
export class SpaceController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({name: 'id', type: 'number'})
  async create(@Param() id: number, @Body() body: ActualizarEstabelecimentoDTO){

    //await this.appService.update(id, body);

  }
  
}

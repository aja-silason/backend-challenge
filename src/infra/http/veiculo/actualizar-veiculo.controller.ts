import { Body, Controller, HttpCode, HttpStatus, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ActualizarVeiculoDTO } from "src/dominio/veiculo/model/dto/actualizar-veiculoDTO";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo')
@ApiTags('Veiculo')
export class ActualizarVeiculontroller {
  constructor(private readonly appService: VeiculoRepositorio) {}

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Param() id: number, @Body() body: ActualizarVeiculoDTO){

    await this.appService.update(id, body);

  }
  
}

import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Veiculo } from "src/dominio/veiculo/entidade/veiculo.entidade";
import { CriarVeiculoDTO } from "src/dominio/veiculo/model/dto/Criar-veiculoDTO";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo')
@ApiTags('Veiculo')
export class CriarVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() body: CriarVeiculoDTO){

    const veiculo = Veiculo?.create(body);

    await this.appService.create(veiculo);

  }
  
}

import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo')
@ApiTags('Veiculo')
export class ListarVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio) {}

  @Get()
   async find(){
    return await this.appService.find();
  }
}

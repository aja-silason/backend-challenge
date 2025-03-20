import { Controller, Get } from "@nestjs/common";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo')
export class ListarVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio) {}

  @Get()
   async find(){
    return await this.appService.find();
  }
}

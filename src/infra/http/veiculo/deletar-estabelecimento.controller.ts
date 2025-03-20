import { Controller, Delete, HttpCode, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo')
export class DeletarVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
   async delete(@Param('id') id: string){

      await this.appService.delete(+id);

  }
}

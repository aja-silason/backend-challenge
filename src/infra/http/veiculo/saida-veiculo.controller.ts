import { BadRequestException, Controller, HttpCode, HttpStatus, NotFoundException, Param, Patch } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { RelatorioRepositorio } from "src/infra/repositorio/relatorio/relatorio.repositorio";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('parque/saida')
@ApiTags('Parque')
export class SaidaVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio, private readonly relatorio: RelatorioRepositorio) {}

  @Patch(':id/:value')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({name: "id", type: 'string'})
  @ApiParam({name: "value", type: 'string'})
  async create(@Param('id') id: number, @Param('value') value: number){


    if(+value !== 1) {
      throw new BadRequestException(`${value} precisa ser 2 para registrar saída`);
    }

    const veiculos = await this.relatorio?.find();

    const listaDeVeiculosParaRelatorio = veiculos?.filter((item) => item?.id_veiculo == id)[0]
    
    if(!listaDeVeiculosParaRelatorio){
      throw new NotFoundException(`carro com o id ${id} não encontrado no estacionamento`)
    }

    const {id_veiculo} = listaDeVeiculosParaRelatorio;

    await this.relatorio.criar_saida(id_veiculo);

  }
  
}

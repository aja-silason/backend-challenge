import { BadRequestException, Controller, HttpCode, HttpStatus, NotFoundException, Param, Patch } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";
import { RelatorioRepositorio } from "src/infra/repositorio/relatorio/relatorio.repositorio";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('parque/saida')
@ApiTags('Parque')
export class SaidaVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio, private readonly relatorio: RelatorioRepositorio, private readonly estaelecimento: EstabelecimentoRepositorio) {}

  @Patch(':id/:estabelecimentoId/:value')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({name: "id", type: 'string'})
  @ApiParam({name: "value", type: 'string'})
  @ApiParam({name: "estabelecimentoId", type: 'string'})
  async create(@Param('id') id: number, @Param('estabelecimentoId') estabelecimentoId: number, @Param('value') value: number){

    console.log("SSS", estabelecimentoId, value, id)

    if(+value !== 2) {
      throw new BadRequestException(`${value} precisa ser 2 para registrar saída`);
    }

    const listaDeCarros = await this.appService?.find();

    const carroExiste = listaDeCarros?.filter((item) => item?.id == id)[0]

    
    if(!carroExiste){
      throw new NotFoundException(`carro com o id ${id} não encontrado`)
    }
    
    const { id: id_veiculo, tipo: tipodeVeiculo} = carroExiste

    const veiculos = await this.relatorio?.find();

    const listaDeVeiculosParaRelatorio = veiculos?.filter((item) => item?.id_veiculo == id && item?.hora_saida != null)[0]
    
    if(!listaDeVeiculosParaRelatorio){
      throw new NotFoundException(`carro com o id ${id} não encontrado no estacionamento`)
    }
    
    await this.estaelecimento.registar_saida(tipodeVeiculo, +estabelecimentoId)


    await this.relatorio.criar_saida(id_veiculo);

  }
  
}

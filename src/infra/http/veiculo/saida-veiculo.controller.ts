import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { EntradaSaidaProps, RelatorioEntradaSaida } from "src/dominio/relatorio/entidade/entrada-saida";
import { Veiculo } from "src/dominio/veiculo/entidade/veiculo.entidade";
import { CriarVeiculoDTO } from "src/dominio/veiculo/model/dto/Criar-veiculoDTO";
import { RelatorioRepositorio } from "src/infra/repositorio/relatorio/relatorio.repositorio";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo/saida')
@ApiTags('Veiculo')
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

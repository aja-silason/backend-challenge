import { BadRequestException, Controller, HttpCode, HttpStatus, NotFoundException, Param, Patch } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { EntradaSaidaProps, RelatorioEntradaSaida } from "src/dominio/relatorio/entidade/entrada-saida";
import { RelatorioRepositorio } from "src/infra/repositorio/relatorio/relatorio.repositorio";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('parque/entrada')
@ApiTags('Parque')
export class EntradaVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio, private readonly relatorio: RelatorioRepositorio) {}

  @Patch(':id/:value')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({name: "id", type: 'string'})
  @ApiParam({name: "value", type: 'string'})
  async create(@Param('id') id: number, @Param('value') value: number){


    if(+value !== 1) {
      throw new BadRequestException(`${value} precisa ser 1 para registrar entrada`);
    }

    const listaDeCarros = await this.appService?.find();

    const carroExiste = listaDeCarros?.filter((item) => item?.id == id)[0]

    
    if(!carroExiste){
      throw new NotFoundException(`carro com o id ${id} não encontrado`)
    }
    
    const { id: id_veiculo, marca } = carroExiste

    const listaDeCarrosParaRelatorio = await this.relatorio.find();
    
    const temEntrada = listaDeCarrosParaRelatorio?.filter((item) => item?.id_veiculo == id_veiculo)[0]

    if(temEntrada){
      throw new BadRequestException(`carro com o id ${id} já está estacionado`)
    }

    const newValues: EntradaSaidaProps = {veiculo: marca, id_veiculo: id_veiculo}
    
    const entrada = RelatorioEntradaSaida.create(newValues)
    
    await this.relatorio.criar_entrada(entrada)


  }
  
}

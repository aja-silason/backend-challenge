import { Body, Controller, HttpCode, HttpStatus, NotFoundException, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Veiculo } from "src/dominio/veiculo/entidade/veiculo.entidade";
import { CriarVeiculoDTO } from "src/dominio/veiculo/model/dto/Criar-veiculoDTO";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/space.repository";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Controller('veiculo')
@ApiTags('Veiculo')
export class CriarVeiculoController {
  constructor(private readonly appService: VeiculoRepositorio, private readonly estabelecimentoRps: EstabelecimentoRepositorio) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() body: CriarVeiculoDTO){

    /*

    const {estabelecimentoId} = body;

    const estabelecimentoExiste = await this.estabelecimentoRps.findOne(estabelecimentoId);

    if(!estabelecimentoExiste) {
      throw new NotFoundException(`Estabelecimento não encontrado`);
    }
  
    const veiculo = Veiculo?.create(body);    
  
    await this.appService.create(veiculo);*/

  }
  
}

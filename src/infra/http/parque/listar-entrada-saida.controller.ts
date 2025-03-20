import { Controller, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ListarEstabelecimento } from "src/app/usecase/space/listar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/space.repository";
import { RelatorioRepositorio } from "src/infra/repositorio/relatorio/relatorio.repositorio";

@Controller('parque/relatorio')
@ApiTags('Parque')
export class ListarEntradaSaidaController {
  constructor(private readonly appService: RelatorioRepositorio) {}


  @Get()
   async find(){
     
    const veiculosNoParque = await this.appService.entrada_saida();

    

    return this.present(veiculosNoParque);

  }


  @Get(':hora')
  @ApiParam({name: 'hora', type: 'number'})
  async findHour(@Param('hora') hora: number){
    
    const veiculosNoParque = await this.appService.entrada_saida_por_hora(hora);
    
    
    return this.present(veiculosNoParque);

  }

  private present(input){
    const time = new Date();

    const hora = `${time.getHours()}:${time.getMinutes()}`
    const data = `${time.getDay()}/${time.getMonth() + 1}/${time.getFullYear()}`

    console.log(new Date()?.toString())

    return {
      hora: hora,
      gerado_em: data,
      total: input
    }

  }

}

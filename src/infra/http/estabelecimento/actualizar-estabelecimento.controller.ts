import { Body, Controller, HttpCode, HttpStatus, Param, Put } from "@nestjs/common";
import { Estabelecimento } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { ActualizarEstabelecimentoDTO } from "src/dominio/estabelecimento/model/dto/actualizar-estabelecimentoDTO";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class ActualizarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Param() id: number, @Body() body: ActualizarEstabelecimentoDTO){

    await this.appService.update(id, body);

  }
  
}

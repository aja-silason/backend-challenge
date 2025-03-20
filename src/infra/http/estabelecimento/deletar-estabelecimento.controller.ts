import { Controller, Delete, HttpCode, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { response } from "express";
import { DeletarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/deletar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
@ApiTags('Estacionamento')
export class DeletarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({name: 'id', type: 'number'})
   async delete(@Param() id: number){

      await this.appService.delete(id);

  }
}

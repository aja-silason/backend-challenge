import { Controller, Delete, HttpCode, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { response } from "express";
import { DeletarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/deletar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class DeletarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
   async delete(@Param() id: number){

      await this.appService.delete(id);

  }
}

import { Controller, Delete, HttpCode, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { DeletarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/deletar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class DeletarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
   async findOne(@Param('id', new ParseUUIDPipe()) id: number){
    return await this.appService.delete(id);
  }
}

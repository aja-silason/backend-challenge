import { Controller, Delete, Param } from "@nestjs/common";
import { DeletarEstabelecimento } from "src/app/caso-de-uso/estabelecimento/deletar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

@Controller('estabelecimento')
export class DeletarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Delete(':id')
   async findOne(@Param() id: number){
    return await this.appService.delete(id);
  }
}

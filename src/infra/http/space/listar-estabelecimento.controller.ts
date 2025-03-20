import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ListarEstabelecimento } from "src/app/usecase/space/listar-estabelecimento.usecase";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/space.repository";

@Controller('estabelecimento')
@ApiTags('Estacionamento')
export class ListarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Get()
   async find(){

    //return await this.appService.find();
  }
}

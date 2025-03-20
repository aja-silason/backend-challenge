import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Estabelecimento } from "src/dominio/space/space/space.entidady";
import { CriarEstabelecimentoDTO } from "src/dominio/space/model/dto/create-space.DTO";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/space.repository";

@Controller('estabelecimento')
@ApiTags('Estacionamento')
export class CriarEstabelecimentoController {
  constructor(private readonly appService: EstabelecimentoRepositorio) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() body: CriarEstabelecimentoDTO){

    const estabelecimento = Estabelecimento?.create(body);

    await this.appService.create(estabelecimento);

  }
  
}

import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Estabelecimento } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { CriarEstabelecimentoDTO } from "src/dominio/estabelecimento/model/dto/Criar-estabelecimentoDTO";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";

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

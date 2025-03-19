import { BadRequestException } from '@nestjs/common';
import { UseCase } from '../usecase';
import { Estabelecimento, EstabelecimentoProps } from 'src/dominio/estabelecimento/entidade/estabelecimento.entidade';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/estabelecimento.repositorio';

export class CriarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoRps: EstabelecimentoRepositorio){}

  public static create(estabelecimentoRps: EstabelecimentoRepositorio){
    return new CriarEstabelecimento(estabelecimentoRps);
  }

  public async execute({nome, telefone, qtd_vagas_carros, qtd_vagas_motos}: EstabelecimentoProps): Promise<void> {

      const incommingDatas: EstabelecimentoProps = {
        nome: nome,
        qtd_vagas_carros: qtd_vagas_carros,
        qtd_vagas_motos: qtd_vagas_motos,
        telefone: telefone
      }

      const isValidate: Array<keyof EstabelecimentoProps> = ["nome", "telefone", "qtd_vagas_carros", "qtd_vagas_motos"];

      for(const key of isValidate){
          const value = incommingDatas[key];
          if(value == null || value == undefined) {
              throw new BadRequestException(`${key} precisa ser adicionado`);
          }
      }

      const estabelecimento = Estabelecimento?.create(incommingDatas);

      await this.estabelecimentoRps?.create(estabelecimento);    
  
  }


}

import { Injectable } from '@nestjs/common';
import { UseCase } from '../usecase';
import { Estabelecimento } from 'src/dominio/estabelecimento/entidade/estabelecimento.entidade';
import { EstabelecimentoGateway } from 'src/dominio/estabelecimento/gateway/estabelecimento.interface';

@Injectable()
export class CriarEstabelecimento implements UseCase <any, any> {
  
  public constructor(private readonly estabelecimentoGateway: EstabelecimentoGateway){}

  public static create(estabelecimentoGateway: EstabelecimentoGateway){
    return new CriarEstabelecimento(estabelecimentoGateway);
  }

  public async execute({nome, telefone, qtd_vagas_carros, qtd_vagas_motos}: any): Promise<any> {
    
    const estabelecimento = Estabelecimento.create({nome, telefone, qtd_vagas_carros, qtd_vagas_motos});

    await this.estabelecimentoGateway.create(estabelecimento);
    
  
  }


}

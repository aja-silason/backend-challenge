import { UseCase } from '../usecase';
import { Estabelecimento } from 'src/dominio/estabelecimento/entidade/estabelecimento.entidade';
import { EstabelecimentoGateway } from 'src/dominio/estabelecimento/gateway/estabelecimento.interface';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/estabelecimento.repositorio';

export class CriarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: EstabelecimentoRepositorio){}

  public static create(estabelecimentoGateway: EstabelecimentoRepositorio){
    return new CriarEstabelecimento(estabelecimentoGateway);
  }

  public async execute({nome, telefone, qtd_vagas_carros, qtd_vagas_motos}: any): Promise<any> {
    
    const estabelecimento = Estabelecimento?.create({nome, telefone, qtd_vagas_carros, qtd_vagas_motos});

    await this.estabelecimentoGateway?.create(estabelecimento);
    
  
  }


}

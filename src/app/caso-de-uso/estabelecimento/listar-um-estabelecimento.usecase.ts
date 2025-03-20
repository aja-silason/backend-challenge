import { UseCase } from '../usecase';
import { Estabelecimento } from 'src/dominio/estabelecimento/entidade/estabelecimento.entidade';
import { EstabelecimentoGateway } from 'src/dominio/estabelecimento/gateway/estabelecimento.interface';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/estabelecimento.repositorio';

export class ListarUmEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: EstabelecimentoRepositorio){}

  public static create(estabelecimentoGateway: EstabelecimentoRepositorio){
    return new ListarUmEstabelecimento(estabelecimentoGateway);
  }

  public async execute(id: number){

    try {
      const estabelecimento = await this.estabelecimentoGateway?.findOneByOrFail(id);    
  
      return estabelecimento;
      
    } catch (error) {

      throw new Error(error?.message);
      
    }

  }


}

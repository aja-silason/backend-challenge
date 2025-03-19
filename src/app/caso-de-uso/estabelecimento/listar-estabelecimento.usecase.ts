import { UseCase } from '../usecase';
import { Estabelecimento } from 'src/dominio/estabelecimento/entidade/estabelecimento.entidade';
import { EstabelecimentoGateway } from 'src/dominio/estabelecimento/gateway/estabelecimento.interface';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/estabelecimento.repositorio';

export class ListarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: EstabelecimentoRepositorio){}

  public static create(estabelecimentoGateway: EstabelecimentoRepositorio){
    return new ListarEstabelecimento(estabelecimentoGateway);
  }

  public async execute(){

    try {
      const estabelecimento = await this.estabelecimentoGateway?.find();    
  
      return estabelecimento;
      
    } catch (error) {

      throw new Error(error?.message);
      
    }

  }


}

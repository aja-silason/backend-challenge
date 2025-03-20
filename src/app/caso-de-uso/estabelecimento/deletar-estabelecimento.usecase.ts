import { UseCase } from '../usecase';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/estabelecimento.repositorio';

export class DeletarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: EstabelecimentoRepositorio){}

  public static create(estabelecimentoGateway: EstabelecimentoRepositorio){
    return new DeletarEstabelecimento(estabelecimentoGateway);
  }

  public async execute(id: number){

    try {
      await this.estabelecimentoGateway?.delete(id);    
    } catch (error) {

      throw new Error(error?.message);
      
    }

  }

}

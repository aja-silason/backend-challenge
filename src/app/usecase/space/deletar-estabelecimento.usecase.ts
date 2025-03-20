import { UseCase } from '../usecase';
import { TypeORMSpace } from 'src/infra/repository/space/space.repository';

export class DeletarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: TypeORMSpace){}

  public static create(estabelecimentoGateway: TypeORMSpace){
    return new DeletarEstabelecimento(estabelecimentoGateway);
  }

  public async execute(id: number){

    try {
      //await this.estabelecimentoGateway?.delete(id);    
    } catch (error) {

      throw new Error(error?.message);
      
    }

  }

}

import { UseCase } from '../usecase';
import { TypeORMSpaceRepository } from 'src/infra/repository/space/space.repository';

export class DeletarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: TypeORMSpaceRepository){}

  public static create(estabelecimentoGateway: TypeORMSpaceRepository){
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

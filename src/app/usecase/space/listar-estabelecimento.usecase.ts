import { UseCase } from '../usecase';
import { TypeORMSpaceRepository } from 'src/infra/repository/space/space.repository';

export class ListarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: TypeORMSpaceRepository){}

  public static create(estabelecimentoGateway: TypeORMSpaceRepository){
    return new ListarEstabelecimento(estabelecimentoGateway);
  }

  public async execute(){

    try {
      //const estabelecimento = await this.estabelecimentoGateway?.find();    
  
      //return estabelecimento;
      
    } catch (error) {

      throw new Error(error?.message);
      
    }

  }


}

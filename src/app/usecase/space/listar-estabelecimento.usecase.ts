import { UseCase } from '../usecase';
import { TypeORMSpace } from 'src/infra/repository/space/space.repository';

export class ListarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: TypeORMSpace){}

  public static create(estabelecimentoGateway: TypeORMSpace){
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
